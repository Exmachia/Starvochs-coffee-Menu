type Topping = 'swirl' | 'shave' | 'whip' | 'ice'

export type GlassIconProps = {
  id: string
  liquid: string
  liquid2?: string
  topping?: Topping
  toppingColor?: string
  className?: string
}

/** Hand-drawn "glass drink" illustration used for the featured-drink thumbnails and their modal icon. */
export function GlassIcon({
  id,
  liquid,
  liquid2,
  topping,
  toppingColor = '#fff',
  className,
}: GlassIconProps) {
  const gradientId = `liq-${id}`
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={liquid} />
          <stop offset="1" stopColor={liquid2 ?? liquid} />
        </linearGradient>
      </defs>
      <path
        d="M30 30 L70 30 L64 82 Q50 90 36 82 Z"
        fill="var(--color-surface)"
        stroke="var(--color-heading)"
        strokeWidth={2}
      />
      <path d="M33 40 L67 40 L62.5 80 Q50 87 37.5 80 Z" fill={`url(#${gradientId})`} />
      {topping === 'swirl' && (
        <>
          <path
            d="M37 44 Q50 38 63 44"
            fill="none"
            stroke={toppingColor}
            strokeWidth={2.4}
            strokeLinecap="round"
          />
          <path
            d="M39 51 Q50 46 61 51"
            fill="none"
            stroke={toppingColor}
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.8}
          />
        </>
      )}
      {topping === 'shave' && (
        <>
          <circle cx={42} cy={42} r={2} fill={toppingColor} />
          <circle cx={50} cy={39} r={2} fill={toppingColor} />
          <circle cx={58} cy={43} r={2} fill={toppingColor} />
          <circle cx={46} cy={46} r={1.6} fill={toppingColor} />
          <circle cx={54} cy={47} r={1.6} fill={toppingColor} />
        </>
      )}
      {topping === 'whip' && (
        <path
          d="M38 40 Q42 30 50 32 Q58 30 62 40 Q64 44 58 45 L42 45 Q36 44 38 40Z"
          fill={toppingColor}
          stroke="var(--color-heading)"
          strokeWidth={1.4}
        />
      )}
      {topping === 'ice' && (
        <>
          <rect
            x={40}
            y={44}
            width={8}
            height={8}
            rx={1.6}
            fill={toppingColor}
            opacity={0.9}
            transform="rotate(-8 44 48)"
          />
          <rect
            x={52}
            y={50}
            width={7}
            height={7}
            rx={1.6}
            fill={toppingColor}
            opacity={0.85}
            transform="rotate(10 55 53)"
          />
          <rect
            x={42}
            y={58}
            width={6}
            height={6}
            rx={1.4}
            fill={toppingColor}
            opacity={0.8}
            transform="rotate(6 45 61)"
          />
        </>
      )}
      <line
        x1={58}
        y1={24}
        x2={52}
        y2={80}
        stroke="var(--color-heading)"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <path d="M30 30 L70 30" stroke="var(--color-heading)" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}
