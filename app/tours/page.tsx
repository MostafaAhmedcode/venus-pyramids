import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ToursPageClient from '@/components/ToursPageClient';

export const metadata: Metadata = {
  title: 'Egypt Tours from Giza | Private Day Trips | Black Pyramids Tours',
  description: 'Book private day tours from Giza to the Pyramids, Luxor, Aswan, Alexandria & more. English-speaking guides, private luxury cars, lunch included. From $35/person.',
  keywords: 'Egypt tours, Giza pyramids tour, Cairo day trips, Luxor tour, private Egypt tour, English speaking guide Egypt, tour from Giza hotel',
  openGraph: {
    title: 'Egypt Tours from Giza | Black Pyramids Tours',
    description: 'Private daily tours across all of Egypt. English-speaking guides, luxury cars, lunch included. Book from $35.',
    images: [{ url: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
};

export default function ToursPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)', color: '#fff' }}>
      <Navbar />
      <ToursPageClient />
    </div>
  );
}
