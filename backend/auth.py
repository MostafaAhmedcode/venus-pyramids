"""
auth.py — Authentication & Session Management
=============================================
Handles:
  - Password hashing with bcrypt
  - Session creation / validation / expiry
  - Rate limiting on login attempts
  - CSRF token generation and validation
"""

import bcrypt
import time
import secrets
from typing import Optional

# ─────────────────────────────────────────────────────────────
# ADMIN CREDENTIALS
# Only ONE admin account. Password is hashed at startup.
# Change ADMIN_PASSWORD below before running in production.
# ─────────────────────────────────────────────────────────────
ADMIN_USERNAME = "admin"
_PLAIN_PASSWORD = "Venus@Admin2025!"   # <— change this before deploying

# Hash the admin password once at module load (using bcrypt, cost=12)
ADMIN_PASSWORD_HASH: bytes = bcrypt.hashpw(
    _PLAIN_PASSWORD.encode("utf-8"),
    bcrypt.gensalt(rounds=12),
)

# ─────────────────────────────────────────────────────────────
# SESSION STORE  { session_id: {username, created_at, last_seen} }
# Stored in-memory — sessions are lost on server restart.
# Upgrade to Redis/DB for production.
# ─────────────────────────────────────────────────────────────
SESSION_STORE: dict = {}
SESSION_TIMEOUT_SECONDS = 60 * 60  # 1 hour

# ─────────────────────────────────────────────────────────────
# RATE LIMITING  { ip: [timestamp, timestamp, ...] }
# Tracks failed login timestamps per IP address.
# ─────────────────────────────────────────────────────────────
MAX_LOGIN_ATTEMPTS = 5
LOCKOUT_WINDOW_SECONDS = 15 * 60   # 15-minute window
FAILED_ATTEMPTS: dict = {}

# ─────────────────────────────────────────────────────────────
# CSRF TOKENS  { token: expiry_timestamp }
# Short-lived tokens — valid for 30 minutes.
# ─────────────────────────────────────────────────────────────
CSRF_TOKENS: dict = {}
CSRF_TTL_SECONDS = 30 * 60


# ══════════════════════════════════════════════════════════════
# PASSWORD HELPERS
# ══════════════════════════════════════════════════════════════

def verify_password(plain: str, hashed: bytes) -> bool:
    """
    Safely compare a plaintext password against a bcrypt hash.
    Returns True only if they match.
    """
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed)
    except Exception:
        return False


# ══════════════════════════════════════════════════════════════
# SESSION HELPERS
# ══════════════════════════════════════════════════════════════

def create_session(username: str) -> str:
    """
    Create a new session for the given username.
    Returns the session ID (a cryptographically random hex string).
    """
    # Generate a 256-bit random token — impossible to guess
    session_id = secrets.token_hex(32)

    SESSION_STORE[session_id] = {
        "username": username,
        "created_at": time.time(),
        "last_seen": time.time(),
    }
    return session_id


def validate_session(session_id: Optional[str]) -> Optional[dict]:
    """
    Validate a session ID.
    Returns the session dict if valid and not expired, else None.
    Also updates last_seen timestamp on success.
    """
    if not session_id:
        return None

    session = SESSION_STORE.get(session_id)
    if not session:
        return None

    # Check for expiry
    age = time.time() - session["last_seen"]
    if age > SESSION_TIMEOUT_SECONDS:
        # Session expired — clean it up
        del SESSION_STORE[session_id]
        return None

    # Refresh last_seen (sliding window expiry)
    session["last_seen"] = time.time()
    return session


def destroy_session(session_id: str) -> None:
    """
    Remove a session from the store (logout).
    """
    SESSION_STORE.pop(session_id, None)


def cleanup_expired_sessions() -> None:
    """
    Remove all sessions that have exceeded the timeout.
    Call this periodically from a background thread.
    """
    now = time.time()
    expired = [
        sid for sid, data in SESSION_STORE.items()
        if now - data["last_seen"] > SESSION_TIMEOUT_SECONDS
    ]
    for sid in expired:
        del SESSION_STORE[sid]


# ══════════════════════════════════════════════════════════════
# RATE LIMITING HELPERS
# ══════════════════════════════════════════════════════════════

def is_rate_limited(ip: str) -> bool:
    """
    Return True if this IP has exceeded MAX_LOGIN_ATTEMPTS
    within the LOCKOUT_WINDOW_SECONDS time window.
    """
    now = time.time()
    attempts = FAILED_ATTEMPTS.get(ip, [])

    # Keep only recent attempts inside the window
    recent = [t for t in attempts if now - t < LOCKOUT_WINDOW_SECONDS]
    FAILED_ATTEMPTS[ip] = recent

    return len(recent) >= MAX_LOGIN_ATTEMPTS


def record_failed_attempt(ip: str) -> None:
    """
    Log a failed login attempt timestamp for an IP.
    """
    FAILED_ATTEMPTS.setdefault(ip, []).append(time.time())


def clear_failed_attempts(ip: str) -> None:
    """
    Clear failed attempt history after a successful login.
    """
    FAILED_ATTEMPTS.pop(ip, None)


def remaining_attempts(ip: str) -> int:
    """
    How many failed attempts remain before lockout for this IP.
    """
    now = time.time()
    recent = [
        t for t in FAILED_ATTEMPTS.get(ip, [])
        if now - t < LOCKOUT_WINDOW_SECONDS
    ]
    return max(0, MAX_LOGIN_ATTEMPTS - len(recent))


# ══════════════════════════════════════════════════════════════
# CSRF TOKEN HELPERS
# ══════════════════════════════════════════════════════════════

def generate_csrf_token() -> str:
    """
    Generate a short-lived CSRF token and store it.
    Returns the token string.
    """
    # Purge expired tokens first to prevent dict bloat
    _cleanup_csrf_tokens()

    token = secrets.token_hex(24)
    CSRF_TOKENS[token] = time.time() + CSRF_TTL_SECONDS
    return token


def validate_csrf_token(token: Optional[str]) -> bool:
    """
    Validate a CSRF token — must exist and not be expired.
    Tokens are single-use: consumed on first validation.
    """
    if not token:
        return False

    expiry = CSRF_TOKENS.get(token)
    if expiry is None:
        return False

    # Remove the token immediately (single-use)
    del CSRF_TOKENS[token]

    if time.time() > expiry:
        return False  # Expired

    return True


def _cleanup_csrf_tokens() -> None:
    """Remove expired CSRF tokens from the store."""
    now = time.time()
    expired = [t for t, exp in CSRF_TOKENS.items() if now > exp]
    for t in expired:
        del CSRF_TOKENS[t]
