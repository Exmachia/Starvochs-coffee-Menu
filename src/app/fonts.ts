import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'

export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: 'normal',
  variable: '--font-fredoka',
  display: 'swap',
})

export const caveat = localFont({
  src: './fonts/caveat.woff2',
  weight: '400 700',
  style: 'normal',
  variable: '--font-caveat',
  display: 'swap',
})

export const workSans = localFont({
  src: './fonts/worksans.woff2',
  weight: '300 800',
  style: 'normal',
  variable: '--font-work-sans',
  display: 'swap',
})
