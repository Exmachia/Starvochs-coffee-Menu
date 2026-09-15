'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import { sendGAEvent } from '@next/third-parties/google'
import { isOpenNow, type Location } from '@/data/locations'

function subscribe(callback: () => void) {
  const id = setInterval(callback, 60_000)
  return () => clearInterval(id)
}

/** This page has no other dynamic data, so Next.js would otherwise statically
 * generate it at build time — an "open now" badge computed then would freeze
 * at whatever time the site was last built. useSyncExternalStore's server
 * snapshot (null) is what both the server render and the client's initial
 * hydration pass use, avoiding a mismatch; the real value only appears once
 * mounted, and `subscribe` re-checks it every minute after that. */
export function OpenBadge({ location }: { location: Location }) {
  const open = useSyncExternalStore(
    subscribe,
    () => isOpenNow(location),
    () => null
  )

  // Reports what the badge showed at the moment this card was actually seen —
  // once per mount, not on the 60s re-checks. Over time this answers a real
  // question: do people check a branch mostly while it's closed, meaning its
  // posted hours don't match when demand actually shows up.
  const reported = useRef(false)
  useEffect(() => {
    if (open === null || reported.current) return
    reported.current = true
    sendGAEvent('event', 'location_status_view', {
      location_id: location.id,
      location_name: location.name,
      open,
    })
  }, [open, location.id, location.name])

  if (open === null) return null

  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[12.5px] font-bold ${
        open ? 'bg-heading-soft/15 text-heading-soft' : 'bg-accent/10 text-accent-deep'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${open ? 'bg-heading-soft' : 'bg-accent'}`} />
      {open ? 'Abierto ahora' : 'Cerrado ahora'}
    </span>
  )
}
