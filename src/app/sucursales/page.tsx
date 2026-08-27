import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { IconClock } from '@/components/icons'
import { LocationsMapLoader } from '@/components/LocationsMapLoader'
import { PageHero } from '@/components/PageHero'
import { LOCATIONS } from '@/data/locations'

export const metadata: Metadata = {
  title: 'Sucursales',
  description: 'Ubicaciones y horarios de Starvochs Coffee.',
}

export default function SucursalesPage() {
  return (
    <div className="wrap">
      <PageHero title="Sucursales">Dónde encontrarnos y a qué hora estamos abiertos.</PageHero>

      <div className="mt-6 mb-8 h-72 overflow-hidden rounded-2xl border border-border">
        <LocationsMapLoader locations={LOCATIONS} />
      </div>

      <div className="mb-12 grid grid-cols-1 gap-3.5 min-[680px]:grid-cols-2 min-[680px]:gap-4">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.id}
            className="flex flex-col gap-2.5 rounded-2xl border border-border bg-surface p-4.5"
          >
            <h2 className="font-display text-[17px] font-semibold text-heading">{loc.name}</h2>
            <p className="flex items-center gap-1.75 text-[14px] text-ink-muted">
              <IconClock className="h-4.5 w-4.5 flex-none text-accent" />
              {loc.hours}
            </p>
            <div className="mt-1">
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                variant="ghost"
                external
              >
                Cómo llegar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
