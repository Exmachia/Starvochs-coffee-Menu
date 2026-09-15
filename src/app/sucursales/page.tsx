import type { Metadata } from 'next'
import { DirectionsButton } from '@/components/DirectionsButton'
import { IconClock, IconMapPin } from '@/components/icons'
import { LocationsMapLoader } from '@/components/LocationsMapLoader'
import { OpenBadge } from '@/components/OpenBadge'
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

      <div className="mt-6 mb-8 h-72 overflow-hidden rounded-2xl border border-border bg-surface p-2">
        <div className="h-full w-full overflow-hidden rounded-xl">
          <LocationsMapLoader locations={LOCATIONS} />
        </div>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-3.5 min-[680px]:grid-cols-2 min-[680px]:gap-4">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.id}
            className="flex flex-col gap-2.5 rounded-2xl border border-border bg-surface p-4.5 shadow-[0_2px_8px_-4px_var(--shadow)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-[17px] font-semibold text-heading">{loc.name}</h2>
              <OpenBadge location={loc} />
            </div>
            {loc.address && (
              <p className="flex items-center gap-1.75 text-body-muted text-ink-muted">
                <IconMapPin className="h-4.5 w-4.5 flex-none text-accent" />
                {loc.address}
              </p>
            )}
            <div className="flex flex-col gap-1">
              {loc.hours.map((entry) => (
                <p
                  key={entry.days}
                  className="flex items-center gap-1.75 text-body-muted text-ink-muted"
                >
                  <IconClock className="h-4.5 w-4.5 flex-none text-accent" />
                  <span className="font-semibold text-heading-soft">{entry.days}:</span>
                  {entry.hours}
                </p>
              ))}
            </div>
            <div className="mt-1">
              <DirectionsButton
                href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                locationId={loc.id}
                locationName={loc.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
