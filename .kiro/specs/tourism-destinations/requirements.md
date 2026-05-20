# Requirements Document

## Introduction

This feature adds a dedicated Destinations section and page to the Black Pyramids Tours website (Next.js 15 App Router). It covers:

1. A `/destinations` page listing all 10 Egypt tourism destinations with rich visual cards.
2. Individual tour pages at `/tour/[id]` rendered as proper Server Components (fixing the current server error caused by `onMouseEnter`/`onMouseLeave` handlers in a Server Component).
3. Rich, blog-style content on each tour page: historical context, travel tips, detailed itinerary, photo gallery, and booking CTA.
4. Navigation updates so the Navbar links to the Destinations page.
5. The tour card's "Open The Trip" button always navigates to `/tour/[id]` in a new tab (no modal fallback).

---

## Glossary

- **Destinations_Page**: The page at `/destinations` listing all 10 Egypt tourism destinations.
- **Destination_Card**: A visual card on the Destinations_Page representing one destination (e.g. Cairo & Giza, Luxor).
- **Tour_Page**: The Server Component page at `/tour/[id]` showing full details for a single tour.
- **Tour_Page_Client**: A `'use client'` component that handles interactive elements (hover states, image gallery, booking button animations) within the Tour_Page.
- **TourCard**: The existing `components/TourCard.tsx` client component that links to `/tour/[id]`.
- **Navbar**: The existing `components/Navbar.tsx` navigation bar.
- **Tour**: A data record from `data/tours.ts` with fields: id, title, description, destination, tourType, duration, basePrice, priceTiers, highlights, includes, excludes, itinerary, images, rating, reviews.
- **Destination**: One of the 10 values: "Cairo & Giza", "Luxor", "Aswan", "Alexandria", "Sinai", "Hurghada", "Fayoum", "White Desert", "El Minya", "Red Sea".
- **EARS**: Easy Approach to Requirements Syntax — the pattern used for all acceptance criteria below.

---

## Requirements

### Requirement 1: Fix Server Component Error on Tour Page

**User Story:** As a visitor, I want to open a tour page without seeing a server error, so that I can view tour details reliably.

#### Acceptance Criteria

1. THE Tour_Page SHALL be implemented as an async Server Component that does not contain any `onMouseEnter`, `onMouseLeave`, or other browser event handler props directly in the Server Component tree.
2. WHEN interactive hover effects are needed on the Tour_Page, THE Tour_Page_Client SHALL be a separate `'use client'` component that encapsulates all event handlers and state.
3. WHEN a visitor navigates to `/tour/[id]`, THE Tour_Page SHALL resolve the `params` prop using `await props.params` (Next.js 15 async params convention) before accessing `params.id`.
4. IF the tour id does not match any record in `data/tours.ts`, THEN THE Tour_Page SHALL call `notFound()` to render the 404 page.
5. THE Tour_Page SHALL render without any React hydration errors related to event handlers on server-rendered elements.

---

### Requirement 2: Tour Page as Primary Navigation Target

**User Story:** As a visitor, I want clicking any tour card to open the full tour page at its own URL, so that I can share, bookmark, and navigate back to specific tours.

#### Acceptance Criteria

1. THE TourCard SHALL render a `<Link href="/tour/[id]">` that navigates to the dedicated Tour_Page URL.
2. WHEN a visitor clicks "Open The Trip" on a TourCard, THE TourCard SHALL open the Tour_Page in a new browser tab (`target="_blank"`).
3. THE Tour_Page SHALL be the sole canonical view for a tour — no modal overlay SHALL be used as the primary display mechanism.
4. THE Tour_Page SHALL include a "Back to All Tours" link that navigates to `/#tours`.

---

### Requirement 3: Rich Tour Page Content

**User Story:** As a visitor, I want each tour page to contain detailed, blog-style content, so that I can make an informed booking decision.

#### Acceptance Criteria

