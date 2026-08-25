import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.6l2.86 6.02 6.53.68-4.9 4.48 1.33 6.5L12 16.9l-5.82 3.38 1.33-6.5-4.9-4.48 6.53-.68z" />
    </svg>
  )
}

export function IconCup(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 8h11v6a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4z" />
      <path d="M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 3.5c-.7.7-.7 1.3 0 2M11.5 3.5c-.7.7-.7 1.3 0 2" />
    </svg>
  )
}

export function IconDrop(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3c3 4 6 7.2 6 10.8A6 6 0 0 1 6 13.8C6 10.2 9 7 12 3z" />
    </svg>
  )
}

export function IconIce(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2v20M4 6l16 12M20 6L4 18M2 12h20" />
    </svg>
  )
}

export function IconSwirl(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 20V10a5 5 0 0 1 10 0v6a3 3 0 0 1-6 0V11" />
      <path d="M4 20h16" />
    </svg>
  )
}

export function IconLeaf(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z" />
      <path d="M5 19c3-5 6-8 11-11" />
    </svg>
  )
}

export function IconPlus(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconChevron(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function IconShare(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx={18} cy={5} r={2.6} />
      <circle cx={6} cy={12} r={2.6} />
      <circle cx={18} cy={19} r={2.6} />
      <path d="M8.3 10.7l7.4-4.4M8.3 13.3l7.4 4.4" />
    </svg>
  )
}

export function IconGrid(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x={3.5} y={3.5} width={7} height={7} rx={1.4} />
      <rect x={13.5} y={3.5} width={7} height={7} rx={1.4} />
      <rect x={3.5} y={13.5} width={7} height={7} rx={1.4} />
      <rect x={13.5} y={13.5} width={7} height={7} rx={1.4} />
    </svg>
  )
}

export function IconMapPin(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
      <circle cx={12} cy={9.5} r={2.4} />
    </svg>
  )
}

export function IconHeart(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.8 8.6c0 5.4-8.8 10.9-8.8 10.9S3.2 14 3.2 8.6a4.6 4.6 0 0 1 8.8-1.9 4.6 4.6 0 0 1 8.8 1.9z" />
    </svg>
  )
}

export function IconBurger(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconFacebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21.5v-8.1h2.7l.4-3.2h-3.1V8.2c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.4v3.2H10v8.1z" />
    </svg>
  )
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5a9.3 9.3 0 0 0-8 14L2.5 21.5l5.2-1.4A9.3 9.3 0 1 0 12 2.5zm5.4 13.2c-.2.6-1.3 1.2-1.8 1.3-.5.1-1.1.1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9 1-2.2.2-.3.5-.3.6-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.6.7 1.7.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.1-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.3.4-.2.6-.1.2.1 1.4.7 1.7.8.2.1.4.2.4.3.1.2.1.5-.1 1z" />
    </svg>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
      {...props}
    >
      <rect x={3.5} y={3.5} width={17} height={17} rx={5} />
      <circle cx={12} cy={12} r={4.1} />
      <circle cx={17.1} cy={6.9} r={1} fill="currentColor" stroke="none" />
    </svg>
  )
}
