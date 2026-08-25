import type { ComponentType, SVGProps } from 'react'
import {
  IconCup,
  IconDrop,
  IconGrid,
  IconIce,
  IconLeaf,
  IconPlus,
  IconStar,
  IconSwirl,
} from '@/components/icons'
import type { GlassIconProps } from '@/components/menu/GlassIcon'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type ExtraKey = 'shot' | 'veg' | 'sabor' | 'batida' | 'coco'

export type Extra = {
  name: string
  price: number
  desc: string
}

export type MenuItem = {
  id?: string
  name: string
  desc: string
  note?: string
  lleva?: string[]
  /** Overrides the category's default extras for this item. */
  extras?: ExtraKey[]
  price?: string
  priceSD?: { s: string; d: string }
  price12_16?: { a: string; b: string }
  /** Only featured (destacados) items carry their own hand-drawn glass illustration. */
  glass?: Omit<GlassIconProps, 'className'>
}

type CategoryBase = {
  id: string
  label: string
  icon: IconComponent
}

export type Category =
  | (CategoryBase & { type: 'featured'; items: MenuItem[] })
  | (CategoryBase & {
      type: 'sizes'
      sizeLabels: [string, string]
      extras: ExtraKey[]
      footnote?: string
      items: MenuItem[]
    })
  | (CategoryBase & { type: 'list'; extras: ExtraKey[]; items: MenuItem[] })
  | (CategoryBase & { type: 'extras' })

export const EXTRAS: Record<ExtraKey, Extra> = {
  shot: { name: 'Extra shot', price: 10, desc: 'Un shot adicional de espresso para darle más fuerza a tu bebida.' },
  veg: { name: 'Leche vegetal', price: 10, desc: 'Cambia tu leche por almendra, avena o soya, sin costo extra en sabor.' },
  sabor: { name: 'Sabor extra', price: 10, desc: 'Un shot de jarabe saborizado para personalizar tu bebida a tu gusto.' },
  batida: { name: 'Crema batida', price: 10, desc: 'Un toque final de crema batida dulce y esponjosa.' },
  coco: { name: 'Crema de coco', price: 10, desc: 'Espuma cremosa de coco, ideal para nuestras bebidas frías.' },
}

