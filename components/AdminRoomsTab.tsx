'use client';

import { useState, useRef, useEffect } from 'react';
import { rooms as initialRooms, Room } from '@/data/rooms';

const F = 'var(--font-inter), Inter, system-ui, sans-serif';
const inputStyle = { width: '100%', background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(201,168,76,0.3)', color: '#fff', padding: '9px 12px', fontFamily: F, fontSize: '0.88rem', boxSizing: 'border-box' as const, outline: 'none' };
const labelStyle = { fontFamily: F, fontSize: '0.65rem', fontWeight: 600 as const, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' as const, display: 'block' as const, marginBottom: 5 };

type EditableRoom = Room & { images: string[] };

export default function AdminRoomsTab({ getToken }: { getToken: () => string }) {
  const [rooms, setRooms] = useState<EditableRoom[]>(
    initialRooms.map(r => ({ ...r, images: r.images && r.images.length > 0 ? r.images : [r.image] }))
  );
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<EditableRoom>>({});
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState('');
  const [msgOk, setMsgOk] = useState(true);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Load saved overrides on mount
  useEffect(() => {
    fetch('/api/save-data?type=rooms').then(r => r.json()).then(json => {
      if (json.success && json.data.length > 0) {
        setRooms(prev => prev.map(r => {
          const o = json.data.find((x: any) => x.id === r.id);
          if (!o) return r;
          return { ...r, ...o, images: o.images && o.images.length > 0 ? o.images : [o.image || r.image] };
        }));
      }
    }).catch(() => {});
  }, []);

  function showMsg(text: string, ok = true) {
    setMsg(text); setMsgOk(ok);
    setTimeout(() => setMsg(''), 4000);
  }

  function startEdit(room: EditableRoom) {
    setEditingId(room.id);
    setEditForm({
      name: room.name, description: room.description, size: room.size,
      price: room.price, capacity: room.capacity, view: room.view,
      rating: room.rating, available: room.available,
      amenities: [...room.amenities], highlights: [...room.highlights],
      images: [...room.images],
    });
  }

  function cancelEdit() { setEditingId(null); setEditForm({}); }

  async function saveEdit(id: number) {
    const updated = { ...rooms.find(r => r.id === id)!, ...editForm, image: (editForm.images || [])[0] };
    try {
      const res = await fetch('/api/save-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'rooms', item: updated }),
      });
      const json = await res.json();
      if (!json.success) { showMsg('❌ Save failed: ' + json.message, false); return; }
    } catch { showMsg('❌ Could not reach save API', false); return; }

    setRooms(prev => prev.map(r => r.id === id ? updated : r));
    setEditingId(null);
    showMsg('✅ Room saved! Changes are now live on the website.');
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

  function removePhoto(idx: number) {
    setEditForm(f => ({ ...f, images: (f.images || []).filter((_, i) => i !== idx) }));
  }

  function setMainPhoto(idx: number) {
    setEditForm(f => {
      const imgs = [...(f.images || [])];
      const [main] = imgs.splice(idx, 1);
      return { ...f, images: [main, ...imgs] };
    });
  }

  function updateList(field: 'amenities' | 'highlights', idx: number, val: string) {
    setEditForm(f => {
      const arr = [...(f[field] as string[])];
      arr[idx] = val;
      return { ...f, [field]: arr };
    });
  }
  function addListItem(field: 'amenities' | 'highlights') {
    setEditForm(f => ({ ...f, [field]: [...(f[field] as string[]), ''] }));
  }
  function removeListItem(field: 'amenities' | 'highlights', idx: number) {
    setEditForm(f => ({ ...f, [field]: (f[field] as string[]).filter((_, i) => i !== idx) }));
  }

  const editing = editingId !== null ? rooms.find(r => r.id === editingId) : null;

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
        <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>Manage Rooms</div>
        <div style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-3)' }}>{rooms.length} rooms — click Edit to change any detail or add multiple photos</div>
      </div>

      {msg && <div style={{ marginBottom: 16, padding: '10px 16px', background: msgOk ? 'rgba(6,214,160,0.08)' : 'rgba(220,50,50,0.08)', border: `1px solid ${msgOk ? 'rgba(6,214,160,0.3)' : 'rgba(220,50,50,0.3)'}`, fontFamily: F, fontSize: '0.85rem', color: msgOk ? '#06d6a0' : '#ff8080' }}>{msg}</div>}

      {/* Edit panel */}
      {editingId !== null && editing && (
        <div style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.3)', padding: '28px 24px', marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)' }}>Editing: {editing.name}</div>
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
                  <img src={img} alt={`photo ${i + 1}`} onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=90&h=65&fit=crop'; }} />
                  {i === 0 && <div style={{ position: 'absolute', top: 2, left: 2, background: 'var(--gold)', color: 'var(--navy)', fontFamily: F, fontSize: '0.5rem', fontWeight: 700, padding: '1px 4px' }}>MAIN</div>}
                  <div className="ph-actions">
                    {i !== 0 && <button onClick={() => setMainPhoto(i)} title="Set as main" style={{ background: 'var(--gold)', color: 'var(--navy)', border: 'none', cursor: 'pointer', fontSize: '0.6rem', fontWeight: 700, padding: '2px 5px' }}>★</button>}
                    <button onClick={() => removePhoto(i)} title="Remove" style={{ background: '#ff4444', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px' }}>✕</button>
                  </div>
                </div>
              ))}
              <label style={{ width: 90, height: 65, border: '2px dashed rgba(201,168,76,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'rgba(201,168,76,0.04)', flexShrink: 0, transition: 'all 0.2s' }}>
                <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => { if (e.target.files) uploadPhotos(editingId, e.target.files); e.target.value = ''; }} />
                <span style={{ fontSize: '1.2rem' }}>{uploading ? '⏳' : '+'}</span>
                <span style={{ fontFamily: F, fontSize: '0.55rem', color: 'var(--gold)', marginTop: 2 }}>{uploading ? 'Uploading' : 'Add Photos'}</span>
              </label>
            </div>
            <div style={{ fontFamily: F, fontSize: '0.72rem', color: 'var(--sand-3)' }}>Hover a photo → ★ to set as main cover · ✕ to remove. Click + to add more from your gallery.</div>
          </div>

          {/* Basic fields */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div><label style={labelStyle}>Room Name</label><input className="admin-input" style={inputStyle} value={editForm.name || ''} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} /></div>
            <div><label style={labelStyle}>Price per Night ($)</label><input className="admin-input" style={inputStyle} type="number" value={editForm.price || ''} onChange={e => setEditForm(f => ({ ...f, price: Number(e.target.value) }))} /></div>
            <div><label style={labelStyle}>Capacity (guests)</label><input className="admin-input" style={inputStyle} type="number" value={editForm.capacity || ''} onChange={e => setEditForm(f => ({ ...f, capacity: Number(e.target.value) }))} /></div>
            <div><label style={labelStyle}>Room Size</label><input className="admin-input" style={inputStyle} value={editForm.size || ''} onChange={e => setEditForm(f => ({ ...f, size: e.target.value }))} /></div>
            <div><label style={labelStyle}>View Type</label><input className="admin-input" style={inputStyle} value={editForm.view || ''} onChange={e => setEditForm(f => ({ ...f, view: e.target.value }))} /></div>
            <div><label style={labelStyle}>Rating (0–5)</label><input className="admin-input" style={inputStyle} type="number" step="0.1" min="0" max="5" value={editForm.rating || ''} onChange={e => setEditForm(f => ({ ...f, rating: Number(e.target.value) }))} /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Available</label>
              <input type="checkbox" checked={!!editForm.available} onChange={e => setEditForm(f => ({ ...f, available: e.target.checked }))} style={{ width: 18, height: 18, cursor: 'pointer' }} />
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Description</label>
            <textarea className="admin-input" style={{ ...inputStyle, minHeight: 90, resize: 'vertical' }} value={editForm.description || ''} onChange={e => setEditForm(f => ({ ...f, description: e.target.value }))} />
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Highlights</label>
              <button onClick={() => addListItem('highlights')} style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, color: 'var(--gold)', background: 'none', border: '1px solid rgba(201,168,76,0.3)', padding: '4px 10px', cursor: 'pointer' }}>+ Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {(editForm.highlights || []).map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 8 }}>
                  <input className="admin-input" style={{ ...inputStyle, flex: 1 }} value={h} onChange={e => updateList('highlights', i, e.target.value)} />
                  <button onClick={() => removeListItem('highlights', i)} style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080', cursor: 'pointer', padding: '0 10px', fontWeight: 700 }}>✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Amenities</label>
              <button onClick={() => addListItem('amenities')} style={{ fontFamily: F, fontSize: '0.68rem', fontWeight: 600, color: 'var(--gold)', background: 'none', border: '1px solid rgba(201,168,76,0.3)', padding: '4px 10px', cursor: 'pointer' }}>+ Add</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 6 }}>
              {(editForm.amenities || []).map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 6 }}>
                  <input className="admin-input" style={{ ...inputStyle, flex: 1 }} value={a} onChange={e => updateList('amenities', i, e.target.value)} />
                  <button onClick={() => removeListItem('amenities', i)} style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080', cursor: 'pointer', padding: '0 8px', fontWeight: 700 }}>✕</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Room list */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {rooms.map(room => (
          <div key={room.id} style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: editingId === room.id ? '1px solid rgba(201,168,76,0.6)' : '1px solid rgba(201,168,76,0.18)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 140, overflow: 'hidden', background: '#0a0f1e' }}>
              <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=140&fit=crop'; }} />
              <div style={{ position: 'absolute', top: 8, left: 8, background: 'var(--gold)', color: 'var(--navy)', fontFamily: F, fontSize: '0.62rem', fontWeight: 700, padding: '3px 8px' }}>Room {room.id}</div>
              {room.images.length > 1 && <div style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.6)', color: 'var(--gold)', fontFamily: F, fontSize: '0.62rem', fontWeight: 600, padding: '3px 8px', border: '1px solid rgba(201,168,76,0.3)' }}>🖼 {room.images.length}</div>}
            </div>
            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 600, color: 'var(--sand)', marginBottom: 4, lineHeight: 1.3 }}>{room.name}</div>
              <div style={{ fontFamily: F, fontSize: '0.75rem', color: 'var(--sand-3)', marginBottom: 12 }}>
                📍 {room.view} · 👥 {room.capacity} · <span style={{ color: 'var(--gold)', fontWeight: 600 }}>${room.price}/night</span>
              </div>
              <button
                onClick={() => editingId === room.id ? cancelEdit() : startEdit(room)}
                className={editingId === room.id ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', padding: '9px 0', fontSize: '0.72rem' }}
              >
                {editingId === room.id ? '✕ Close Editor' : '✏️ Edit Room'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
