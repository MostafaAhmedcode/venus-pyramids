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
var tours_exports = {};
__export(tours_exports, {
  tours: () => tours
});
module.exports = __toCommonJS(tours_exports);
const tours = [
  // ─── 1 ───────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Giza Pyramids, Saqqara & Memphis",
    description: "Visit one of the Seven Wonders of the World! Your guide takes you to the 5,000-year-old Necropolis in Giza \u2014 the Great Pyramids of Cheops, Chephren, and Mykerinus, guarded by the Great Sphinx. Then discover the Step Pyramid at Saqqara and Memphis, the first ancient capital of Egypt.",
    location: "Giza, Cairo",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Car only", price1: 35, price2: 45 },
      { label: "Car + Lunch", price1: 45, price2: 60 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 140 }
    ],
    duration: "Approx. 8 Hours",
    tourType: "Full Day",
    pickupTime: "08:00 AM",
    rating: 4.9,
    reviews: 534,
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Great Pyramids of Cheops, Chephren & Mykerinus",
      "The Great Sphinx",
      "Valley Temple of Chephren",
      "Step Pyramid of Saqqara (King Djoser)",
      "Memphis \u2014 Statue of Ramses II & Alabaster Sphinx"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "All taxes & service charges",
      "Bottled water during trip"
    ],
    excludes: ["Any extras not mentioned in the itinerary"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "08:45", activity: "Giza Plateau \u2014 Pyramids of Cheops, Chephren & Mykerinus" },
      { time: "10:30", activity: "The Great Sphinx & Valley Temple of Chephren" },
      { time: "12:00", activity: "Lunch at a local restaurant (if included)" },
      { time: "13:30", activity: "Step Pyramid of Saqqara \u2014 world's oldest stone structure" },
      { time: "15:30", activity: "Memphis \u2014 Statue of Ramses II & Alabaster Sphinx" },
      { time: "17:00", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 2 ───────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Giza Pyramids, Sphinx & Egyptian Museum",
    description: "Stand at the foot of the Great Pyramids built for Cheops, Chefren and Mycerinus, guarded by the Great Sphinx. Then admire over 250,000 artifacts from Ancient Egypt in the Egyptian Museum \u2014 including the legendary Tutankhamun treasures, gold and jewelry sealed in his tomb for 3,500 years.",
    location: "Giza & Cairo",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Car only", price1: 35, price2: 45 },
      { label: "Car + Lunch", price1: 45, price2: 60 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 140 }
    ],
    duration: "Approx. 8 Hours",
    tourType: "Full Day",
    pickupTime: "08:00 AM",
    rating: 4.9,
    reviews: 487,
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Pyramids of Cheops, Chefren & Mycerinus",
      "The Great Sphinx & Ra Tomb",
      "Valley Temple of Chefren",
      "Egyptian Museum \u2014 250,000+ artifacts",
      "Tutankhamun's golden treasures"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All taxes & service charges"
    ],
    excludes: ["Any extras not mentioned in the itinerary"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "08:45", activity: "Giza Plateau \u2014 Pyramids of Cheops, Chefren & Mycerinus" },
      { time: "10:30", activity: "The Great Sphinx, Ra Tomb & Valley Temple" },
      { time: "12:00", activity: "Lunch at a local restaurant (if included)" },
      { time: "13:30", activity: "Egyptian Museum \u2014 Pharaonic artifacts & Tutankhamun collection" },
      { time: "16:00", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 3 ───────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Saqqara, Memphis & Dahshur",
    description: "Visit the Step Pyramid at Saqqara \u2014 the world's oldest major stone structure \u2014 then Dahshur to enter the Red Pyramid (oldest true pyramid in history) and see the Bent Pyramid. Finish at Memphis, the first capital of Egypt, to see the Statue of Ramses II and the Alabaster Sphinx.",
    location: "Giza & Cairo",
    destination: "Cairo & Giza",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 140 }
    ],
    duration: "Approx. 8 Hours",
    tourType: "Full Day",
    pickupTime: "08:00 AM",
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Step Pyramid of King Djoser (3rd Dynasty)",
      "Red Pyramid \u2014 oldest true pyramid in history",
      "Bent Pyramid \u2014 best preserved pyramid",
      "Memphis \u2014 Statue of Ramses II",
      "Alabaster Sphinx of Memphis"
    ],
    includes: [
      "Hotel pickup & return",
      "Private modern air-conditioned vehicle",
      "Lunch at a local restaurant",
      "Bottled water during trip",
      "Shopping tours in Cairo",
      "All taxes & service charges"
    ],
    excludes: ["Any extras not mentioned in the itinerary"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:00", activity: "Saqqara \u2014 Step Pyramid of King Djoser" },
      { time: "11:00", activity: "Dahshur \u2014 Red Pyramid (enter inside) & Bent Pyramid" },
      { time: "13:00", activity: "Lunch at a local restaurant" },
      { time: "14:30", activity: "Memphis \u2014 Statue of Ramses II & Alabaster Sphinx" },
      { time: "16:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 4 ───────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Desert Safari by Quad Bike at Giza Pyramids",
    description: "Experience the wonders of the ancient world through Quad Biking at Giza Pyramids \u2014 the only place in Egypt where you can ride through the desert with a panoramic view of the Pyramids of Cheops, Chephren, and Mykerinus. A truly unique adventure.",
    location: "Giza Desert, Cairo",
    destination: "Cairo & Giza",
    basePrice: 30,
    priceTiers: [
      { label: "1 Hour Quad Bike", price1: 30, price2: 60 },
      { label: "2 Hour Quad Bike", price1: 40, price2: 80 }
    ],
    duration: "Approx. 4 Hours",
    tourType: "Half Day",
    pickupTime: "From 08:00 AM",
    rating: 4.8,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Quad biking in the Sahara Desert",
      "Panoramic views of all 3 Giza Pyramids",
      "Desert adventure experience",
      "Camel photo stop"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Quad bike (1 or 2 hours)",
      "All service charges & taxes"
    ],
    excludes: [
      "Egyptologist guide (not included)",
      "Entrance fees to pyramid sites",
      "Bottled water",
      "Any extras not mentioned"
    ],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:00", activity: "Arrive at Giza desert \u2014 safety briefing" },
      { time: "09:30", activity: "Quad bike ride through the desert with Pyramid views" },
      { time: "11:00", activity: "Camel photo stop & panoramic Pyramid views" },
      { time: "12:00", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 5 ───────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Egyptian Museum, Khan El Khalili & Old Cairo",
    description: "Enjoy Cairo's greatest cultural highlights in one day: the Egyptian Museum with 5,000 years of art, the vibrant Khan El Khalili bazaar in Islamic Cairo, and the ancient Coptic churches of Old Cairo including the Hanging Church and Church of Abu Serga.",
    location: "Cairo",
    destination: "Cairo & Giza",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 8 Hours",
    tourType: "Full Day",
    pickupTime: "From 08:00 AM",
    rating: 4.8,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Egyptian Museum \u2014 250,000+ artifacts",
      "Khan El Khalili \u2014 Cairo's famous bazaar",
      "Hanging Church of Old Cairo",
      "Church of St. Barbara & Church of Abu Serga",
      "Islamic Cairo exploration"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "08:45", activity: "Egyptian Museum \u2014 Pharaonic artifacts & Tutankhamun collection" },
      { time: "12:00", activity: "Lunch at a local restaurant" },
      { time: "13:30", activity: "Islamic Cairo \u2014 Khan El Khalili bazaar" },
      { time: "15:30", activity: "Coptic Cairo \u2014 Hanging Church, Church of St. Barbara & Abu Serga" },
      { time: "17:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 6 ───────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Museum, Citadel & Old Cairo",
    description: "Admire artifacts from Ancient Egypt in the Egyptian Museum, then visit the Salah El Din Citadel (1183 AD) and the stunning Mohamed Ali Alabaster Mosque inside. Tour Old Cairo's historic Coptic churches, the Ben Ezra Synagogue, and the ancient Roman fort.",
    location: "Cairo",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Car only", price1: 35, price2: 45 },
      { label: "Car + Lunch", price1: 45, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 8 Hours",
    tourType: "Full Day",
    pickupTime: "08:00 AM",
    rating: 4.8,
    reviews: 378,
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Egyptian Museum \u2014 Tutankhamun treasures",
      "Citadel of Salah El Din (1183 AD)",
      "Mohamed Ali Alabaster Mosque",
      "Hanging Church & Ben Ezra Synagogue",
      "Church of St. Barbara & Abu Serga"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Lunch at a local restaurant",
      "Bottled mineral water",
      "All taxes & service charges"
    ],
    excludes: ["Any extras not mentioned in the itinerary"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "08:45", activity: "Egyptian Museum \u2014 5,000 years of art & Tutankhamun collection" },
      { time: "11:30", activity: "Citadel of Salah El Din & Mohamed Ali Mosque" },
      { time: "13:00", activity: "Lunch at a local restaurant" },
      { time: "14:30", activity: "Islamic Cairo exploration" },
      { time: "15:30", activity: "Coptic Cairo \u2014 Hanging Church, Ben Ezra Synagogue, Abu Serga" },
      { time: "17:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 7 ───────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Nile Pharaoh Dinner Cruise Cairo",
    description: "Board the famous Nile Pharaoh cruise \u2014 a 5-star pharaonic barge tribute to the goddess Hathor. Enjoy panoramic Cairo skyline views, a sumptuous international buffet dinner, live belly dance, and the mesmerizing Tanura Sufi whirling dervish show.",
    location: "Cairo, Nile River",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Car + Ticket", price1: 35, price2: 60 }
    ],
    duration: "Approx. 3 Hours",
    tourType: "Half Day",
    pickupTime: "7:00 PM",
    rating: 4.7,
    reviews: 356,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&q=85",
    highlights: [
      "5-star Nile Pharaoh cruise boat",
      "International buffet dinner",
      "Live belly dance performance",
      "Tanura Sufi whirling dervish show",
      "Panoramic Cairo skyline at night"
    ],
    includes: [
      "Hotel pickup & return (Cairo or Giza)",
      "Professional tour leader",
      "Boat fees & tickets",
      "Bottled water during trip"
    ],
    excludes: [
      "All service charges and taxes",
      "Personal spending extras"
    ],
    itinerary: [
      { time: "19:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "19:30", activity: "Arrive at Nile Pharaoh cruise dock" },
      { time: "20:00", activity: "Embark \u2014 welcome drinks & Cairo skyline views" },
      { time: "20:30", activity: "International buffet dinner served" },
      { time: "21:30", activity: "Live belly dance & Tanura whirling dervish show" },
      { time: "22:30", activity: "Disembark & return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 8 ───────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Islamic Cairo: Architectural Heritage in Bab El Wazir",
    description: "Step back in time along El Darb El Ahmar \u2014 a street frozen since the Middle Ages, packed with mosques, palaces, mausoleums, and ancient Cairo walls. Explore by golf cart, visit Bab Zuweila gate, the Blue Mosque, and enjoy lunch in the magnificent El Azhar Park with its 1,000-minaret view.",
    location: "Islamic Cairo",
    destination: "Cairo & Giza",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 6 Hours",
    tourType: "Half Day",
    pickupTime: "From 08:00 AM",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Bab Zuweila \u2014 Cairo's southern gate (1092 AD)",
      "El Saleh Tala'i Mosque (1160 AD)",
      "Aqsunqur Mosque \u2014 Cairo Blue Mosque (1347 AD)",
      "Bayt Al-Razziz Palace (15th\u201318th century)",
      "El Azhar Park \u2014 panoramic 1,000-minaret view",
      "Golf cart tour through medieval streets"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Golf cart through Islamic Cairo",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:00", activity: "El Azhar Park \u2014 golf cart boarding" },
      { time: "09:30", activity: "Bab Zuweila gate (1092 AD) & El Saleh Tala'i Mosque" },
      { time: "10:30", activity: "Qijmas Ishaqi Mosque & Ahmed El Mehmendar Mosque" },
      { time: "11:30", activity: "Aqsunqur Blue Mosque & Bayt Al-Razziz Palace" },
      { time: "12:30", activity: "Video show at El Azhar Park showroom" },
      { time: "13:00", activity: "Lunch at El Azhar Park restaurant" },
      { time: "14:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 9 ───────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Al Tannoura Egyptian Heritage Dance Show",
    description: "Experience the most amazing Egyptian folk musical night at Wekalet El Ghoury (built 1504 AD). Watch the El Tanoura Troupe \u2014 performers in 30+ countries \u2014 with folkloric music, the spectacular Tanoura spinning dance, and the spiritual Whirling Dervish finale.",
    location: "Islamic Cairo",
    destination: "Cairo & Giza",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 3 Hours",
    tourType: "Half Day",
    pickupTime: "From 06:00 PM",
    rating: 4.9,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Wekalet El Ghoury arts center (1504 AD)",
      "Egyptian folkloric music performance",
      "Tanoura spinning dance show",
      "Whirling Dervish (Darawish) spiritual finale"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "18:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "18:15", activity: "Arrive Wekalet El Ghoury \u2014 doors open" },
      { time: "19:30", activity: "Show begins \u2014 Egyptian folkloric music" },
      { time: "20:00", activity: "Tanoura spinning dance performance" },
      { time: "20:45", activity: "Whirling Dervish (Darawish) spiritual finale" },
      { time: "21:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign",
    note: "Entrance at 18:15 \u2014 show starts at 19:30"
  },
  // ─── 10 ──────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Alexandria City Day Trip",
    description: "Enjoy a full day in Alexandria \u2014 Egypt's Mediterranean jewel. Visit the rock-cut Roman Catacombs, Pompey's Pillar, the legendary Citadel of Qaitbay built on the site of the ancient Lighthouse, and the modern Bibliotheca Alexandrina. Enjoy fresh seafood lunch by the sea.",
    location: "Alexandria",
    destination: "Alexandria",
    basePrice: 75,
    priceTiers: [
      { label: "Car only", price1: 75, price2: 100 },
      { label: "Car + Lunch", price1: 90, price2: 120 },
      { label: "Car + Lunch + Guide", price1: 140, price2: 220 }
    ],
    duration: "Approx. 12 Hours",
    tourType: "Full Day",
    pickupTime: "From 08:00 AM",
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1500595046891-b23dfb9ee8b7?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Pompey's Pillar (Emperor Diocletian, 4th century)",
      "Catacombs of Kom El-Shoqafa \u2014 largest Roman cemetery",
      "Citadel of Qaitbay \u2014 site of ancient Lighthouse",
      "Bibliotheca Alexandrina",
      "Fresh seafood lunch by the Mediterranean"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "10:00", activity: "Arrive Alexandria \u2014 Pompey's Pillar" },
      { time: "11:00", activity: "Catacombs of Kom El-Shoqafa (3 levels)" },
      { time: "12:30", activity: "Seafood lunch at a Mediterranean restaurant" },
      { time: "14:00", activity: "Citadel of Qaitbay" },
      { time: "15:30", activity: "Bibliotheca Alexandrina" },
      { time: "16:30", activity: "Depart for Cairo" },
      { time: "19:00", activity: "Return to Cairo hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 11 ──────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Day Tour to El Fayoum Oasis",
    description: "Escape Cairo for the magical Fayoum Oasis. Visit Wadi Hitan (Valley of the Whales) \u2014 a UNESCO World Heritage Site with 40-million-year-old whale skeletons \u2014 then Mudawara Mountain and the stunning Wadi El Rayan Waterfalls, Egypt's only natural waterfalls.",
    location: "Fayoum Oasis",
    destination: "Fayoum",
    basePrice: 160,
    priceTiers: [
      { label: "Car + Sand Skiing + Lunch + Ticket", price1: 160, price2: 220 }
    ],
    duration: "1 Day",
    tourType: "Full Day",
    pickupTime: "From 08:00 AM",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Wadi Hitan \u2014 UNESCO World Heritage Site",
      "40-million-year-old whale skeletons",
      "Mudawara Mountain",
      "Wadi El Rayan Waterfalls \u2014 Egypt's only waterfalls",
      "Sand skiing experience"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle (2 cars, 4x4)",
      "Sand skiing",
      "Lunch at a good quality restaurant",
      "Entrance tickets",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "10:30", activity: "Arrive Fayoum \u2014 head to Wadi El Rayan Protected Area" },
      { time: "11:00", activity: "Wadi Hitan (Valley of the Whales) \u2014 UNESCO site" },
      { time: "12:30", activity: "Mudawara Mountain visit" },
      { time: "13:30", activity: "Wadi El Rayan Waterfalls & sand skiing" },
      { time: "15:00", activity: "Late lunch at a local restaurant" },
      { time: "17:00", activity: "Return transfer to Cairo hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 12 ──────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: "White Desert & Bahariya Oasis (2 Days)",
    description: "A breathtaking 2-day adventure into Egypt's Western Desert. Visit the Black Desert, Crystal Mountain, Valley of Agabat, and camp overnight in the White Desert National Park \u2014 home to the world's most extraordinary wind-carved rock formations shaped like giant mushrooms.",
    location: "Western Desert",
    destination: "White Desert",
    basePrice: 160,
    priceTiers: [
      { label: "Car + Lunch + Dinner + Camp + Ticket", price1: 160, price2: 260 }
    ],
    duration: "2 Days / 1 Night",
    tourType: "Multi-Day",
    pickupTime: "From 05:00 AM",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=500&fit=crop&q=85",
    highlights: [
      "White Desert National Park \u2014 unique rock formations",
      "Black Desert & Crystal Mountain",
      "Valley of Agabat",
      "Bahariya Oasis \u2014 Golden Mummy showroom",
      "Nobles' Tombs (26th Dynasty)",
      "Desert camping under the stars"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Private 4x4 vehicle for desert",
      "1 night desert camping accommodation",
      "1 Breakfast, 2 Lunches, 1 Dinner",
      "Bottled water during trip",
      "Desert expert guide",
      "Entrance fees to historical sites",
      "All taxes & service charges"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "Day 1 \u2014 05:00", activity: "Hotel pickup \u2014 drive to Bahariya Oasis (~4 hours)" },
      { time: "Day 1 \u2014 10:00", activity: "Arrive Bahariya \u2014 lunch at oasis" },
      { time: "Day 1 \u2014 12:00", activity: "Black Desert & natural hot spring of El Haize" },
      { time: "Day 1 \u2014 14:00", activity: "Crystal Mountain & Valley of Agabat" },
      { time: "Day 1 \u2014 17:00", activity: "White Desert National Park \u2014 sunset & camp setup" },
      { time: "Day 1 \u2014 20:00", activity: "Dinner under the stars in the White Desert" },
      { time: "Day 2 \u2014 07:00", activity: "Breakfast at campsite" },
      { time: "Day 2 \u2014 09:00", activity: "Bahariya Oasis \u2014 Golden Mummy showroom & Nobles' Tombs" },
      { time: "Day 2 \u2014 11:00", activity: "Black Mountain climb" },
      { time: "Day 2 \u2014 13:00", activity: "Lunch at Bahariya Oasis" },
      { time: "Day 2 \u2014 14:00", activity: "Drive back to Cairo hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 13 ──────────────────────────────────────────────────────────────────
  {
    id: 13,
    title: "El Minya Day Tour from Cairo",
    description: "Escape the tourist crowds and discover Tell Al Amarna \u2014 the capital city founded by the revolutionary Pharaoh Akhenaton. Drive south along the Nile to El Minya, then cross by motorboat to explore Beni Hassan's remarkable tombs from the Old and Middle Kingdoms.",
    location: "El Minya",
    destination: "El Minya",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 10 Hours",
    tourType: "Full Day",
    pickupTime: "From 06:00 AM",
    rating: 4.7,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Tell Al Amarna \u2014 capital of Pharaoh Akhenaton",
      "Motorboat crossing to Amarna",
      "Beni Hassan tombs (Old & Middle Kingdom)",
      "Off-the-beaten-track ancient sites"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "All service charges & taxes"
    ],
    excludes: [
      "Bottled water",
      "Any extras not mentioned in the program"
    ],
    itinerary: [
      { time: "06:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "10:00", activity: "Arrive El Minya" },
      { time: "10:30", activity: "Motorboat to Tell Al Amarna \u2014 capital of Akhenaton" },
      { time: "13:00", activity: "Lunch break" },
      { time: "14:30", activity: "Beni Hassan \u2014 tombs from Old & Middle Kingdom" },
      { time: "16:30", activity: "Return drive to Cairo hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 14 ──────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: "Day Trip to Luxor from Cairo by Air",
    description: "Discover the greatness of the ancient Pharaohs in one incredible day. Fly from Cairo to Luxor, visit the legendary Karnak Temple dedicated to God Amon, descend into the Valley of the Kings, and explore the Temple of Queen Hatshepsut \u2014 the only woman who reigned as Pharaoh.",
    location: "Luxor",
    destination: "Luxor",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 12 Hours",
    tourType: "Full Day",
    pickupTime: "From 08:00 AM",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Karnak Temple \u2014 greatest temple in history",
      "Valley of the Kings \u2014 royal tombs",
      "Temple of Queen Hatshepsut",
      "Colossi of Memnon"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: [
      "Flights Cairo\u2013Luxor\u2013Cairo (arranged separately)",
      "Any extras not mentioned in the program"
    ],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup \u2014 transfer to Cairo Airport" },
      { time: "10:00", activity: "Arrive Luxor Airport \u2014 met by representative" },
      { time: "10:30", activity: "Karnak Temple \u2014 hypostyle hall & obelisks" },
      { time: "13:00", activity: "Lunch at a local restaurant" },
      { time: "14:30", activity: "Valley of the Kings \u2014 royal tombs" },
      { time: "16:00", activity: "Temple of Queen Hatshepsut" },
      { time: "17:30", activity: "Transfer to Luxor Airport" },
      { time: "22:00", activity: "Flight back to Cairo" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign",
    note: "Tour ends ~4:00 PM. Free hotel room provided before evening flight."
  },
  // ─── 15 ──────────────────────────────────────────────────────────────────
  {
    id: 15,
    title: "Hurghada Bedouin Desert Safari by Jeep 4x4",
    description: "Discover Hurghada's Eastern Desert with the Bedouin people. Drive 35 km by Jeep 4x4 through the mountains to a Bedouin village, ride camels, drive quad bikes, witness a stunning desert sunset, and enjoy a barbeque dinner under the stars.",
    location: "Hurghada",
    destination: "Hurghada",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 7 Hours",
    tourType: "Full Day",
    pickupTime: "From 11:00 AM",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Jeep 4x4 desert adventure (35 km)",
      "Bedouin village \u2014 culture & traditions",
      "Camel ride in the desert",
      "Quad bike around Bedouin village",
      "Sunset views & barbeque dinner",
      "Stargazing on the drive back"
    ],
    includes: [
      "Hotel pickup & return (Hurghada or El Gouna)",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "All service charges & taxes"
    ],
    excludes: [
      "Bottled water",
      "Any extras not mentioned in the program"
    ],
    itinerary: [
      { time: "11:00", activity: "Hotel pickup by Jeep 4x4" },
      { time: "12:00", activity: "Drive 35 km into Eastern Desert mountains" },
      { time: "13:00", activity: "Arrive Bedouin village \u2014 cultural tour" },
      { time: "14:00", activity: "Camel ride & quad bike experience" },
      { time: "17:00", activity: "Desert sunset photography" },
      { time: "18:00", activity: "Barbeque dinner with mineral water & soft drinks" },
      { time: "19:00", activity: "Stargazing drive back to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 16 ──────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "Kalabsha Temple & Nubian Museum \u2014 Aswan",
    description: "Visit the Temple of Kalabsha \u2014 originally built by Tuthmosis II and restored during the Roman conquest, now re-erected near the High Dam. Then explore the Nubian Museum (opened 1997), displaying thousands of artifacts that would have been lost under Lake Nasser, with life-size Nubian cultural displays.",
    location: "Aswan",
    destination: "Aswan",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 6 Hours",
    tourType: "Half Day",
    pickupTime: "From 08:00 AM",
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1568050467196-35e5f0db3c45?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Kalabsha Temple (Tuthmosis II, Roman era)",
      "Nubian Museum \u2014 opened 1997",
      "Thousands of rescued Nubian artifacts",
      "Life-size Nubian cultural displays"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:00", activity: "Kalabsha Temple \u2014 near the High Dam (Western Bank)" },
      { time: "11:00", activity: "Nubian Museum \u2014 artifacts & cultural displays" },
      { time: "13:00", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 17 ──────────────────────────────────────────────────────────────────
  {
    id: 17,
    title: "Oberoi Philae Nile Cruise (5 Days Luxor\u2013Aswan)",
    description: "Cruise the Nile in ultimate luxury aboard the Oberoi Philae \u2014 a 5-star floating palace between Luxor and Aswan. Visit Karnak Temple, Valley of the Kings, Edfu, Kom Ombo, Philae Temple, and the High Dam, with all meals, entertainment, spa, pool, and Egyptologist guides included.",
    location: "Luxor to Aswan",
    destination: "Luxor",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "5 Days / 4 Nights",
    tourType: "Multi-Day",
    pickupTime: "Departs Every Sunday",
    rating: 4.9,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Karnak Temple & Luxor Temple",
      "Valley of the Kings & Hatshepsut Temple",
      "Temple of Edfu \u2014 best preserved in Egypt",
      "Twin Temple of Kom Ombo",
      "Philae Temple & Aswan High Dam",
      "Nubian Museum",
      "5-star luxury cabins with pool & spa"
    ],
    includes: [
      "Meet & assist on arrival & departure",
      "All transfers by modern A/C vehicle",
      "Full board accommodation on Oberoi Philae",
      "All Nile Cruise excursions as listed",
      "Entrance fees between Luxor and Aswan",
      "English-speaking Egyptologist guide",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "Day 1", activity: "Arrive Luxor \u2014 embark Oberoi Philae. Lunch, Karnak Temple & Luxor Temple. Dinner aboard." },
      { time: "Day 2", activity: "Valley of the Kings (King Tut's tomb, Ramesses VI), Hatshepsut Temple, Colossi of Memnon. Sail to Esna." },
      { time: "Day 3", activity: "Temple of Edfu (best preserved in Egypt). Sail to Kom Ombo. Twin Temple of Kom Ombo." },
      { time: "Day 4", activity: "Sail to Aswan. Aswan High Dam, Philae Temple, Nubian Museum." },
      { time: "Day 5", activity: "Breakfast & disembarkation." }
    ],
    meetingPoint: "Luxor Airport \u2014 met by representative",
    note: "Cruise departs every Sunday. 22 elegantly appointed cabins & luxury suites."
  },
  // ─── 18 ──────────────────────────────────────────────────────────────────
  {
    id: 18,
    title: "Cairo Tower Visit",
    description: "Visit the iconic Cairo Tower \u2014 187 meters high, taller than the Great Pyramid by 50 meters, built on Aswan granite. Ride the elevator to the top in 45 seconds for a full panorama of Cairo, the Pyramids, the Nile, and the Citadel of Salah El Din. Features a caf\xE9, observation deck, and revolving restaurant.",
    location: "Cairo",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Ticket + Tour Leader", price1: 35, price2: 60 }
    ],
    duration: "Approx. 3 Hours",
    tourType: "Half Day",
    pickupTime: "9:00 AM",
    rating: 4.6,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=500&fit=crop&q=85",
    highlights: [
      "187m high \u2014 taller than the Great Pyramid",
      "Panoramic view of Cairo, Pyramids & Nile",
      "Revolving restaurant at the top",
      "Telescope for close-up views",
      "16 floors, 45-second elevator ride"
    ],
    includes: [
      "Professional tour leader",
      "Tickets",
      "Bottled water during trip"
    ],
    excludes: [
      "Hotel pickup & return",
      "All service charges & taxes",
      "Personal spending extras"
    ],
    itinerary: [
      { time: "09:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:30", activity: "Arrive Cairo Tower \u2014 ticket collection" },
      { time: "09:45", activity: "Elevator to top floor \u2014 panoramic views" },
      { time: "10:30", activity: "Revolving restaurant & observation deck" },
      { time: "11:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 19 ──────────────────────────────────────────────────────────────────
  {
    id: 19,
    title: "Dendera & Abydos Temples \u2014 Luxor",
    description: "Drive north from Luxor to see two of the most complete and best-preserved temples in Egypt. Abydos Temple (built by King Seti I, completed by Ramesses II) has the most beautifully preserved paintings in Egypt. Then visit the Temple of Hathor at Dendera \u2014 goddess of love and joy \u2014 with full color still visible on its walls.",
    location: "Luxor",
    destination: "Luxor",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 10 Hours",
    tourType: "Full Day",
    pickupTime: "From 08:00 AM",
    rating: 4.8,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Abydos Temple of Seti I \u2014 most beautiful paintings in Egypt",
      "Osiris Temple at Abydos",
      "Temple of Hathor at Dendera",
      "Full-color ancient wall paintings"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "10:30", activity: "Abydos \u2014 Temple of Seti I & Osiris Temple" },
      { time: "13:00", activity: "Lunch break" },
      { time: "14:30", activity: "Dendera \u2014 Temple of Hathor" },
      { time: "17:00", activity: "Return transfer to Luxor hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 20 ──────────────────────────────────────────────────────────────────
  {
    id: 20,
    title: "East & West Bank of the Nile \u2014 Luxor Full Day",
    description: "See all of Luxor's greatest sites in one day. On the West Bank: Valley of the Kings (tombs of Tutankhamun, Ramesses VI, Amenhotep II), Temple of Hatshepsut, and Colossi of Memnon. On the East Bank: the magnificent Karnak Temple and Luxor Temple built by Amenhotep III.",
    location: "Luxor",
    destination: "Luxor",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 8 Hours",
    tourType: "Full Day",
    pickupTime: "From 08:00 AM",
    rating: 4.9,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1518246781798-4e52cbb94f85?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Valley of the Kings \u2014 tombs of Tutankhamun & Ramesses VI",
      "Temple of Queen Hatshepsut",
      "Colossi of Memnon",
      "Karnak Temple \u2014 greatest temple in history",
      "Luxor Temple (Amenhotep III & Ramesses II)"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Any extras not mentioned in the program"],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "08:30", activity: "West Bank \u2014 Valley of the Kings (3 tombs)" },
      { time: "10:30", activity: "Temple of Queen Hatshepsut (Deir el-Bahari)" },
      { time: "11:30", activity: "Colossi of Memnon photo stop" },
      { time: "12:30", activity: "Lunch at a local restaurant" },
      { time: "14:00", activity: "East Bank \u2014 Karnak Temple complex" },
      { time: "16:00", activity: "Luxor Temple & Avenue of Sphinxes" },
      { time: "17:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 21 ──────────────────────────────────────────────────────────────────
  {
    id: 21,
    title: "St. Simeon Monastery \u2014 Aswan",
    description: "Visit the ancient St. Simeon Monastery (originally Anba Hatre Monastery), located opposite the southern tip of Elephantine Island in Aswan. Dating back to the 6th century, its principal church was built in the 10th\u201311th century and is the oldest of its kind in Egypt.",
    location: "Aswan",
    destination: "Aswan",
    basePrice: 40,
    priceTiers: [
      { label: "Car only", price1: 40, price2: 45 },
      { label: "Car + Lunch", price1: 50, price2: 65 },
      { label: "Car + Lunch + Guide", price1: 95, price2: 160 }
    ],
    duration: "Approx. 3 Hours",
    tourType: "Half Day",
    pickupTime: "From 08:00 AM",
    rating: 4.6,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1568050467196-35e5f0db3c45?w=800&h=500&fit=crop&q=85",
    highlights: [
      "St. Simeon Monastery (6th century)",
      "Oldest church of its kind in Egypt",
      "Opposite Elephantine Island",
      "Ancient Coptic architecture"
    ],
    includes: [
      "Hotel pickup & return",
      "Private air-conditioned vehicle",
      "Entrance fees to all sites",
      "All service charges & taxes"
    ],
    excludes: [
      "Bottled water",
      "Any extras not mentioned in the program"
    ],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:00", activity: "St. Simeon Monastery \u2014 guided tour" },
      { time: "11:00", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 22 ──────────────────────────────────────────────────────────────────
  {
    id: 22,
    title: "Nile Felucca Sail",
    description: "Sail the Nile on a traditional Egyptian felucca \u2014 the same wooden boats used since the time of the Pharaohs. A peaceful, timeless experience on the world's greatest river, with gentle breezes and beautiful riverside scenery.",
    location: "Cairo / Aswan",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Boat + Tour Leader + Water", price1: 35, price2: 60 }
    ],
    duration: "Approx. 2 Hours",
    tourType: "Half Day",
    pickupTime: "Afternoon to 8:00 PM",
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Traditional Egyptian felucca boat",
      "Nile sailing since Pharaonic times",
      "Peaceful riverside scenery",
      "Sunset sailing option"
    ],
    includes: [
      "Hotel pickup & return (Cairo or Giza)",
      "Professional tour leader",
      "Boat fees & tickets",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Personal spending extras"],
    itinerary: [
      { time: "Afternoon", activity: "Hotel pickup in private A/C vehicle" },
      { time: "+30 min", activity: "Arrive felucca dock \u2014 board traditional boat" },
      { time: "+1 hour", activity: "Sail the Nile \u2014 enjoy scenery & breeze" },
      { time: "+2 hours", activity: "Return to dock & transfer back to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 23 ──────────────────────────────────────────────────────────────────
  {
    id: 23,
    title: "National Museum of Egyptian Civilization",
    description: "Visit the world's first museum to exhibit a comprehensive view of Egyptian civilization from prehistory to modern history. See the oldest prosthetic toe in the world, a 30,000-year-old human skeleton, the last Kaaba Cover made in Egypt, and the Mahmal ceremonial carriage.",
    location: "Cairo",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Car + Guide + Ticket + Water", price1: 35, price2: 60 }
    ],
    duration: "Approx. 4 Hours",
    tourType: "Half Day",
    pickupTime: "9:00 AM",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1577720643272-265d434b0de5?w=800&h=500&fit=crop&q=85",
    highlights: [
      "World's oldest prosthetic toe",
      "30,000-year-old human skeleton",
      "Last Kaaba Cover (Kiswaa) made in Egypt",
      "Mahmal ceremonial carriage",
      "4 main crafts of Egyptian civilization"
    ],
    includes: [
      "Hotel pickup & return (Cairo or Giza)",
      "Professional tour guide",
      "Tickets",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Personal spending extras"],
    itinerary: [
      { time: "09:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:45", activity: "Arrive National Museum of Egyptian Civilization" },
      { time: "10:00", activity: "Main Exhibition Hall \u2014 pottery, wood, textile & ornaments" },
      { time: "11:00", activity: "Special exhibits \u2014 prosthetic toe, skeleton, Kaaba Cover" },
      { time: "12:30", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 24 ──────────────────────────────────────────────────────────────────
  {
    id: 24,
    title: "The Grand Egyptian Museum (GEM)",
    description: "Tour the largest archaeological museum in the world \u2014 home to the complete Tutankhamun collection and over 100,000 ancient artifacts, many displayed for the first time. See the Hanging Obelisk, King Ramses II statue, 10 statues of King Senusert, and the Grand Staircase.",
    location: "Giza, Cairo",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "Car + Guide + Ticket + Water", price1: 35, price2: 60 }
    ],
    duration: "Approx. 4 Hours",
    tourType: "Half Day",
    pickupTime: "9:00 AM",
    rating: 4.9,
    reviews: 356,
    image: "https://images.unsplash.com/photo-1577720643272-265d434b0de5?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Complete Tutankhamun collection",
      "Hanging Obelisk & King Ramses II statue",
      "10 statues of King Senusert",
      "Grand Staircase & Grand Atrium",
      "Ptolemaic king & queen statues",
      "Victory column of King Merenptah"
    ],
    includes: [
      "Hotel pickup & return (Cairo or Giza)",
      "Professional tour guide",
      "Tickets",
      "Bottled water during trip",
      "All service charges & taxes"
    ],
    excludes: ["Personal spending extras"],
    itinerary: [
      { time: "09:00", activity: "Hotel pickup in private A/C vehicle" },
      { time: "09:45", activity: "Arrive Grand Egyptian Museum" },
      { time: "10:00", activity: "Tutankhamun collection \u2014 complete treasures" },
      { time: "11:00", activity: "Ramses II statue, Grand Staircase & Hanging Obelisk" },
      { time: "12:00", activity: "Ptolemaic galleries & Victory column" },
      { time: "13:00", activity: "Return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 25 ──────────────────────────────────────────────────────────────────
  {
    id: 25,
    title: "Tok-Tok of Giza",
    description: "Experience Egyptian life from its roots on a fun Tok-Tok (tuk-tuk) ride through Giza. Visit local neighborhoods, old Egyptian houses, take souvenir photos, stop at the supermarket for snacks and drinks \u2014 a genuine, off-the-tourist-track experience with local music and a friendly guide.",
    location: "Giza",
    destination: "Cairo & Giza",
    basePrice: 15,
    priceTiers: [
      { label: "Tok-Tok ride", price1: 15, price2: 20 }
    ],
    duration: "Approx. 2 Hours",
    tourType: "Half Day",
    pickupTime: "Flexible",
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Tok-Tok (tuk-tuk) ride through Giza",
      "Local Egyptian neighborhoods",
      "Old Egyptian houses & photo stops",
      "Local supermarket visit",
      "Authentic Egyptian street life"
    ],
    includes: [
      "Local songs & music",
      "Professional guide",
      "Bottled water during trip"
    ],
    excludes: ["Personal spending extras"],
    itinerary: [
      { time: "Flexible", activity: "Driver picks you up from hotel by Tok-Tok" },
      { time: "+15 min", activity: "Tour through local Giza neighborhoods" },
      { time: "+45 min", activity: "Old Egyptian houses \u2014 photo stops" },
      { time: "+1 hour", activity: "Local supermarket visit" },
      { time: "+2 hours", activity: "Return to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 Tok-Tok driver waiting"
  },
  // ─── 26 ──────────────────────────────────────────────────────────────────
  {
    id: 26,
    title: "Relaxation Day \u2014 Spa & Massage",
    description: "After a long journey, treat yourself to a professional relaxation session at our hotel spa. Our certified physiotherapists specialize in muscle therapy and offer various massage treatments in air-conditioned private rooms to bring you to complete comfort.",
    location: "Venus Hotel, Giza",
    destination: "Cairo & Giza",
    basePrice: 35,
    priceTiers: [
      { label: "45-min back massage", price1: 35, price2: 35 }
    ],
    duration: "45 Minutes",
    tourType: "Half Day",
    pickupTime: "Flexible",
    rating: 4.9,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Professional certified physiotherapist",
      "Various massage session types",
      "Air-conditioned private rooms",
      "Muscle therapy & relaxation"
    ],
    includes: [
      "Different types of massage sessions",
      "Air-conditioned private room",
      "Private physiotherapist"
    ],
    excludes: ["Personal spending extras"],
    itinerary: [
      { time: "Flexible", activity: "Check in at hotel spa reception" },
      { time: "+10 min", activity: "Consultation with physiotherapist" },
      { time: "+15 min", activity: "45-minute back massage session" },
      { time: "+60 min", activity: "Relaxation & recovery time" }
    ],
    meetingPoint: "Hotel spa \u2014 ground floor"
  },
  // ─── 27 ──────────────────────────────────────────────────────────────────
  {
    id: 27,
    title: "Red Sea \u2014 El Ain El Sokhna Beach Day",
    description: "Escape the city for a relaxing day at El Ain El Sokhna on the Red Sea \u2014 just 100 km from Cairo. Swim in crystal-clear waters, sunbathe on the beach, and enjoy a full day use at a hotel with lunch included. The perfect recharge day between sightseeing.",
    location: "El Ain El Sokhna, Red Sea",
    destination: "Red Sea",
    basePrice: 140,
    priceTiers: [
      { label: "Car + Lunch + Beach Access", price1: 140, price2: 200 }
    ],
    duration: "1 Day",
    tourType: "Full Day",
    pickupTime: "6:30 AM",
    rating: 4.7,
    reviews: 212,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&q=85",
    highlights: [
      "Red Sea crystal-clear waters",
      "El Ain El Sokhna \u2014 100 km from Cairo",
      "Full day hotel beach access",
      "Swimming & sunbathing",
      "Lunch included"
    ],
    includes: [
      "Hotel pickup & return",
      "Private English-speaking driver",
      "Beach access (day use at hotel)",
      "Lunch"
    ],
    excludes: ["Personal spending extras", "Anything not mentioned"],
    itinerary: [
      { time: "06:30", activity: "Hotel pickup in private A/C vehicle" },
      { time: "08:30", activity: "Arrive El Ain El Sokhna \u2014 check in at beach hotel" },
      { time: "09:00", activity: "Beach time \u2014 swimming & relaxation" },
      { time: "13:00", activity: "Lunch at beach hotel" },
      { time: "14:00", activity: "Afternoon beach & pool time" },
      { time: "17:00", activity: "Return drive to Cairo hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign"
  },
  // ─── 28 ──────────────────────────────────────────────────────────────────
  {
    id: 28,
    title: "Hot Air Balloon Ride \u2014 Luxor",
    description: "Soar above one of the world's greatest open-air museums at sunrise. Float over the Valley of the Kings, Hatshepsut Temple, and the Nile Valley in a breathtaking hot air balloon flight \u2014 the best way to experience Luxor's ancient wonders from above.",
    location: "Luxor",
    destination: "Luxor",
    basePrice: 40,
    priceTiers: [
      { label: "Shared tour \u2014 Pickup + Ticket", price1: 40, price2: 75 }
    ],
    duration: "Approx. 2 Hours (incl. transfers)",
    tourType: "Half Day",
    pickupTime: "4:30 AM",
    rating: 4.9,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1518246781798-4e52cbb94f85?w=800&h=500&fit=crop&q=85",
    highlights: [
      "1-hour sunrise balloon flight over Luxor",
      "Aerial views of Valley of the Kings",
      "Hatshepsut Temple from above",
      "Nile Valley panorama",
      "Unforgettable sunrise experience"
    ],
    includes: [
      "Hotel pickup & return",
      "English-speaking driver",
      "Hot air balloon tickets"
    ],
    excludes: ["Anything not mentioned"],
    itinerary: [
      { time: "04:30", activity: "Hotel pickup \u2014 drive to launch site" },
      { time: "05:00", activity: "Safety briefing & balloon preparation" },
      { time: "05:30", activity: "Balloon rises \u2014 1-hour flight over Luxor" },
      { time: "06:30", activity: "Landing & return transfer to hotel" }
    ],
    meetingPoint: "Hotel lobby \u2014 driver waiting with name sign",
    note: "Sharing tour. Book 3 trips and get the 4th FREE \u2014 ask the hotel!"
  }
];