export const CATEGORIES: Category[] = [
  {
    id: 'destacados',
    label: 'Más Vendidos',
    icon: IconStar,
    type: 'featured',
    items: [
      {
        id: 'coco-matcha',
        name: 'Coco Matcha',
        price: '60',
        desc: 'Matcha ceremonial batido con leche de coco bien fría: cremoso, ligeramente dulce y muy verde.',
        lleva: ['Matcha ceremonial', 'Leche de coco', 'Hielo'],
        extras: ['coco', 'sabor'],
        glass: { id: 'cm', liquid: '#EAF3D4', liquid2: '#8FBF63', topping: 'swirl', toppingColor: '#4F7A2E' },
      },
      {
        id: 'coco-taro',
        name: 'Coco Taro',
        price: '60',
        desc: 'Taro auténtico batido con leche de coco: dulce, aterciopelado y de un morado precioso.',
        lleva: ['Taro', 'Leche de coco', 'Hielo'],
        extras: ['coco', 'sabor'],
        glass: { id: 'ct', liquid: '#E6D9F2', liquid2: '#A487C9', topping: 'shave', toppingColor: '#FBF3DF' },
      },
      {
        id: 'frappe-clasico-dest',
        name: 'Frappé Clásico',
        price: '45',
        desc: 'Nuestro frappé de café insignia, licuado con hielo hasta quedar suave y espumoso.',
        lleva: ['Espresso', 'Leche', 'Hielo'],
        extras: ['batida', 'sabor', 'veg'],
        glass: { id: 'fc', liquid: '#DCC9A8', liquid2: '#8A6541', topping: 'whip', toppingColor: '#FBF3DF' },
      },
      {
        id: 'latte-rocas-dest',
        name: 'Latte en las Rocas',
        priceSD: { s: '45', d: '50' },
        desc: 'Espresso suave sobre hielo con leche fría: directo, fresco y perfecto para arrancar el día.',
        lleva: ['Espresso', 'Leche fría', 'Hielo'],
        extras: ['veg', 'sabor', 'shot'],
        glass: { id: 'lr', liquid: '#E7CFA1', liquid2: '#B98249', topping: 'ice', toppingColor: '#EAF6F6' },
      },
    ],
  },
  {
    id: 'cafe-caliente',
    label: 'Café Caliente',
    icon: IconCup,
    type: 'sizes',
    sizeLabels: ['12oz', '16oz'],
    extras: ['shot', 'veg', 'sabor'],
    footnote: 'Malvaviscos y menta +$2',
    items: [
      { id: 'cc-americano', name: 'Americano', price12_16: { a: '25', b: '30' }, desc: 'Espresso diluido en agua caliente: limpio, intenso y sin vueltas.', lleva: ['Espresso', 'Agua caliente'] },
      { id: 'cc-especial-vocho', name: 'Especial Vocho', price12_16: { a: '35', b: '40' }, desc: 'La receta insignia de la casa: espresso con un toque de canela y cajeta, el mismo espíritu de nuestro Vocho rojo.', lleva: ['Espresso', 'Leche vaporizada', 'Canela', 'Cajeta'] },
      { id: 'cc-capuccino', name: 'Capuccino', price12_16: { a: '30', b: '35' }, desc: 'Espresso con leche vaporizada y una espuma densa y aterciopelada.', lleva: ['Espresso', 'Leche vaporizada', 'Espuma de leche'] },
      { id: 'cc-mocaccino', name: 'Mocaccino', price12_16: { a: '35', b: '40' }, desc: 'Espresso y chocolate con leche vaporizada: dulce, intenso y reconfortante.', lleva: ['Espresso', 'Chocolate', 'Leche vaporizada'] },
      { id: 'cc-chocolate', name: 'Chocolate', price12_16: { a: '35', b: '40' }, desc: 'Chocolate artesanal caliente, cremoso de principio a fin.', lleva: ['Chocolate artesanal', 'Leche vaporizada'] },
      { id: 'cc-lechero', name: 'Lechero', price12_16: { a: '30', b: '35' }, desc: 'Café de la casa con abundante leche caliente: suave y tradicional.', lleva: ['Café de olla', 'Leche caliente'] },
      { id: 'cc-latte', name: 'Latte', price12_16: { a: '30', b: '35' }, desc: 'Espresso con leche vaporizada sedosa: nuestro clásico de todos los días.', lleva: ['Espresso', 'Leche vaporizada'] },
    ],
  },
  {
    id: 'espresso',
    label: 'Espresso',
    icon: IconDrop,
    type: 'sizes',
    sizeLabels: ['S', 'D'],
    extras: ['shot', 'sabor'],
    items: [
      { id: 'esp-ristretto', name: 'Ristretto 2oz', price12_16: { a: '30', b: '35' }, desc: 'Extracción corta y concentrada: cuerpo intenso y dulzura natural.', lleva: ['Espresso ristretto'] },
      { id: 'esp-clasico', name: 'Clásico 4.8oz', price12_16: { a: '30', b: '35' }, desc: 'Nuestro espresso base: equilibrado, aromático, sin adornos.', lleva: ['Espresso'] },
      { id: 'esp-cortadito', name: 'Cortadito 4.8oz', price12_16: { a: '30', b: '35' }, desc: 'Espresso cortado con un toque de leche vaporizada.', lleva: ['Espresso', 'Toque de leche vaporizada'] },
      { id: 'esp-macchiato', name: 'Macchiato 4.8oz', price12_16: { a: '30', b: '35' }, desc: 'Espresso "manchado" con un poco de espuma de leche.', lleva: ['Espresso', 'Espuma de leche'] },
    ],
  },
  {
    id: 'bebidas-frias',
    label: 'Bebidas Frías',
    icon: IconIce,
    type: 'list',
    extras: ['veg', 'sabor', 'batida', 'coco'],
    items: [
      { id: 'bf-lattes-rocas', name: 'Lattes en las Rocas', priceSD: { s: '50', d: '55' }, note: 'Vainilla · Moka · Chocolate · Caramelo · Menta · Chocomenta · Crema Irlandesa · Bombón Tostado · Crema de Coco', desc: 'Espresso sobre hielo con leche y el sabor que elijas: fresco, versátil y a tu gusto.', lleva: ['Espresso', 'Leche', 'Hielo', 'Sabor a elegir'] },
      { id: 'bf-chocolate-artesanal', name: 'Chocolate Artesanal en las Rocas', price: '50', desc: 'Nuestro chocolate artesanal, servido bien frío sobre hielo.', lleva: ['Chocolate artesanal', 'Leche', 'Hielo'] },
      { id: 'bf-smoothies', name: 'Smoothies', price: '50', note: 'Frutos Rojos · Mango · Maracuyá · Kiwi', desc: 'Fruta natural licuada con hielo: fresca, ligera y llena de sabor.', lleva: ['Fruta natural', 'Hielo'] },
      { id: 'bf-sodas-italianas', name: 'Sodas Italianas', price: '50', note: 'Frutos Rojos · Maracuyá · Mango · Kiwi', desc: 'Agua mineral con jarabe de fruta: burbujeante y muy refrescante.', lleva: ['Agua mineral', 'Jarabe de fruta', 'Hielo'] },
    ],
  },
  {
    id: 'frappes',
    label: 'Frappés',
    icon: IconSwirl,
    type: 'list',
    extras: ['veg', 'sabor', 'batida'],
    items: [
      { id: 'fr-clasico', name: 'Clásico', price: '45', desc: 'Café licuado con hielo hasta quedar suave y espumoso.', lleva: ['Espresso', 'Leche', 'Hielo'] },
      { id: 'fr-con-sabor', name: 'Con Sabor', price: '50', note: 'Vainilla · Moka · Chocolate · Bombón Tostado · Chocomenta · Caramelo · Menta · Crema Irlandesa', desc: 'Nuestro frappé clásico con el sabor que más se te antoje.', lleva: ['Espresso', 'Leche', 'Hielo', 'Sabor a elegir'] },
      { id: 'fr-especiales', name: 'Especiales', price: '55', note: 'Cookies & Cream · Frappé Chai · Taro · Matcha', desc: 'Combinaciones únicas de la casa para los paladares aventureros.', lleva: ['Base de café o té', 'Leche', 'Hielo', 'Ingrediente especial'] },
    ],
  },
  {
    id: 'tes',
    label: 'Tés',
    icon: IconLeaf,
    type: 'sizes',
    sizeLabels: ['S', 'D'],
    extras: ['sabor', 'veg'],
    items: [
      { id: 'te-chai-agua', name: 'Chai Agua', price12_16: { a: '35', b: '40' }, desc: 'Té chai especiado preparado en agua caliente: cálido y aromático.', lleva: ['Té chai', 'Especias', 'Agua'] },
      { id: 'te-chai-latte', name: 'Chai Latte', price12_16: { a: '50', b: '55' }, desc: 'Té chai especiado con leche vaporizada: reconfortante y cremoso.', lleva: ['Té chai', 'Especias', 'Leche vaporizada'] },
      { id: 'te-sabores', name: 'Té Sabores', price12_16: { a: '30', b: '35' }, desc: 'Selección de tés de hoja en distintos sabores.', lleva: ['Té de hoja', 'Agua caliente'] },
      { id: 'te-tizanas', name: 'Tizanas', price12_16: { a: '40', b: '45' }, desc: 'Infusión herbal con fruta: ligera, ideal para relajarte.', lleva: ['Hierbas', 'Fruta', 'Agua caliente'] },
    ],
  },
  { id: 'extras', label: 'Extras', icon: IconPlus, type: 'extras' },
]

