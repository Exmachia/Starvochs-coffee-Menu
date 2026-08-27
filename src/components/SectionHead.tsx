import type { ComponentType, ReactNode, SVGProps } from 'react'

type SectionHeadProps = {
  id: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  children: ReactNode
  /** "default" is the shared display-font/18px treatment used on the menu's category panels.
   * "compact" is the small Work Sans small-caps override, used where the section-to-section
   * rule is already enough separation and a full headline would overstate a modest section.
   * "hero" scales the same display headline up for a section that carries the most weight
   * on its page (e.g. the home page's "Lo más pedido") — same icon+rule shape, just the
   * weight the content earns. */
  variant?: 'default' | 'compact' | 'hero'
}

const headingClass = {
  compact: 'font-sans text-sm font-bold tracking-[0.09em] text-heading uppercase',
  default: 'font-display text-lg font-semibold tracking-[0.5px] text-heading uppercase',
  hero: 'font-display text-[28px] font-semibold tracking-[0.25px] text-heading uppercase min-[520px]:text-[36px]',
}

const iconClass = {
  compact: 'h-[19px] w-[19px]',
  default: 'h-[19px] w-[19px]',
  hero: 'h-6 w-6 min-[520px]:h-7 min-[520px]:w-7',
}

export function SectionHead({ id, icon: Icon, children, variant = 'default' }: SectionHeadProps) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5">
      <Icon className={`${iconClass[variant]} flex-none text-accent`} />
      <h2 id={id} className={headingClass[variant]}>
        {children}
      </h2>
      <div className="h-0.5 flex-1 bg-border" />
    </div>
  )
}
