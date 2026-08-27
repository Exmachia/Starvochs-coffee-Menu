import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { caveat, fredoka, workSans } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s · Starvochs Coffee',
    default: 'Starvochs Coffee',
  },
  description:
    'Starvochs Coffee: café de especialidad con el espíritu de un Vocho rojo. Conoce el menú, nuestras sucursales y nuestra historia.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Starvochs Coffee',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F4E9CE',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fredoka.variable} ${caveat.variable} ${workSans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-heading focus:px-4 focus:py-2 focus:text-accent-contrast focus:no-underline"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <div className="wrap">
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-G6LB4R7208" />
      </body>
    </html>
  )
}
