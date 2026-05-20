"""
handlers.py — Route Handlers
============================
Each function handles one route.
Returns (status_code: int, body: dict) tuple.
The server.py will turn these into proper HTTP responses.

Routes handled here:
  POST /admin/login
  POST /admin/logout
  GET  /admin/dashboard
  GET  /admin/csrf-token
  POST /upload
  GET  /files
  GET  /logs
  GET  /            (public homepage fallback)
  GET  /health      (health check)
"""

import os
import re
import time
from datetime import datetime, timezone

import auth
import utils
import logger as log_module
import database
import json

# ─────────────────────────────────────────────────────────────
# UPLOADS DIRECTORY
# Files are stored in backend/uploads/ — NOT in a web-accessible
# public folder so they can't be executed or browsed directly.
# ─────────────────────────────────────────────────────────────
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

# ─────────────────────────────────────────────────────────────
# LOGIN ATTEMPT COUNTER (total, across all IPs)
# ─────────────────────────────────────────────────────────────
total_login_attempts: int = 0


# ══════════════════════════════════════════════════════════════
# HELPER — require a valid session for protected routes
# ══════════════════════════════════════════════════════════════

def _require_session(headers: dict) -> tuple:
    """
    Extract and validate the session from the Authorization header.
    Returns (session_dict, None) on success.
    Returns (None, (status_code, error_body)) on failure.
    """
    session_id = utils.extract_session_id(headers)
    session = auth.validate_session(session_id)

    if not session:
        body = utils.err("Unauthorized. Please log in.")
        return None, (401, body)

    return session, None


# ══════════════════════════════════════════════════════════════
# PUBLIC ROUTE — GET /
# ══════════════════════════════════════════════════════════════

def handle_root(headers: dict, addr: tuple) -> tuple:
    """
    Public landing page health/info — no auth required.
    Increments the visit counter.
    """
    utils.increment_visit()
    log_module.log_info("PAGE_VISIT", f"Visit #{utils.visit_count}", ip=utils.get_client_ip(headers, addr))

    return 200, utils.ok("Venus Pyramids API is running.", {
        "name": "Venus Pyramids Inn — Backend API",
        "version": "1.0.0",
        "visits": utils.visit_count,
        "docs": "See README for available endpoints.",
    })


# ══════════════════════════════════════════════════════════════
# PUBLIC ROUTE — GET /health
# ══════════════════════════════════════════════════════════════

def handle_health(headers: dict, addr: tuple) -> tuple:
    """Simple health check — returns 200 OK so monitors/Docker know it's alive."""
    return 200, utils.ok("OK", {"status": "healthy", "time": datetime.now(timezone.utc).isoformat()})


# ══════════════════════════════════════════════════════════════
# PUBLIC ROUTE — GET /admin/csrf-token
# ══════════════════════════════════════════════════════════════

def handle_get_csrf_token(headers: dict, addr: tuple) -> tuple:
    """
    Issue a fresh CSRF token to the client.
    The client must include this token in POST requests to /admin/login.
    """
    token = auth.generate_csrf_token()
    return 200, utils.ok("CSRF token generated.", {"csrf_token": token})


# ══════════════════════════════════════════════════════════════
# POST /admin/login
# ══════════════════════════════════════════════════════════════

