'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

      {/* ── Background image ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1800&q=85&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 55%',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* ── Dark gradient overlays ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(7,12,26,0.55) 0%, rgba(7,12,26,0.45) 40%, rgba(7,12,26,0.85) 80%, rgba(7,12,26,1) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(7,12,26,0.5) 0%, transparent 40%, transparent 60%, rgba(7,12,26,0.5) 100%)' }} />

      {/* ── Decorative gold lines ── */}
      <div style={{ position: 'absolute', top: '28%', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: '25%', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.08), transparent)', zIndex: 2 }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '100px 24px 60px', maxWidth: 900, margin: '0 auto', width: '100%' }}>

        {/* Eyebrow */}
        <div
          className={`anim-fade-up ${loaded ? '' : 'opacity-0'}`}
          style={{ marginBottom: 28, opacity: loaded ? 1 : 0 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
            fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            Giza Pyramids Gateway · Est. 2005
            <span style={{ width: 32, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`font-heading anim-fade-up delay-200 ${loaded ? '' : 'opacity-0'}`}
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: 8,
            opacity: loaded ? 1 : 0,
          }}
        >
          Discover Ancient
        </h1>
        <h1
          className={`font-heading gradient-text anim-fade-up delay-300 ${loaded ? '' : 'opacity-0'}`}
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.08,
            marginBottom: 24,
            opacity: loaded ? 1 : 0,
          }}
        >
          Egypt
        </h1>

        {/* Ornament */}
        <div className={`anim-fade-up delay-400 ${loaded ? '' : 'opacity-0'}`} style={{ opacity: loaded ? 1 : 0, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span style={{ color: 'var(--gold)', fontSize: 8 }}>◆</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
        </div>

        {/* Subtitle */}
        <p
          className={`font-sub anim-fade-up delay-400 ${loaded ? '' : 'opacity-0'}`}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            fontStyle: 'italic',
            color: 'var(--sand-2)',
            maxWidth: 600,
            margin: '0 auto 36px',
            lineHeight: 1.7,
            opacity: loaded ? 1 : 0,
          }}
        >
          Luxury hotel steps from the Giza Pyramids. Private daily tours across all of Egypt — our entire team, including all drivers and hotel staff, speaks English fluently.
        </p>

        {/* Feature pills */}
        <div
          className={`anim-fade-up delay-500 ${loaded ? '' : 'opacity-0'}`}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10,
            marginBottom: 40, opacity: loaded ? 1 : 0,
          }}
        >
          {[
            { icon: '🔺', text: 'Steps from Pyramids' },
            { icon: '🚗', text: 'Private Luxury Cars' },
            { icon: '🗣️', text: 'Full English Team' },
            { icon: '🍽️', text: 'Lunch Included' },
          ].map((f) => (
            <div key={f.text} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(201,168,76,0.25)',
              padding: '8px 16px',
              backdropFilter: 'blur(8px)',
            }}>
              <span style={{ fontSize: '0.9rem' }}>{f.icon}</span>
              <span style={{
                fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
                fontSize: '0.68rem', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--sand-2)',
              }}>{f.text}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className={`anim-fade-up delay-600 ${loaded ? '' : 'opacity-0'}`}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16,
            opacity: loaded ? 1 : 0,
          }}
        >
          <a href="#tours" className="btn-primary" style={{ textDecoration: 'none' }}>
            Explore Our Tours
          </a>
          <a href="#hotel" className="btn-secondary" style={{ textDecoration: 'none' }}>
            View Rooms
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`anim-fade-up delay-700 ${loaded ? '' : 'opacity-0'}`}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(201,168,76,0.2)',
            marginTop: 64, paddingTop: 32,
            opacity: loaded ? 1 : 0,
          }}
        >
          {[
            { val: '4.9★', label: 'Guest Rating' },
            { val: '12+',  label: 'Daily Tours' },
            { val: '16',   label: 'Luxury Rooms' },
          ].map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center',
              borderLeft: i > 0 ? '1px solid rgba(201,168,76,0.18)' : 'none',
              padding: '0 16px',
            }}>
              <div className="font-heading" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: 'var(--gold)', lineHeight: 1.1, marginBottom: 6 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sand-3)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        animation: 'scrollBounce 1.8s ease-in-out infinite',
        opacity: 0.6,
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
