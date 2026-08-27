export type Location = {
  id: string
  name: string
  lat: number
  lng: number
  hours: string
}

/** Real coordinates exported from the business's Google My Maps; hours confirmed
 * by the user. No street address exists yet for any of these — don't add one
 * without it coming from the user first. */
export const LOCATIONS: Location[] = [
  {
    id: 'l1',
    name: 'Starvochs Coffee Tecnologico',
    lat: 19.2617257,
    lng: -103.7243242,
    hours: '6:30 a.m. – 1:00 p.m.',
  },
  {
    id: 'l2',
    name: 'Starvochs Coffee Campus Central',
    lat: 19.249589,
    lng: -103.6991609,
    hours: '8:00 a.m. – 6:00 p.m.',
  },
  {
    id: 'l3',
    name: 'Starvochs Coffee Campus Norte',
    lat: 19.2619708,
    lng: -103.6878202,
    hours: '7:00 a.m. – 6:00 p.m.',
  },
  {
    id: 'l4',
    name: 'Starvochs Coffee Campus Villa de Álvarez',
    lat: 19.265862,
    lng: -103.7421403,
    hours: '8:00 a.m. – 6:00 p.m.',
  },
]
