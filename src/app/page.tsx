import { Button } from '@/components/Button'
import { IconHeart, IconMapPin, IconStar } from '@/components/icons'
import { LocationsMapLoader } from '@/components/LocationsMapLoader'
import { FeaturedGrid } from '@/components/menu/FeaturedGrid'
import { SectionHead } from '@/components/SectionHead'
import { LOCATIONS } from '@/data/locations'
import { CATEGORIES } from '@/data/menu'

const destacados = CATEGORIES[0]
const featuredItems = destacados.type === 'featured' ? destacados.items : []

export default function HomePage() {
  return (
    <div className="wrap">
      <h1 className="sr-only">Starvochs Coffee</h1>

      <section className="pt-9 pb-10 min-[680px]:pt-11 min-[680px]:pb-14" aria-labelledby="destacados-h">
        <SectionHead id="destacados-h" icon={IconStar} variant="hero">
          Lo más pedido
        </SectionHead>
        <FeaturedGrid items={featuredItems} action={{ type: 'link', href: '/menu' }} layout="even" />
        <div className="mt-4.5 flex flex-wrap gap-2.5">
          <Button href="/menu" variant="primary">
            Ver el menú completo
          </Button>
        </div>
      </section>

      <section
        className="border-t border-border py-10 min-[680px]:py-14"
        aria-labelledby="encuentranos-h"
      >
        <SectionHead id="encuentranos-h" icon={IconMapPin} variant="compact">
          Encuéntranos
        </SectionHead>
        <div className="h-72 overflow-hidden rounded-2xl border border-border">
          <LocationsMapLoader locations={LOCATIONS} />
        </div>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
          Visítanos en cualquiera de nuestras sucursales. Aún no tomamos pedidos por WhatsApp ni
          apps, así que te esperamos en persona para prepararte tu bebida.
        </p>
        <div className="mt-4.5 flex flex-wrap gap-2.5">
          <Button href="/sucursales" variant="ghost">
            Ver sucursales y horarios
          </Button>
        </div>
      </section>

      <section
        className="border-t border-border py-10 min-[680px]:py-14"
        aria-labelledby="historia-h"
      >
        <SectionHead id="historia-h" icon={IconHeart} variant="compact">
          Nuestra historia
        </SectionHead>
        <p className="max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
          Así es Starvochs. Todavía estamos escribiendo esta historia con calma, para contártela
          bien.
        </p>
        <div className="mt-4.5 flex flex-wrap gap-2.5">
          <Button href="/historia" variant="ghost">
            Conoce nuestra historia
          </Button>
        </div>
      </section>
    </div>
  )
}
