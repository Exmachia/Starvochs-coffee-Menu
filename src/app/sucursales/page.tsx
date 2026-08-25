import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { IconMapPin } from '@/components/icons'
import { PageHero } from '@/components/PageHero'
import { PendingNotice } from '@/components/PendingNotice'

export const metadata: Metadata = {
  title: 'Sucursales',
  description: 'Ubicaciones y horarios de Starvochs Coffee.',
}

export default function SucursalesPage() {
  return (
    <div className="wrap">
      <PageHero title="Sucursales">Dónde encontrarnos y a qué hora estamos abiertos.</PageHero>

      <div className="py-8.5 pb-11">
        <PendingNotice
          icon={IconMapPin}
          actions={
            <>
              <Button href="https://wa.me/523125507416" external>
                Escríbenos por WhatsApp
              </Button>
              <Button href="/menu" variant="ghost">
                Ver el menú
              </Button>
            </>
          }
        >
          Estamos afinando la dirección, el horario y el mapa de cada sucursal para ponerlos aquí.
          Mientras tanto, escríbenos por redes y con gusto te decimos cómo llegar.
        </PendingNotice>
      </div>
    </div>
  )
}
