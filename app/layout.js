import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://adventuresewa.com'),
  title: {
    default: 'Adventure Sewa — Nepal\'s #1 Adventure Setup & Consultancy',
    template: '%s | Adventure Sewa',
  },
  description: 'Adventure Sewa is Nepal\'s leading adventure setup and consultancy company. We specialize in zipline, giant swing, bungee, climbing wall, sky cycle, glass bridge installation and feasibility studies across Nepal.',
  keywords: [
    'adventure setup Nepal', 'zipline installation Nepal', 'climbing wall Nepal',
    'bungee setup Nepal', 'sky cycle Nepal', 'glass bridge Nepal',
    'adventure park consultancy', 'adventure tourism Nepal', 'ropeway Nepal',
    'giant swing Nepal', 'adventure feasibility study', 'Kathmandu adventure',
    'Nepal adventure company', 'adventure amusement park Nepal',
  ],
  authors: [{ name: 'Adventure Sewa' }],
  creator: 'Adventure Sewa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adventuresewa.com',
    siteName: 'Adventure Sewa',
    title: 'Adventure Sewa — Nepal\'s #1 Adventure Setup & Consultancy',
    description: 'Planning, development, installation and support for adventure tourism activities across Nepal. Zipline, Giant Swing, Sky Cycle, Glass Bridge & more.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Adventure Sewa - Nepal Adventure Setup' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adventure Sewa — Nepal\'s #1 Adventure Setup & Consultancy',
    description: 'Planning, development, installation and support for adventure tourism activities across Nepal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://adventuresewa.com' },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://adventuresewa.com',
    name: 'Adventure Sewa',
    description: 'Nepal\'s leading adventure setup and consultancy company specializing in zipline, giant swing, bungee, climbing wall, sky cycle, glass bridge installation and feasibility studies.',
    url: 'https://adventuresewa.com',
    telephone: ['+977-9860133347', '+977-9808451232'],
    email: 'adventuresewa@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Balaju',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.7284,
      longitude: 85.3032,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [
      'https://www.facebook.com/adventuresewa',
      'https://www.instagram.com/adventuresewa',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Nepal',
    },
    priceRange: '$$',
    image: 'https://adventuresewa.com/og-image.jpg',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Adventure Setup Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zipline Setup & Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Giant Swing Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Climbing Wall Setup' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sky Cycle Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Bridge Construction' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bungee Slingshot Setup' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport Ropeway Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Adventure Programs' } },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="NP-03" />
        <meta name="geo.placename" content="Kathmandu" />
        <meta name="geo.position" content="27.7284;85.3032" />
        <meta name="ICBM" content="27.7284, 85.3032" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
