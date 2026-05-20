'use client';

import { Tour } from '@/data/tours';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ImageCarousel from './ImageCarousel';

const F = 'var(--font-inter), Inter, system-ui, sans-serif';

export default function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const allImages = tour.images && tour.images.length > 0 ? tour.images : [tour.image];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 80);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 60}ms, transform 0.6s ease ${index * 60}ms`,
        height: '100%',
      }}
    >
      <Link href={`/tour/${tour.id}`} target="_blank" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div
          className="shimmer-wrap"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)',
            border: hovered ? '1px solid rgba(201,168,76,0.55)' : '1px solid rgba(201,168,76,0.18)',
            borderRadius: 2,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.07)' : '0 4px 20px rgba(0,0,0,0.3)',
            transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        >
          {/* Carousel */}
          <div style={{ position: 'relative' }} onClick={(e) => {
            // Only stop propagation if they clicked on the carousel next/prev arrows
            // We'll let the user click the image to navigate!
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.closest('button')) {
              e.preventDefault();
            }
          }}>
            <ImageCarousel images={allImages} alt={tour.title} height={210} brightness={hovered ? 0.5 : 0.7} />

            {/* Tour type badge */}
            <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 6, pointerEvents: 'none' }}>
              <span style={{ fontFamily: F, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--navy)', padding: '4px 10px' }}>{tour.tourType}</span>
            </div>

            {/* Destination badge */}
            <div style={{ position: 'absolute', top: 12, right: 10, zIndex: 6, pointerEvents: 'none' }}>
              <span style={{ fontFamily: F, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'rgba(7,12,26,0.75)', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)', padding: '4px 10px', backdropFilter: 'blur(6px)' }}>{tour.destination}</span>
            </div>

            {/* Duration */}
            <div style={{ position: 'absolute', bottom: 28, left: 12, zIndex: 6, pointerEvents: 'none' }}>
              <span style={{ fontFamily: F, fontSize: '0.65rem', color: 'rgba(255,255,255,0.85)' }}>🕐 {tour.duration}</span>
            </div>
          </div>

          {/* Body */}
          <div
            style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <h3 className="font-heading" style={{
              fontSize: '1rem', fontWeight: 500,
              color: hovered ? 'var(--gold)' : 'var(--sand)',
              marginBottom: 8, lineHeight: 1.35,
              transition: 'color 0.3s',
            }}>
              {tour.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.78rem', color: 'var(--sand-2)',
              lineHeight: 1.65, marginBottom: 14,
              display: '-webkit-box', WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical', overflow: 'hidden',
              flex: 1,
            }}>
              {tour.description}
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
              {tour.highlights.slice(0, 3).map((h) => (
                <span key={h} style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.58rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.22)',
                  color: 'var(--gold)',
                  padding: '3px 8px',
                }}>{h}</span>
              ))}
            </div>

            {/* Inclusions preview */}
            <div style={{
              borderTop: '1px solid rgba(201,168,76,0.12)',
              paddingTop: 12, marginBottom: 16,
              display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              {['Private luxury A/C car', 'Full English-speaking team', 'Lunch included'].map((inc) => (
                <div key={inc} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.68rem', color: 'var(--sand-2)' }}>{inc}</span>
                </div>
              ))}
            </div>

            {/* Rating + Price + CTA */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>⭐</span>
                  <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.8rem', color: 'var(--sand)', fontWeight: 700 }}>{tour.rating}</span>
                  <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.7rem', color: 'var(--sand-3)' }}>({tour.reviews})</span>
                </div>
                <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.58rem', color: 'var(--sand-3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>From</div>
                <div className="font-heading" style={{ fontSize: '1.7rem', color: 'var(--gold)', lineHeight: 1 }}>${tour.basePrice}</div>
                <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.58rem', color: 'var(--sand-3)' }}>per person</div>
              </div>
              <span
                className="btn-primary"
                style={{ fontSize: '0.62rem', padding: '10px 20px', display: 'inline-block' }}
              >
                Open The Trip
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
