import { tours } from '../../../data/tours';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '../../../components/Navbar';
import TourPageClient from '@/components/TourPageClient';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tour = tours.find(t => t.id === parseInt(id, 10));
  if (!tour) return {};
  return {
    title: `${tour.title} | Black Pyramids Tours`,
    description: tour.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: [{ url: tour.image, width: 800, height: 500 }],
    },
  };
}

export default async function TourPage({ params }: Props) {
  const { id } = await params;
  const tourId = parseInt(id, 10);
  const tour = tours.find(t => t.id === tourId);

  if (!tour) return notFound();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)', color: '#fff' }}>
      <Navbar />
      <TourPageClient tour={tour} />
    </div>
  );
}
