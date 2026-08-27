import type { Metadata } from 'next'
import { MenuClient } from '@/components/menu/MenuClient'

export const metadata: Metadata = {
  title: 'Menú',
  description: 'Menú de Starvochs Coffee: café caliente, espresso, bebidas frías, frappés y tés.',
}

export default function MenuPage() {
  return <MenuClient />
}
