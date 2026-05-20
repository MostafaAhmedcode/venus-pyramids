'use client';

import { useState, useEffect, useRef } from 'react';
import { staff as staticStaff, StaffMember } from '@/data/staff';

const F = 'var(--font-inter), Inter, system-ui, sans-serif';

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'rgba(0,0,0,0.45)',
  border: '1px solid rgba(201,168,76,0.3)', color: '#fff',
  padding: '9px 12px', fontFamily: F, fontSize: '0.88rem',
  boxSizing: 'border-box', outline: 'none',
};
const labelStyle: React.CSSProperties = {
  fontFamily: F, fontSize: '0.65rem', fontWeight: 600,
  color: 'var(--gold)', letterSpacing: '0.15em',
  textTransform: 'uppercase', display: 'block', marginBottom: 5,
};

interface Props { getToken: () => string; }

export default function AdminStaffTab({ getToken }: Props) {
  const [members, setMembers] = useState<StaffMember[]>(staticStaff);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<StaffMember>>({});
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState('');
  const [msgOk, setMsgOk] = useState(true);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Load saved overrides on mount
  useEffect(() => {
    fetch('/api/save-data?type=staff')
      .then(r => r.json())
      .then(json => {
        if (json.success && json.data.length > 0) {
          setMembers(prev => prev.map(m => {
            const o = json.data.find((x: StaffMember) => x.id === m.id);
            return o ? { ...m, ...o } : m;
          }));
        }
      }).catch(() => {});
  }, []);

  function showMsg(text: string, ok = true) {
    setMsg(text); setMsgOk(ok);
    setTimeout(() => setMsg(''), 4000);
  }

  function startEdit(m: StaffMember) {
    setEditingId(m.id);
    setEditForm({ ...m, languages: [...m.languages] });
  }

  function cancelEdit() { setEditingId(null); setEditForm({}); }

  async function saveEdit(id: number) {
    if (!editForm) return;
    const updated: StaffMember = { ...members.find(m => m.id === id)!, ...editForm } as StaffMember;
    try {
      const res = await fetch('/api/save-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'staff', item: updated }),
      });
      const json = await res.json();
      if (!json.success) { showMsg('❌ Save failed: ' + json.message, false); return; }
    } catch { showMsg('❌ Could not reach save API', false); return; }

    setMembers(prev => prev.map(m => m.id === id ? updated : m));
    setEditingId(null);
    showMsg('✅ Team member saved! Changes are now live on the website.');
  }

  // Upload a photo from the user's laptop
  async function uploadPhoto(id: number, file: File) {
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    try {
      const res = await fetch('/api/upload-image', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        setEditForm(f => ({ ...f, image: json.url }));
        showMsg('✅ Photo uploaded — click Save to apply.');
      } else {
        showMsg('❌ ' + json.message, false);
      }
    } catch {
      showMsg('❌ Upload failed', false);
    } finally {
      setUploading(false);
    }
  }

  const editing = editingId !== null ? members.find(m => m.id === editingId) : null;

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <style>{`
        .staff-photo-wrap { position: relative; width: 90px; height: 90px; flex-shrink: 0; }
        .staff-photo-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top; border-radius: 50%; border: 2px solid rgba(201,168,76,0.35); }
        .staff-photo-overlay { position: absolute; inset: 0; border-radius: 50%; background: rgba(0,0,0,0.65); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; opacity: 0; transition: opacity 0.2s; cursor: pointer; }
        .staff-photo-wrap:hover .staff-photo-overlay { opacity: 1; }
      `}</style>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>Manage Team</div>
        <div style={{ fontFamily: F, fontSize: '0.85rem', color: 'var(--sand-3)' }}>{members.length} team members — click Edit to update details or upload a new photo from your laptop</div>
      </div>

      {msg && (
        <div style={{ marginBottom: 16, padding: '10px 16px', background: msgOk ? 'rgba(6,214,160,0.08)' : 'rgba(220,50,50,0.08)', border: `1px solid ${msgOk ? 'rgba(6,214,160,0.3)' : 'rgba(220,50,50,0.3)'}`, fontFamily: F, fontSize: '0.85rem', color: msgOk ? '#06d6a0' : '#ff8080' }}>
          {msg}
        </div>
      )}

      {/* ── Edit panel ── */}
      {editingId !== null && editing && (
        <div style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.3)', padding: '28px 24px', marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)' }}>Editing: {editing.name}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => saveEdit(editingId)} className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.75rem' }}>💾 Save</button>
              <button onClick={cancelEdit} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.75rem' }}>Cancel</button>
            </div>
          </div>

          {/* ── Photo upload ── */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Profile Photo</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {/* Current photo with hover overlay */}
              <div className="staff-photo-wrap" onClick={() => fileRef.current?.click()}>
                <img
                  src={editForm.image || editing.image}
                  alt={editing.name}
                  onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=90&h=90&fit=crop&crop=face'; }}
                />
                <div className="staff-photo-overlay">
                  <span style={{ fontSize: '1.4rem' }}>{uploading ? '⏳' : '📷'}</span>
                  <span style={{ fontFamily: F, fontSize: '0.55rem', color: '#fff', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{uploading ? 'Uploading…' : 'Change'}</span>
                </div>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={e => {
                  const f = e.target.files?.[0];
                  if (f) uploadPhoto(editingId, f);
                  e.target.value = '';
                }}
              />

              <div>
                {/* Upload button */}
                <button
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  style={{ fontFamily: F, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 20px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)', cursor: uploading ? 'not-allowed' : 'pointer', display: 'block', marginBottom: 8, transition: 'all 0.2s' }}
                  onMouseEnter={e => { if (!uploading) e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
                >
                  {uploading ? '⏳ Uploading…' : '📁 Upload from Laptop'}
                </button>
                <div style={{ fontFamily: F, fontSize: '0.72rem', color: 'var(--sand-3)', lineHeight: 1.5 }}>
                  JPG, PNG or WEBP · Max 10 MB<br />
                  Or paste a URL below
                </div>
              </div>
            </div>

            {/* URL input as alternative */}
            <div style={{ marginTop: 12 }}>
              <label style={{ ...labelStyle, marginBottom: 4 }}>Photo URL (optional alternative)</label>
              <input
                className="admin-input"
                style={inputStyle}
                placeholder="https://example.com/photo.jpg"
                value={editForm.image || ''}
                onChange={e => setEditForm(f => ({ ...f, image: e.target.value }))}
              />
            </div>
          </div>

          {/* ── Text fields ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input className="admin-input" style={inputStyle} value={editForm.name || ''} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div>
              <label style={labelStyle}>Role / Title</label>
              <input className="admin-input" style={inputStyle} value={editForm.role || ''} onChange={e => setEditForm(f => ({ ...f, role: e.target.value }))} />
            </div>
            <div>
              <label style={labelStyle}>Speciality</label>
              <input className="admin-input" style={inputStyle} value={editForm.speciality || ''} onChange={e => setEditForm(f => ({ ...f, speciality: e.target.value }))} />
            </div>
            <div>
              <label style={labelStyle}>Languages (comma-separated)</label>
              <input
                className="admin-input"
                style={inputStyle}
                value={(editForm.languages || []).join(', ')}
                onChange={e => setEditForm(f => ({ ...f, languages: e.target.value.split(',').map(l => l.trim()).filter(Boolean) }))}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Bio</label>
            <textarea
              className="admin-input"
              style={{ ...inputStyle, minHeight: 90, resize: 'vertical' }}
              value={editForm.bio || ''}
              onChange={e => setEditForm(f => ({ ...f, bio: e.target.value }))}
            />
          </div>
        </div>
      )}

      {/* ── Staff cards grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {members.map(m => (
          <div key={m.id} style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: editingId === m.id ? '1px solid rgba(201,168,76,0.6)' : '1px solid rgba(201,168,76,0.18)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 20px 16px' }}>
              <img
                src={m.image}
                alt={m.name}
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid rgba(201,168,76,0.35)', flexShrink: 0 }}
                onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face'; }}
              />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: F, fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</div>
                <div style={{ fontFamily: F, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>{m.role}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  {m.languages.map(l => (
                    <span key={l} style={{ fontFamily: F, fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--gold)', padding: '1px 5px' }}>{l}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: '0 20px 16px' }}>
              <p style={{ fontFamily: F, fontSize: '0.78rem', color: 'var(--sand-3)', lineHeight: 1.6, marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>{m.bio}</p>
              <button
                onClick={() => editingId === m.id ? cancelEdit() : startEdit(m)}
                className={editingId === m.id ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', padding: '9px 0', fontSize: '0.72rem' }}
              >
                {editingId === m.id ? '✕ Close Editor' : '✏️ Edit Member'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
