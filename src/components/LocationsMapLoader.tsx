'use client'

import dynamic from 'next/dynamic'
import type { Location } from '@/data/locations'

/** Leaflet touches window/document at construction time and has no SSR mode,
 * so the map itself must load client-only. dynamic(..., { ssr:false }) is only
 * allowed inside a Client Component, which is the entire reason this thin
 * wrapper exists instead of calling dynamic() directly from page.tsx. */
const LocationsMap = dynamic(() => import('@/components/LocationsMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-[13px] text-ink-muted">
      Cargando mapa…
    </div>
  ),
})

export function LocationsMapLoader({ locations }: { locations: Location[] }) {
  return <LocationsMap locations={locations} />
}