def handle_login(body: bytes, headers: dict, addr: tuple) -> tuple:
    """
    Admin login endpoint.

    Security features applied:
      - Rate limiting  (max 5 attempts per 15 min per IP)
      - CSRF token validation
      - bcrypt password verification (timing-safe)
      - Input sanitization before any comparison
      - Generic error message (no username-enumeration leakage)
    """
    global total_login_attempts

    client_ip = utils.get_client_ip(headers, addr)
    total_login_attempts += 1

    # ── 1. Rate limiting ──────────────────────────────────────
    if auth.is_rate_limited(client_ip):
        log_module.log_warn("LOGIN_BLOCKED", "Rate limit hit", ip=client_ip)
        return 429, utils.err(
            "Too many login attempts. Please wait 15 minutes before trying again.",
            {"retry_after_minutes": 15}
        )

    # ── 2. Parse & sanitize input ─────────────────────────────
    data = utils.parse_json_body(body)

    # Sanitize — escape HTML in username, strip password whitespace only
    username = utils.sanitize_username(data.get("username", ""))
    password = str(data.get("password", "")).strip()
    csrf_token = str(data.get("csrf_token", "")).strip()

    if not username or not password:
        auth.record_failed_attempt(client_ip)
        log_module.log_warn("LOGIN_FAILED", "Missing credentials", ip=client_ip)
        return 400, utils.err("Username and password are required.")

    # ── 3. CSRF token validation ──────────────────────────────
    if not auth.validate_csrf_token(csrf_token):
        log_module.log_warn("CSRF_FAIL", "Invalid or missing CSRF token", ip=client_ip)
        return 403, utils.err("Invalid or expired security token. Please refresh the page.")

    # ── 4. Verify credentials ─────────────────────────────────
    # Compare username safely (constant-time via secrets.compare_digest)
    import secrets as _secrets
    username_matches = _secrets.compare_digest(username, auth.ADMIN_USERNAME)
    password_ok = auth.verify_password(password, auth.ADMIN_PASSWORD_HASH)

    if not username_matches or not password_ok:
        auth.record_failed_attempt(client_ip)
        remaining = auth.remaining_attempts(client_ip)

        log_module.log_warn(
            "LOGIN_FAILED",
            f"Bad credentials for username='{username}'. Remaining attempts: {remaining}",
            ip=client_ip
        )

        # Generic message — don't reveal which field was wrong
        msg = "Invalid credentials."
        if remaining <= 2:
            msg += f" Warning: {remaining} attempt(s) left before lockout."

        return 401, utils.err(msg, {"remaining_attempts": remaining})

    # ── 5. Success — create session ───────────────────────────
    auth.clear_failed_attempts(client_ip)
    session_id = auth.create_session(auth.ADMIN_USERNAME)

    log_module.log_info(
        "LOGIN_SUCCESS",
        f"Admin logged in successfully",
        ip=client_ip
    )

    return 200, utils.ok("Login successful. Welcome, Admin!", {
        "session_id": session_id,
        "username": auth.ADMIN_USERNAME,
        "expires_in_seconds": auth.SESSION_TIMEOUT_SECONDS,
    })


# ══════════════════════════════════════════════════════════════
# POST /admin/logout
# ══════════════════════════════════════════════════════════════

def handle_logout(body: bytes, headers: dict, addr: tuple) -> tuple:
    """
    Destroy the admin session (logout).
    Always returns 200 — even if session didn't exist (prevents enumeration).
    """
    client_ip = utils.get_client_ip(headers, addr)
    session_id = utils.extract_session_id(headers)

    if session_id:
        auth.destroy_session(session_id)
        log_module.log_info("LOGOUT", "Session destroyed", ip=client_ip)

    return 200, utils.ok("Logged out successfully.")


# ══════════════════════════════════════════════════════════════
# GET /admin/dashboard
# ══════════════════════════════════════════════════════════════

