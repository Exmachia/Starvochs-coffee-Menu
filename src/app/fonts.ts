import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const fredoka = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
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
