'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function GuestLoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // If guest is already logged in, redirect straight to dashboard
    const savedEmail = localStorage.getItem('vpi_guest_email');
    if (savedEmail) {
      router.push('/user/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setError('Please enter a valid email address format.');
      return;
    }

    setLoading(true);
    try {
      // Store in localStorage
      localStorage.setItem('vpi_guest_email', trimmedEmail);
      router.push('/user/dashboard');
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      background: 'radial-gradient(circle at center, #0e172e 0%, #040710 100%)',
      color: '#fff',
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blur Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'rgba(201, 168, 76, 0.05)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '20%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'rgba(29, 78, 216, 0.06)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        width: '100%',
        maxWidth: 440,
        background: 'linear-gradient(165deg, rgba(13, 20, 40, 0.85) 0%, rgba(7, 10, 22, 0.95) 100%)',
        border: '1px solid rgba(201, 168, 76, 0.3)',
        borderRadius: 4,
        padding: '40px 32px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Gold Accent Corner */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 2,
          background: 'linear-gradient(90deg, transparent, var(--gold, #c9a84c), transparent)'
        }} />

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 12 }}>
            <span style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              color: 'var(--gold, #c9a84c)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>Venus Pyramids</span>
          </Link>
          <h1 style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#fff',
            letterSpacing: '0.04em',
            marginTop: 4
          }}>Guest Lookup Portal</h1>
          <p style={{
            fontSize: '0.82rem',
            color: 'var(--sand-3, #a29e96)',
            marginTop: 6,
            lineHeight: 1.5
          }}>Enter your email address to review your room and tour reservations, view instant invoices, and track status timelines.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label htmlFor="email" style={{
              display: 'block',
              fontSize: '0.72rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--gold, #c9a84c)',
              marginBottom: 8
            }}>Reservation Email</label>
            <input
              id="email"
              type="email"
              placeholder="e.g. guest@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(4, 7, 18, 0.6)',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                borderRadius: 2,
                color: '#fff',
                fontSize: '0.9rem',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--gold, #c9a84c)';
                e.target.style.boxShadow = '0 0 8px rgba(201, 168, 76, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(201, 168, 76, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {error && (
            <div style={{
              padding: '10px 12px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              fontSize: '0.8rem',
              borderRadius: 2,
              lineHeight: 1.4
            }}>
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '14px',
              background: 'var(--gold, #c9a84c)',
              border: '1px solid var(--gold, #c9a84c)',
              borderRadius: 2,
              color: '#040710',
              fontWeight: 600,
              fontSize: '0.88rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--gold, #c9a84c)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.background = 'var(--gold, #c9a84c)';
                e.currentTarget.style.color = '#040710';
              }
            }}
          >
            {loading ? 'Searching Reservations...' : 'Lookup Reservations'}
          </button>
        </form>

        <div style={{
          marginTop: 28,
          paddingTop: 20,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          textAlign: 'center'
        }}>
          <Link href="/" style={{
            fontSize: '0.78rem',
            color: 'var(--sand-2, #dcd7cd)',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold, #c9a84c)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--sand-2, #dcd7cd)'}
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
