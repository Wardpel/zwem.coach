import type { Metadata } from 'next'
import { Inter, Poppins, Jua } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const jua = Jua({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-jua',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ZWEM.COACH | Start to Crawl Vilvoorde',
  description:
    'Leer crawl zwemmen of verbeter je techniek onder deskundige begeleiding van Pieter Timmers en Ward Pellegrims in Vilvoorde. 10 wekelijkse sessies voor alle niveaus.',
  keywords: [
    'zwemmen',
    'crawl',
    'Vilvoorde',
    'zwemles',
    'Pieter Timmers',
    'Ward Pellegrims',
    'zwemcoach',
    'triatlon',
  ],
  authors: [{ name: 'ZWEM.COACH' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ZWEM.COACH | Start to Crawl Vilvoorde',
    description:
      'Leer crawl zwemmen of verbeter je techniek onder deskundige begeleiding van Pieter Timmers en Ward Pellegrims.',
    type: 'website',
    locale: 'nl_BE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${poppins.variable} ${jua.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
