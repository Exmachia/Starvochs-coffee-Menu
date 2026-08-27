import { IconFacebook, IconInstagram, IconWhatsapp } from '@/components/icons'

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/StarvochsCoffee/?locale=es_LA',
    label: 'Starvochs Coffee',
    Icon: IconFacebook,
  },
  {
    href: 'https://wa.me/523125507416',
    label: '+52 312 550 7416',
    Icon: IconWhatsapp,
  },
  {
    href: 'https://www.instagram.com/starvochs_coffee/',
    label: '@starvochs_coffee',
    Icon: IconInstagram,
  },
]

export function Footer() {
  return (
    <>
      <hr className="m-0 h-0.5 border-0 bg-border" />
      <footer className="flex flex-col gap-1.5 py-8 pb-[calc(40px+env(safe-area-inset-bottom))] text-center">
        <p className="font-script text-[19px] font-bold text-accent min-[480px]:text-xl">
          Trae tu termo o vaso y recibe $2 de descuento en cualquier bebida
        </p>
        <p className="text-sm font-bold text-heading">Gracias por ser parte de nuestra historia ♥</p>
        <nav
          aria-label="Redes sociales de Starvochs Coffee"
          className="mt-1.5 flex flex-wrap items-center justify-center gap-2"
        >
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 items-center gap-1.5 rounded-full border border-transparent px-3.5 py-1.5 text-[13px] font-medium text-ink-muted no-underline transition-colors hover:border-border hover:bg-surface hover:text-accent active:scale-[0.96] active:border-border active:bg-surface active:text-accent"
            >
              <Icon className="h-[15px] w-[15px] flex-none" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </footer>
    </>
  )
}
