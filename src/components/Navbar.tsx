'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { IconBurger, IconClose } from '@/components/icons'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/menu', label: 'Menú' },
  { href: '/sucursales', label: 'Sucursales' },
  { href: '/historia', label: 'Historia' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-bg pt-[env(safe-area-inset-top)]">
      <div className="wrap flex min-h-[var(--nav-h)] items-center gap-3 py-[11px] max-[480px]:py-2.5">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 text-heading no-underline">
          <Image
            src="/logo.png"
            alt="Starvochs Coffee, inicio"
            width={36}
            height={36}
            className="h-9 w-9 flex-none object-contain"
            priority
          />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap font-display text-[15.5px] font-semibold tracking-wide">
            Starvochs Coffee
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="ml-auto hidden items-center gap-6.5 min-[760px]:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-px py-2 text-[14.5px] font-semibold no-underline ${
                  isActive
                    ? "text-accent after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent after:content-['']"
                    : 'text-heading-soft'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="relative ml-auto flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[10px] text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-90 min-[760px]:hidden"
          aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={open}
          aria-controls="navPanel"
          onClick={() => setOpen((v) => !v)}
        >
          <IconBurger
            className={`absolute h-[22px] w-[22px] transition-[opacity,transform] duration-200 ease-fluid ${
              open ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          <IconClose
            className={`absolute h-[22px] w-[22px] transition-[opacity,transform] duration-200 ease-fluid ${
              open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          />
        </button>
      </div>

      {/* Always mounted (never conditionally rendered) so it can actually animate open
       * and closed — a grid-rows 0fr/1fr transition is the CSS-only way to animate to
       * "auto" height. `inert` keeps the collapsed panel's links out of tab order and
       * out of the accessibility tree without a JS-timed unmount. */}
      <div
        id="navPanel"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-fluid min-[760px]:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <nav
          aria-label="Navegación principal"
          inert={!open}
          className={`flex min-h-0 flex-col overflow-hidden border-t border-border px-[18px] pb-[calc(10px+env(safe-area-inset-bottom))] pt-1.5 transition-opacity duration-200 ease-fluid max-[480px]:px-3.5 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center border-b border-border py-3.5 px-1.5 text-base font-semibold no-underline last:border-b-0 active:bg-surface-2 ${
                  isActive ? 'text-accent' : 'text-ink'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
