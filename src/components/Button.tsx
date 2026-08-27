import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'ghost'
  external?: boolean
  children: ReactNode
}

const base =
  'inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-[22px] py-3 text-[15px] font-bold no-underline transition-[transform,background,color] duration-150 ease-fluid active:scale-[0.96]'

const variants = {
  primary: 'bg-heading text-accent-contrast hover:bg-heading-soft',
  ghost: 'border-[1.5px] border-border bg-surface text-heading hover:border-heading-soft',
}

export function Button({ href, variant = 'primary', external, children }: ButtonProps) {
  const className = `${base} ${variants[variant]}`
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
