import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import LiveChat from "@/components/LiveChat";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Black Pyramids Tours | Luxury Hotel & Private Egypt Tours from Giza",
    template: "%s | Black Pyramids Tours",
  },
  description:
    "Luxury hotel steps from the Giza Pyramids. Private daily tours across Egypt — Cairo, Luxor, Aswan & more. English-speaking guides, private cars, from $35. Book on WhatsApp.",
  keywords:
    "Egypt tours, Giza pyramids hotel, private Egypt tour, Cairo day trips, Luxor tour, English speaking guide Egypt, hotel near pyramids, Black Pyramids Tours",
  authors: [{ name: "Black Pyramids Tours" }],
  creator: "Black Pyramids Tours",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Black Pyramids Tours",
    title: "Black Pyramids Tours | Luxury Hotel & Private Egypt Tours from Giza",
    description:
      "Luxury hotel steps from the Giza Pyramids. Private daily tours across Egypt. English-speaking guides, private cars, from $35.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Giza Pyramids — Black Pyramids Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Pyramids Tours | Private Egypt Tours from Giza",
    description:
      "Luxury hotel steps from the Giza Pyramids. Private tours, English guides, from $35.",
    images: [
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&h=630&fit=crop",
    ],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: "Black Pyramids Tours",
  description:
    "Luxury hotel and private tour operator near the Giza Pyramids. English-speaking guides, private cars, tours across all of Egypt.",
  telephone: "+201018157153",
  email: "info@venuspyramids.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "El Fokahaa Street, Nazlet El Batran",
    addressLocality: "Giza",
    addressCountry: "EG",
  },
  geo: { "@type": "GeoCoordinates", latitude: 29.9773, longitude: 31.1325 },
  priceRange: "$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "534",
  },
  openingHours: "Mo-Su 00:00-24:00",
  image:
    "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&h=630&fit=crop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <LiveChat />
      </body>
    </html>
  );
}
