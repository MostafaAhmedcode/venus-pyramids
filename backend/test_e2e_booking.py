"""
test_e2e_booking.py — Comprehensive End-to-End Test Script
============================================================
Validates the entire room/tour availability, reservation creation,
double-booking protection, transactional receipt production,
guest booking history lookup, and invoice preview retrieval routes.
"""

import urllib.request
import urllib.error
import json
import os
import sqlite3
import sys

# Ensure stdout is robust
try:
    sys.stdout.reconfigure(encoding='utf-8')
except:
    pass

BASE_URL = "http://localhost:8000"

def make_request(path, method="GET", data=None, headers=None):
    url = f"{BASE_URL}{path}"
    req_headers = {"Content-Type": "application/json"}
    if headers:
        req_headers.update(headers)
    
    req_data = None
    if data:
        req_data = json.dumps(data).encode("utf-8")
        
    req = urllib.request.Request(url, data=req_data, headers=req_headers, method=method)
    try:
        with urllib.request.urlopen(req) as res:
            res_data = res.read().decode("utf-8")
            return res.status, json.loads(res_data)
    except urllib.error.HTTPError as e:
        res_data = e.read().decode("utf-8")
        try:
            return e.code, json.loads(res_data)
        except:
            return e.code, {"error": res_data}

def run_tests():
    print("============================================================")
    print("  [START] Venus Pyramids Inn E2E Booking & Portal Verification  ")
    print("============================================================\n")

    # 1. Fetch available rooms
    print("[1] Fetching Rooms list...")
    status, res = make_request("/api/rooms")
    if status != 200:
        print(f"[ERROR] Failed to fetch rooms list (Status: {status})")
        return
    
    rooms = res.get("data", {}).get("rooms", [])
    if not rooms:
        print("[ERROR] No rooms found in database. Initializing test database room...")
        # Add a dummy room directly in database
        db_path = os.path.join(os.path.dirname(__file__), "venus.db")
        conn = sqlite3.connect(db_path)
        cur = conn.cursor()
        cur.execute('''
            INSERT INTO rooms (name, description, size, price, capacity, view, available)
            VALUES ('E2E Deluxe Test Room', 'Deluxe room for E2E testing', '35 sqm', 120.0, 2, 'Pyramids View', 1)
        ''')
        conn.commit()
        conn.close()
        
        status, res = make_request("/api/rooms")
        rooms = res.get("data", {}).get("rooms", [])
    
    target_room = rooms[0]
    room_id = target_room["id"]
    room_name = target_room["name"]
    print(f" -> Target room selected: ID={room_id} | Name='{room_name}'\n")

    # 2. Check initial availability for specific dates
    check_in = "2026-08-10"
    check_out = "2026-08-15"
    print(f"[2] Checking room availability for {check_in} to {check_out}...")
    check_payload = {
        "item_type": "room",
        "item_id": room_id,
        "check_in_date": check_in,
        "check_out_date": check_out
    }
    status, res = make_request("/api/bookings/check-availability", "POST", check_payload)
    assert status == 200, f"Expected 200, got {status}"
    available = res.get("data", {}).get("available")
    print(f"[OK] Availability: {available}\n")
    assert available is True, "Room should be available before booking!"

    # 3. Create a room booking
    print("[3] Creating new paid booking...")
    test_email = "test-guest-2026@pyramids.eg"
    booking_payload = {
        "item_type": "room",
        "item_id": room_id,
        "check_in_date": check_in,
        "check_out_date": check_out,
        "customer_name": "Antigravity Tester",
        "customer_email": test_email,
        "customer_phone": "+201012345678",
        "total_price": 600.0,
        "status": "paid"
    }
    status, res = make_request("/api/bookings", "POST", booking_payload)
    assert status == 201, f"Expected 201, got {status}"
    booking_data = res.get("data", {}).get("booking", {})
    booking_id = res.get("data", {}).get("id")
    print(f"[OK] Booking Created Successfully!")
    print(f" -> Booking ID: {booking_id} | Guest: {booking_data.get('customer_name')} | Status: {booking_data.get('status')}\n")

    # 4. Verify Double Booking Prevention (SQLite Conflict detection)
    print("[4] Checking availability for the same room and same overlapping dates...")
    status, res = make_request("/api/bookings/check-availability", "POST", check_payload)
    assert status == 200, f"Expected 200, got {status}"
    available = res.get("data", {}).get("available")
    overlapping = res.get("data", {}).get("overlapping_count")
    print(f"[OK] Availability: {available} (Overlapping count: {overlapping})")
    assert available is False, "Double booking check should report NOT available!"

    print(" -> Attempting to create duplicate booking on overlapping dates...")
    status, res = make_request("/api/bookings", "POST", booking_payload)
    print(f"[OK] Booking Request status: {status} (Conflict Detected)")
    assert status == 409, f"Expected 409 Conflict, got {status}"
    print(f" -> Message: {res.get('message')}\n")

    # 5. Check if local HTML Receipt is written to disk
    print("[5] Verifying that transactional HTML receipt was written to disk...")
    emails_dir = os.path.join(os.path.dirname(__file__), "uploads", "emails")
    assert os.path.exists(emails_dir), "Emails uploads directory does not exist!"
    
    found_receipt = False
    prefix = f"booking_{booking_id}_"
    for fname in os.listdir(emails_dir):
        if fname.startswith(prefix) and fname.endswith(".html"):
            found_receipt = True
            receipt_path = os.path.join(emails_dir, fname)
            print(f"[OK] Found HTML Receipt: {fname} (Size: {os.path.getsize(receipt_path)} bytes)")
            break
    assert found_receipt is True, f"HTML receipt starting with '{prefix}' was not generated!"
    print("")

    # 6. Guest Portal Booking Lookup
    print("[6] Simulating Guest Portal Login & lookup by Email...")
    lookup_payload = {"email": test_email}
    status, res = make_request("/api/bookings/customer", "POST", lookup_payload)
    assert status == 200, f"Expected 200, got {status}"
    bookings_list = res.get("data", {}).get("bookings", [])
    print(f"[OK] Customer bookings count: {len(bookings_list)}")
    assert len(bookings_list) > 0, "No bookings found for the registered email!"
    
    found_booking = bookings_list[0]
    print(f" -> Loaded Booking: ID={found_booking['id']} | Item={found_booking['item_name']} | Price=${found_booking['total_price']} | Status={found_booking['status']}\n")

    # 7. Invoice Viewer Preview retrieval (for sandboxed iframe rendering)
    print("[7] Simulating Invoice Viewer receipt download via Guest Portal...")
    receipt_payload = {"id": booking_id}
    status, res = make_request("/api/bookings/receipt", "POST", receipt_payload)
    assert status == 200, f"Expected 200, got {status}"
    html_receipt = res.get("data", {}).get("html", "")
    print(f"[OK] Successfully retrieved sandboxed HTML Invoice (Preview size: {len(html_receipt)} chars)")
    assert "VENUS" in html_receipt.upper() or "PYRAMIDS" in html_receipt.upper(), "Receipt template is missing the Inn name!"
    print("")

    # 8. Clean up
    print("[8] Cleaning up E2E test data from SQLite database...")
    db_path = os.path.join(os.path.dirname(__file__), "venus.db")
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("DELETE FROM bookings WHERE id = ?", (booking_id,))
    # Delete room if we inserted it
    if room_name == "E2E Deluxe Test Room":
        cur.execute("DELETE FROM rooms WHERE id = ?", (room_id,))
    conn.commit()
    conn.close()
    
    # Delete HTML receipt file
    for fname in os.listdir(emails_dir):
        if fname.startswith(prefix) and fname.endswith(".html"):
            os.remove(os.path.join(emails_dir, fname))
            print(f"[OK] Cleaned up receipt file: {fname}")
            break
            
    print("\n============================================================")
    print("  [SUCCESS] ALL E2E VERIFICATION TESTS PASSED SUCCESSFULLY!  ")
    print("============================================================")

if __name__ == "__main__":
    run_tests()
