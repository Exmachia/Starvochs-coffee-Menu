import Link from 'next/link'
import { IconChevron } from '@/components/icons'
import { GlassIcon } from '@/components/menu/GlassIcon'
import { priceLabel, type MenuItem } from '@/data/menu'

const cardClass =
  'flex flex-col gap-2 rounded-[18px] border border-border bg-surface p-2.75 pb-3.25 text-left text-ink no-underline transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.75 hover:shadow-[0_10px_24px_-12px_var(--shadow)] active:scale-[0.97] min-[520px]:gap-2.5 min-[520px]:rounded-[20px] min-[520px]:p-3.5 min-[520px]:pb-4 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2'

function CardContent({ item }: { item: MenuItem }) {
  return (
    <>
      <div className="flex aspect-[1/0.82] items-center justify-center rounded-[13px] bg-[radial-gradient(circle_at_50%_32%,var(--color-surface-2),var(--color-chip-bg))]">
        {item.glass && <GlassIcon {...item.glass} className="h-[64%] w-[64%]" />}
      </div>
      <div className="text-balance font-display text-[14.5px] font-semibold text-heading min-[520px]:text-[15.5px]">
        {item.name}
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13.5px] font-bold tabular-nums text-accent min-[520px]:text-[14.5px]">
          {item.priceSD ? `S $${item.priceSD.s} / D $${item.priceSD.d}` : priceLabel(item)}
        </span>
        <span className="flex flex-none text-ink-muted">
          <IconChevron className="block h-3.5 w-3.5" />
        </span>
      </div>
    </>
  )
}

export function FeaturedGrid({
  items,
  action,
}: {
  items: MenuItem[]
  action: { type: 'link'; href: string } | { type: 'button'; onSelect: (item: MenuItem) => void }
}) {
  return (
    <div className="grid grid-cols-2 gap-2.75 min-[520px]:grid-cols-3 min-[520px]:gap-3.5 min-[760px]:grid-cols-4">
      {items.map((item) =>
        action.type === 'link' ? (
          <Link key={item.id ?? item.name} href={action.href} className={cardClass}>
            <CardContent item={item} />
          </Link>
        ) : (
          <button
            key={item.id ?? item.name}
            type="button"
            onClick={() => action.onSelect(item)}
            className={cardClass}
          >
            <CardContent item={item} />
          </button>
        )
      )}
    </div>
  )
}