/** Flat id -> {item, cat}, built once, so a shared link's #hash can find and open the right product regardless of which category it lives in. */
export const ITEM_INDEX: Record<string, { item: MenuItem; cat: Category }> = {}
for (const cat of CATEGORIES) {
  if ('items' in cat) {
    for (const item of cat.items) {
      if (item.id) ITEM_INDEX[item.id] = { item, cat }
    }
  }
}

export const TABS: { id: string; label: string; icon: IconComponent }[] = [
  { id: 'todos', label: 'Todos', icon: IconGrid },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.label, icon: c.icon })),
]

export function priceLabel(item: MenuItem): string {
  if (item.price12_16) return '' // rendered as columns
  if (item.priceSD) return `S $${item.priceSD.s} / D $${item.priceSD.d}`
  if (item.price) return `$${item.price}`
  return ''
}

/** Same idea as priceLabel(), but price12_16 needs its size labels (12oz/16oz, S/D...) spelled out for share text, since there's no column header to lean on. */
export function priceShareText(item: MenuItem, cat: Category): string {
  if (item.price12_16 && cat.type === 'sizes') {
    return `${cat.sizeLabels[0]} $${item.price12_16.a} / ${cat.sizeLabels[1]} $${item.price12_16.b}`
  }
  return priceLabel(item)
}

export function extrasAppliesTo(key: ExtraKey): string[] {
  return CATEGORIES.filter((c) => 'extras' in c && c.extras.includes(key)).map((c) => c.label)
}
