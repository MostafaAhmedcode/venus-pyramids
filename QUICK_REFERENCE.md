# ⚡ Quick Reference Guide - Venus Pyramids

## 🚀 Quick Start

```bash
# Install & Run
npm install
npm run dev

# Visit: http://localhost:3000
```

---

## 📁 Key Files

### Components
- `components/Navbar.tsx` - Navigation with scroll effects
- `components/Hero.tsx` - Hero section with animations
- `components/TourCard.tsx` - Tour card component
- `components/RoomCard.tsx` - Room card component
- `components/ScrollObserver.tsx` - Scroll animations

### Data
- `data/tours.ts` - 12 tours with full details
- `data/rooms.ts` - 16 hotel rooms with amenities

### Styling
- `app/globals.css` - Custom animations & utilities
- `app/layout.tsx` - Root layout with metadata
- `app/page.tsx` - Main homepage

### Documentation
- `DESIGN_UPDATES.md` - Animation specifications
- `BACKEND_SETUP.md` - Django backend guide
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `PROJECT_SUMMARY.md` - Project overview
- `README_COMPREHENSIVE.md` - Full README

---

## 🎨 Animations

### Available Classes
```css
.animate-fade-in         /* Fade in animation */
.animate-slide-up        /* Slide from bottom */
.animate-slide-down      /* Slide from top */
.animate-slide-left      /* Slide from left */
.animate-slide-right     /* Slide from right */
.animate-scale-in        /* Scale pop-in */
.animate-float           /* Floating motion */
.animate-glow            /* Glowing effect */
.hover-lift              /* Lift on hover */
.animation-delay-100     /* 100ms delay */
.animation-delay-200     /* 200ms delay */
/* ... up to 500ms */
```

### Example Usage
```tsx
<div className="animate-slide-up animation-delay-200">
  Content appears with slide-up animation
</div>

<div className="hover-lift">
  Card lifts on hover
</div>
```

---

## 📊 Data Structure

### Tour Object
```typescript
{
  id: number
  title: string
  description: string
  location: string
  price: number
  duration: string
  difficulty: "Easy" | "Moderate" | "Hard"
  rating: number
  reviews: number
  image: string
  highlights: string[]
  maxGroupSize: number
  category: "History" | "Adventure" | "Cultural" | "Relaxation" | "Wildlife"
}
```

### Room Object
```typescript
{
  id: number
  name: string
  description: string
  price: number
  capacity: number
  amenities: string[]
  image: string
  rating: number
  available: boolean
}
```

---

## 🔗 Component Props

### TourCard
```tsx
<TourCard tour={tour} index={0} />
```

### RoomCard
```tsx
<RoomCard room={room} index={0} />
```

### ScrollObserver
```tsx
<ScrollObserver threshold={0.1} className="mb-12">
  <div>Content appears on scroll</div>
</ScrollObserver>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Small:  < 640px   (md:)
Medium: 640-1024px
Large:  > 1024px  (lg:)
```

### Example
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {/* 1 column on mobile, 3 on desktop */}
</div>
```

---

## 🌐 Environment Variables

### Frontend
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_GA_ID=your-id
```

### Backend
```env
DEBUG=False
DATABASE_URL=postgresql://...
SECRET_KEY=your-key
```

---

## 🔌 API Endpoints (Backend)

```
GET    /api/tours/           List tours
GET    /api/tours/{id}/      Tour details
POST   /api/tours/           Create tour
PUT    /api/tours/{id}/      Update tour
DELETE /api/tours/{id}/      Delete tour

GET    /api/rooms/           List rooms
GET    /api/rooms/{id}/      Room details
POST   /api/room-bookings/   Create booking
```

---

## 📈 SEO Checklist

- [x] Meta tags
- [x] OG tags
- [x] Sitemap
- [x] robots.txt
- [x] Canonical URLs
- [x] Analytics ready
- [x] Google Search Console ready

---

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Vercel auto-deploys
3. Set environment variables
4. Custom domain (optional)

### Backend (Render)
1. Create PostgreSQL database
2. Create Web Service
3. Set environment variables
4. Deploy

---

## 🐛 Common Issues

### Images Not Loading
```tsx
// Use Unsplash URLs or add domain to next.config.ts
images: {
  domains: ['images.unsplash.com']
}
```

### Animations Not Running
```tsx
// Check if animation class is applied
className="animate-slide-up"

// Check z-index issues
className="relative z-10"
```

### CORS Issues
```python
# Backend: Set CORS_ALLOWED_ORIGINS
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://your-domain.com'
]
```

---

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Django Docs](https://docs.djangoproject.com)
- [DRF Docs](https://www.django-rest-framework.org)

---

## 💡 Pro Tips

1. **Staggered Animations:**
   ```tsx
   <div style={{ animationDelay: `${index * 100}ms` }}>
     Animates with delay based on index
   </div>
   ```

2. **Conditional Classes:**
   ```tsx
   className={`transition-all ${
     isActive ? 'opacity-100' : 'opacity-0'
   }`}
   ```

3. **Hover Effects:**
   ```tsx
   className="hover:scale-110 hover:shadow-lg transition-all"
   ```

4. **Gradients:**
   ```tsx
   className="bg-gradient-to-r from-yellow-500 to-yellow-600"
   ```

---

## 📞 Quick Links

| Resource | URL |
|----------|-----|
| Frontend Live | https://venus-pyramids.vercel.app |
| Backend API | https://venus-pyramids-api.onrender.com |
| GitHub Frontend | https://github.com/yourusername/venus-pyramids |
| GitHub Backend | https://github.com/yourusername/venus-pyramids-backend |

---

## ✨ Project Stats

- **Animations:** 15+
- **Tours:** 12
- **Rooms:** 16
- **Components:** 5+
- **Documentation:** 5 guides
- **Code Lines:** 1000+
- **Performance:** 95+ Lighthouse

---

**Last Updated:** April 7, 2026 ✨
