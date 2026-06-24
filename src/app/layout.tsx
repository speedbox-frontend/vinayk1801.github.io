import type { Metadata } from 'next';
import './globals.css';
import { ProviderWrapper } from '@/components/Provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://vinaykumar1801.github.io'),
  title: {
    default: 'Vinay Kumar | Senior Software Developer',
    template: '%s | Vinay Kumar',
  },
  description:
    'Senior Software Developer specializing in React.js, Next.js, and TypeScript. 3+ years building high-performance web applications with scalable architecture and modern UI engineering.',
  keywords: [
    'Vinay Kumar',
    'Senior Software Developer',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Web Development',
    'Performance Optimization',
    'UI Engineering',
    'JavaScript',
    'Tailwind CSS',
    'Three.js',
  ],
  authors: [{ name: 'Vinay Kumar', url: 'https://github.com/vinaykumar1801' }],
  creator: 'Vinay Kumar',
  publisher: 'Vinay Kumar',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykumar1801.github.io',
    siteName: 'Vinay Kumar Portfolio',
    title: 'Vinay Kumar | Senior Software Developer',
    description:
      'Senior Software Developer specializing in React.js, Next.js, and TypeScript. Building high-performance web applications with modern frontend architecture.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vinay Kumar - Senior Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinay Kumar | Senior Software Developer',
    description:
      'Senior Software Developer specializing in React.js, Next.js, and TypeScript. Building high-performance web applications.',
    images: ['/og-image.png'],
    creator: '@vinaykumar1801',
  },
  alternates: {
    canonical: 'https://vinaykumar1801.github.io',
  },
  verification: {
    google: 'TODO_ADD_GOOGLE_VERIFICATION',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vinay Kumar',
              jobTitle: 'Senior Software Developer',
              url: 'https://vinaykumar1801.github.io',
              address: {
                '@type': 'PostalAddress',
                'addressLocality': 'Delhi',
                'addressCountry': 'India',
              },
              sameAs: [
                'https://github.com/vinaykumar1801',
                'https://linkedin.com/in/vinaykumar1801',
              ],
              knowsAbout: [
                'React.js',
                'Next.js',
                'TypeScript',
                'Frontend Engineering',
                'Performance Optimization',
                'Web Development',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Speedbox',
                address: {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Delhi',
                  'addressCountry': 'India',
                },
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Panipat Institute of Engineering & Technology',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}