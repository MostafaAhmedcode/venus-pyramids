'use client';

import { Room } from '@/data/rooms';
import { useState, useEffect } from 'react';
import RoomModal from './RoomModal';
import ImageCarousel from './ImageCarousel';

const F = 'var(--font-inter), Inter, system-ui, sans-serif';

export default function RoomCard({ room, index = 0 }: { room: Room; index?: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);

  const allImages = room.images && room.images.length > 0 ? room.images : [room.image];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 60);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.6s ease ${index * 50}ms, transform 0.6s ease ${index * 50}ms`, height: '100%' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)', border: hovered ? '1px solid rgba(201,168,76,0.55)' : '1px solid rgba(201,168,76,0.18)', borderRadius: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transform: hovered ? 'translateY(-8px)' : 'translateY(0)', boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.3)', transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)' }}
        >
          {/* Carousel — stops propagation so arrows don't open modal */}
          <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
            <ImageCarousel images={allImages} alt={room.name} height={200} brightness={hovered ? 0.5 : 0.7} />

            {/* Badges */}
            <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 6, pointerEvents: 'none' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: F, fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--navy)', padding: '4px 8px' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--navy)' }} />
                Available
              </span>
            </div>
            <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 6, pointerEvents: 'none' }}>
              <span style={{ fontFamily: F, fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'rgba(7,12,26,0.75)', border: '1px solid rgba(201,168,76,0.35)', color: 'var(--gold)', padding: '4px 8px', backdropFilter: 'blur(6px)' }}>
                👥 {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}
              </span>
            </div>
            <div style={{ position: 'absolute', bottom: 28, left: 12, right: 12, zIndex: 6, pointerEvents: 'none' }}>
              <span style={{ fontFamily: F, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>📍 {room.view}</span>
            </div>
          </div>

          {/* Body — clicking here opens modal */}
          <div
            onClick={() => setModal(true)}
            role="button" tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') setModal(true); }}
            aria-label={`View details for ${room.name}`}
            style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1, cursor: 'pointer' }}
          >
            <h3 className="font-heading" style={{ fontSize: '0.95rem', fontWeight: 500, color: hovered ? 'var(--gold)' : 'var(--sand)', marginBottom: 6, lineHeight: 1.3, transition: 'color 0.3s' }}>{room.name}</h3>
            <div style={{ fontFamily: F, fontSize: '0.65rem', color: 'var(--sand-3)', marginBottom: 10 }}>📐 {room.size}</div>
            <p style={{ fontFamily: F, fontSize: '0.78rem', color: 'var(--sand-2)', lineHeight: 1.65, marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', flex: 1 }}>{room.description}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 12 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < Math.floor(room.rating) ? 'var(--gold)' : 'rgba(201,168,76,0.2)', fontSize: '0.75rem' }}>★</span>
              ))}
              <span style={{ fontFamily: F, fontSize: '0.7rem', color: 'var(--sand-3)', marginLeft: 4 }}>{room.rating}/5</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
              {room.highlights.map(h => (
                <span key={h} style={{ fontFamily: F, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--gold)', padding: '3px 7px' }}>{h}</span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: 14, marginTop: 'auto' }}>
              <div>
                <div style={{ fontFamily: F, fontSize: '0.55rem', color: 'var(--sand-3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>From</div>
                <div className="font-heading" style={{ fontSize: '1.7rem', color: 'var(--gold)', lineHeight: 1 }}>${room.price}</div>
                <div style={{ fontFamily: F, fontSize: '0.55rem', color: 'var(--sand-3)' }}>per night</div>
              </div>
              <button className="btn-primary" onClick={e => { e.stopPropagation(); setModal(true); }} style={{ fontSize: '0.62rem', padding: '10px 18px' }}>Details</button>
            </div>
          </div>
        </div>
      </div>

      {modal && <RoomModal room={room} onClose={() => setModal(false)} />}
    </>
  );
}
