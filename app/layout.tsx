import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adventureswiththebull.com'),
  title: {
    default: 'Adventures with the Bull',
    template: '%s | Adventures with the Bull'
  },
  description: 'A mobile-first, high-performance storytelling platform publishing serialized illustrated fiction. Join us on epic adventures across worlds, times, and dimensions.',
  keywords: [
    'storytelling', 
    'fiction', 
    'graphic novel', 
    'serialized', 
    'illustrated', 
    'adventure', 
    'fantasy',
    'interactive stories',
    'visual storytelling',
    'episodic fiction'
  ],
  authors: [{ name: 'Daniel K Boice', url: 'https://www.adventureswiththebull.com' }],
  creator: 'Daniel K Boice',
  publisher: 'Adventures with the Bull',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.adventureswiththebull.com',
    siteName: 'Adventures with the Bull',
    title: 'Adventures with the Bull - Serialized Illustrated Fiction',
    description: 'Epic adventures across worlds, times, and dimensions. Mobile-first storytelling platform.',
    images: [
      {
        url: 'https://cdn.adventureswiththebull.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Adventures with the Bull - Storytelling Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adventures with the Bull - Serialized Illustrated Fiction',
    description: 'Epic adventures across worlds, times, and dimensions.',
    images: ['https://cdn.adventureswiththebull.com/assets/twitter-image.webp']
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://www.adventureswiththebull.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A0E11',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.adventureswiththebull.com" />
        <link rel="dns-prefetch" href="https://cdn.adventureswiththebull.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
