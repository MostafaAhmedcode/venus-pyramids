'use client';

import { StaffMember } from '@/data/staff';
import { useState, useEffect } from 'react';

export default function StaffCard({ member, index = 0 }: { member: StaffMember; index?: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 100);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)',
          border: hovered ? '1px solid rgba(201,168,76,0.5)' : '1px solid rgba(201,168,76,0.18)',
          borderRadius: 2,
          overflow: 'hidden',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.07)' : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
        {/* Photo */}
        <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
          <img
            src={member.image}
            alt={member.name}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: 'top',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              filter: hovered ? 'brightness(0.6)' : 'brightness(0.8)',
              transition: 'all 0.5s ease',
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(7,12,26,0.95) 0%, rgba(7,12,26,0.2) 60%, transparent 100%)',
          }} />

          {/* Role badge */}
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <span style={{
              fontFamily: 'var(--font-lato), sans-serif',
              fontSize: '0.55rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              background: 'var(--gold)', color: 'var(--navy)',
              padding: '4px 10px',
            }}>{member.role}</span>
          </div>

          {/* Languages on hover */}
          <div style={{
            position: 'absolute', bottom: 12, left: 12, right: 12,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s ease',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {member.languages.map((lang) => (
                <span key={lang} style={{
                  fontFamily: 'var(--font-lato), sans-serif',
                  fontSize: '0.55rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: 'rgba(7,12,26,0.8)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: 'var(--gold)',
                  padding: '3px 8px',
                  backdropFilter: 'blur(4px)',
                }}>{lang}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: '20px 20px 24px' }}>
          <h3
            className="font-heading"
            style={{
              fontSize: '1.1rem', fontWeight: 500,
              color: hovered ? 'var(--gold)' : 'var(--sand)',
              marginBottom: 4, transition: 'color 0.3s',
            }}
          >
            {member.name}
          </h3>

          {member.speciality && (
            <div style={{
              fontFamily: 'var(--font-lato), sans-serif',
              fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--gold)', marginBottom: 12, opacity: 0.8,
            }}>
              {member.speciality}
            </div>
          )}

          <p style={{
            fontFamily: 'var(--font-lato), sans-serif',
            fontSize: '0.76rem', color: 'var(--sand-2)',
            lineHeight: 1.7, marginBottom: 16,
          }}>
            {member.bio}
          </p>

          {/* Languages row */}
          <div style={{
            borderTop: '1px solid rgba(201,168,76,0.12)',
            paddingTop: 12,
            display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap',
          }}>
            <span style={{
              fontFamily: 'var(--font-lato), sans-serif',
              fontSize: '0.55rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--sand-3)',
            }}>Speaks:</span>
            {member.languages.map((lang) => (
              <span key={lang} style={{
                fontFamily: 'var(--font-lato), sans-serif',
                fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: 'var(--gold)',
                padding: '2px 7px',
              }}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
