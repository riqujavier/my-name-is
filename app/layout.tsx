import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { LanguageProvider } from '@/components/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Javier Riquelme | Frontend Developer',
  description: 'Portfolio of Javier Riquelme, Frontend Developer specializing in React, Next.js, and Magnolia CMS.',
  openGraph: {
    title: 'Javier Riquelme | Frontend Developer',
    description: 'Portfolio of Javier Riquelme, Frontend Developer specializing in React, Next.js, and Magnolia CMS.',
    url: 'https://javier-riquelme.vercel.app',
    siteName: 'Javier Riquelme Portfolio',
    images: [
      {
        url: 'https://javier-riquelme.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Javier Riquelme Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#06060c]">
      <body className={`${inter.className} text-white min-h-screen relative`}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}