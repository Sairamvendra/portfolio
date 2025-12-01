import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
    url: 'https://sairamvendra.com',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
