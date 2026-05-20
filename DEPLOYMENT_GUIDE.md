# 🌐 Complete Deployment Guide: Vercel + Render + PostgreSQL

## Overview
- **Frontend:** Next.js → Vercel
- **Backend:** Django → Render.com  
- **Database:** PostgreSQL → Render.com
- **SEO:** Google Search Console, Analytics

---

## Part 1: Deploy Frontend to Vercel ✅

### Step 1: Prepare Repository
```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit: Venus Pyramids frontend"

# Push to GitHub
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your `venus-pyramids` repository
5. Configure Project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Environment Variables:**
     ```
     NEXT_PUBLIC_API_URL=https://venus-pyramids-api.onrender.com
     ```
6. Click "Deploy"

### Step 3: Custom Domain (Optional)
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add your custom domain (e.g., `venuspyramids.com`)
5. Follow DNS configuration steps

---

## Part 2: Deploy Backend to Render ✅

### Step 1: Prepare Backend Repository
```bash
# Create separate backend repo
mkdir venus-pyramids-backend
cd venus-pyramids-backend

# Initialize git
git init
git add .
git commit -m "Initial commit: Venus Pyramids backend"

# Push to GitHub
git push origin main
```

### Step 2: Create PostgreSQL Database on Render
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "PostgreSQL"
4. Configure:
   - **Name:** venus-pyramids-db
   - **Database:** venus_pyramids
   - **User:** postgres
   - **Region:** Select closest region
5. Click "Create Database"
6. Copy the **External Database URL**

### Step 3: Deploy Django Backend
1. Click "New +" → "Web Service"
2. Select your backend repository
3. Configure:
   - **Name:** venus-pyramids-api
   - **Environment:** Python 3
   - **Build Command:**
     ```bash
     pip install -r requirements.txt
     python manage.py migrate
     python manage.py collectstatic --noinput
     ```
   - **Start Command:**
     ```bash
     gunicorn config.wsgi:application
     ```

### Step 4: Set Environment Variables
Add these in Render Dashboard:
```
DEBUG=False
SECRET_KEY=<your-secret-key>
DATABASE_URL=<from-postgresql-db>
ALLOWED_HOSTS=venus-pyramids-api.onrender.com,localhost
CORS_ALLOWED_ORIGINS=https://venus-pyramids.vercel.app,http://localhost:3000
```

### Step 5: Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete
3. Note your API URL: `https://venus-pyramids-api.onrender.com`

---

## Part 3: SEO Optimization

### Step 1: Update `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    unoptimized: false,
    domains: ['images.unsplash.com'],
  },
  
  // Sitemap
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

### Step 2: Create `public/robots.txt`
```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: https://venus-pyramids.vercel.app/sitemap.xml
```

### Step 3: Create Sitemap
Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://venus-pyramids.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://venus-pyramids.vercel.app#tours',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://venus-pyramids.vercel.app#hotel',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
```

### Step 4: Update Metadata
Update `app/layout.tsx`:
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venus Pyramids Inn | Luxury Hotel & Egypt Tours",
  description: "Discover Egypt with our luxury hotel and customizable daily tours. Book your adventure in Cairo, Luxor, Aswan & Alexandria.",
  keywords: "Egypt tours, luxury hotel, Cairo, Luxor, travel packages, tour guide",
  authors: [{ name: "Venus Pyramids Inn" }],
  creator: "Venus Pyramids Inn",
  publisher: "Venus Pyramids Inn",
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    url: "https://venus-pyramids.vercel.app",
    title: "Venus Pyramids Inn | Luxury Hotel & Egypt Tours",
    description: "Discover Egypt with our luxury hotel and customizable daily tours.",
    siteName: "Venus Pyramids Inn",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552083974-5dab39f1490a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Pyramids Inn | Luxury Hotel & Egypt Tours",
    description: "Discover Egypt with our luxury hotel and customizable daily tours.",
    creator: "@venuspyramids",
    images: [
      "https://images.unsplash.com/photo-1552083974-5dab39f1490a?w=1200&h=630&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://venus-pyramids.vercel.app" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Step 5: Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter your domain: `https://venus-pyramids.vercel.app`
4. Verify ownership (DNS or HTML file)
5. Submit sitemap at `/sitemap.xml`
6. Monitor performance and indexing

### Step 6: Google Analytics
1. Go to [Google Analytics](https://analytics.google.com)
2. Create new property
3. Set up web stream
4. Copy Measurement ID
5. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## Part 4: Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://venus-pyramids-api.onrender.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Backend (.env)
```
DEBUG=False
SECRET_KEY=your-very-secure-secret-key
DATABASE_URL=postgresql://user:password@host:5432/venus_pyramids
ALLOWED_HOSTS=venus-pyramids-api.onrender.com
CORS_ALLOWED_ORIGINS=https://venus-pyramids.vercel.app,http://localhost:3000
```

---

## Part 5: Monitoring & Maintenance

### Frontend (Vercel)
- ✅ Analytics Dashboard
- ✅ Deployment history
- ✅ Real-time logs
- ✅ Performance metrics

### Backend (Render)
- ✅ Resource usage
- ✅ Application logs
- ✅ Restart options
- ✅ Database backups

### Database (Render PostgreSQL)
- ✅ Automatic backups
- ✅ Query monitoring
- ✅ Connection limits
- ✅ Data export

---

## Part 6: Performance Optimization

### Frontend
```bash
# Check lighthouse score
npm run build
npm run start

# Check bundle size
npm run analyze
```

### Backend
```bash
# Enable caching
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}

# Enable database query optimization
LOGGING = {
    'version': 1,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django.db.backends': {
            'handlers': ['console'],
            'level': 'DEBUG',
        },
    },
}
```

---

## 🚀 Deployment Checklist

### Frontend
- [ ] Update environment variables
- [ ] Test locally with production API
- [ ] Deploy to Vercel
- [ ] Verify custom domain
- [ ] Test all features
- [ ] Monitor logs

### Backend
- [ ] Create PostgreSQL database
- [ ] Set environment variables
- [ ] Run migrations
- [ ] Deploy to Render
- [ ] Test API endpoints
- [ ] Set up backups

### SEO
- [ ] Add meta tags
- [ ] Create sitemap
- [ ] Create robots.txt
- [ ] Submit to Google Search Console
- [ ] Set up Analytics
- [ ] Verify schema markup

### Security
- [ ] Set DEBUG=False
- [ ] Configure ALLOWED_HOSTS
- [ ] Set strong SECRET_KEY
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Set up WAF (optional)

---

## 📞 Support URLs

- **Frontend:** https://venus-pyramids.vercel.app
- **API:** https://venus-pyramids-api.onrender.com/api/
- **Admin:** https://venus-pyramids-api.onrender.com/admin/
- **Database:** PostgreSQL on Render

---

## 🔧 Quick Commands

```bash
# Local development
cd frontend && npm run dev
cd ../backend && python manage.py runserver

# Production deployment
# Frontend: Git push triggers automatic Vercel deploy
# Backend: Git push to backend repo → Render auto-deploys

# Backup database
pg_dump -U postgres venus_pyramids > backup.sql

# Restore database
psql -U postgres venus_pyramids < backup.sql
```

---

Generated: April 7, 2026 ✨
