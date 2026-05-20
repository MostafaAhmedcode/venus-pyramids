'use client';

import { useState } from 'react';

interface BlogRegion {
  name: string;
  filterValue: string;
  title: string;
  subtitle: string;
  image: string;
  introduction: string;
  body1: string;
  body2: string;
  fact: string;
  attractions: string[];
  duration: string;
}

const REGIONS: BlogRegion[] = [
  {
    name: "Cairo & Giza",
    filterValue: "Cairo & Giza",
    title: "Cairo & Giza: The Cradle of the Pharaohs",
    subtitle: "Stand before the last remaining Wonder of the Ancient World",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&h=600&fit=crop&q=90",
    introduction: "There are few places on Earth where history is not merely studied, but physically felt. Cairo and the Giza Plateau stand at the absolute epicenter of human antiquity. Here, the boundary between the bustling, energetic modern metropolis and the quiet, monumental majesty of the ancient world is defined by a thin line of golden sand.",
    body1: "The Great Pyramid of Khufu (Cheops), the eldest of the three colossal monuments at Giza, has captured the imagination of travelers for over four millennia. Rising 138 meters above the limestone escarpment, it was constructed from over 2.3 million stone blocks, each weighing between 2.5 and 15 tons. For 3,800 years, it was the tallest man-made structure on the planet, built with a mathematical precision that continues to baffle modern engineers. Guarding these tombs is the Great Sphinx, a monolithic limestone sentinel with the body of a lion and the face of Pharaoh Khafre, gazing eternally toward the rising sun in the east.",
    body2: "Beyond the plateau, the story of Egypt's architectural evolution unfolds. At Saqqara, the brilliant architect Imhotep constructed the Step Pyramid of Djoser, stacking six mastaba tombs to create the world's first monumental stone building. In nearby Memphis, the ancient capital founded by Narmer in 3100 BCE, you can stand in the presence of the colossal fallen statue of Ramesses II and the exquisite Alabaster Sphinx. To truly understand Cairo is to walk through Coptic Cairo's Hanging Church and explore the labyrinthine alleys of Khan El Khalili, where the scent of saffron, mint, and leather has filled the air for six centuries.",
    fact: "The Great Pyramid is aligned to the true North with an error of less than 1/12 of a degree, a level of precision that was not replicated until the advent of satellite navigation.",
    attractions: [
      "The Great Pyramid of Khufu & Sphinx",
      "The Step Pyramid of Saqqara",
      "The Grand Egyptian Museum (GEM)",
      "The Citadel of Saladin & Alabaster Mosque",
      "Khan El Khalili Medieval Bazaar"
    ],
    duration: "Best explored in 2-3 full days"
  },
  {
    name: "Luxor",
    filterValue: "Luxor",
    title: "Luxor: The World's Greatest Open-Air Museum",
    subtitle: "Discover the golden capital of the New Kingdom pharaohs",
    image: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?w=1200&h=600&fit=crop&q=90",
    introduction: "Divided by the life-giving waters of the Nile, Luxor stands on the site of ancient Thebes, the glorious capital of Egypt's New Kingdom. Here, the East Bank represents the realm of the living, where the sun rises over massive temples, while the West Bank is the silent city of the dead, where the sun sets behind the rugged limestone cliffs of the Libyan desert.",
    body1: "On the East Bank, the Karnak Temple Complex stands as the largest religious sanctuary ever built by mankind. Over a period of 1,500 years, dozens of pharaohs added their own temples, chapels, and giant obelisks. Its crown jewel is the Great Hypostyle Hall, a forest of 134 colossal sandstone columns rising 21 meters into the air, carved with intricate hieroglyphs that once glowed with vibrant mineral pigments. A mile to the south, connected by the newly restored Avenue of Sphinxes, lies Luxor Temple, constructed by Amenhotep III and Ramesses II, which glows with an ethereal, warm gold when illuminated at night.",
    body2: "Crossing the Nile to the West Bank brings you to the Valley of the Kings. Hidden deep within a desolate canyon beneath the pyramid-shaped peak of Al-Qurn, sixty-three rock-cut tombs were chiseled out of the solid stone to protect the mummified remains and immense treasures of Egypt's greatest rulers, including Tutankhamun, Hatshepsut, and Ramesses the Great. Nearby, the Temple of Hatshepsut rises in a series of breathtaking terraced colonnades that seem to grow organically out of the sheer mountain face, while the twin Colossi of Memnon stand as giant guardians of a long-lost royal mortuary complex.",
    fact: "The Tomb of Ramesses VI in the Valley of the Kings features a perfectly preserved astronomical ceiling depicting the sky goddess Nut swallowing and giving birth to the sun each day.",
    attractions: [
      "The Valley of the Kings & Tutankhamun's Tomb",
      "Karnak Temple's Great Hypostyle Hall",
      "The Mortuary Temple of Queen Hatshepsut",
      "Luxor Temple & Avenue of Sphinxes",
      "The Colossi of Memnon"
    ],
    duration: "Best explored in 1-2 full days"
  },
  {
    name: "Aswan",
    filterValue: "Aswan",
    title: "Aswan: Golden Gateway of the Nile & Nubia",
    subtitle: "Experience the tranquil beauty and ancient temples of Egypt's deep south",
    image: "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=1200&h=600&fit=crop&q=90",
    introduction: "In Aswan, the Nile is at its most beautiful, flowing through dramatic granite boulders and emerald islands topped by swaying palm trees. This is the historic borderland between Egypt and the ancient kingdom of Nubia, a peaceful haven where life slows down to the gentle pace of traditional wooden felucca sailboats drifting across the water.",
    body1: "Aswan is home to some of the most romantic temples in antiquity. The Temple of Philae, dedicated to Isis, the goddess of magic and motherhood, sits on its own island, reflecting beautifully in the surrounding waters. Salvaged from flooding by UNESCO in a monumental 10-year effort, every single stone was carefully numbered and moved to higher ground on nearby Agilkia Island. Further down the river, the unique double temple of Kom Ombo stands perched on a bend in the Nile, dedicated to both Horus the Elder and Sobek, the crocodile god, featuring ancient medical instruments carved into its walls.",
    body2: "Deep in the desert south of Aswan lies Abu Simbel, the absolute masterpiece of Ramesses II. Carved directly into a solid sandstone mountain on the shores of Lake Nasser, four giant 20-meter-tall statues of the pharaoh guard the entrance to the Great Temple. Twice a year, on February 22 and October 22 (the king's birthday and coronation day), the rising sun penetrates 60 meters deep into the sanctuary to illuminate the statues of the gods inside, leaving only Ptah, the god of darkness, in shadow.",
    fact: "The High Dam in Aswan contains 17 times the volume of stone and material used to build the Great Pyramid of Giza, creating Lake Nasser, one of the largest man-made reservoirs in the world.",
    attractions: [
      "The Temples of Abu Simbel",
      "Philae Island Temple of Isis",
      "The Unfinished Obelisk",
      "Nubian Village Culture & Traditional Food",
      "Felucca Sailing around Elephantine Island"
    ],
    duration: "Best explored in 1-2 days"
  },
  {
    name: "Alexandria",
    filterValue: "Alexandria",
    title: "Alexandria: The Pearl of the Mediterranean",
    subtitle: "Walk the grand avenues of Alexander the Great's cosmopolitan capital",
    image: "https://images.unsplash.com/photo-1629813589332-9cb77353f868?w=1200&h=600&fit=crop&q=90",
    introduction: "Founded by Alexander the Great in 331 BCE, Alexandria was once the intellectual powerhouse of the ancient world. It was a legendary melting pot of Egyptian, Greek, Jewish, and Roman cultures, home to the Great Library and the Pharos Lighthouse, one of the Seven Wonders of the Ancient World.",
    body1: "While the ancient lighthouse and library have long vanished beneath the waves of the Mediterranean and the sands of time, Alexandria's romantic coastal charm remains. Standing on the eastern harbor is the Citadel of Qaitbay, a magnificent 15th-century defensive fortress built on the exact foundations of the Pharos Lighthouse, utilizing its colossal fallen granite stones. Along the seaside Corniche, elegant colonial cafes, grand Italianate plazas, and fresh Mediterranean seafood restaurants offer a distinct, breeze-swept contrast to the desert heat of Cairo.",
    body2: "Beneath the city streets lies a dark, fascinating world. The Catacombs of Kom El Shoqafa represent the largest Roman burial site in Egypt, showcasing a surreal artistic fusion of Egyptian, Greek, and Roman iconography, where Roman soldiers are carved wearing Egyptian crowns. Nearby, Pompey's Pillar, a massive 27-meter-tall single column of red Aswan granite, stands as the last remaining monument of the Serapis Temple, surrounded by ancient sphinxes.",
    fact: "The modern Bibliotheca Alexandrina, opened in 2002, is a stunning architectural tribute to the ancient library, featuring a massive sun-disk design and space for over 8 million books.",
    attractions: [
      "The Citadel of Qaitbay",
      "The Catacombs of Kom El Shoqafa",
      "The Bibliotheca Alexandrina",
      "Pompey's Pillar & Serapeum",
      "The Roman Amphitheater of Kom El Dikka"
    ],
    duration: "Perfect as a 1-day private day trip from Cairo"
  },
  {
    name: "Red Sea & Hurghada",
    filterValue: "Hurghada",
    title: "Hurghada & Red Sea: The Turquoise Paradise",
    subtitle: "Submerge yourself in the crystal-clear waters and vibrant coral gardens",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop&q=90",
    introduction: "Where the scorching desert sands meet the cool, crystal-clear waters of the Red Sea lies Hurghada. Once a sleepy fishing village, it has transformed into a world-class resort paradise, famous for having some of the richest and most accessible marine biodiversity on the globe.",
    body1: "The Red Sea is a biological marvel, isolated by desert coastlines and characterized by warm, highly saline water that allows thousands of species of colorful fish and vibrant coral reefs to thrive. Just a short speedboat ride from Hurghada Marina, the islands of Giftun, Orange Bay, and Paradise Island offer pristine white sand beaches and shallow, turquoise lagoons that feel like a tropical dream, perfect for snorkeling with wild dolphins, sea turtles, and glowing schools of clownfish.",
    body2: "For adventure seekers, Hurghada is a gateway to the Eastern Desert, where you can ride quad bikes over towering sand dunes, visit traditional Bedouin camps under a star-filled night sky, or embark on scuba diving excursions to legendary shipwrecks like the SS Thistlegrom. After a day in the water, the Hurghada Marina Boulevard is the perfect spot to enjoy fresh seafood, relax with shisha, and enjoy the cool sea breeze.",
    fact: "The Red Sea contains over 1,200 species of fish, and more than 10% of them are completely endemic, found nowhere else on Earth.",
    attractions: [
      "Giftun Island & Orange Bay Snorkeling",
      "Scuba Diving in Coral Gardens",
      "Hurghada Marina Boulevard",
      "Desert ATV Quad Biking & Bedouin Camp",
      "Dolphin House Reef Boat Trips"
    ],
    duration: "Ideal for 2-4 days of relaxation & water sports"
  },
  {
    name: "Sinai & Dahab",
    filterValue: "Sinai",
    title: "Sinai & Dahab: Sacred Mountains & Coastal Magic",
    subtitle: "Venture into the raw desert peaks and bohemian shores of the Gulf of Aqaba",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&h=600&fit=crop&q=90",
    introduction: "The Sinai Peninsula is a land of dramatic contrasts, where jagged, rust-colored mountains crash directly into the deep blue gulf. Steeped in sacred history and biblical lore, Sinai offers a powerful, spiritual desert landscape combined with the laid-back, bohemian energy of coastal Dahab.",
    body1: "At the heart of the peninsula's mountainous interior lies Mount Sinai (Jebel Musa), the legendary peak where Moses is believed to have received the Ten Commandments. Climbing the mountain under a star-strewn sky to witness the sunrise illuminate the endless desert valleys below is a profound, life-changing experience. Nestled at the foot of the mountain sits St. Catherine's Monastery, a UNESCO World Heritage site and the oldest continuously inhabited Christian monastery in the world, home to the legendary Burning Bush and a library of ancient manuscripts second only to the Vatican.",
    body2: "On the coast, the former Bedouin village of Dahab offers a completely different rhythm. Famous for the Blue Hole—a legendary 120-meter-deep marine sinkhole that attracts free-divers and snorkelers from all over the world—Dahab's seaside is lined with low-key Bedouin-style cafes, yoga retreats, and colorful markets, preserving a peaceful, mystical charm far removed from commercial tourism.",
    fact: "St. Catherine's Monastery houses the famous 'Achtiname', a protective decree signed by the Prophet Muhammad himself, guaranteeing the safety of the monks and their property.",
    attractions: [
      "Mount Sinai Sunrise Pilgrimage",
      "St. Catherine's Monastery & The Burning Bush",
      "The Blue Hole & Blue Lagoon Snorkeling",
      "The Surreal Colored Canyon Hike",
      "Dahab Coastal Bedouin Cafes"
    ],
    duration: "Best experienced in 2-3 days"
  },
  {
    name: "Fayoum Oasis",
    filterValue: "Fayoum",
    title: "Fayoum: Oasis of Ancient Whales & Pottery Art",
    subtitle: "Journey to a lush green basin of waterfalls and prehistoric deserts",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=600&fit=crop&q=90",
    introduction: "Located just 60 miles southwest of Cairo, Fayoum is Egypt's oldest city and a stunning geological anomaly. Fed by a canal from the Nile, this massive green depression is a lush agricultural oasis of fruit orchards and historic wooden waterwheels, surrounded by a dramatic, prehistoric desert landscape.",
    body1: "The crown jewel of Fayoum is Wadi El Hitan (The Valley of Whales), a UNESCO World Heritage site of unimaginable scientific value. Scattered across the sand are the fossilized skeletons of hundreds of prehistoric whales (Basilosaurus), dating back 40 million years. These extraordinary fossils preserve the evolutionary transition of whales from land-based mammals to ocean dwellers, showcasing fossilized hind legs and feet perfectly intact in the desert sandstone.",
    body2: "Beside this ancient desert lies Magic Lake, a stunning saltwater lake surrounded by towering sand dunes, named for its ability to change colors from deep blue to emerald green depending on the angle of the sun. The nearby village of Tunis, perched overlooking the massive Lake Qarun, has become Egypt's artistic hub, famous for its colorful mud-brick villas and world-class handmade pottery schools started by Swiss artist Evelyne Porret in the 1980s.",
    fact: "Fayoum was the source of the famous 'Fayoum Portraits'—breathtakingly lifelike, realistic wooden panel paintings created during the Roman period, which were wrapped over the faces of mummies.",
    attractions: [
      "Wadi El Hitan Prehistoric Whale Fossils",
      "Magic Lake Dune Sandboarding",
      "Tunis Village Artisanal Pottery Workshops",
      "Wadi El Rayan Desert Waterfalls",
      "The Ancient Ruins of Karanis"
    ],
    duration: "Perfect as an active 1-day private day trip from Cairo"
  },
  {
    name: "White Desert",
    filterValue: "White Desert",
    title: "The White Desert: Egypt's Cosmic Landscape",
    subtitle: "Sleep under a canopy of billions of stars in a surreal natural art gallery",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=600&fit=crop&q=90",
    introduction: "Venture deep into the Western Desert of Egypt, past the lush green palms of Bahariya Oasis, and you will enter a landscape that feels entirely extraterrestrial. The White Desert National Park is a surreal, blindingly white chalk desert that looks like a snow-covered wilderness in the middle of the Sahara.",
    body1: "Over millions of years, fierce desert winds and sandstorms have carved massive deposits of ancient marine chalk into bizarre, organic sculptures. Towering monoliths shaped like giant mushrooms, chickens, sphinxes, and ice cream cones rise from the golden sand, changing color from brilliant blinding white in the midday sun to soft pastel pinks at sunset, and glowing like ghostly icebergs under the light of a full moon.",
    body2: "Adjacent to this white wonderland lies the Black Desert, a series of volcanic hills covered in black basalt stones, and Crystal Mountain, a unique geological ridge composed entirely of sparkling quartzite crystals. Camping in the White Desert in a traditional Bedouin tent, dining on food cooked over an open campfire, and sleeping under a sky so clear that the Milky Way appears as a solid glowing band is an adventure that defies description.",
    fact: "Millions of years ago, the White Desert was the bottom of an ancient ocean. If you look closely at the white chalk monoliths, you can still find fossilized sea shells and marine fossils embedded in the rock.",
    attractions: [
      "Surreal Chalk Formations (The Mushroom & Chicken)",
      "Volcanic Cones of the Black Desert",
      "Quartzite Crystals of Crystal Mountain",
      "Bahariya Oasis Natural Hot Springs",
      "Overnight Bedouin Camping & Stargazing"
    ],
    duration: "Best experienced as a 2-day, 1-night desert safari expedition"
  }
];

