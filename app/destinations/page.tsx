import { Metadata } from 'next';
import { tours } from '../../data/tours';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import DestinationCard from '../../components/DestinationCard';

export const metadata: Metadata = {
  title: 'Egypt Tourism Destinations | Black Pyramids Tours',
  description: 'Explore Egypt\'s most iconic destinations — Cairo & Giza, Luxor, Aswan, Alexandria, Sinai, Hurghada, and more. Find the perfect tour for every traveller.',
};

const DESTINATION_META: Record<string, { emoji: string; tagline: string; image: string }> = {
  'Cairo & Giza':  { emoji: '🏛', tagline: 'The last surviving Wonder of the Ancient World', image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=500&fit=crop&q=85' },
  'Luxor':         { emoji: '🏺', tagline: 'The world\'s greatest open-air museum', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=500&fit=crop&q=85' },
  'Aswan':         { emoji: '⛵', tagline: 'Nubian culture on the banks of the Nile', image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&h=500&fit=crop&q=85' },
  'Alexandria':    { emoji: '🏛', tagline: 'Where ancient Greece meets the Mediterranean', image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=500&fit=crop&q=85' },
  'Sinai':         { emoji: '⛰', tagline: 'Sacred mountains and world-class coral reefs', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&q=85' },
  'Hurghada':      { emoji: '🤿', tagline: 'Egypt\'s premier Red Sea diving destination', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&q=85' },
  'Fayoum':        { emoji: '🌿', tagline: 'Egypt\'s hidden oasis and fossil paradise', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&q=85' },
  'White Desert':  { emoji: '🏜', tagline: 'Surreal chalk formations under a billion stars', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=500&fit=crop&q=85' },
  'El Minya':      { emoji: '🗿', tagline: 'Akhenaten\'s lost city and Middle Kingdom tombs', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=500&fit=crop&q=85' },
  'Red Sea':       { emoji: '🐠', tagline: 'Biodiverse reefs along 1,900 km of coastline', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&q=85' },
};

const F = 'var(--font-inter), Inter, system-ui, sans-serif';

export default function DestinationsPage() {
  // Build destination list with tour counts
  const destinations = Object.entries(DESTINATION_META).map(([name, meta]) => ({
    name,
    ...meta,
    tourCount: tours.filter(t => t.destination === name).length,
    minPrice: Math.min(...tours.filter(t => t.destination === name).map(t => t.basePrice)),
  })).filter(d => d.tourCount > 0);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)', color: '#fff', paddingBottom: 80 }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 80, textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1600&h=800&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Explore Egypt</div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, color: '#fff', marginBottom: 20, lineHeight: 1.1 }}>Tourism Destinations</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span style={{ color: 'var(--gold)', fontSize: 8 }}>◆</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
          <p style={{ fontFamily: F, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--sand-2)', lineHeight: 1.75, fontStyle: 'italic' }}>
            From the pyramids of Giza to the coral reefs of the Red Sea — discover Egypt's most extraordinary destinations, each with its own ancient story to tell.
          </p>
        </div>
      </section>

      {/* Destination Grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}>
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} dest={dest} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '80px 24px 0' }}>
        <p style={{ fontFamily: F, fontSize: '1.05rem', color: 'var(--sand-2)', marginBottom: 24 }}>Not sure where to start? Browse all our tours.</p>
        <Link href="/#tours" style={{ fontFamily: F, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--navy)', padding: '16px 36px', textDecoration: 'none', borderRadius: 2, display: 'inline-block' }}>
          View All Tours
        </Link>
      </section>
    </div>
  );
}
