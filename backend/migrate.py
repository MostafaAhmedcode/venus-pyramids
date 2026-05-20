import json
import database

def migrate():
    database.init_db()
    conn = database.get_db()
    cursor = conn.cursor()

    with open('data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Migrate Rooms
    cursor.execute("DELETE FROM rooms")
    for room in data.get('rooms', []):
        cursor.execute('''
            INSERT INTO rooms (
                name, description, size, price, capacity, view, 
                amenities, highlights, image, rating, available
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            room['name'],
            room['description'],
            room['size'],
            room['price'],
            room['capacity'],
            room['view'],
            json.dumps(room['amenities']),
            json.dumps(room['highlights']),
            room['image'],
            room['rating'],
            int(room['available'])
        ))

    # Migrate Tours
    cursor.execute("DELETE FROM tours")
    for tour in data.get('tours', []):
        cursor.execute('''
            INSERT INTO tours (
                title, description, location, destination, basePrice, 
                priceTiers, duration, tourType, pickupTime, rating, 
                reviews, image, highlights, includes, excludes, 
                itinerary, meetingPoint, note
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            tour['title'],
            tour['description'],
            tour['location'],
            tour['destination'],
            tour['basePrice'],
            json.dumps(tour['priceTiers']),
            tour['duration'],
            tour['tourType'],
            tour['pickupTime'],
            tour['rating'],
            tour['reviews'],
            tour['image'],
            json.dumps(tour['highlights']),
            json.dumps(tour['includes']),
            json.dumps(tour['excludes']),
            json.dumps(tour['itinerary']),
            tour['meetingPoint'],
            tour.get('note', '')
        ))

    conn.commit()
    print("Migration complete. DB populated.")

if __name__ == '__main__':
    migrate()