def handle_dashboard(headers: dict, addr: tuple) -> tuple:
    """
    Protected admin dashboard data.
    Returns stats and summary for the admin UI.
    """
    session, error = _require_session(headers)
    if error:
        return error

    client_ip = utils.get_client_ip(headers, addr)
    log_module.log_info("DASHBOARD_ACCESS", "Admin viewed dashboard", ip=client_ip)

    # Count uploaded files
    try:
        uploaded_files = os.listdir(UPLOAD_DIR)
        file_count = len(uploaded_files)
    except OSError:
        uploaded_files = []
        file_count = 0

    # Count active sessions
    active_sessions = len(auth.SESSION_STORE)

    return 200, utils.ok("Welcome, Admin!", {
        "username": session["username"],
        "login_attempts_total": total_login_attempts,
        "active_sessions": active_sessions,
        "files_uploaded": file_count,
        "visit_count": utils.visit_count,
        "session_created": datetime.fromtimestamp(session["created_at"], tz=timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        "server_time": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
    })


# ══════════════════════════════════════════════════════════════
# MULTIPART PARSER (replaces removed `cgi` module in Python 3.13+)
# ══════════════════════════════════════════════════════════════

def _parse_multipart(content_type: str, body: bytes) -> dict:
    """
    Manually parse a multipart/form-data body.
    Returns a dict of { field_name: (filename_or_None, data_bytes) }.

    This replaces Python's removed cgi.FieldStorage for Python 3.13+.
    """
    # Extract boundary string from Content-Type header
    # e.g.  "multipart/form-data; boundary=----WebKitFormBoundaryXYZ"
    boundary_match = re.search(r'boundary=([^\s;]+)', content_type)
    if not boundary_match:
        return {}

    boundary = boundary_match.group(1).strip('"').encode()
    delimiter = b"--" + boundary

    parts = {}
    # Split body on boundary lines
    segments = body.split(delimiter)

    for segment in segments:
        # Skip the preamble and epilogue
        if segment in (b"", b"--\r\n", b"--", b"\r\n"):
            continue
        if segment.startswith(b"--"):
            continue

        # Each segment starts with \r\n, then headers, then \r\n\r\n, then data
        if segment.startswith(b"\r\n"):
            segment = segment[2:]
        if segment.endswith(b"\r\n"):
            segment = segment[:-2]

        # Split headers from body
        header_end = segment.find(b"\r\n\r\n")
        if header_end == -1:
            continue

        raw_headers = segment[:header_end].decode("utf-8", errors="replace")
        data = segment[header_end + 4:]

        # Parse Content-Disposition to get name and filename
        name = None
        filename = None
        for line in raw_headers.split("\r\n"):
            if line.lower().startswith("content-disposition:"):
                name_match = re.search(r'name="([^"]*)"', line)
                file_match = re.search(r'filename="([^"]*)"', line)
                if name_match:
                    name = name_match.group(1)
                if file_match:
                    filename = file_match.group(1)

        if name:
            parts[name] = (filename, data)

    return parts


# ══════════════════════════════════════════════════════════════
# POST /upload
# ══════════════════════════════════════════════════════════════

def handle_upload(raw_headers: dict, body: bytes, addr: tuple) -> tuple:
    """
    Secure file upload endpoint — admin only.

    Security checks:
      - Session validation (admin only)
      - Extension whitelist (jpg, png, pdf)
      - Magic-byte validation (real content check)
      - File size limit (5 MB)
      - Safe filename generation (prevents path traversal)
      - Files stored outside web root (not executable)
    """
    session, error = _require_session(raw_headers)
    if error:
        return error

    client_ip = utils.get_client_ip(raw_headers, addr)
    content_type = raw_headers.get("content-type", raw_headers.get("Content-Type", ""))

    # ── Must be multipart/form-data ───────────────────────────
    if "multipart/form-data" not in content_type:
        return 400, utils.err("Request must be multipart/form-data.")

    # ── Parse the multipart body (no cgi module needed) ───────
    parts = _parse_multipart(content_type, body)

    if "file" not in parts:
        return 400, utils.err("No file provided. Use field name 'file'.")

    original_name, file_data = parts["file"]

    if not original_name:
        return 400, utils.err("No filename found in the upload.")

    # ── Sanitize filename ─────────────────────────────────────
    safe_name = utils.safe_filename(original_name)
    if not safe_name:
        return 400, utils.err("Invalid filename.")

    # ── Validate (extension + size + magic bytes) ─────────────
    is_valid, error_msg = utils.validate_file(safe_name, file_data)
    if not is_valid:
        log_module.log_warn("UPLOAD_REJECTED", f"File='{safe_name}' | {error_msg}", ip=client_ip)
        return 400, utils.err(error_msg)

    # ── Add timestamp prefix to avoid overwriting files ───────
    timestamp_prefix = str(int(time.time()))
    final_name = f"{timestamp_prefix}_{safe_name}"
    dest_path = os.path.join(UPLOAD_DIR, final_name)

    # ── Save file ─────────────────────────────────────────────
    try:
        with open(dest_path, "wb") as fh:
            fh.write(file_data)
    except OSError as e:
        log_module.log_error("UPLOAD_ERROR", str(e), ip=client_ip)
        return 500, utils.err("Failed to save file. Please try again.")

    log_module.log_info(
        "FILE_UPLOAD",
        f"Saved '{final_name}' ({len(file_data)} bytes)",
        ip=client_ip
    )

    return 200, utils.ok("File uploaded successfully.", {
        "filename": final_name,
        "original_name": safe_name,
        "size_bytes": len(file_data),
    })


# ══════════════════════════════════════════════════════════════
# GET /files
# ══════════════════════════════════════════════════════════════

def handle_list_files(headers: dict, addr: tuple) -> tuple:
    """
    List all uploaded files — admin only.
    Returns metadata (name, size, upload time) but NOT file contents.
    """
    session, error = _require_session(headers)
    if error:
        return error

    client_ip = utils.get_client_ip(headers, addr)

    try:
        files = []
        for fname in sorted(os.listdir(UPLOAD_DIR)):
            fpath = os.path.join(UPLOAD_DIR, fname)
            if os.path.isfile(fpath):
                stat = os.stat(fpath)
                files.append({
                    "filename": fname,
                    "size_bytes": stat.st_size,
                    "uploaded_at": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
                })
    except OSError as e:
        log_module.log_error("FILES_ERROR", str(e), ip=client_ip)
        return 500, utils.err("Could not read uploads directory.")

    log_module.log_info("FILES_LIST", f"Listed {len(files)} files", ip=client_ip)

    return 200, utils.ok(f"Found {len(files)} file(s).", {"files": files})


# ══════════════════════════════════════════════════════════════
# GET /logs
# ══════════════════════════════════════════════════════════════

def handle_get_logs(headers: dict, addr: tuple) -> tuple:
    """
    Return recent server logs — admin only.
    Never exposes raw internal data; only structured log entries.
    """
    session, error = _require_session(headers)
    if error:
        return error

    client_ip = utils.get_client_ip(headers, addr)
    recent = log_module.get_recent_logs(limit=100)

    log_module.log_info("LOGS_VIEWED", f"Admin fetched {len(recent)} log entries", ip=client_ip)

    return 200, utils.ok(f"Last {len(recent)} log entries.", {"logs": recent})


# ══════════════════════════════════════════════════════════════
# DATA API — /api/rooms
# ══════════════════════════════════════════════════════════════

def _parse_json_fields(row: dict, fields: list) -> dict:
    for f in fields:
        if row.get(f):
            try:
                row[f] = json.loads(row[f])
            except:
                row[f] = []
    return row

def handle_rooms_api(method: str, path: str, body: bytes, headers: dict, addr: tuple) -> tuple:
    parts = path.strip("/").split("/")
    room_id = parts[2] if len(parts) > 2 else None

    # GET is public
    if method == "GET":
        if room_id:
            room = database.query_one("SELECT * FROM rooms WHERE id = ?", (room_id,))
            if not room: return 404, utils.err("Room not found")
            return 200, utils.ok("Room data", _parse_json_fields(room, ["amenities", "highlights"]))
        
        rooms = database.query_all("SELECT * FROM rooms ORDER BY id")
        for r in rooms: _parse_json_fields(r, ["amenities", "highlights"])
        return 200, utils.ok("Rooms list", {"rooms": rooms})

    # POST, PUT, DELETE require admin session
    session, error = _require_session(headers)
    if error: return error

    data = utils.parse_json_body(body) if body else {}

    if method == "POST":
        query = '''INSERT INTO rooms (name, description, size, price, capacity, view, amenities, highlights, image, rating, available) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'''
        uid = database.execute(query, (
            data.get("name"), data.get("description"), data.get("size"), data.get("price", 0),
            data.get("capacity"), data.get("view"), json.dumps(data.get("amenities", [])), 
            json.dumps(data.get("highlights", [])), data.get("image"), data.get("rating", 5), 1
        ))
        log_module.log_info("CMS_ROOM_CREATED", f"Room {uid} created by {session['username']}")
        return 201, utils.ok("Room created", {"id": uid})

    if method == "PUT" and room_id:
        query = '''UPDATE rooms SET name=?, description=?, size=?, price=?, capacity=?, view=?, 
                   amenities=?, highlights=?, image=?, rating=?, available=? WHERE id=?'''
        database.execute(query, (
            data.get("name"), data.get("description"), data.get("size"), data.get("price", 0),
            data.get("capacity"), data.get("view"), json.dumps(data.get("amenities", [])), 
            json.dumps(data.get("highlights", [])), data.get("image"), data.get("rating", 5),
            data.get("available", 1), room_id
        ))
        log_module.log_info("CMS_ROOM_UPDATED", f"Room {room_id} updated by {session['username']}")
        return 200, utils.ok("Room updated")

    if method == "DELETE" and room_id:
        database.execute("DELETE FROM rooms WHERE id=?", (room_id,))
        log_module.log_info("CMS_ROOM_DELETED", f"Room {room_id} deleted by {session['username']}")
        return 200, utils.ok("Room deleted")

    return 405, utils.err("Method not allowed")


# ══════════════════════════════════════════════════════════════
# DATA API — /api/tours
# ══════════════════════════════════════════════════════════════

def handle_tours_api(method: str, path: str, body: bytes, headers: dict, addr: tuple) -> tuple:
    parts = path.strip("/").split("/")
    tour_id = parts[2] if len(parts) > 2 else None

    json_fields = ["priceTiers", "highlights", "includes", "excludes", "itinerary"]

    # GET is public
    if method == "GET":
        if tour_id:
            tour = database.query_one("SELECT * FROM tours WHERE id = ?", (tour_id,))
            if not tour: return 404, utils.err("Tour not found")
            return 200, utils.ok("Tour data", _parse_json_fields(tour, json_fields))
        
        tours = list(database.query_all("SELECT * FROM tours ORDER BY id"))
        for t in tours: _parse_json_fields(t, json_fields)
        return 200, utils.ok("Tours list", {"tours": tours})

    # POST, PUT, DELETE require admin session
    session, error = _require_session(headers)
    if error: return error

    data = utils.parse_json_body(body) if body else {}

    if method == "POST":
        query = '''INSERT INTO tours (title, description, location, destination, basePrice, priceTiers, 
                   duration, tourType, pickupTime, rating, reviews, image, highlights, includes, excludes, 
                   itinerary, meetingPoint, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'''
        uid = database.execute(query, (
            data.get("title"), data.get("description"), data.get("location"), data.get("destination"),
            data.get("basePrice", 0), json.dumps(data.get("priceTiers", [])), data.get("duration"),
            data.get("tourType"), data.get("pickupTime"), data.get("rating", 5), data.get("reviews", 0),
            data.get("image"), json.dumps(data.get("highlights", [])), json.dumps(data.get("includes", [])),
            json.dumps(data.get("excludes", [])), json.dumps(data.get("itinerary", [])), 
            data.get("meetingPoint"), data.get("note")
        ))
        log_module.log_info("CMS_TOUR_CREATED", f"Tour {uid} created by {session['username']}")
        return 201, utils.ok("Tour created", {"id": uid})

    if method == "PUT" and tour_id:
        query = '''UPDATE tours SET title=?, description=?, location=?, destination=?, basePrice=?, 
                   priceTiers=?, duration=?, tourType=?, pickupTime=?, rating=?, reviews=?, image=?, 
                   highlights=?, includes=?, excludes=?, itinerary=?, meetingPoint=?, note=? WHERE id=?'''
        database.execute(query, (
            data.get("title"), data.get("description"), data.get("location"), data.get("destination"),
            data.get("basePrice", 0), json.dumps(data.get("priceTiers", [])), data.get("duration"),
            data.get("tourType"), data.get("pickupTime"), data.get("rating", 5), data.get("reviews", 0),
            data.get("image"), json.dumps(data.get("highlights", [])), json.dumps(data.get("includes", [])),
            json.dumps(data.get("excludes", [])), json.dumps(data.get("itinerary", [])), 
            data.get("meetingPoint"), data.get("note"), tour_id
        ))
        log_module.log_info("CMS_TOUR_UPDATED", f"Tour {tour_id} updated by {session['username']}")
        return 200, utils.ok("Tour updated")

    if method == "DELETE" and tour_id:
        database.execute("DELETE FROM tours WHERE id=?", (tour_id,))
        log_module.log_info("CMS_TOUR_DELETED", f"Tour {tour_id} deleted by {session['username']}")
        return 200, utils.ok("Tour deleted")

    return 405, utils.err("Method not allowed")

# ══════════════════════════════════════════════════════════════
# DATA API — /api/bookings
# ══════════════════════════════════════════════════════════════

def handle_bookings_api(method: str, path: str, body: bytes, headers: dict, addr: tuple) -> tuple:
    parts = path.strip("/").split("/")
    booking_id = parts[2] if len(parts) > 2 else None

    # Handle check-availability first (public)
    if method == "POST" and path.rstrip("/") == "/api/bookings/check-availability":
        data = utils.parse_json_body(body) if body else {}
        item_type = data.get("item_type")
        item_id = data.get("item_id")
        check_in = data.get("check_in_date")
        check_out = data.get("check_out_date")

        if not item_type or not item_id or not check_in:
            return 400, utils.err("Missing required parameters for availability check.")

        if not check_out:
            check_out = check_in

        # Check SQLite occupancy
        overlap = database.query_one('''
            SELECT COUNT(*) as count FROM bookings
            WHERE item_type = ? AND item_id = ? AND status != 'cancelled'
              AND (check_in_date < ? AND check_out_date > ?)
        ''', (item_type, item_id, check_out, check_in))

        count = overlap.get("count", 0) if overlap else 0
        is_available = (count == 0)

        return 200, utils.ok("Availability checked", {
            "available": is_available,
            "overlapping_count": count
        })

    # Handle booking receipt loading (public, post booking_id to retrieve the raw html)
    if method == "POST" and path.rstrip("/") == "/api/bookings/receipt":
        data = utils.parse_json_body(body) if body else {}
        b_id = data.get("id")
        if not b_id:
            return 400, utils.err("Booking ID is required.")

        # Traverse email uploads folder to find matches
        email_dir = os.path.join(os.path.dirname(__file__), "uploads", "emails")
        html_content = None
        
        if os.path.exists(email_dir):
            prefix = f"booking_{b_id}_"
            for fname in os.listdir(email_dir):
                if fname.startswith(prefix) and fname.endswith(".html"):
                    try:
                        with open(os.path.join(email_dir, fname), "r", encoding="utf-8") as f:
                            html_content = f.read()
                        break
                    except Exception as e:
                        log_module.log_error("RECEIPT_READ_ERROR", f"Could not read receipt file {fname}: {str(e)}")

        if html_content is None:
            return 404, utils.err("Receipt not found for this reservation.")

        return 200, utils.ok("Receipt HTML retrieved", {"html": html_content})

    # Handle customer bookings lookup (public, post email to check booking history)
    if method == "POST" and path.rstrip("/") == "/api/bookings/customer":
        data = utils.parse_json_body(body) if body else {}
        email = data.get("email")
        if not email:
            return 400, utils.err("Customer email is required.")

        bookings = database.query_all(
            "SELECT * FROM bookings WHERE customer_email = ? ORDER BY created_at DESC",
            (email,)
        )
        
        bookings_list = []
        for b in bookings:
            b_dict = dict(b)
            item_name = "Unknown Item"
            if b_dict.get("item_type") == "room":
                room = database.query_one("SELECT name FROM rooms WHERE id = ?", (b_dict.get("item_id"),))
                if room:
                    item_name = room.get("name")
            elif b_dict.get("item_type") == "tour":
                tour = database.query_one("SELECT title FROM tours WHERE id = ?", (b_dict.get("item_id"),))
                if tour:
                    item_name = tour.get("title")
            b_dict["item_name"] = item_name
            bookings_list.append(b_dict)

        return 200, utils.ok("Customer bookings retrieved", {"bookings": bookings_list})

    # POST is public (anyone can create a booking)
    if method == "POST" and (path.rstrip("/") == "/api/bookings" or path.rstrip("/") == "/api/bookings/"):
        data = utils.parse_json_body(body) if body else {}
        
        item_type = data.get("item_type")
        item_id = data.get("item_id")
        check_in = data.get("check_in_date")
        check_out = data.get("check_out_date")
        if not check_out:
            check_out = check_in

        # Room availability check
        if item_type == "room":
            overlap = database.query_one('''
                SELECT COUNT(*) as count FROM bookings
                WHERE item_type = ? AND item_id = ? AND status != 'cancelled'
                  AND (check_in_date < ? AND check_out_date > ?)
            ''', (item_type, item_id, check_out, check_in))
            if overlap and overlap.get("count", 0) > 0:
                return 409, utils.err("Double booking detected. This room is no longer available for the selected dates.")

        status = data.get("status", "pending")

        query = '''
            INSERT INTO bookings (
                customer_name, customer_email, customer_phone, item_type, 
                item_id, check_in_date, check_out_date, total_price, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        '''
        uid = database.execute(query, (
            data.get("customer_name"), data.get("customer_email"), data.get("customer_phone"),
            item_type, item_id, check_in, check_out,
            data.get("total_price", 0), status
        ))
        
        # Fetch the created booking details
        booking = database.query_one("SELECT * FROM bookings WHERE id = ?", (uid,))
        
        item_name = "Unknown Room/Tour"
        if item_type == "room":
            room = database.query_one("SELECT name FROM rooms WHERE id = ?", (item_id,))
            if room:
                item_name = room["name"]
        elif item_type == "tour":
            tour = database.query_one("SELECT title FROM tours WHERE id = ?", (item_id,))
            if tour:
                item_name = tour["title"]

        import email_service
        try:
            email_service.send_transactional_email(dict(booking), item_name)
        except Exception as email_err:
            log_module.log_error("EMAIL_ERROR", f"Failed to send booking receipt: {str(email_err)}")

        log_module.log_info("NEW_BOOKING", f"Booking {uid} created for {data.get('customer_name')}")
        return 201, utils.ok("Booking created", {"id": uid, "booking": dict(booking)})

    # GET, PUT, DELETE require admin session
    session, error = _require_session(headers)
    if error: return error

    if method == "GET":
        bookings = database.query_all("SELECT * FROM bookings ORDER BY created_at DESC")
        return 200, utils.ok("Bookings list", {"bookings": list(bookings)})

    if method == "PUT" and booking_id:
        booking = database.query_one("SELECT * FROM bookings WHERE id = ?", (booking_id,))
        if not booking:
            return 404, utils.err("Booking not found")

        data = utils.parse_json_body(body) if body else {}
        new_status = data.get("status")
        database.execute("UPDATE bookings SET status=? WHERE id=?", (new_status, booking_id))
        
        updated_booking = database.query_one("SELECT * FROM bookings WHERE id = ?", (booking_id,))
        
        item_id = updated_booking["item_id"]
        item_type = updated_booking["item_type"]
        item_name = "Unknown Room/Tour"
        if item_type == "room":
            room = database.query_one("SELECT name FROM rooms WHERE id = ?", (item_id,))
            if room:
                item_name = room["name"]
        elif item_type == "tour":
            tour = database.query_one("SELECT title FROM tours WHERE id = ?", (item_id,))
            if tour:
                item_name = tour["title"]

        import email_service
        try:
            email_service.send_transactional_email(dict(updated_booking), item_name)
        except Exception as email_err:
            log_module.log_error("EMAIL_ERROR", f"Failed to send status update email: {str(email_err)}")

        return 200, utils.ok("Booking updated", {"booking": dict(updated_booking)})

    if method == "DELETE" and booking_id:
        database.execute("DELETE FROM bookings WHERE id=?", (booking_id,))
        return 200, utils.ok("Booking deleted")

    return 405, utils.err("Method not allowed")
