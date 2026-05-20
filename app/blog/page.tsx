'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { egyptDestinationsBlogs, BlogDestination, blogCategories } from '@/data/egyptDestinationsBlogs';

const F_EN = 'var(--font-inter), Inter, system-ui, -apple-system, sans-serif';

export default function BlogLandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const isRtl = lang === 'ar';
  const F = F_EN;

  // Filter logic
  const filteredBlogs = egyptDestinationsBlogs.filter((blog) => {
    const title = isRtl ? blog.titleAr : blog.titleEn;
    const name = isRtl ? blog.nameAr : blog.nameEn;
    const intro = isRtl ? blog.introAr : blog.introEn;
    const matchesSearch = 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intro.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || 
      blog.destination === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ fontFamily: F, background: 'var(--navy)', color: '#fff', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 80, textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1600&h=700&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.18 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,12,26,0.6) 0%, var(--navy) 100%)' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          {/* Multilingual Switcher on Hero */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                padding: '6px 18px',
                borderRadius: '30px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.color = 'var(--navy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.color = 'var(--gold)';
              }}
            >
              🌐 {isRtl ? 'English' : 'العربية'}
            </button>
          </div>

          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
            {isRtl ? 'مجلة السفر والسياحة في مصر' : 'Egypt Travel Magazine & Guide'}
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, color: '#fff', marginBottom: 24, lineHeight: 1.15 }}>
            {isRtl ? 'اكتشف مصر بعيون الخبراء' : 'Unveil the Wonders of Egypt'}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 28 }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span style={{ color: 'var(--gold)', fontSize: 8 }}>◆</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--sand-2)', lineHeight: 1.8, marginBottom: 40, maxWidth: 720, margin: '0 auto' }}>
            {isRtl 
              ? 'تصفح أدلة السفر الفاخرة المكتوبة بأيدي مرشدين محترفين ومؤرخين. استكشف المعابد الفرعونية القديمة، والمنتجعات الساحلية، والواحات الصحراوية المخفية بأسلوب سردي ممتع.'
              : 'Immerse yourself in Egypt\'s legendary destinations. From secret desert oases and ancient Nile treasures to Red Sea luxury resorts, read our professional long-form travel logs.'
            }
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px', position: 'relative', zIndex: 2 }}>
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.18)', padding: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type="text"
                placeholder={isRtl ? 'ابحث عن وجهتك المفضلة (القاهرة، الأقصر، أسوان...)...' : 'Search destination, sights, or highlights...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '1rem',
                  fontFamily: F,
                  outline: 'none',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.3)'}
              />
              <span style={{ position: 'absolute', right: isRtl ? 'auto' : '20px', left: isRtl ? '20px' : 'auto', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold)', fontSize: '1.2rem' }}>
                🔍
              </span>
            </div>

            {/* Category Pills */}
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
                📍 {isRtl ? 'تصفية حسب المنطقة' : 'Filter by Region'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      fontFamily: F,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '8px 16px',
                      background: selectedCategory === cat ? 'var(--gold)' : 'rgba(255,255,255,0.02)',
                      border: '1px solid',
                      borderColor: selectedCategory === cat ? 'var(--gold)' : 'rgba(201,168,76,0.25)',
                      color: selectedCategory === cat ? 'var(--navy)' : 'var(--sand-2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== cat) {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.color = '#fff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategory !== cat) {
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                        e.currentTarget.style.color = 'var(--sand-2)';
                      }
                    }}
                  >
                    {isRtl && cat === 'All' ? 'الكل' : cat}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
        {filteredBlogs.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 32 }} className="blog-masonry">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Card Image */}
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img
                      src={blog.heroImage}
                      alt={isRtl ? blog.nameAr : blog.nameEn}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', top: 12, right: isRtl ? 'auto' : 12, left: isRtl ? 12 : 'auto', background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px' }}>
                      📍 {isRtl ? blog.nameAr : blog.nameEn}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>
                        {isRtl ? 'دليل استكشاف الوجهات الفاخرة' : 'Premium Region Dossier'}
                      </div>
                      <h3 className="font-heading" style={{ fontSize: '1.38rem', color: '#fff', marginBottom: 14, lineHeight: 1.3, fontWeight: 600 }}>
                        {isRtl ? blog.titleAr : blog.titleEn}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--sand-2)', lineHeight: 1.7, marginBottom: 20, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {isRtl ? blog.introAr : blog.introEn}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 18, marginTop: 10 }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.05em' }}>
                        {isRtl ? 'اقرأ الدليل كاملاً ←' : 'Read Full Guide →'}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--sand-3)' }}>
                        📖 {isRtl ? 'قراءة متعمقة' : 'Long Read'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0', border: '1px dotted rgba(201,168,76,0.3)', background: 'rgba(255,255,255,0.01)' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🐪</div>
            <h3 className="font-heading" style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: 8 }}>
              {isRtl ? 'لم نجد أي أدلة تطابق بحثك' : 'No destinations match your search'}
            </h3>
            <p style={{ color: 'var(--sand-2)', marginBottom: 24 }}>
              {isRtl ? 'جرب البحث بكلمات أخرى أو اختر منطقة أخرى من القائمة.' : 'Try adjusting your search terms or picking another region filter.'}
            </p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="btn-primary" style={{ padding: '10px 24px' }}>
              {isRtl ? 'عرض كل المدونات' : 'Show All Travel Blogs'}
            </button>
          </div>
        )}
      </section>

      <style jsx global>{`
        .blog-masonry {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .blog-masonry {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .blog-masonry {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
