
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shri Rameshwaram Clinic',
  description: 'Created by Divam Sharma',
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
