import { Button } from '@/components/Button'
import { IconHeart, IconMapPin, IconStar } from '@/components/icons'
import { FeaturedGrid } from '@/components/menu/FeaturedGrid'
import { SectionHead } from '@/components/SectionHead'
import { CATEGORIES } from '@/data/menu'

const destacados = CATEGORIES[0]
const featuredItems = destacados.type === 'featured' ? destacados.items : []

export default function HomePage() {
  return (
    <div className="wrap">
      <h1 className="sr-only">Starvochs Coffee</h1>

      <section className="pt-9 pb-10" aria-labelledby="destacados-h">
        <SectionHead id="destacados-h" icon={IconStar} variant="compact">
          Lo más pedido
        </SectionHead>
        <FeaturedGrid items={featuredItems} action={{ type: 'link', href: '/menu' }} />
        <div className="mt-4.5 flex flex-wrap gap-2.5">
          <Button href="/menu" variant="ghost">
            Ver el menú completo
          </Button>
        </div>
      </section>

      <section className="border-t border-border py-10" aria-labelledby="encuentranos-h">
        <SectionHead id="encuentranos-h" icon={IconMapPin} variant="compact">
          Encuéntranos
        </SectionHead>
        <p className="max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
          Visítanos en cualquiera de nuestras sucursales. Aún no tomamos pedidos por WhatsApp ni
          apps, así que te esperamos en persona para prepararte tu bebida.
        </p>
        <div className="mt-4.5 flex flex-wrap gap-2.5">
          <Button href="/sucursales" variant="primary">
            Ver sucursales y horarios
          </Button>
        </div>
      </section>

      <section className="border-t border-border py-10" aria-labelledby="historia-h">
        <SectionHead id="historia-h" icon={IconHeart} variant="compact">
          Nuestra historia
        </SectionHead>
        <p className="max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
          Un Vocho rojo, un buen café y las ganas de compartirlo con quien se acerque: así es
          Starvochs. Todavía estamos escribiendo esta parte con calma, para contártela bien.
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
