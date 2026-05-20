"""
server.py — Custom HTTP Server (Python Sockets)
================================================
A full HTTP/1.1 server built from scratch using Python's socket library.
NO Flask, NO Django, NO http.server — pure sockets only.

Architecture:
  - Main thread: listens for connections
  - Per-request thread: handles each client in isolation
  - Background thread: cleans up expired sessions every 5 minutes
  - Background thread: logs periodic server heartbeat

Security headers added to every response:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: no-referrer
  - Content-Security-Policy (strict)
  - Access-Control-Allow-Origin (CORS for React dev server)

Run with:
  python server.py
"""

import socket
import threading
import json
import time
import signal
from datetime import datetime, timezone
import sys
import os

# Our own modules
import auth
import utils
import handlers
import logger as log_module

# ─────────────────────────────────────────────────────────────
# SERVER CONFIGURATION
# ─────────────────────────────────────────────────────────────
HOST = "0.0.0.0"       # Listen on all network interfaces
PORT = 8000            # Port the backend listens on
BACKLOG = 128          # Max queued connections
RECV_SIZE = 65536      # Max bytes per recv() call (64 KB)
MAX_BODY_SIZE = 10 * 1024 * 1024  # 10 MB max request body

# CORS — which origins are allowed to talk to this API.
# In development: Next.js runs on localhost:3000
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
]

# ─────────────────────────────────────────────────────────────
# SECURITY HEADERS — applied to every response
# ─────────────────────────────────────────────────────────────
SECURITY_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "no-referrer",
    "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
    "Cache-Control": "no-store, no-cache, must-revalidate",
}


# ══════════════════════════════════════════════════════════════
# HTTP PARSING
# ══════════════════════════════════════════════════════════════

def parse_http_request(raw: bytes) -> dict:
    """
    Parse a raw HTTP request from bytes.

    Returns a dict with:
      method, path, http_version, headers (dict), body (bytes)

    Returns None if the request is malformed or empty.
    """
    if not raw:
        return None

    try:
        # Separate headers from body at the blank line
        header_end = raw.find(b"\r\n\r\n")
        if header_end == -1:
            # No blank line found — could be incomplete, treat as bad request
            header_end = len(raw)
            body = b""
        else:
            body = raw[header_end + 4:]   # 4 = len("\r\n\r\n")

        header_section = raw[:header_end].decode("utf-8", errors="replace")
        lines = header_section.split("\r\n")

        if not lines:
            return None

        # First line: METHOD PATH HTTP/1.x
        request_line = lines[0].split(" ", 2)
        if len(request_line) < 2:
            return None

        method = request_line[0].upper()
        full_path = request_line[1]
        http_version = request_line[2] if len(request_line) > 2 else "HTTP/1.0"

        # Separate path from query string
        if "?" in full_path:
            path, query_string = full_path.split("?", 1)
        else:
            path = full_path
            query_string = ""

        # Parse headers into a dict (lowercase keys for easy lookup)
        headers = {}
        for line in lines[1:]:
            if ":" in line:
                key, _, value = line.partition(":")
                headers[key.strip().lower()] = value.strip()

        return {
            "method": method,
            "path": path,
            "query_string": query_string,
            "http_version": http_version,
            "headers": headers,
            "body": body,
        }

    except Exception as e:
        log_module.log_error("PARSE_ERROR", str(e))
        return None


# ══════════════════════════════════════════════════════════════
# HTTP RESPONSE BUILDER
# ══════════════════════════════════════════════════════════════

STATUS_TEXTS = {
    200: "OK",
    201: "Created",
    204: "No Content",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    413: "Payload Too Large",
    429: "Too Many Requests",
    500: "Internal Server Error",
}


def build_response(
    status_code: int,
    body_dict: dict,
    origin: str = "",
    extra_headers: dict = None,
) -> bytes:
    """
    Build a full HTTP/1.1 response as bytes.

    Args:
        status_code : HTTP status code integer
        body_dict   : Dict to serialize as JSON body
        origin      : The request Origin header (for CORS)
        extra_headers: Additional headers to include
    """
    status_text = STATUS_TEXTS.get(status_code, "Unknown")
    body_bytes = utils.json_encode(body_dict)

    # ── Build header dict ─────────────────────────────────────
    response_headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": str(len(body_bytes)),
        "Date": datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S GMT"),
        "Connection": "close",
    }

    # Add security headers
    response_headers.update(SECURITY_HEADERS)

    # ── CORS headers (only for allowed origins) ───────────────
    if origin in ALLOWED_ORIGINS:
        response_headers["Access-Control-Allow-Origin"] = origin
        response_headers["Access-Control-Allow-Credentials"] = "true"
        response_headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        response_headers["Access-Control-Allow-Headers"] = (
            "Content-Type, Authorization, X-CSRF-Token"
        )
        response_headers["Access-Control-Max-Age"] = "3600"
    elif not origin:
        # Allow direct requests (curl, Postman, same-origin)
        pass

    # Mix in any caller-supplied extra headers
    if extra_headers:
        response_headers.update(extra_headers)

    # ── Assemble bytes ────────────────────────────────────────
    header_lines = [f"HTTP/1.1 {status_code} {status_text}"]
    for key, value in response_headers.items():
        header_lines.append(f"{key}: {value}")

    header_str = "\r\n".join(header_lines) + "\r\n\r\n"
    return header_str.encode("utf-8") + body_bytes


