'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TourCard from '../components/TourCard';
import RoomCard from '../components/RoomCard';
import StaffCard from '../components/StaffCard';
import ScrollObserver from '../components/ScrollObserver';
import { staff } from '../data/staff';
import { tours as staticTours } from '../data/tours';
import { rooms as staticRooms } from '../data/rooms';
import EgyptBlog from '../components/EgyptBlog';

const DESTINATIONS = ['All', 'Cairo & Giza', 'Luxor', 'Aswan', 'Alexandria', 'Hurghada', 'Fayoum', 'White Desert', 'Red Sea'] as const;
const TOUR_TYPES   = ['All', 'Half Day', 'Full Day', 'Multi-Day'] as const;

const F = 'var(--font-inter), Inter, system-ui, sans-serif';

function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 56 }}>
      <div style={{ fontFamily: F, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{label}</div>
      <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 600, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: subtitle ? 16 : 0 }}>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
        <span style={{ color: 'var(--gold)', fontSize: 8 }}>◆</span>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
      </div>
      {subtitle && (
        <p className="font-sub" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', fontStyle: 'italic', color: 'var(--sand-2)', maxWidth: 640, margin: '0 auto', lineHeight: 1.75 }}>{subtitle}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}

function HomeInner() {
  const [dest, setDest] = useState<string>('All');
  const [type, setType] = useState<string>('All');
  const [rooms, setRooms] = useState(staticRooms);
  const [tours, setTours] = useState(staticTours);
  const [teamMembers, setTeamMembers] = useState(staff);
  const searchParams = useSearchParams();

  // Pre-filter from destination page links (?destination=Luxor)
  useEffect(() => {
    const d = searchParams.get('destination');
    if (d) {
      setDest(d);
      // Scroll to tours section after a short delay
      setTimeout(() => {
        document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  }, [searchParams]);

  // Load any admin overrides saved to disk
  useEffect(() => {
    fetch('/api/save-data?type=rooms')
      .then(r => r.json())
      .then(json => {
        if (json.success && json.data.length > 0) {
          setRooms(prev => prev.map(r => {
            const override = json.data.find((o: any) => o.id === r.id);
            return override ? { ...r, ...override } : r;
          }));
        }
      }).catch(() => {});

    fetch('/api/save-data?type=tours')
      .then(r => r.json())
      .then(json => {
        if (json.success && json.data.length > 0) {
          setTours(prev => prev.map(t => {
            const override = json.data.find((o: any) => o.id === t.id);
            return override ? { ...t, ...override } : t;
          }));
        }
      }).catch(() => {});

    fetch('/api/save-data?type=staff')
      .then(r => r.json())
      .then(json => {
        if (json.success && json.data.length > 0) {
          setTeamMembers(prev => prev.map(m => {
            const override = json.data.find((o: any) => o.id === m.id);
            return override ? { ...m, ...override } : m;
          }));
        }
      }).catch(() => {});
  }, []);

  const filtered = tours.filter((t) => {
    const dMatch = dest === 'All' || t.destination === dest;
    const tMatch = type === 'All' || t.tourType === type;
    return dMatch && tMatch;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)' }}>
      <Navbar />
      <Hero />

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, var(--navy) 0%, #080d1a 100%)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>

            {/* Left — text */}
            <ScrollObserver>
              <div>
                <div style={{ fontFamily: F, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>About Black Pyramids Tours</div>
                <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>Steps from the Giza Pyramids</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
                  <span style={{ color: 'var(--gold)', fontSize: 8 }}>◆</span>
                  <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
                </div>
                <p className="font-sub" style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--sand-2)', lineHeight: 1.8, marginBottom: 20 }}>
                  Located on El Fokahaa Street, Nazlet El Batran, Giza — Black Pyramids Tours places you within a 5-minute drive of the Giza Pyramid Complex and the Great Sphinx.
                </p>
                <p style={{ fontFamily: F, fontSize: '0.95rem', color: 'var(--sand-3)', lineHeight: 1.85, marginBottom: 28 }}>
                  Our air-conditioned rooms feature LCD televisions, rainfall showerheads, designer toiletries, electric kettles, and free tea &amp; coffee. Enjoy a complimentary continental breakfast served daily from 7:00 AM to noon, relax on our famous rooftop restaurant with panoramic Pyramid views, or indulge in our onsite spa with massages, body treatments, and facials.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                  {[
                    { icon: '📍', label: 'Address', value: 'El Fokahaa St, Nazlet El Batran, Giza' },
                    { icon: '📱', label: 'Phone / WhatsApp', value: '+20 101 815 7153' },
                    { icon: '🕐', label: 'Check-in', value: '12:00 PM – 12:00 AM' },
                    { icon: '🕙', label: 'Check-out', value: 'Until 10:00 AM' },
                    { icon: '✈️', label: 'From Airport', value: '17.3 miles (Cairo Int\'l)' },
                    { icon: '🔺', label: 'From Pyramids', value: '5-min drive · 2.1 mi' },
                  ].map((f) => (
                    <div key={f.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '12px 14px' }}>
                      <div style={{ fontFamily: F, fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>{f.icon} {f.label}</div>
                      <div style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-2)' }}>{f.value}</div>
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/201018157153" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Contact on WhatsApp</a>
              </div>
            </ScrollObserver>

            {/* Right — amenities */}
            <ScrollObserver>
              <div>
                <div style={{ fontFamily: F, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Hotel Facilities</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {[
                    { icon: '🍳', text: 'Free Breakfast Daily' },
                    { icon: '📶', text: 'Free WiFi All Areas' },
                    { icon: '🅿️', text: 'Free Parking' },
                    { icon: '🌅', text: 'Rooftop Restaurant' },
                    { icon: '💆', text: 'Spa & Massages' },
                    { icon: '🛁', text: 'Hot Tub / Jacuzzi' },
                    { icon: '🚗', text: 'Airport Transfer' },
                    { icon: '🐾', text: 'Pets Allowed' },
                    { icon: '🏪', text: 'Mini Market On-Site' },
                    { icon: '💱', text: 'Currency Exchange' },
                    { icon: '🧳', text: 'Luggage Storage' },
                    { icon: '🔒', text: '24-Hour Security' },
                    { icon: '🌿', text: 'Allergy-Free Rooms' },
                    { icon: '💈', text: 'Barber / Beauty Shop' },
                    { icon: '🗺️', text: 'Tour Desk' },
                    { icon: '🛗', text: 'Lift / Elevator' },
                  ].map((f) => (
                    <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.1)', padding: '10px 12px' }}>
                      <span style={{ fontSize: '1rem', flexShrink: 0 }}>{f.icon}</span>
                      <span style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-2)' }}>{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* ══ AIRPORT TRANSFER SECTION ══ */}
      <section id="airport-transfer" style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #080d1a 0%, var(--navy) 100%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollObserver>
            <SectionHeading
              label="Private Airport Transfer"
              title="Luxury Car from Cairo Airport"
              subtitle="Arrive in comfort. Our professional driver meets you at Cairo International Airport — all our staff and drivers speak fluent English."
            />
          </ScrollObserver>

          <ScrollObserver>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>

              {/* Transfer card */}
              <div style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(201,168,76,0.25)', padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--gold)', color: 'var(--navy)', fontFamily: F, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', padding: '6px 18px' }}>ONE WAY</div>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🚗</div>
                <h3 className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: 8 }}>Airport ↔ Hotel Transfer</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
                  <span className="font-heading" style={{ fontSize: '2.8rem', color: 'var(--gold)', fontWeight: 700 }}>$22</span>
                  <span style={{ fontFamily: F, fontSize: '0.9rem', color: 'var(--sand-3)' }}>per trip (one way)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                  {[
                    { icon: '✅', text: 'Private luxury car — no shared rides' },
                    { icon: '🗣️', text: 'English-speaking professional driver' },
                    { icon: '✈️', text: 'Meet & greet at Cairo International Airport' },
                    { icon: '🧳', text: 'Luggage assistance included' },
                    { icon: '🕐', text: 'Available 24 hours, any flight time' },
                    { icon: '🔄', text: 'Book return trip for same price' },
                  ].map((item) => (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ fontSize: '0.9rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                      <span style={{ fontFamily: F, fontSize: '0.9rem', color: 'var(--sand-2)', lineHeight: 1.5 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/201018157153?text=Hi%2C%20I%20would%20like%20to%20book%20an%20airport%20transfer" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  Book Transfer on WhatsApp
                </a>
              </div>

              {/* Info panel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Why Our Transfer?</div>
                  <p style={{ fontFamily: F, fontSize: '0.95rem', color: 'var(--sand-2)', lineHeight: 1.8 }}>
                    After a long flight, the last thing you want is to negotiate with taxi drivers or wait for a shared shuttle. Our driver will be waiting for you with a name sign, ready to take you straight to Venus Hotel in a clean, air-conditioned luxury car.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Transfer Details</div>
                  {[
                    { label: 'Distance', value: 'Cairo Airport → Hotel: ~17 miles' },
                    { label: 'Duration', value: 'Approx. 35–50 minutes' },
                    { label: 'Price', value: '$22 one way (both directions)' },
                    { label: 'Car Type', value: 'Private luxury sedan / SUV' },
                    { label: 'Driver', value: 'English-speaking, professional' },
                    { label: 'Availability', value: '24/7 — any arrival time' },
                  ].map((d) => (
                    <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(201,168,76,0.08)', gap: 16 }}>
                      <span style={{ fontFamily: F, fontSize: '0.8rem', fontWeight: 600, color: 'var(--sand-3)', flexShrink: 0 }}>{d.label}</span>
                      <span style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-2)', textAlign: 'right' }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollObserver>
        </div>
      </section>

      {/* ══ TOURS SECTION ══ */}
      <section id="tours" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, var(--navy) 0%, #080d1a 100%)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollObserver>
            <SectionHeading
              label="Daily Tours from the Hotel"
              title="Explore All of Egypt"
              subtitle="Every tour departs from our hotel in a private air-conditioned luxury car. All our staff and drivers speak fluent English."
            />
          </ScrollObserver>

          {/* Filters */}
          <ScrollObserver>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.2)', padding: '28px 32px', marginBottom: 48 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
                <div>
                  <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>📍</span> Tourism
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {DESTINATIONS.map((d) => (
                      <button key={d} onClick={() => setDest(d)} className={`filter-pill${dest === d ? ' active' : ''}`}>{d}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>🕐</span> Tour Duration
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {TOUR_TYPES.map((t) => (
                      <button key={t} onClick={() => setType(t)} className={`filter-pill${type === t ? ' active' : ''}`}>{t}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span>📅</span> Trip Date
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <input type="date" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--sand-2)', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 12px', borderRadius: 4, fontFamily: F, fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-2)' }}>
                  Showing <strong style={{ color: 'var(--gold)' }}>{filtered.length}</strong> of {tours.length} tours
                </span>
                {(dest !== 'All' || type !== 'All') && (
                  <button onClick={() => { setDest('All'); setType('All'); }} style={{ fontFamily: F, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sand-3)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sand-3)')}>
                    Clear filters ×
                  </button>
                )}
              </div>
            </div>
          </ScrollObserver>

          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {filtered.map((tour, i) => <TourCard key={tour.id} tour={tour} index={i} />)}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <p className="font-sub" style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--sand-2)', marginBottom: 20 }}>No tours match your selection.</p>
              <button onClick={() => { setDest('All'); setType('All'); }} className="btn-secondary">Show All Tours</button>
            </div>
          )}
        </div>
      </section>

      {/* ══ INCLUSIONS BANNER ══ */}
      <section style={{ padding: '56px 24px', background: 'rgba(201,168,76,0.04)', borderTop: '1px solid rgba(201,168,76,0.14)', borderBottom: '1px solid rgba(201,168,76,0.14)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <ScrollObserver>
            <div style={{ fontFamily: F, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', textAlign: 'center', marginBottom: 32 }}>Every Tour Includes</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
              {[
                { icon: '🚗', title: 'Private Luxury Car', desc: 'Air-conditioned, comfortable & modern' },
                { icon: '🗣️', title: 'Full English Team', desc: 'All hotel staff and drivers speak fluent English — from reception to your tour guide.' },
                { icon: '🍽️', title: 'Lunch Included', desc: 'Local restaurant, authentic cuisine' },
                { icon: '🎫', title: 'All Tickets', desc: 'Entrance fees & transfers covered' },
                { icon: '👨‍🏫', title: 'Expert Guide', desc: 'Licensed Egyptologist guide' },
              ].map((f) => (
                <div key={f.title} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 10 }}>{f.icon}</div>
                  <div className="font-heading" style={{ fontSize: '1rem', color: 'var(--sand)', marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-3)' }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </ScrollObserver>
        </div>
      </section>

      {/* ══ PROMO BANNER ══ */}
      <section style={{ padding: '32px 24px', background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)', borderTop: '1px solid rgba(201,168,76,0.25)', borderBottom: '1px solid rgba(201,168,76,0.25)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '2rem' }}>🎁</span>
            <div>
              <div className="font-heading" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'var(--gold)', marginBottom: 4 }}>Book 3 Trips — Get the 4th FREE</div>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.9rem', color: 'var(--sand-2)' }}>Ask the hotel about your free tour when booking 3 or more trips.</p>
            </div>
            <a href="https://wa.me/201018157153?text=Hi%2C%20I%20want%20to%20book%203%20tours%20and%20get%20the%204th%20free" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Claim Offer</a>
          </div>
        </div>
      </section>

      {/* ══ EGYPT EXPLORATION GUIDE & TRAVEL BLOG ══ */}
      <EgyptBlog onSelectDestination={setDest} />

      {/* ══ ROOMS SECTION ══ */}
      <section id="hotel" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #080d1a 0%, var(--navy) 100%)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollObserver>
            <SectionHeading
              label="Accommodation"
              title="Luxury Hotel Rooms"
              subtitle="16 beautifully designed rooms — from cozy standard rooms to the Presidential Suite, all steps from the Giza Pyramids."
            />
          </ScrollObserver>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {rooms.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ ROOFTOP RESTAURANT SECTION ══ */}
      <section id="rooftop" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, var(--navy) 0%, #080d1a 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollObserver>
            <SectionHeading
              label="Rooftop Experience"
              title="Sky-High Dining with Pyramid Views"
              subtitle="Our rooftop restaurant sits at the top of the hotel with breathtaking panoramic views of all three Giza Pyramids and the ancient skyline of Old Cairo."
            />
          </ScrollObserver>

          <ScrollObserver>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'start' }}>

              {/* Left — description */}
              <div style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(201,168,76,0.25)', padding: '40px 36px' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: 20 }}>🌅</div>
                <h3 className="font-heading" style={{ fontSize: '1.6rem', fontWeight: 600, color: '#fff', marginBottom: 12 }}>The Rooftop Restaurant</h3>
                <p style={{ fontFamily: F, fontSize: '0.95rem', color: 'var(--sand-2)', lineHeight: 1.85, marginBottom: 24 }}>
                  Perched on the top floor of Venus Hotel, our rooftop restaurant is one of the most unique dining experiences in all of Egypt. Enjoy fresh food, cold juices, hot drinks, and a full menu — all while gazing at the iconic Giza Pyramids and the sprawling cityscape of Old Cairo stretching to the horizon.
                </p>
                <p style={{ fontFamily: F, fontSize: '0.95rem', color: 'var(--sand-2)', lineHeight: 1.85, marginBottom: 28 }}>
                  Whether you want a relaxed breakfast as the sun rises over the pyramids, a leisurely lunch, or a magical dinner under the stars — the rooftop is open all day and serves everything from Egyptian classics to international dishes, fresh-squeezed juices, smoothies, and more.
                </p>
                <a href="https://wa.me/201018157153?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20rooftop%20table" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  Reserve a Table
                </a>
              </div>

              {/* Right — features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* View highlight */}
                <div style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.3)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>The View</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { icon: '🔺', text: 'Panoramic view of all 3 Giza Pyramids' },
                      { icon: '🕌', text: 'Old Cairo skyline & ancient minarets' },
                      { icon: '🌅', text: 'Stunning sunrise & sunset scenery' },
                      { icon: '🌙', text: 'Magical night views of illuminated pyramids' },
                    ].map((v) => (
                      <div key={v.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: '1.1rem' }}>{v.icon}</span>
                        <span style={{ fontFamily: F, fontSize: '0.9rem', color: 'var(--sand-2)' }}>{v.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Menu highlights */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>What We Serve</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {[
                      { icon: '🥗', text: 'Fresh Salads' },
                      { icon: '🍲', text: 'Egyptian Dishes' },
                      { icon: '🥩', text: 'Grilled Meats' },
                      { icon: '🍕', text: 'International Food' },
                      { icon: '🥤', text: 'Fresh Juices' },
                      { icon: '🧃', text: 'Smoothies' },
                      { icon: '☕', text: 'Hot Drinks & Coffee' },
                      { icon: '🍰', text: 'Desserts & Sweets' },
                    ].map((m) => (
                      <div key={m.text} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.08)' }}>
                        <span style={{ fontSize: '1rem' }}>{m.icon}</span>
                        <span style={{ fontFamily: F, fontSize: '0.82rem', color: 'var(--sand-2)' }}>{m.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: '2rem' }}>🕐</span>
                  <div>
                    <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>Open Daily</div>
                    <div style={{ fontFamily: F, fontSize: '1rem', color: 'var(--sand)', fontWeight: 500 }}>7:00 AM — 11:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollObserver>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #080d1a 0%, var(--navy) 100%)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollObserver>
            <SectionHeading label="Our Promise" title="Why Black Pyramids Tours?" />
          </ScrollObserver>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🔺', title: 'Pyramid Proximity', desc: 'Our hotel is located steps from the iconic Giza Pyramids — wake up to one of the Seven Wonders of the Ancient World.' },
              { icon: '🚗', title: 'Private Luxury Transport', desc: 'Every tour uses a private air-conditioned luxury car. No shared buses, no waiting — just you and your guide.' },
              { icon: '🗣️', title: 'Full English Team', desc: 'Every member of our team — hotel staff, drivers, and guides — speaks fluent English to make your stay seamless.' },
              { icon: '🌅', title: 'Rooftop Restaurant', desc: 'Dine with a view of all three Giza Pyramids and Old Cairo from our rooftop restaurant, open all day every day.' },
              { icon: '✈️', title: 'Airport Transfer $22', desc: 'Private luxury car from Cairo Airport to the hotel — or back — for just $22 one way. English-speaking driver, 24/7.' },
              { icon: '⭐', title: '4.9 Star Rated', desc: 'Hundreds of guests from around the world rate us 4.9 stars. Your satisfaction is our highest priority.' },
            ].map((f, i) => (
              <ScrollObserver key={i}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STAFF SECTION ══ */}
      <section id="team" style={{ padding: '96px 24px', background: 'linear-gradient(180deg, var(--navy) 0%, #080d1a 100%)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollObserver>
            <SectionHeading
              label="Meet Our Team"
              title="The People Behind Black Pyramids Tours"
              subtitle="Our entire team — hotel staff, guides, and drivers — all speak fluent English and are here to make your Egypt experience truly unforgettable."
            />
          </ScrollObserver>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {teamMembers.map((member, i) => <StaffCard key={member.id} member={member} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section id="contact" style={{ padding: '112px 24px', position: 'relative', overflow: 'hidden', background: '#080d1a' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)' }} />
        <ScrollObserver>
          <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: F, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Start Your Journey</div>
            <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 600, color: '#fff', marginBottom: 16 }}>Ready to Discover Egypt?</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
              <span style={{ color: 'var(--gold)', fontSize: 8 }}>◆</span>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
            </div>
            <p className="font-sub" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--sand-2)', marginBottom: 40, lineHeight: 1.75 }}>
              Book your room, airport transfer, and daily tours today. Our team will craft the perfect Egyptian adventure for you.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
              <a href="#tours" className="btn-primary" style={{ textDecoration: 'none' }}>Browse Tours</a>
              <a href="#airport-transfer" className="btn-secondary" style={{ textDecoration: 'none' }}>Airport Transfer</a>
              <a href="mailto:info@venuspyramids.com" className="btn-secondary" style={{ textDecoration: 'none' }}>Email Us</a>
            </div>
          </div>
        </ScrollObserver>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: '#040710', borderTop: '1px solid rgba(201,168,76,0.14)', padding: '64px 24px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ marginBottom: 16 }}>
                <img src="/logo.jfif" alt="Black Pyramids Tours" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
              </div>
              <p style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-3)', lineHeight: 1.75 }}>
                Your gateway to Egypt&apos;s ancient wonders. Luxury hotel, rooftop restaurant &amp; private daily tours near the Giza Pyramids.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Quick Links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[['Home', '#'], ['Tours', '#tours'], ['Hotels', '#hotel'], ['Rooftop', '#rooftop'], ['Airport Transfer', '#airport-transfer'], ['Our Team', '#team'], ['Contact', '#contact']].map(([l, h]) => (
                  <a key={l} href={h} style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-3)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sand-3)')}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.45rem' }}>◆</span>{l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: '📧', text: 'info@venuspyramids.com', href: 'mailto:info@venuspyramids.com' },
                  { icon: '📱', text: '+20 101 815 7153', href: 'tel:+201018157153' },
                  { icon: '💬', text: 'WhatsApp: +20 101 815 7153', href: 'https://wa.me/201018157153' },
                  { icon: '📍', text: 'Giza, Egypt — Near Pyramids', href: '#' },
                ].map((c) => (
                  <a key={c.text} href={c.href} style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-3)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sand-3)')}>
                    <span>{c.icon}</span>{c.text}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Follow Us</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Facebook', 'Instagram', 'TripAdvisor'].map((s) => (
                  <a key={s} href="#" style={{ fontFamily: F, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sand-3)', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.18)', padding: '7px 14px', display: 'inline-block', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--sand-3)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)'; }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <p style={{ fontFamily: F, fontSize: '0.82rem', color: 'var(--sand-3)' }}>© 2025 Black Pyramids Tours. All rights reserved.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
              <span style={{ fontFamily: F, fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>Luxury · Comfort · Egypt</span>
              <span style={{ width: 20, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)',
        border: hovered ? '1px solid rgba(201,168,76,0.5)' : '1px solid rgba(201,168,76,0.18)',
        padding: '28px 24px',
        textAlign: 'center',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'all 0.35s ease',
      }}
    >
      <div style={{ fontSize: '2.2rem', marginBottom: 14, display: 'inline-block', transform: hovered ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s' }}>{icon}</div>
      <h3 className="font-heading" style={{ fontSize: '1.05rem', color: hovered ? 'var(--gold)' : 'var(--sand)', marginBottom: 10, transition: 'color 0.3s' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif', fontSize: '0.9rem', color: 'var(--sand-3)', lineHeight: 1.75 }}>{desc}</p>
    </div>
  );
}

