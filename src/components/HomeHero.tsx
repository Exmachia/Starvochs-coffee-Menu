import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import { Button } from '@/components/Button'

const HERO_IMAGE_FILENAME = 'hero-vocho.jpg'
const heroImageExists = fs.existsSync(path.join(process.cwd(), 'public', HERO_IMAGE_FILENAME))

export function HomeHero() {
  return (
    <section className="pt-6 min-[680px]:pt-9">
      <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-heading px-5 pt-16 pb-9 min-[680px]:min-h-[460px] min-[680px]:px-10 min-[680px]:pt-20 min-[680px]:pb-12">
        {heroImageExists ? (
          <>
            <Image
              src={`/${HERO_IMAGE_FILENAME}`}
              alt="El Vocho rojo de Starvochs Coffee"
              fill
              priority
              sizes="(min-width: 1036px) 1000px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heading via-heading/55 to-heading/10" />
          </>
        ) : (
          // No hero photo checked in yet — drop a real one at public/hero-vocho.jpg
          // (wide/landscape, ~1600px+) and this panel switches to it automatically.
          // Reuses the same dot-grid texture as the page background (globals.css)
          // instead of an invented gradient glow, so the fallback still belongs
          // to this site rather than looking like a generic placeholder hero.
          // An SVG dot tile, not a CSS radial-gradient, so it stays a crisp grid
          // rather than a soft ambient glow.
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(251,243,223,0.4)'/%3E%3C/svg%3E\")",
              backgroundSize: '22px 22px',
            }}
          />
        )}

        <div className="relative max-w-[46ch]">
          <p className="font-script text-2xl text-accent-contrast/90 min-[680px]:text-[26px]">
            Bienvenido a
          </p>
          <h1 className="mt-1 text-balance font-display text-[32px] font-semibold tracking-[0.2px] text-accent-contrast uppercase min-[680px]:text-[44px]">
            El café con espíritu de Vocho rojo
          </h1>
          <p className="mt-3.5 max-w-[42ch] text-body-muted leading-relaxed text-accent-contrast/85">
            Especialidad de la casa, hecha con calma y ganas de compartirla. Sin apps ni pedidos en
            línea — te esperamos en persona.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Button href="/menu" variant="accent">
              Ver el menú completo
            </Button>
            <Button href="/sucursales" variant="ghost">
              Ver sucursales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
