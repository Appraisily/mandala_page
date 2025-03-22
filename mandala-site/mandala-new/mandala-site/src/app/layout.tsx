import './globals.css'
import '../styles/responsive-fixes.css'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SiteSettingsProvider } from '@/lib/settings-context'
import { GoogleTagManagerClient } from '@/components/analytics/google-tag-manager-client'

// Remove default GTM ID since we'll use the value from settings context

// Font configurations
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: {
    default: 'Mandala Ourense | Centro de Yoga y Bienestar',
    template: '%s | Mandala Ourense'
  },
  description: 'Centro de yoga y terapias holísticas en Ourense, ofreciendo clases de Hatha yoga, Daoyin yoga, yoga Nidra, meditación y varios tratamientos terapéuticos.',
  keywords: ['yoga', 'ourense', 'bienestar', 'hatha yoga', 'daoyin yoga', 'yoga nidra', 'meditación', 'terapias', 'masajes', 'ayurveda', 'galicia'],
  authors: [{ name: 'Mandala Ourense' }],
  creator: 'Mandala Ourense',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.mandalaourense.com/',
    title: 'Mandala Ourense | Centro de Yoga y Bienestar',
    description: 'Centro de yoga y terapias holísticas en Ourense, ofreciendo clases de Hatha yoga, Daoyin yoga, yoga Nidra, meditación y varios tratamientos terapéuticos.',
    siteName: 'Mandala Ourense',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandala Ourense | Centro de Yoga y Bienestar',
    description: 'Centro de yoga y terapias holísticas en Ourense, ofreciendo clases de Hatha yoga, Daoyin yoga, yoga Nidra, meditación y varios tratamientos terapéuticos.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${lato.variable} ${cormorant.variable} font-sans min-h-screen flex flex-col`}>
        <SiteSettingsProvider>
          {/* GTM implementation that reads from settings context */}
          <GoogleTagManagerClient />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SiteSettingsProvider>
      </body>
    </html>
  )
}