import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HotelsPageClient from '@/components/HotelsPageClient';

export const metadata: Metadata = {
  title: 'Hotel Near Giza Pyramids | Luxury Rooms | Black Pyramids Tours',
  description: 'Stay at our luxury hotel steps from the Giza Pyramids. 16 rooms with pyramid views, free breakfast, rooftop restaurant, spa & airport transfer. From $30/night.',
  keywords: 'hotel near Giza pyramids, pyramid view hotel Cairo, luxury hotel Giza, hotel near pyramids Egypt, accommodation Giza, Venus Hotel Giza',
  openGraph: {
    title: 'Hotel Near Giza Pyramids | Black Pyramids Tours',
    description: '16 luxury rooms steps from the Giza Pyramids. Free breakfast, rooftop restaurant, spa. From $30/night.',
    images: [{ url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
};

export default function HotelsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)', color: '#fff' }}>
      <Navbar />
      <HotelsPageClient />
    </div>
  );
}