1. THE Tour_Page SHALL display a cinematic hero section with the tour's primary image, title, destination badge, tour type badge, rating, review count, and duration.
2. THE Tour_Page SHALL display an Overview section containing the tour description and a list of tour highlights.
3. THE Tour_Page SHALL display a blog-style article section with at minimum 4 paragraphs of destination-specific historical context and travel tips relevant to the tour's `destination` field.
4. THE Tour_Page SHALL display an Itinerary section listing each `itinerary` entry with its time and activity, rendered as a vertical timeline.
5. THE Tour_Page SHALL display an Inclusions section listing all items in `tour.includes` and `tour.excludes`.
6. THE Tour_Page SHALL display a Pricing section showing the `basePrice` and all `priceTiers` (label, price1, price2) in a structured table or card layout.
7. THE Tour_Page SHALL display a Photo Gallery section showing all images in `tour.images` (falling back to `tour.image` if `images` is empty or undefined).
8. THE Tour_Page SHALL display a Travel Tips section with at minimum 3 practical tips specific to the tour's destination (e.g. best time to visit, what to wear, local customs).
9. WHEN a visitor clicks the "Book via WhatsApp" button, THE Tour_Page_Client SHALL open a pre-filled WhatsApp link (`https://wa.me/201018157153?text=...`) in a new tab.
10. THE Tour_Page SHALL display a "Meet Your Guide" or "Why Book With Us" section with trust-building content (English-speaking staff, private A/C vehicle, flexible pickup).

---

### Requirement 4: Destinations Page

**User Story:** As a visitor, I want to browse all Egypt tourism destinations in one place, so that I can discover which region interests me before choosing a tour.

#### Acceptance Criteria

1. THE Destinations_Page SHALL be accessible at the URL `/destinations`.
2. THE Destinations_Page SHALL display one Destination_Card for each of the 10 destinations: Cairo & Giza, Luxor, Aswan, Alexandria, Sinai, Hurghada, Fayoum, White Desert, El Minya, Red Sea.
3. EACH Destination_Card SHALL display: destination name, a representative hero image, a short description (2–3 sentences of historical or geographic context), and the count of available tours for that destination.
4. WHEN a visitor clicks a Destination_Card, THE Destinations_Page SHALL navigate to `/#tours` with the destination filter pre-applied via a URL query parameter (e.g. `/?destination=Luxor#tours`).
5. THE Destinations_Page SHALL display a page hero section with a title, subtitle, and decorative divider consistent with the site's Egyptian aesthetic (gold accents, dark navy background).
6. THE Destinations_Page SHALL display the destination cards in a responsive grid: 3 columns on desktop (≥1024px), 2 columns on tablet (≥640px), 1 column on mobile.
7. THE Destinations_Page SHALL be a Server Component with no client-side state — all interactivity is handled via standard `<Link>` navigation.

---

### Requirement 5: Navbar Navigation to Destinations

**User Story:** As a visitor, I want to find the Destinations page from the navigation bar, so that I can access it from any page on the site.

#### Acceptance Criteria

1. THE Navbar SHALL include a "Destinations" navigation link that navigates to `/destinations`.
2. WHEN the current URL pathname is `/destinations`, THE Navbar SHALL apply an active visual style (gold color, underline, or border) to the "Destinations" link.
3. THE Navbar SHALL preserve all existing navigation links (Home, Tours, Rooms, About, etc.) without removing or reordering them.

---

### Requirement 6: Home Page Destination Filter Integration

**User Story:** As a visitor arriving from a Destination_Card link, I want the tours section on the home page to be pre-filtered to my chosen destination, so that I see only relevant tours immediately.

#### Acceptance Criteria

1. WHEN the home page URL contains a `destination` query parameter (e.g. `/?destination=Luxor`), THE Home_Page SHALL initialise the destination filter pill to the value of that parameter.
2. WHEN the `destination` query parameter value does not match any valid Destination, THE Home_Page SHALL default the filter to "All".
3. THE Home_Page SHALL scroll to the `#tours` anchor automatically when a `destination` query parameter is present on initial load.
4. THE Home_Page destination filter pills SHALL include all 10 destinations: Cairo & Giza, Luxor, Aswan, Alexandria, Sinai, Hurghada, Fayoum, White Desert, El Minya, Red Sea — in addition to the existing "All" option.

---

### Requirement 7: SEO Metadata for Tour and Destinations Pages

**User Story:** As a site owner, I want tour and destination pages to have proper SEO metadata, so that they rank well in search engines and display correctly when shared on social media.

#### Acceptance Criteria

1. THE Tour_Page SHALL export a `generateMetadata` async function that returns a `title` of the format `"{tour.title} | Black Pyramids Tours"` and a `description` derived from `tour.description`.
2. THE Destinations_Page SHALL export a `metadata` object with `title: "Egypt Tourism Destinations | Black Pyramids Tours"` and a descriptive `description` field.
3. WHEN `generateMetadata` is called for a Tour_Page, THE Tour_Page SHALL await `props.params` using the same async params convention as the page component.
