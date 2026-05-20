'use client';

import Link from 'next/link';
import { useState } from 'react';

const F = 'var(--font-inter), Inter, system-ui, sans-serif';

interface DestinationCardProps {
  dest: {
    name: string;
    emoji: string;
    tagline: string;
    image: string;
    tourCount: number;
    minPrice: number;
  };
}

export default function DestinationCard({ dest }: DestinationCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/?destination=${encodeURIComponent(dest.name)}#tours`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          border: hovered ? '1px solid rgba(201,168,76,0.55)' : '1px solid rgba(201,168,76,0.18)',
          transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
          background: 'rgba(255,255,255,0.02)',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.07)' : 'none',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
          <img
            src={dest.image}
            alt={dest.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.6s ease' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,12,26,0.85) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--gold)', color: 'var(--navy)', fontFamily: F, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 2 }}>
            {dest.tourCount} {dest.tourCount === 1 ? 'Tour' : 'Tours'}
          </div>
          <div style={{ position: 'absolute', bottom: 16, left: 16, fontSize: '2rem' }}>{dest.emoji}</div>
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px 24px' }}>
          <h2 className="font-heading" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: 8, lineHeight: 1.2 }}>{dest.name}</h2>
          <p style={{ fontFamily: F, fontSize: '0.9rem', color: 'var(--sand-2)', lineHeight: 1.6, marginBottom: 16, fontStyle: 'italic' }}>{dest.tagline}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: F, fontSize: '0.8rem', color: 'var(--sand-3)' }}>
              From <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1rem' }}>${dest.minPrice}</span>
            </span>
            <span style={{ fontFamily: F, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: hovered ? '#fff' : 'var(--gold)', transition: 'color 0.2s' }}>
              Explore →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
