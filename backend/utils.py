"""
utils.py — Utility Functions
============================
Handles:
  - Input sanitization (XSS / injection prevention)
  - JSON building helpers
  - File validation (type, size)
  - Request parsing helpers
  - Visit counter
"""

import json
import re
import os
import mimetypes
from html import escape as html_escape
from urllib.parse import unquote_plus

# ─────────────────────────────────────────────────────────────
# VISIT COUNTER (in-memory, incremented on every public GET /)
# ─────────────────────────────────────────────────────────────
visit_count: int = 0

def increment_visit() -> int:
    """Increment the global visit counter and return the new value."""
    global visit_count
    visit_count += 1
    return visit_count


# ══════════════════════════════════════════════════════════════
# JSON RESPONSE BUILDERS
# ══════════════════════════════════════════════════════════════

def ok(message: str = "OK", data=None) -> dict:
    """
    Standard success response dict.
    Always shaped as { success: true, message: ..., data: ... }
    """
    return {"success": True, "message": message, "data": data}


def err(message: str = "Error", data=None) -> dict:
    """
    Standard error response dict.
    Always shaped as { success: false, message: ..., data: ... }
    """
    return {"success": False, "message": message, "data": data}


def json_encode(obj: dict) -> bytes:
    """Encode a dict to UTF-8 JSON bytes."""
    return json.dumps(obj, ensure_ascii=False, default=str).encode("utf-8")


# ══════════════════════════════════════════════════════════════
# INPUT SANITIZATION
# ══════════════════════════════════════════════════════════════

def sanitize_string(value: str, max_length: int = 256) -> str:
    """
    Sanitize a string input:
      1. Strip leading/trailing whitespace.
      2. Escape HTML special characters (prevents XSS in any reflected output).
      3. Truncate to max_length to prevent buffer abuse.

    NOTE: We do not use a DB so SQL injection isn't a direct risk,
    but the pattern below shows how you would sanitize for SQL too.
    """
    if not isinstance(value, str):
        value = str(value)

    # Step 1 — trim
    value = value.strip()

    # Step 2 — truncate early (before HTML escaping to save CPU)
    value = value[:max_length]

    # Step 3 — HTML-escape (converts <, >, &, ", ' to HTML entities)
    value = html_escape(value, quote=True)

    return value


def sanitize_username(value: str) -> str:
    """
    Extra-strict sanitization for usernames.
    Allows only alphanumeric chars, underscores, and hyphens.
    """
    raw = sanitize_string(value, max_length=64)
    # Strip anything that isn't a safe username character
    return re.sub(r"[^a-zA-Z0-9_\-]", "", raw)


def strip_null_bytes(value: str) -> str:
    """Remove null bytes — used for filenames to prevent path tricks."""
    return value.replace("\x00", "")


def safe_filename(filename: str) -> str:
    """
    Produce a safe filename:
      - Remove path separators and null bytes.
      - Allow only alphanumeric, dots, dashes, and underscores.
    This prevents path traversal attacks like ../../etc/passwd.
    """
    filename = strip_null_bytes(filename)
    # Take only the basename (no directory components)
    filename = os.path.basename(filename)
    # Replace any unsafe characters
    filename = re.sub(r"[^a-zA-Z0-9._\-]", "_", filename)
    return filename


# ══════════════════════════════════════════════════════════════
# FILE UPLOAD VALIDATION
# ══════════════════════════════════════════════════════════════

# Only these MIME types are allowed for uploads
ALLOWED_MIME_TYPES = {
    "image/jpeg",
    "image/png",
    "application/pdf",
}

# Map extension to mime type for strict checking
ALLOWED_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".pdf",
}

MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024  # 5 MB


def validate_file(filename: str, file_data: bytes) -> tuple:
    """
    Validate an uploaded file.
    Returns (is_valid: bool, error_message: str | None).

    Checks:
      1. Extension whitelist
      2. File size limit
      3. MIME type via magic bytes (not just extension)
    """
    # --- 1. Extension check ---
    _, ext = os.path.splitext(filename.lower())
    if ext not in ALLOWED_EXTENSIONS:
        return False, f"File type '{ext}' is not allowed. Use: jpg, png, pdf."

    # --- 2. Size check ---
    if len(file_data) > MAX_FILE_SIZE_BYTES:
        max_mb = MAX_FILE_SIZE_BYTES // (1024 * 1024)
        return False, f"File too large. Maximum allowed size is {max_mb} MB."

    # --- 3. Magic bytes check (real content, not just extension) ---
    # JPEG starts with FF D8 FF
    # PNG starts with 89 50 4E 47 0D 0A 1A 0A
    # PDF starts with %PDF
    if ext in (".jpg", ".jpeg"):
        if not file_data[:3] == b"\xff\xd8\xff":
            return False, "File content does not match a valid JPEG image."
    elif ext == ".png":
        if not file_data[:8] == b"\x89PNG\r\n\x1a\n":
            return False, "File content does not match a valid PNG image."
    elif ext == ".pdf":
        if not file_data[:4] == b"%PDF":
            return False, "File content does not match a valid PDF document."

    return True, None


# ══════════════════════════════════════════════════════════════
# REQUEST PARSING HELPERS
# ══════════════════════════════════════════════════════════════

def parse_json_body(body: bytes) -> dict:
    """
    Parse a JSON request body safely.
    Returns an empty dict if parsing fails — never raises.
    """
    try:
        parsed = json.loads(body.decode("utf-8"))
        return parsed if isinstance(parsed, dict) else {}
    except (json.JSONDecodeError, UnicodeDecodeError):
        return {}


def extract_session_id(headers: dict) -> str:
    """
    Extract a session ID from request headers.
    Looks for: Authorization: Bearer <session_id>
    Returns an empty string if not found.
    """
    auth_header = headers.get("authorization", "") or headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        return auth_header[7:].strip()
    return ""


def get_client_ip(headers: dict, addr: tuple) -> str:
    """
    Try to get the real client IP.
    Respects X-Forwarded-For if behind a proxy, else falls back to socket addr.
    """
    forwarded = headers.get("x-forwarded-for", "")
    if forwarded:
        # X-Forwarded-For can be a comma-separated list; first is the client
        return forwarded.split(",")[0].strip()
    return addr[0] if addr else "unknown"