interface EgyptBlogProps {
  onSelectDestination: (dest: string) => void;
}

export default function EgyptBlog({ onSelectDestination }: EgyptBlogProps) {
  const [activeTab, setActiveTab] = useState(0);
  const current = REGIONS[activeTab];

  const handleQuickFilter = (val: string) => {
    onSelectDestination(val);
    setTimeout(() => {
      document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <section id="egypt-blog" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #040710 0%, var(--navy) 100%)', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.03) 0%, transparent 60%)' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Egypt Travel Guide</div>
          <h2 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>Egypt Travel Blog &amp; Region Guide</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span style={{ color: 'var(--gold)', fontSize: 8 }}>◆</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
          <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.05rem', color: 'var(--sand-2)', maxWidth: 700, margin: '20px auto 0', lineHeight: 1.75 }}>
            Immerse yourself in Egypt&apos;s grand history. Read our comprehensive expert-written blog for each region, and instantly browse custom private trips from the hotel.
          </p>
        </div>

        {/* Region Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 40, borderBottom: '1px solid rgba(201,168,76,0.15)', paddingBottom: 24 }}>
          {REGIONS.map((r, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={r.name}
                onClick={() => setActiveTab(idx)}
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.03)',
                  border: isActive ? '1px solid var(--gold)' : '1px solid rgba(201,168,76,0.2)',
                  color: isActive ? 'var(--navy)' : 'var(--sand-2)',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isActive ? '0 4px 15px rgba(201,168,76,0.3)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--sand-2)';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }
                }}
              >
                {r.name}
              </button>
            );
          })}
        </div>

        {/* Blog Post Display */}
        <div style={{ gap: 40, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.18)', padding: '36px', boxShadow: '0 20px 80px rgba(0,0,0,0.6)' }} className="blog-display-grid">
          
          {/* Main Article */}
          <div>
            {/* Ken Burns image */}
            <div style={{ position: 'relative', height: 'clamp(240px, 40vw, 420px)', width: '100%', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.25)', marginBottom: 32 }}>
              <img
                src={current.image}
                alt={current.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85) contrast(1.05)',
                  transition: 'transform 6s ease-in-out',
                }}
                className="ken-burns-img"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(4,7,16,0.95) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(4,7,16,0.8)', border: '1px solid var(--gold)', padding: '5px 10px', display: 'inline-block', marginBottom: 12 }}>
                  📍 {current.name}
                </span>
                <h3 className="font-heading" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: '#fff', fontWeight: 600, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Subtitle */}
            <h4 style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--sand-2)', marginBottom: 24, lineHeight: 1.6, borderLeft: '3px solid var(--gold)', paddingLeft: 16 }}>
              &ldquo;{current.subtitle}&rdquo;
            </h4>

            {/* Introduction */}
            <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.05rem', color: '#fff', lineHeight: 1.85, marginBottom: 20, fontWeight: 500 }}>
              {current.introduction}
            </p>

            {/* Body 1 with clickable text highlights */}
            <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.98rem', color: 'var(--sand-3)', lineHeight: 1.85, marginBottom: 20 }}>
              {current.body1}
            </p>

            {/* Body 2 with custom links */}
            <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.98rem', color: 'var(--sand-3)', lineHeight: 1.85, marginBottom: 32 }}>
              {current.body2}
            </p>

            {/* Call to Action Box */}
            <div
              onClick={() => handleQuickFilter(current.filterValue)}
              style={{
                background: 'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.03) 100%)',
                border: '1px solid var(--gold)',
                padding: '24px 32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,168,76,0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <h5 className="font-heading" style={{ fontSize: '1.25rem', color: 'var(--gold)', marginBottom: 6 }}>
                  Ready to explore {current.name}?
                </h5>
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.88rem', color: 'var(--sand-2)', margin: 0 }}>
                  Click here to instantly filter and view our private, guided trips in {current.name} departing directly from the hotel!
                </p>
              </div>
              <button
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  background: 'var(--gold)',
                  border: 'none',
                  color: 'var(--navy)',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
              >
                👉 VIEW {current.name} TRIPS
              </button>
            </div>
          </div>

          {/* Sidebar Info Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: '240px' }} className="blog-sidebar">
            
            {/* Fact Box */}
            <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.25)', padding: '24px' }}>
              <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
                🔺 Did You Know?
              </div>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.88rem', color: 'var(--sand-2)', lineHeight: 1.7, margin: 0 }}>
                {current.fact}
              </p>
            </div>

            {/* Must-See Attractions */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '24px' }}>
              <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
                🏺 Must-See Highlights
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {current.attractions.map((attr, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.8rem', marginTop: 1 }}>✦</span>
                    <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.88rem', color: 'var(--sand-2)', lineHeight: 1.4 }}>{attr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Info */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.1)', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.5rem' }}>🕑</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sand-3)', marginBottom: 2 }}>Recommended Stay</div>
                  <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.85rem', color: 'var(--sand-2)', fontWeight: 600 }}>{current.duration}</div>
                </div>
              </div>
            </div>

            {/* Interlink to tours list */}
            <div style={{ background: 'linear-gradient(135deg, rgba(255,209,102,0.08) 0%, rgba(201,168,76,0.02) 100%)', border: '1px dotted rgba(201,168,76,0.4)', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 10 }}>🗺️</div>
              <h6 className="font-heading" style={{ fontSize: '1.05rem', color: 'var(--gold)', marginBottom: 8 }}>Explore All Regions</h6>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.82rem', color: 'var(--sand-3)', lineHeight: 1.6, marginBottom: 16 }}>
                Want to customize a grand multi-day tour around Egypt?
              </p>
              <button
                onClick={() => handleQuickFilter('All')}
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: '1px solid var(--gold)',
                  color: 'var(--gold)',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gold)';
                  e.currentTarget.style.color = 'var(--navy)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--gold)';
                }}
              >
                Show All Trips
              </button>
            </div>

          </div>
        </div>

      </div>
      
      {/* CSS Styles for CSS animations */}
      <style jsx global>{`
        .blog-display-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 992px) {
          .blog-display-grid {
            grid-template-columns: 3fr 1.2fr;
          }
        }
        .ken-burns-img {
          animation: kenburns 30s ease-in-out infinite alternate;
        }
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
