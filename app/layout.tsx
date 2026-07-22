import type { Metadata } from 'next';
import { Agentation } from 'agentation';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sairam949.vercel.app'),
  title: 'Sairam Vendra | Head of Design & AI Product Manager',
  description: 'Leader in creative direction, AI product management, and design strategy. Track record of building automation-first pipelines, scaling static ad and video production, and driving measurable business outcomes. Cross-functional leadership; stakeholder alignment, and end-to-end campaign delivery.',
  keywords: [
    'Product Manager',
    'Design Lead',
    'AI Product Management',
    'Creative Direction',
    'UX/UI Design',
    'Design Strategy',
    'AI Innovation',
    'Automation',
    'Bangalore',
  ],
  authors: [{ name: 'Sairam Vendra', url: 'https://www.linkedin.com/in/sairamvendra/' }],
  creator: 'Sairam Vendra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sairam949.vercel.app',
    title: 'Sairam Vendra | Head of Design & AI Product Manager',
    description: 'Leader in creative direction, AI product management, and design strategy. Building automation-first pipelines and driving measurable business outcomes.',
    siteName: 'Sairam Vendra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sairam Vendra | Head of Design & AI Product Manager',
    description: 'Leader in creative direction, AI product management, and design strategy.',
    creator: '@sairam848',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sairam Vendra',
  url: 'https://sairam949.vercel.app',
  jobTitle: 'Head of Design and AI Product Manager',
  address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' },
  sameAs: [
    'https://www.linkedin.com/in/sairamvendra/',
    'https://x.com/sairam848',
    'https://www.instagram.com/sairamvendra/',
    'https://www.behance.net/sairamvendra',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
