"""
logger.py — Logging System
==========================
Handles:
  - Structured event logging (login attempts, file uploads, etc.)
  - In-memory log store (last 500 events)
  - Log file persistence (logs/server.log)
"""

import os
import time
import threading
from datetime import datetime, timezone
from typing import List

# ─────────────────────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────────────────────
LOG_DIR = os.path.join(os.path.dirname(__file__), "logs")
LOG_FILE = os.path.join(LOG_DIR, "server.log")
MAX_IN_MEMORY_LOGS = 500  # keep the last 500 events in memory

# ─────────────────────────────────────────────────────────────
# THREAD-SAFE IN-MEMORY LOG STORE
# ─────────────────────────────────────────────────────────────
_log_lock = threading.Lock()
_log_store: List[dict] = []


def _ensure_log_dir() -> None:
    """Create the logs/ directory if it doesn't exist."""
    os.makedirs(LOG_DIR, exist_ok=True)


def _write_to_file(entry: dict) -> None:
    """Append a log entry to the log file (UTF-8, one line per entry)."""
    try:
        _ensure_log_dir()
        line = (
            f"[{entry['timestamp']}] "
            f"[{entry['level'].upper():8s}] "
            f"[{entry['event']:20s}] "
            f"IP={entry.get('ip', '-'):15s} "
            f"| {entry.get('detail', '')}\n"
        )
        with open(LOG_FILE, "a", encoding="utf-8") as fh:
            fh.write(line)
    except OSError:
        pass  # Don't crash the server if logging fails


def log(event: str, detail: str = "", ip: str = "-", level: str = "info") -> None:
    """
    Write a structured log entry.

    Args:
        event  : Short event name, e.g. "LOGIN_SUCCESS", "FILE_UPLOAD"
        detail : Human-readable detail string
        ip     : Client IP address (for security auditing)
        level  : "info" | "warn" | "error"
    """
    entry = {
        "timestamp": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
        "unix": time.time(),
        "level": level,
        "event": event,
        "ip": ip,
        "detail": detail,
    }

    with _log_lock:
        # Add to in-memory store, keeping only the most recent entries
        _log_store.append(entry)
        if len(_log_store) > MAX_IN_MEMORY_LOGS:
            _log_store.pop(0)  # remove oldest

    # Also write to disk asynchronously so we don't block the server
    t = threading.Thread(target=_write_to_file, args=(entry,), daemon=True)
    t.start()


def get_recent_logs(limit: int = 100) -> List[dict]:
    """
    Return the most recent `limit` log entries (newest first).
    Used by the /logs admin endpoint.
    """
    with _log_lock:
        recent = list(reversed(_log_store[-limit:]))

    # Strip internal unix timestamp — not needed by the frontend
    return [
        {
            "timestamp": e["timestamp"],
            "level": e["level"],
            "event": e["event"],
            "ip": e["ip"],
            "detail": e["detail"],
        }
        for e in recent
    ]


# ─────────────────────────────────────────────────────────────
# CONVENIENCE WRAPPERS
# ─────────────────────────────────────────────────────────────

def log_info(event: str, detail: str = "", ip: str = "-") -> None:
    log(event, detail, ip, level="info")

def log_warn(event: str, detail: str = "", ip: str = "-") -> None:
    log(event, detail, ip, level="warn")

def log_error(event: str, detail: str = "", ip: str = "-") -> None:
    log(event, detail, ip, level="error")
