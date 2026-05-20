import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Book Egypt Tours & Hotel | Black Pyramids Tours',
  description:
    'Contact Black Pyramids Tours to book Egypt tours, hotel rooms, or airport transfers. WhatsApp, email, or phone. Located near the Giza Pyramids, Giza, Egypt.',
  keywords:
    'contact Black Pyramids Tours, book Egypt tour, Egypt tour booking, Giza hotel contact, WhatsApp Egypt tour, Egypt travel inquiry',
  openGraph: {
    title: 'Contact Black Pyramids Tours',
    description:
      'Book Egypt tours, hotel rooms, and airport transfers. WhatsApp, email, or phone — we reply within minutes.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)', color: '#fff' }}>
      <Navbar />
      <ContactClient />
    </div>
  );
}