def build_options_response(origin: str) -> bytes:
    """
    Build a CORS preflight (OPTIONS) response.
    Returns 204 No Content with the appropriate CORS headers.
    """
    response_headers = {
        "Content-Length": "0",
        "Date": datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S GMT"),
        "Connection": "close",
    }
    response_headers.update(SECURITY_HEADERS)

    if origin in ALLOWED_ORIGINS:
        response_headers["Access-Control-Allow-Origin"] = origin
        response_headers["Access-Control-Allow-Credentials"] = "true"
        response_headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        response_headers["Access-Control-Allow-Headers"] = (
            "Content-Type, Authorization, X-CSRF-Token"
        )
        response_headers["Access-Control-Max-Age"] = "3600"

    response_headers["Date"] = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S GMT")
    header_lines = ["HTTP/1.1 204 No Content"]
    for key, value in response_headers.items():
        header_lines.append(f"{key}: {value}")

    return ("\r\n".join(header_lines) + "\r\n\r\n").encode("utf-8")


# ══════════════════════════════════════════════════════════════
# REQUEST ROUTER
# ══════════════════════════════════════════════════════════════

def route_request(request: dict, addr: tuple) -> tuple:
    """
    Match the request method + path to the correct handler.
    Returns (status_code, body_dict).
    """
    method = request["method"]
    path = request["path"].rstrip("/") or "/"
    headers = request["headers"]
    body = request["body"]

    # ── OPTIONS preflight — handled before routing ────────────
    # (dealt with in handle_client, not here)

    # ── Route table ───────────────────────────────────────────
    if method == "GET" and path == "/":
        return handlers.handle_root(headers, addr)

    elif method == "GET" and path == "/health":
        return handlers.handle_health(headers, addr)

    elif method == "GET" and path == "/admin/csrf-token":
        return handlers.handle_get_csrf_token(headers, addr)

    elif method == "POST" and path == "/admin/login":
        return handlers.handle_login(body, headers, addr)

    elif method == "POST" and path == "/admin/logout":
        return handlers.handle_logout(body, headers, addr)

    elif method == "GET" and path == "/admin/dashboard":
        return handlers.handle_dashboard(headers, addr)

    elif method == "POST" and path == "/upload":
        return handlers.handle_upload(headers, body, addr)

    elif method == "GET" and path == "/files":
        return handlers.handle_list_files(headers, addr)

    elif method == "GET" and path == "/logs":
        return handlers.handle_get_logs(headers, addr)

    # ── CMS Routes ─────────────────────────────────────────────
    elif path == "/api/rooms" or path.startswith("/api/rooms/"):
        return handlers.handle_rooms_api(method, path, body, headers, addr)

    elif path == "/api/tours" or path.startswith("/api/tours/"):
        return handlers.handle_tours_api(method, path, body, headers, addr)

    elif path == "/api/bookings" or path.startswith("/api/bookings/"):
        return handlers.handle_bookings_api(method, path, body, headers, addr)

    else:
        return 404, utils.err(f"Route '{method} {path}' not found.")


# ══════════════════════════════════════════════════════════════
# CLIENT HANDLER (runs in its own thread per connection)
# ══════════════════════════════════════════════════════════════

