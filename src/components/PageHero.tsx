import type { ReactNode } from 'react'

export function PageHero({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-11 pb-2 max-[480px]:pt-7 max-[480px]:pb-1">
      <h1 className="m-0 text-balance font-display text-[clamp(24px,5vw,36px)] font-bold tracking-[0.06em] text-heading uppercase">
        {title}
      </h1>
      <p className="mt-2.5 max-w-[56ch] text-[15.5px] leading-relaxed text-ink-muted">{children}</p>
    </section>
  )
}
