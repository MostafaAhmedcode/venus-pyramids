'use client';

import { useState, useRef, useEffect } from 'react';
import { tours as initialTours, Tour, PriceTier } from '@/data/tours';

const F = 'var(--font-inter), Inter, system-ui, sans-serif';
const inputStyle = { width: '100%', background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(201,168,76,0.3)', color: '#fff', padding: '9px 12px', fontFamily: F, fontSize: '0.88rem', boxSizing: 'border-box' as const, outline: 'none' };
const labelStyle = { fontFamily: F, fontSize: '0.65rem', fontWeight: 600 as const, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' as const, display: 'block' as const, marginBottom: 5 };

type EditableTour = Tour & { images: string[] };

export default function AdminToursTab({ getToken }: { getToken: () => string }) {
  const [tours, setTours] = useState<EditableTour[]>(
    initialTours.map(t => ({ ...t, images: t.images && t.images.length > 0 ? t.images : [t.image] }))
  );
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<EditableTour>>({});
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState('');
  const [msgOk, setMsgOk] = useState(true);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Load saved overrides on mount
  useEffect(() => {
    fetch('/api/save-data?type=tours').then(r => r.json()).then(json => {
      if (json.success && json.data.length > 0) {
        setTours(prev => prev.map(t => {
          const o = json.data.find((x: any) => x.id === t.id);
          if (!o) return t;
          return { ...t, ...o, images: o.images && o.images.length > 0 ? o.images : [o.image || t.image] };
        }));
      }
    }).catch(() => {});
  }, []);

  function showMsg(text: string, ok = true) {
    setMsg(text); setMsgOk(ok);
    setTimeout(() => setMsg(''), 4000);
  }

  function startEdit(tour: EditableTour) {
    setEditingId(tour.id);
    setEditForm({
      title: tour.title, description: tour.description, location: tour.location,
      destination: tour.destination, basePrice: tour.basePrice, duration: tour.duration,
      tourType: tour.tourType, pickupTime: tour.pickupTime, rating: tour.rating,
      reviews: tour.reviews, meetingPoint: tour.meetingPoint, note: tour.note || '',
      highlights: [...tour.highlights], includes: [...tour.includes],
      excludes: [...tour.excludes], images: [...tour.images],
      priceTiers: tour.priceTiers.map(p => ({ ...p })),
      itinerary: tour.itinerary.map(i => ({ ...i })),
    });
  }

  function cancelEdit() { setEditingId(null); setEditForm({}); }

  async function saveEdit(id: number) {
    const updated = { ...tours.find(t => t.id === id)!, ...editForm, image: (editForm.images || [])[0] };
    try {
      const res = await fetch('/api/save-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'tours', item: updated }),
      });
      const json = await res.json();
      if (!json.success) { showMsg('❌ Save failed: ' + json.message, false); return; }
    } catch { showMsg('❌ Could not reach save API', false); return; }

    setTours(prev => prev.map(t => t.id === id ? updated : t));
    setEditingId(null);
    showMsg('✅ Tour saved! Changes are now live on the website.');
  }

  async function uploadPhotos(id: number, files: FileList) {
    setUploading(true);
    const newUrls: string[] = [];
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append('file', file);
      try {
        const res = await fetch('/api/upload-image', { method: 'POST', body: fd });
        const json = await res.json();
        if (json.success) newUrls.push(json.url);
        else showMsg('❌ ' + json.message, false);
      } catch { showMsg('❌ Upload failed', false); }
    }
    if (newUrls.length > 0) {
      setEditForm(f => ({ ...f, images: [...(f.images || []), ...newUrls] }));
      showMsg(`✅ ${newUrls.length} photo(s) uploaded`);
    }
    setUploading(false);
  }

  function removePhoto(idx: number) { setEditForm(f => ({ ...f, images: (f.images || []).filter((_, i) => i !== idx) })); }
  function setMainPhoto(idx: number) {
    setEditForm(f => { const imgs = [...(f.images || [])]; const [m] = imgs.splice(idx, 1); return { ...f, images: [m, ...imgs] }; });
  }

  function updateStrList(field: 'highlights' | 'includes' | 'excludes', idx: number, val: string) {
    setEditForm(f => { const arr = [...(f[field] as string[])]; arr[idx] = val; return { ...f, [field]: arr }; });
  }
  function addStrItem(field: 'highlights' | 'includes' | 'excludes') {
    setEditForm(f => ({ ...f, [field]: [...(f[field] as string[]), ''] }));
  }
  function removeStrItem(field: 'highlights' | 'includes' | 'excludes', idx: number) {
    setEditForm(f => ({ ...f, [field]: (f[field] as string[]).filter((_, i) => i !== idx) }));
  }

  function updateItinerary(idx: number, key: 'time' | 'activity', val: string) {
    setEditForm(f => { const arr = [...(f.itinerary || [])]; arr[idx] = { ...arr[idx], [key]: val }; return { ...f, itinerary: arr }; });
  }
  function addItinerary() { setEditForm(f => ({ ...f, itinerary: [...(f.itinerary || []), { time: '', activity: '' }] })); }
  function removeItinerary(idx: number) { setEditForm(f => ({ ...f, itinerary: (f.itinerary || []).filter((_, i) => i !== idx) })); }

  function updatePriceTier(idx: number, key: keyof PriceTier, val: string | number) {
    setEditForm(f => { const arr = [...(f.priceTiers || [])]; arr[idx] = { ...arr[idx], [key]: val }; return { ...f, priceTiers: arr }; });
  }
  function addPriceTier() { setEditForm(f => ({ ...f, priceTiers: [...(f.priceTiers || []), { label: '', price1: 0, price2: 0 }] })); }
  function removePriceTier(idx: number) { setEditForm(f => ({ ...f, priceTiers: (f.priceTiers || []).filter((_, i) => i !== idx) })); }

  const editing = editingId !== null ? tours.find(t => t.id === editingId) : null;

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <style>{`
        .admin-input:focus { border-color: var(--gold) !important; }
        .photo-thumb { position: relative; width: 90px; height: 65px; flex-shrink: 0; }
        .photo-thumb img { width: 100%; height: 100%; object-fit: cover; border: 1px solid rgba(201,168,76,0.25); }
        .photo-thumb .ph-actions { position: absolute; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; gap: 4px; opacity: 0; transition: opacity 0.2s; }
        .photo-thumb:hover .ph-actions { opacity: 1; }
      `}</style>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>Manage Tours</div>
        <div style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-3)' }}>{tours.length} tours — click Edit to change any detail, add photos, edit itinerary & pricing</div>
      </div>

      {msg && <div style={{ marginBottom: 16, padding: '10px 16px', background: msgOk ? 'rgba(6,214,160,0.08)' : 'rgba(220,50,50,0.08)', border: `1px solid ${msgOk ? 'rgba(6,214,160,0.3)' : 'rgba(220,50,50,0.3)'}`, fontFamily: F, fontSize: '0.85rem', color: msgOk ? '#06d6a0' : '#ff8080' }}>{msg}</div>}

      {/* Edit panel */}
      {editingId !== null && editing && (
        <div style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.3)', padding: '28px 24px', marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)' }}>Editing: {editing.title}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => saveEdit(editingId)} className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.75rem' }}>💾 Save</button>
              <button onClick={cancelEdit} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.75rem' }}>Cancel</button>
            </div>
          </div>

          {/* Photos */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Photos ({(editForm.images || []).length})</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
              {(editForm.images || []).map((img, i) => (
                <div key={i} className="photo-thumb">
                  <img src={img} alt={`photo ${i + 1}`} onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=90&h=65&fit=crop'; }} />
                  {i === 0 && <div style={{ position: 'absolute', top: 2, left: 2, background: 'var(--gold)', color: 'var(--navy)', fontFamily: F, fontSize: '0.5rem', fontWeight: 700, padding: '1px 4px' }}>MAIN</div>}
                  <div className="ph-actions">
                    {i !== 0 && <button onClick={() => setMainPhoto(i)} title="Set as main" style={{ background: 'var(--gold)', color: 'var(--navy)', border: 'none', cursor: 'pointer', fontSize: '0.6rem', fontWeight: 700, padding: '2px 5px' }}>★</button>}
                    <button onClick={() => removePhoto(i)} title="Remove" style={{ background: '#ff4444', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px' }}>✕</button>
                  </div>
                </div>
              ))}
              <label style={{ width: 90, height: 65, border: '2px dashed rgba(201,168,76,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'rgba(201,168,76,0.04)', flexShrink: 0 }}>
                <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => { if (e.target.files) uploadPhotos(editingId, e.target.files); e.target.value = ''; }} />
                <span style={{ fontSize: '1.2rem' }}>{uploading ? '⏳' : '+'}</span>
                <span style={{ fontFamily: F, fontSize: '0.55rem', color: 'var(--gold)', marginTop: 2 }}>{uploading ? 'Uploading' : 'Add Photos'}</span>
              </label>
            </div>
            <div style={{ fontFamily: F, fontSize: '0.72rem', color: 'var(--sand-3)' }}>Hover → ★ set as main · ✕ remove. Click + to add from your gallery (multiple allowed).</div>
          </div>

          {/* Basic fields */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div><label style={labelStyle}>Tour Title</label><input className="admin-input" style={inputStyle} value={editForm.title || ''} onChange={e => setEditForm(f => ({ ...f, title: e.target.value }))} /></div>
            <div><label style={labelStyle}>Location</label><input className="admin-input" style={inputStyle} value={editForm.location || ''} onChange={e => setEditForm(f => ({ ...f, location: e.target.value }))} /></div>
            <div><label style={labelStyle}>Base Price ($)</label><input className="admin-input" style={inputStyle} type="number" value={editForm.basePrice || ''} onChange={e => setEditForm(f => ({ ...f, basePrice: Number(e.target.value) }))} /></div>
            <div><label style={labelStyle}>Duration</label><input className="admin-input" style={inputStyle} value={editForm.duration || ''} onChange={e => setEditForm(f => ({ ...f, duration: e.target.value }))} /></div>
            <div><label style={labelStyle}>Pickup Time</label><input className="admin-input" style={inputStyle} value={editForm.pickupTime || ''} onChange={e => setEditForm(f => ({ ...f, pickupTime: e.target.value }))} /></div>
            <div><label style={labelStyle}>Tour Type</label>
              <select className="admin-input" style={{ ...inputStyle, cursor: 'pointer' }} value={editForm.tourType || ''} onChange={e => setEditForm(f => ({ ...f, tourType: e.target.value as Tour['tourType'] }))}>
                <option value="Half Day">Half Day</option>
                <option value="Full Day">Full Day</option>
                <option value="Multi-Day">Multi-Day</option>
              </select>
            </div>
            <div><label style={labelStyle}>Rating</label><input className="admin-input" style={inputStyle} type="number" step="0.1" min="0" max="5" value={editForm.rating || ''} onChange={e => setEditForm(f => ({ ...f, rating: Number(e.target.value) }))} /></div>
            <div><label style={labelStyle}>Reviews Count</label><input className="admin-input" style={inputStyle} type="number" value={editForm.reviews || ''} onChange={e => setEditForm(f => ({ ...f, reviews: Number(e.target.value) }))} /></div>
            <div><label style={labelStyle}>Meeting Point</label><input className="admin-input" style={inputStyle} value={editForm.meetingPoint || ''} onChange={e => setEditForm(f => ({ ...f, meetingPoint: e.target.value }))} /></div>
            <div><label style={labelStyle}>Note (optional)</label><input className="admin-input" style={inputStyle} value={editForm.note || ''} onChange={e => setEditForm(f => ({ ...f, note: e.target.value }))} /></div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Description</label>
            <textarea className="admin-input" style={{ ...inputStyle, minHeight: 90, resize: 'vertical' }} value={editForm.description || ''} onChange={e => setEditForm(f => ({ ...f, description: e.target.value }))} />
          </div>

          {/* Price Tiers */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Price Tiers</label>
              <button onClick={addPriceTier} style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, color: 'var(--gold)', background: 'none', border: '1px solid rgba(201,168,76,0.3)', padding: '4px 10px', cursor: 'pointer' }}>+ Add Tier</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {(editForm.priceTiers || []).map((tier, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px 36px', gap: 8, alignItems: 'center' }}>
                  <input className="admin-input" style={inputStyle} placeholder="Label (e.g. Car + Lunch)" value={tier.label} onChange={e => updatePriceTier(i, 'label', e.target.value)} />
                  <input className="admin-input" style={inputStyle} type="number" placeholder="1 person $" value={tier.price1} onChange={e => updatePriceTier(i, 'price1', Number(e.target.value))} />
                  <input className="admin-input" style={inputStyle} type="number" placeholder="2 persons $" value={tier.price2} onChange={e => updatePriceTier(i, 'price2', Number(e.target.value))} />
                  <button onClick={() => removePriceTier(i)} style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080', cursor: 'pointer', height: '100%', fontWeight: 700 }}>✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Highlights</label>
              <button onClick={() => addStrItem('highlights')} style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, color: 'var(--gold)', background: 'none', border: '1px solid rgba(201,168,76,0.3)', padding: '4px 10px', cursor: 'pointer' }}>+ Add</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 6 }}>
              {(editForm.highlights || []).map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 6 }}>
                  <input className="admin-input" style={{ ...inputStyle, flex: 1 }} value={h} onChange={e => updateStrList('highlights', i, e.target.value)} />
                  <button onClick={() => removeStrItem('highlights', i)} style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080', cursor: 'pointer', padding: '0 8px', fontWeight: 700 }}>✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* Includes */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Includes</label>
              <button onClick={() => addStrItem('includes')} style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, color: 'var(--gold)', background: 'none', border: '1px solid rgba(201,168,76,0.3)', padding: '4px 10px', cursor: 'pointer' }}>+ Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {(editForm.includes || []).map((inc, i) => (
                <div key={i} style={{ display: 'flex', gap: 6 }}>
                  <input className="admin-input" style={{ ...inputStyle, flex: 1 }} value={inc} onChange={e => updateStrList('includes', i, e.target.value)} />
                  <button onClick={() => removeStrItem('includes', i)} style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080', cursor: 'pointer', padding: '0 8px', fontWeight: 700 }}>✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* Excludes */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Excludes</label>
              <button onClick={() => addStrItem('excludes')} style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, color: 'var(--gold)', background: 'none', border: '1px solid rgba(201,168,76,0.3)', padding: '4px 10px', cursor: 'pointer' }}>+ Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {(editForm.excludes || []).map((ex, i) => (
                <div key={i} style={{ display: 'flex', gap: 6 }}>
                  <input className="admin-input" style={{ ...inputStyle, flex: 1 }} value={ex} onChange={e => updateStrList('excludes', i, e.target.value)} />
                  <button onClick={() => removeStrItem('excludes', i)} style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080', cursor: 'pointer', padding: '0 8px', fontWeight: 700 }}>✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Itinerary</label>
              <button onClick={addItinerary} style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, color: 'var(--gold)', background: 'none', border: '1px solid rgba(201,168,76,0.3)', padding: '4px 10px', cursor: 'pointer' }}>+ Add Step</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {(editForm.itinerary || []).map((step, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 36px', gap: 8, alignItems: 'center' }}>
                  <input className="admin-input" style={inputStyle} placeholder="Time" value={step.time} onChange={e => updateItinerary(i, 'time', e.target.value)} />
                  <input className="admin-input" style={inputStyle} placeholder="Activity description" value={step.activity} onChange={e => updateItinerary(i, 'activity', e.target.value)} />
                  <button onClick={() => removeItinerary(i)} style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080', cursor: 'pointer', height: '100%', fontWeight: 700 }}>✕</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tour list */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {tours.map(tour => (
          <div key={tour.id} style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: editingId === tour.id ? '1px solid rgba(201,168,76,0.6)' : '1px solid rgba(201,168,76,0.18)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 130, overflow: 'hidden', background: '#0a0f1e' }}>
              <img src={tour.images[0]} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=300&h=130&fit=crop'; }} />
              <div style={{ position: 'absolute', top: 8, left: 8, background: 'var(--gold)', color: 'var(--navy)', fontFamily: F, fontSize: '0.62rem', fontWeight: 700, padding: '3px 8px' }}>#{tour.id}</div>
              {tour.images.length > 1 && <div style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.6)', color: 'var(--gold)', fontFamily: F, fontSize: '0.62rem', fontWeight: 600, padding: '3px 8px', border: '1px solid rgba(201,168,76,0.3)' }}>🖼 {tour.images.length}</div>}
            </div>
            <div style={{ padding: '12px 14px' }}>
              <div style={{ fontFamily: F, fontSize: '0.88rem', fontWeight: 600, color: 'var(--sand)', marginBottom: 4, lineHeight: 1.3 }}>{tour.title}</div>
              <div style={{ fontFamily: F, fontSize: '0.72rem', color: 'var(--sand-3)', marginBottom: 10 }}>
                📍 {tour.destination} · ⏱ {tour.duration} · <span style={{ color: 'var(--gold)', fontWeight: 600 }}>from ${tour.basePrice}</span>
              </div>
              <button
                onClick={() => editingId === tour.id ? cancelEdit() : startEdit(tour)}
                className={editingId === tour.id ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', padding: '8px 0', fontSize: '0.72rem' }}
              >
                {editingId === tour.id ? '✕ Close Editor' : '✏️ Edit Tour'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
