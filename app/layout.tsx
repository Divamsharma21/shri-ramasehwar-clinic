
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
   title: 'Shri Rameshwaram Clinic',
  description: 'Expert healthcare and wellness services using Ayurvedic treatment.',
  icons: {
    icon: '/favicon.png', // or '/favicon.ico'
  },
  openGraph: {
    title: 'Shri Rameshwaram Clinic',
    description: 'Expert healthcare and wellness services using Ayurvedic treatment.',
    url: 'https://shrirameshwaramclinic.com',
    siteName: 'Shri Rameshwaram Clinic',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Shri Rameshwaram Clinic Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head />
      <body
        className="bg-white text-black font-sans"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
