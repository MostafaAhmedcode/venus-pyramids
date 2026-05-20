'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const homeLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Tours',    href: '/tours' },
  { label: 'Egypt Blog', href: '/blog' },
  { label: 'Hotels',   href: '/hotels' },
  { label: 'Rooftop',  href: '/rooftop' },
  { label: 'Transportation', href: '/transfer' },
  { label: 'Team',     href: '/team' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const links = homeLinks;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(7,12,26,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.22)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* ── Logo ── */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="Black Pyramids Tours"
              style={{ height: 56, width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </a>

          {/* ── Desktop links ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--sand-2)',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  position: 'relative',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sand-2)')}
              >
                {l.label}
              </a>
            ))}
            <Link
                href="/destinations"
                style={{
                  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  border: '1px solid rgba(201,168,76,0.35)',
                  borderRadius: 2,
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                🗺 Destinations
              </Link>
            <a
              href="mailto:info@venuspyramids.com"
              className="btn-primary"
              style={{ marginLeft: 16, textDecoration: 'none' }}
            >
              Book Now
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <span style={{
              display: 'block', width: 24, height: 1.5,
              background: open ? 'var(--gold)' : 'var(--sand)',
              transition: 'all 0.3s',
              transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 24, height: 1.5,
              background: open ? 'var(--gold)' : 'var(--sand)',
              transition: 'all 0.3s',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 24, height: 1.5,
              background: open ? 'var(--gold)' : 'var(--sand)',
              transition: 'all 0.3s',
              transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
            }} />
          </button>
        </div>

          <div
            className="show-mobile"
            style={{
              overflow: 'hidden',
              maxHeight: open ? 400 : 0,
              transition: 'max-height 0.4s ease',
              borderTop: open ? '1px solid rgba(201,168,76,0.15)' : 'none',
            }}
          >
            <div style={{ padding: '16px 0 20px' }}>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--sand-2)',
                    textDecoration: 'none',
                    padding: '12px 8px',
                    borderBottom: '1px solid rgba(201,168,76,0.08)',
                    transition: 'color 0.2s, padding-left 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--gold)';
                    e.currentTarget.style.paddingLeft = '16px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--sand-2)';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                >
                  {l.label}
                </a>
              ))}
              <Link
                href="/destinations"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  padding: '12px 8px',
                  borderBottom: '1px solid rgba(201,168,76,0.08)',
                }}
              >
                🗺 Destinations
              </Link>
              <a
                href="mailto:info@venuspyramids.com"
                className="btn-primary"
                style={{ marginTop: 16, textDecoration: 'none', display: 'inline-block' }}
              >
                Book Now
              </a>
            </div>
          </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
