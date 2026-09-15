/** One row as it would actually be said or written on a sign: a day range
 * (or "Todos los días") paired with the hours that apply to it. An array
 * instead of one fixed field because hours aren't guaranteed uniform across
 * the week — a location closed or shortened on some days needs a second row,
 * not a workaround.
 *
 * `days`/`hours` are the human-authored display labels — whatever reads
 * naturally in Spanish. `daysOfWeek`/`start`/`end` are the machine-readable
 * twins used to compute the "open now" badge; never parse the display
 * strings for that, they're free text and will eventually drift from a
 * format a parser expects. `daysOfWeek` follows JS `Date.getDay()`
 * (0 = Sunday … 6 = Saturday); `start`/`end` are 24h "HH:MM". */
export type HoursEntry = {
  days: string
  daysOfWeek: number[]
  hours: string
  start: string
  end: string
}

export type Location = {
  id: string
  name: string
  lat: number
  lng: number
  /** Undefined until a real street address is supplied — don't fabricate one.
   * Sucursales page only renders the address line when this is present, so
   * the page doesn't visibly announce the gap; it just fills in once real
   * data lands here. */
  address?: string
  hours: HoursEntry[]
}

/** Real coordinates exported from the business's Google My Maps. Hours
 * confirmed by the user: Monday–Friday for all four locations, no weekend
 * service. If that ever changes for a specific branch, add a second
 * HoursEntry for the differing days rather than editing this one in place.
 * No street address exists yet for any of these — don't add one without it
 * coming from the user first. */
export const LOCATIONS: Location[] = [
  {
    id: 'l1',
    name: 'Starvochs Coffee Tecnologico',
    lat: 19.2617257,
    lng: -103.7243242,
    hours: [
      {
        days: 'Lunes a viernes',
        daysOfWeek: [1, 2, 3, 4, 5],
        hours: '6:30 a.m. – 1:00 p.m.',
        start: '06:30',
        end: '13:00',
      },
    ],
  },
  {
    id: 'l2',
    name: 'Starvochs Coffee Campus Central',
    lat: 19.249589,
    lng: -103.6991609,
    hours: [
      {
        days: 'Lunes a viernes',
        daysOfWeek: [1, 2, 3, 4, 5],
        hours: '8:00 a.m. – 6:00 p.m.',
        start: '08:00',
        end: '18:00',
      },
    ],
  },
  {
    id: 'l3',
    name: 'Starvochs Coffee Campus Norte',
    lat: 19.2619708,
    lng: -103.6878202,
    hours: [
      {
        days: 'Lunes a viernes',
        daysOfWeek: [1, 2, 3, 4, 5],
        hours: '7:00 a.m. – 6:00 p.m.',
        start: '07:00',
        end: '18:00',
      },
    ],
  },
  {
    id: 'l4',
    name: 'Starvochs Coffee Campus Villa de Álvarez',
    lat: 19.265862,
    lng: -103.7421403,
    hours: [
      {
        days: 'Lunes a viernes',
        daysOfWeek: [1, 2, 3, 4, 5],
        hours: '8:00 a.m. – 6:00 p.m.',
        start: '08:00',
        end: '18:00',
      },
    ],
  },
]

/** Whether `loc` is open right now, computed in Colima's own timezone
 * (America/Mexico_City) rather than the visitor's local time — a family
 * member checking from out of town should still get the right answer. */
export function isOpenNow(loc: Location, now = new Date()): boolean {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const weekdayShort = parts.find((p) => p.type === 'weekday')?.value ?? ''
  const hour = parts.find((p) => p.type === 'hour')?.value ?? '00'
  const minute = parts.find((p) => p.type === 'minute')?.value ?? '00'
  const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(weekdayShort)
  const nowMinutes = Number(hour) * 60 + Number(minute)

  return loc.hours.some((entry) => {
    if (!entry.daysOfWeek.includes(dayIndex)) return false
    const [startH, startM] = entry.start.split(':').map(Number)
    const [endH, endM] = entry.end.split(':').map(Number)
    return nowMinutes >= startH * 60 + startM && nowMinutes < endH * 60 + endM
  })
}
