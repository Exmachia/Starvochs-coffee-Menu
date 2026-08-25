import type { ComponentType, ReactNode, SVGProps } from 'react'

type SectionHeadProps = {
  id: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  children: ReactNode
  /** "default" is the shared Fredoka/18px treatment used on the menu's category panels.
   * "compact" is the home page's Work Sans small-caps override — Fredoka reads too playful
   * at 18px there, and the section-to-section rule is already enough separation. */
  variant?: 'default' | 'compact'
}

export function SectionHead({ id, icon: Icon, children, variant = 'default' }: SectionHeadProps) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5">
      <Icon className="h-[19px] w-[19px] flex-none text-accent" />
      <h2
        id={id}
        className={
          variant === 'compact'
            ? 'font-sans text-sm font-bold tracking-[0.09em] text-heading uppercase'
            : 'font-display text-lg font-semibold tracking-[0.5px] text-heading uppercase'
        }
      >
        {children}
      </h2>
      <div className="h-0.5 flex-1 bg-border" />
    </div>
  )
}
