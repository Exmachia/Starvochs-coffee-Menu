import type { ComponentType, ReactNode, SVGProps } from 'react'

export function PendingNotice({
  icon: Icon,
  children,
  actions,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  children: ReactNode
  actions: ReactNode
}) {
  return (
    <div className="mt-15 mb-11 max-w-[560px] flex flex-col items-start gap-3.5 rounded-[20px] border border-border bg-surface p-5.5 px-5">
      <Icon className="h-7.5 w-7.5 text-accent" />
      <p className="max-w-[56ch] text-[15px] leading-relaxed text-ink">{children}</p>
      <div className="flex flex-wrap gap-2.5">{actions}</div>
    </div>
  )
}
