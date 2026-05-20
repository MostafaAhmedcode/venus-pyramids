'use client';

import { useState } from 'react';

interface Props {
  images: string[];
  alt: string;
  height?: number;
  objectFit?: 'cover' | 'contain';
  showDots?: boolean;
  showArrows?: boolean;
  brightness?: number;
}

export default function ImageCarousel({ images, alt, height = 220, showDots = true, showArrows = true, brightness = 0.7 }: Props) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  function prev(e?: React.MouseEvent) {
    e?.stopPropagation();
    setIdx(i => (i - 1 + total) % total);
  }
  function next(e?: React.MouseEvent) {
    e?.stopPropagation();
    setIdx(i => (i + 1) % total);
  }

  const src = images[idx] || images[0];

  return (
    <div style={{ position: 'relative', height, overflow: 'hidden', background: '#0a0f1e', flexShrink: 0 }}>
      {/* Image */}
      <img
        key={src}
        src={src}
        alt={`${alt} — photo ${idx + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `brightness(${brightness})`, transition: 'opacity 0.35s ease' }}
        onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=450&fit=crop'; }}
      />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,12,26,0.85) 0%, rgba(7,12,26,0.2) 50%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Arrows — only if more than 1 image */}
      {showArrows && total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, transition: 'all 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
          >‹</button>
          <button
            onClick={next}
            aria-label="Next photo"
            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, transition: 'all 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
          >›</button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5, zIndex: 5 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setIdx(i); }}
              aria-label={`Photo ${i + 1}`}
              style={{ width: i === idx ? 18 : 6, height: 6, borderRadius: 3, background: i === idx ? 'var(--gold)' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.25s' }}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {total > 1 && (
        <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)', fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, padding: '3px 8px', zIndex: 5 }}>
          {idx + 1}/{total}
        </div>
      )}
    </div>
  );
}
