import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Adventures with the Bull',
  description: 'A mobile-first, high-performance storytelling platform publishing serialized illustrated fiction',
  keywords: ['storytelling', 'fiction', 'graphic novel', 'serialized', 'illustrated'],
  authors: [{ name: 'Adventures with the Bull' }],
  creator: 'Adventures with the Bull',
  publisher: 'Adventures with the Bull',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0A0E11',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}