"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var rooms_exports = {};
__export(rooms_exports, {
  rooms: () => rooms
});
module.exports = __toCommonJS(rooms_exports);
const rooms = [
  {
    id: 1,
    name: "Suite \u2014 Pyramid View & Spa Bathtub",
    description: "Our flagship suite offers breathtaking direct views of the Giza Pyramids from your private window. Featuring a luxurious spa bathtub, soundproofed walls, and premium Egyptian cotton bedding, this is the ultimate Venus Hotel experience.",
    size: "323 ft\xB2 (30 m\xB2)",
    price: 95,
    capacity: 2,
    view: "Direct Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Spa Bathtub / Hot Tub",
      "LCD Satellite TV",
      "Soundproofing",
      "Rainfall Shower",
      "Mini Bar",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Designer Toiletries",
      "Safety Deposit Box",
      "Daily Housekeeping"
    ],
    highlights: ["Direct Pyramid View", "Spa Bathtub", "Soundproofed", "Mountain View"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=450&fit=crop",
    rating: 5,
    available: true
  },
  {
    id: 2,
    name: "Twin Room \u2014 Pyramid View & Jacuzzi",
    description: "Wake up to iconic Pyramid views from your twin-bed room complete with a private Jacuzzi. Soundproofed for total tranquility, this room blends comfort with one of the world's most spectacular vistas.",
    size: "323 ft\xB2 (30 m\xB2)",
    price: 75,
    capacity: 2,
    view: "Direct Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Jacuzzi / Hot Tub",
      "LCD Satellite TV",
      "Soundproofing",
      "Rainfall Shower",
      "Mini Bar",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Designer Toiletries",
      "Safety Deposit Box",
      "Daily Housekeeping"
    ],
    highlights: ["Direct Pyramid View", "Jacuzzi", "Twin Beds", "Soundproofed"],
    image: "https://images.unsplash.com/photo-1566665556112-52968dc1acb7?w=700&h=450&fit=crop",
    rating: 4.9,
    available: true
  },
  {
    id: 3,
    name: "Twin Room \u2014 Partial Pyramid View",
    description: "A spacious twin room with a partial view of the Giza Pyramids. Fully soundproofed with all modern amenities, perfect for two travelers seeking comfort and a glimpse of ancient wonders.",
    size: "323 ft\xB2 (30 m\xB2)",
    price: 55,
    capacity: 2,
    view: "Partial Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "LCD Satellite TV",
      "Soundproofing",
      "Private Bathroom",
      "Rainfall Shower",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Designer Toiletries",
      "Daily Housekeeping"
    ],
    highlights: ["Partial Pyramid View", "Twin Beds", "Soundproofed", "City View"],
    image: "https://images.unsplash.com/photo-1591088398332-8c5ebd60f69e?w=700&h=450&fit=crop",
    rating: 4.7,
    available: true
  },
  {
    id: 4,
    name: "Family Twin Room \u2014 Pyramid View",
    description: "Our largest twin room, designed for families. Enjoy direct Pyramid views with extra space, multiple beds, and all the comforts of home. Soundproofed and fully air-conditioned.",
    size: "377 ft\xB2 (35 m\xB2)",
    price: 85,
    capacity: 4,
    view: "Direct Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "LCD Satellite TV",
      "Soundproofing",
      "Private Bathroom",
      "Rainfall Shower",
      "Mini Bar",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Extra Beds Available",
      "Daily Housekeeping"
    ],
    highlights: ["Direct Pyramid View", "Family Size", "Extra Space", "Soundproofed"],
    image: "https://images.unsplash.com/photo-1540932239986-310128078ceb?w=700&h=450&fit=crop",
    rating: 4.8,
    available: true
  },
  {
    id: 5,
    name: "Double Room \u2014 Pyramid View",
    description: "A cozy double room with a stunning direct view of the Giza Pyramids. Features a comfortable double bed, private bathroom with rainfall shower, and all essential amenities.",
    size: "280 ft\xB2 (26 m\xB2)",
    price: 60,
    capacity: 2,
    view: "Direct Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "LCD Satellite TV",
      "Soundproofing",
      "Private Bathroom",
      "Rainfall Shower",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Designer Toiletries",
      "Daily Housekeeping"
    ],
    highlights: ["Direct Pyramid View", "Double Bed", "Private Bathroom", "Soundproofed"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=450&fit=crop",
    rating: 4.7,
    available: true
  },
  {
    id: 6,
    name: "Comfort Double or Twin Room",
    description: "A well-appointed comfort room available in double or twin configuration. Soundproofed with free WiFi, quality bedding, and a private bathroom \u2014 ideal for a relaxing stay near the Pyramids.",
    size: "260 ft\xB2 (24 m\xB2)",
    price: 45,
    capacity: 2,
    view: "City / Garden View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "LCD Satellite TV",
      "Soundproofing",
      "Private Bathroom",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Bed Sheets & Towels",
      "Daily Housekeeping"
    ],
    highlights: ["Soundproofed", "Free WiFi", "Flexible Bed Config", "City View"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=450&fit=crop",
    rating: 4.5,
    available: true
  },
  {
    id: 7,
    name: "Single Room \u2014 Pyramid View",
    description: "A compact yet charming single room with a direct view of the Giza Pyramids. Perfect for solo travelers who want the iconic view without compromise.",
    size: "215 ft\xB2 (20 m\xB2)",
    price: 35,
    capacity: 1,
    view: "Direct Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "LCD Satellite TV",
      "Private Bathroom",
      "Rainfall Shower",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Daily Housekeeping"
    ],
    highlights: ["Direct Pyramid View", "Solo Traveler", "Private Bathroom", "Free WiFi"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=450&fit=crop",
    rating: 4.6,
    available: true
  },
  {
    id: 8,
    name: "Triple Room \u2014 Pyramid View",
    description: "Spacious triple room with three beds and a direct Pyramid view. Great for small groups or families, with soundproofing and all modern comforts included.",
    size: "340 ft\xB2 (32 m\xB2)",
    price: 90,
    capacity: 3,
    view: "Direct Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "LCD Satellite TV",
      "Soundproofing",
      "Private Bathroom",
      "Rainfall Shower",
      "Mini Bar",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Daily Housekeeping"
    ],
    highlights: ["Direct Pyramid View", "3 Beds", "Soundproofed", "Family Friendly"],
    image: "https://images.unsplash.com/photo-1591088398332-8c5ebd60f69e?w=700&h=450&fit=crop",
    rating: 4.7,
    available: true
  },
  {
    id: 9,
    name: "Rooftop Terrace Room",
    description: "Exclusive access to our famous rooftop terrace with 360\xB0 panoramic views of the Giza Pyramids and Cairo skyline. Watch the sunset over the Pyramids from your private terrace \u2014 a truly once-in-a-lifetime experience.",
    size: "300 ft\xB2 (28 m\xB2)",
    price: 110,
    capacity: 2,
    view: "360\xB0 Panoramic Pyramid View",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Private Rooftop Terrace",
      "LCD Satellite TV",
      "Soundproofing",
      "Spa Bathtub",
      "Mini Bar",
      "Electric Kettle",
      "Free Tea & Coffee",
      "Designer Toiletries",
      "Daily Housekeeping"
    ],
    highlights: ["Rooftop Terrace", "360\xB0 Pyramid View", "Spa Bathtub", "Sunset Views"],
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=700&h=450&fit=crop",
    rating: 5,
    available: true
  }
];
