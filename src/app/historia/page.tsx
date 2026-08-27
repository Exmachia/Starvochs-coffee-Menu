import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { IconHeart } from '@/components/icons'
import { PageHero } from '@/components/PageHero'
import { PendingNotice } from '@/components/PendingNotice'

export const metadata: Metadata = {
  title: 'Historia',
  description: 'La historia detrás de Starvochs Coffee.',
}

export default function HistoriaPage() {
  return (
    <div className="wrap">
      <PageHero title="Nuestra historia">Por qué un Vocho rojo, y por qué café.</PageHero>

      <PendingNotice
        icon={IconHeart}
        actions={
          <>
            <Button href="/menu">Ver el menú</Button>
            <Button href="/" variant="ghost">
              Volver al inicio
            </Button>
          </>
        }
      >
        Estamos escribiendo esta historia con calma para contártela bien: por qué el Vocho, cuándo
        empezó todo y quién está detrás de cada taza. Vuelve pronto o síguenos en redes para no
        perderte el primer capítulo.
      </PendingNotice>
    </div>
  )
}
