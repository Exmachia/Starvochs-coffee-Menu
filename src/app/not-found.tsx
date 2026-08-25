import type { Metadata } from 'next'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Página no encontrada',
}

export default function NotFound() {
  return (
    <div className="wrap flex flex-col items-start gap-3.5 pt-16 pb-20 max-[480px]:pt-10">
      <span className="font-script text-2xl font-bold text-accent">Se nos coló un desvío</span>
      <h1 className="m-0 font-display text-[clamp(24px,5vw,36px)] font-bold tracking-[0.06em] text-heading uppercase">
        Página no encontrada
      </h1>
      <p className="max-w-[56ch] text-[15.5px] leading-relaxed text-ink-muted">
        La página que buscas no existe o cambió de dirección. Prueba desde el menú o vuelve al
        inicio.
      </p>
      <div className="mt-2 flex flex-wrap gap-2.5">
        <Button href="/">Volver al inicio</Button>
        <Button href="/menu" variant="ghost">
          Ver el menú
        </Button>
      </div>
    </div>
  )
}
