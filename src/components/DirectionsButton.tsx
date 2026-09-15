'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { buttonBase, buttonVariants } from '@/components/Button'

/** The closest thing this ordering-free, off-site-conversion site has to a
 * "conversion" event — the visitor is committing to actually go, not just
 * browsing. Kept as its own component (rather than an onClick prop on the
 * shared Button) so Button stays a plain display primitive with no
 * analytics coupling; only the one flow that represents real visit intent
 * carries this. */
export function DirectionsButton({
  href,
  locationId,
  locationName,
}: {
  href: string
  locationId: string
  locationName: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonBase} ${buttonVariants.ghost}`}
      onClick={() =>
        sendGAEvent('event', 'directions_click', {
          location_id: locationId,
          location_name: locationName,
        })
      }
    >
      Cómo llegar
    </a>
  )
}
