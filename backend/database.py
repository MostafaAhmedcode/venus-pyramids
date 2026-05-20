import sqlite3
import json
import os
import threading

# Use an absolute path for the database file inside the backend directory
DB_PATH = os.path.join(os.path.dirname(__file__), "venus.db")

# Thread-local storage to keep one SQLite connection per thread
thread_local = threading.local()

def get_db():
    if not hasattr(thread_local, "conn"):
        # check_same_thread=False is needed if we pass cursor results around,
        # but storing it in thread_local is safer.
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row  # Returns dict-like rows
        thread_local.conn = conn
    return thread_local.conn

def init_db():
    """Initializes the database schemas for Rooms, Tours, and Bookings."""
    conn = get_db()
    cursor = conn.cursor()

    # Rooms Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS rooms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            size TEXT,
            price REAL NOT NULL,
            capacity INTEGER,
            view TEXT,
            amenities TEXT,  -- JSON string array
            highlights TEXT, -- JSON string array
            image TEXT,
            rating REAL,
            available BOOLEAN NOT NULL DEFAULT 1
        )
    ''')

    # Tours Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tours (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            location TEXT,
            destination TEXT,
            basePrice REAL NOT NULL,
            priceTiers TEXT, -- JSON array of objects
            duration TEXT,
            tourType TEXT,
            pickupTime TEXT,
            rating REAL,
            reviews INTEGER,
            image TEXT,
            highlights TEXT, -- JSON string array
            includes TEXT,   -- JSON string array
            excludes TEXT,   -- JSON string array
            itinerary TEXT,  -- JSON array of objects
            meetingPoint TEXT,
            note TEXT
        )
    ''')

    # Bookings Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT NOT NULL,
            customer_email TEXT,
            customer_phone TEXT,
            item_type TEXT NOT NULL, -- 'room' or 'tour'
            item_id INTEGER NOT NULL,
            check_in_date TEXT,
            check_out_date TEXT,
            total_price REAL,
            status TEXT DEFAULT 'pending', -- pending, paid, cancelled
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Settings Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT
        )
    ''')

    conn.commit()

# --- Helpers ---

def query_all(query, args=()):
    cur = get_db().execute(query, args)
    return [dict(row) for row in cur.fetchall()]

def query_one(query, args=()):
    cur = get_db().execute(query, args)
    row = cur.fetchone()
    return dict(row) if row else None

def execute(query, args=()):
    conn = get_db()
    cur = conn.execute(query, args)
    conn.commit()
    return cur.lastrowid
