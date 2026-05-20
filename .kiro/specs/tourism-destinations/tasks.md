# Implementation Plan: Tourism Destinations

## Overview

Incremental implementation: fix the server error first, then enrich the tour page, then build the destinations page, then wire up navigation and home page filtering, and finally add SEO metadata.

## Tasks

- [ ] 1. Extract interactive elements from tour page into TourPageClient
  - [ ] 1.1 Create `components/TourPageClient.tsx` as a `'use client'` component
    - Accept a `tour` prop typed to the `Tour` interface from `data/tours.ts`
    - Render the "Book via WhatsApp" `<a>` with `onMouseEnter`/`onMouseLeave` hover animation
    - Render the "← Back to All Tours" `<Link>` with hover animation
    - Include the `@keyframes zoomIn` style block
    - _Requirements: 1.1, 1.2, 1.5, 3.9_
  - [ ]* 1.2 Write property test for TourCard link URL (Property 1)
    - **Property 1: TourCard link targets the correct tour URL**
    - **Validates: Requirements 2.1, 2.2**

- [ ] 2. Refactor `app/tour/[id]/page.tsx` to a clean Server Component
  - [ ] 2.1 Remove all `onMouseEnter`/`onMouseLeave` props and the `<style>` block from the page file
    - Keep the page as an async Server Component using `await props.params`
    - Keep `notFound()` call for unknown ids
    - Mount `<TourPageClient tour={tour} />` at the bottom of the page in place of the removed interactive elements
    - _Requirements: 1.1, 1.3, 1.4, 2.4_
  - [ ]* 2.2 Write unit test: TourPage calls notFound for unknown id
    - _Requirements: 1.4_

- [ ] 3. Enrich tour page with blog content, photo gallery, travel tips, and trust section
  - [ ] 3.1 Add destination-specific blog content map to `app/tour/[id]/page.tsx`
    - Define a `Record<Tour['destination'], { history: string[]; tips: string[] }>` constant with at least 4 history paragraphs and 3 travel tips per destination
    - _Requirements: 3.3, 3.8_
  - [ ] 3.2 Render the blog article section using the destination content map
    - Replace the existing generic blog paragraphs with the destination-keyed history paragraphs
    - _Requirements: 3.3_
  - [ ] 3.3 Render the Photo Gallery section
    - Display all images from `tour.images` (fallback to `[tour.image]` if empty/undefined)
    - Responsive grid layout consistent with the site's Egyptian aesthetic
    - _Requirements: 3.7_
  - [ ] 3.4 Render the Travel Tips section
    - Use the `tips` array from the destination content map
    - At least 3 tips per destination, styled with gold accent icons
    - _Requirements: 3.8_
  - [ ] 3.5 Render the Pricing section with priceTiers
    - Show `basePrice` and all `priceTiers` (label, price1, price2) in a card/table layout
    - _Requirements: 3.6_
  - [ ] 3.6 Render the "Why Book With Us" trust section
    - Include English-speaking staff, private A/C vehicle, flexible pickup trust points
    - _Requirements: 3.10_
  - [ ]* 3.7 Write property test for generateMetadata format (Property 4)
    - **Property 4: generateMetadata returns correctly formatted title and description**
    - **Validates: Requirements 7.1, 7.3**

- [ ] 4. Add generateMetadata to tour page
  - [ ] 4.1 Export `generateMetadata` async function from `app/tour/[id]/page.tsx`
    - Await `props.params` using the same async params convention as the page component
    - Return `title: \`${tour.title} | Black Pyramids Tours\`` and `description: tour.description`
    - Return `{}` for unknown tour ids
    - _Requirements: 7.1, 7.3_

- [ ] 5. Checkpoint — ensure tour page renders without errors
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Create `app/destinations/page.tsx`
  - [ ] 6.1 Define the 10-destination static data array inline in the file
    - Each entry: `name`, `heroImage` (Unsplash URL from design), `description` (2–3 sentences), `tourCount` derived from `data/tours.ts`
    - _Requirements: 4.2, 4.3_
  - [ ] 6.2 Render the page hero section
    - Title, subtitle, and gold decorative divider consistent with the site's Egyptian aesthetic
    - Export `metadata` with `title: "Egypt Tourism Destinations | Black Pyramids Tours"` and a descriptive `description`
    - _Requirements: 4.1, 4.5, 7.2_
  - [ ] 6.3 Render the responsive destination card grid
    - Each card: hero image, destination name, description, tour count badge
    - Wrap each card in `<Link href={\`/?destination=${encodeURIComponent(name)}#tours\`}>`
    - CSS grid: 3 columns ≥1024px, 2 columns ≥640px, 1 column mobile
    - Keep the file a Server Component — no `'use client'` directive
    - _Requirements: 4.2, 4.3, 4.4, 4.6, 4.7_
  - [ ]* 6.4 Write property test for destination card link URL (Property 2)
    - **Property 2: Destination card link encodes the correct filter URL**
    - **Validates: Requirements 4.4**
  - [ ]* 6.5 Write property test for destination card required fields (Property 3)
    - **Property 3: Destination card renders all required fields**
    - **Validates: Requirements 4.3**
  - [ ]* 6.6 Write unit test: DestinationsPage renders exactly 10 cards
    - _Requirements: 4.2_

- [ ] 7. Update `components/Navbar.tsx` to add Destinations link
  - [ ] 7.1 Add `{ label: 'Destinations', href: '/destinations' }` to the `links` array
    - Position it after "Tours" and before "Hotels" to keep logical grouping
    - _Requirements: 5.1, 5.3_
  - [ ] 7.2 Import `usePathname` from `next/navigation` and apply active style
    - When `pathname === link.href`, apply gold color and a bottom border/underline to that link
    - Apply to both desktop and mobile menu link renderings
    - _Requirements: 5.2_
  - [ ]* 7.3 Write property test for Navbar active link (Property 6)
    - **Property 6: Navbar active link matches current pathname**
    - **Validates: Requirements 5.2**

- [ ] 8. Update `app/page.tsx` for destination query param pre-filtering
  - [ ] 8.1 Expand the `DESTINATIONS` constant to include all 10 destinations
    - Add `'Sinai'` and `'El Minya'` to the existing array (currently missing from the 8-item list)
    - _Requirements: 6.4_
  - [ ] 8.2 Read `destination` query param via `useSearchParams()` and initialize filter state
    - Import `useSearchParams` from `next/navigation`
    - On mount, if the param value matches a valid destination, call `setDest(value)`; otherwise default to `'All'`
    - Wrap the component (or the relevant part) in `<Suspense>` as required by Next.js when using `useSearchParams` in a Client Component
    - _Requirements: 6.1, 6.2_
  - [ ] 8.3 Auto-scroll to `#tours` when `destination` query param is present
    - After setting the filter, call `document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })`
    - _Requirements: 6.3_
  - [ ]* 8.4 Write property test for home page filter initialization (Property 5)
    - **Property 5: Home page destination filter initializes from query param**
    - **Validates: Requirements 6.1**

- [ ] 9. Final checkpoint — ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Read `node_modules/next/dist/docs/` before writing any Next.js code (see AGENTS.md)
- Property tests require `fast-check`: `npm install --save-dev fast-check`
- The `useSearchParams()` hook requires a `<Suspense>` boundary in Next.js App Router — wrap accordingly in task 8.2