def handle_client(conn: socket.socket, addr: tuple) -> None:
    """
    Handle a single HTTP client connection.

    Steps:
      1. Receive all request data
      2. Guard against oversized requests
      3. Parse HTTP request
      4. Route to handler
      5. Build and send HTTP response
      6. Close connection
    """
    try:
        # ── Receive data ──────────────────────────────────────
        raw_data = b""
        conn.settimeout(10)  # 10-second read timeout

        while True:
            try:
                chunk = conn.recv(RECV_SIZE)
            except socket.timeout:
                break

            if not chunk:
                break

            raw_data += chunk

            # Guard: reject oversized requests early
            if len(raw_data) > MAX_BODY_SIZE:
                response = build_response(413, utils.err("Request body too large."))
                conn.sendall(response)
                return

            # Standard HTTP: headers end with \r\n\r\n
            # If we have the full header section, check Content-Length
            if b"\r\n\r\n" in raw_data:
                header_end = raw_data.find(b"\r\n\r\n") + 4
                header_section = raw_data[:header_end].decode("utf-8", errors="replace")

                # Check Content-Length to know when body is complete
                content_length = 0
                for line in header_section.split("\r\n"):
                    if line.lower().startswith("content-length:"):
                        try:
                            content_length = int(line.split(":", 1)[1].strip())
                        except ValueError:
                            pass
                        break

                body_received = len(raw_data) - header_end
                if body_received >= content_length:
                    break  # We have the full request

        # ── Parse the request ──────────────────────────────────
        request = parse_http_request(raw_data)
        if not request:
            response = build_response(400, utils.err("Malformed HTTP request."))
            conn.sendall(response)
            return

        origin = request["headers"].get("origin", "")
        method = request["method"]
        path = request["path"]

        # ── Handle CORS preflight ─────────────────────────────
        if method == "OPTIONS":
            conn.sendall(build_options_response(origin))
            return

        # ── Route and handle ──────────────────────────────────
        try:
            status_code, body_dict = route_request(request, addr)
        except Exception as e:
            import traceback
            traceback.print_exc()
            log_module.log_error("HANDLER_CRASH", str(e), ip=addr[0])
            status_code = 500
            body_dict = utils.err("An internal server error occurred.")

        # ── Build and send response ───────────────────────────
        response = build_response(status_code, body_dict, origin=origin)
        conn.sendall(response)

        # Log the request (like a real web server access log)
        client_ip = utils.get_client_ip(request["headers"], addr)
        print(
            f"  [{datetime.now().strftime('%H:%M:%S')}] "
            f"{method:6s} {path:30s} -> {status_code}  "
            f"(from {client_ip})"
        )

    except BrokenPipeError:
        pass  # Client disconnected before we finished — not an error
    except Exception as e:
        log_module.log_error("CLIENT_ERROR", str(e), ip=str(addr))
    finally:
        try:
            conn.shutdown(socket.SHUT_RDWR)
        except Exception:
            pass
        conn.close()


# ══════════════════════════════════════════════════════════════
# BACKGROUND TASKS
# ══════════════════════════════════════════════════════════════

def session_cleanup_worker() -> None:
    """
    Background thread: clean up expired sessions every 5 minutes.
    This prevents the session store from growing without bound.
    """
    while True:
        time.sleep(300)  # 5 minutes
        before = len(auth.SESSION_STORE)
        auth.cleanup_expired_sessions()
        after = len(auth.SESSION_STORE)
        removed = before - after
        if removed:
            log_module.log_info("SESSION_CLEANUP", f"Removed {removed} expired session(s)")


def heartbeat_worker() -> None:
    """
    Background thread: log a heartbeat every 30 minutes so we know the
    server is alive without any traffic.
    """
    while True:
        time.sleep(1800)  # 30 minutes
        log_module.log_info(
            "HEARTBEAT",
            f"Server alive | sessions={len(auth.SESSION_STORE)} | visits={utils.visit_count}"
        )


# ══════════════════════════════════════════════════════════════
# MAIN — Start the socket server
# ══════════════════════════════════════════════════════════════

def start_server() -> None:
    """
    Create the socket, bind, listen, and accept connections forever.
    Each connection is handled in a separate daemon thread.
    """
    # Start background workers
    threading.Thread(target=session_cleanup_worker, daemon=True, name="SessionCleaner").start()
    threading.Thread(target=heartbeat_worker, daemon=True, name="Heartbeat").start()

    # Create the server socket
    server_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # SO_REUSEADDR — lets us restart the server immediately without
    # waiting for TIME_WAIT to expire (common gotcha during development)
    server_sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    server_sock.bind((HOST, PORT))
    server_sock.listen(BACKLOG)

    print("=" * 60)
    print("  Venus Pyramids -- Secure Backend API")
    print("=" * 60)
    print(f"  Listening on  http://{HOST}:{PORT}")
    print(f"  React frontend: http://localhost:3000")
    print(f"  Admin login:    POST /admin/login")
    print(f"  Admin panel:    GET  /admin/dashboard")
    print(f"  Health check:   GET  /health")
    print("=" * 60)
    print(f"  Started at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("  Press Ctrl+C to stop.\n")

    log_module.log_info("SERVER_START", f"Listening on {HOST}:{PORT}")

    # Graceful shutdown on Ctrl+C
    def _shutdown(sig, frame):
        print("\n\n  Shutting down gracefully...")
        log_module.log_info("SERVER_STOP", "Received shutdown signal")
        server_sock.close()
        sys.exit(0)

    signal.signal(signal.SIGINT, _shutdown)
    signal.signal(signal.SIGTERM, _shutdown)

    # Accept loop — runs forever
    while True:
        try:
            conn, addr = server_sock.accept()
        except OSError:
            break  # Socket was closed (shutdown)

        # Spawn a thread per client connection
        thread = threading.Thread(
            target=handle_client,
            args=(conn, addr),
            daemon=True,
            name=f"Client-{addr[0]}:{addr[1]}",
        )
        thread.start()


if __name__ == "__main__":
    start_server()
