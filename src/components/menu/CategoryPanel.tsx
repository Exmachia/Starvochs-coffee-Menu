import type { ReactNode } from 'react'
import { IconChevron } from '@/components/icons'
import { FeaturedGrid } from '@/components/menu/FeaturedGrid'
import { SectionHead } from '@/components/SectionHead'
import { EXTRAS, priceLabel, type Category, type ExtraKey, type MenuItem } from '@/data/menu'

/** Shared by the `sizes` and `list` category types — same row shape (name + optional
 * note on the left, price(s) + chevron on the right), differing only in how many
 * price columns the caller passes. */
function PriceRow({
  item,
  prices,
  onClick,
}: {
  item: MenuItem
  prices: ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-12.5 w-full items-center gap-2.5 border-b border-border px-1 py-3 text-left text-ink transition-colors duration-150 ease-fluid hover:bg-surface-2 active:bg-surface-2 focus-visible:bg-surface-2 focus-visible:outline-none"
    >
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-semibold text-ink">{item.name}</div>
        {item.note && (
          <span className="mt-0.5 block overflow-hidden text-ellipsis whitespace-nowrap text-xs italic text-ink-muted">
            {item.note}
          </span>
        )}
      </div>
      {prices}
      <span className="flex flex-none text-ink-muted">
        <IconChevron className="block h-3.5 w-3.5" />
      </span>
    </button>
  )
}

export function CategoryPanel({
  cat,
  active,
  spaced,
  panelRef,
  onSelectItem,
  onSelectExtra,
}: {
  cat: Category
  active: boolean
  /** True when this panel and the one before it are both visible ("todos" mode) — mirrors the
   * original's `.panel.active + .panel.active{margin-top:34px}` stacking rule. */
  spaced: boolean
  panelRef: (el: HTMLElement | null) => void
  onSelectItem: (item: MenuItem, cat: Category) => void
  onSelectExtra: (key: ExtraKey) => void
}) {
  return (
    <section
      ref={panelRef}
      id={`panel-${cat.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${cat.id}`}
      className={`scroll-mt-[calc(var(--nav-h)+72px)] ${active ? 'block' : 'hidden'} ${spaced ? 'mt-8.5 min-[640px]:mt-11' : ''}`}
    >
      <SectionHead id={`head-${cat.id}`} icon={cat.icon}>
        {cat.label}
      </SectionHead>

      {cat.type === 'featured' && (
        <FeaturedGrid items={cat.items} action={{ type: 'button', onSelect: (item) => onSelectItem(item, cat) }} />
      )}

      {cat.type === 'sizes' && (
        <>
          <div className="flex items-baseline gap-2.5 px-1 pb-1.5">
            <span className="flex-1" />
            <span className="w-13 text-right text-[11px] font-bold tracking-[0.6px] text-ink-muted uppercase">
              {cat.sizeLabels[0]}
            </span>
            <span className="w-13 text-right text-[11px] font-bold tracking-[0.6px] text-ink-muted uppercase">
              {cat.sizeLabels[1]}
            </span>
          </div>
          <div className="border-t border-border">
            {cat.items.map((item) => (
              <PriceRow
                key={item.id}
                item={item}
                onClick={() => onSelectItem(item, cat)}
                prices={
                  <div className="flex flex-none gap-0">
                    <b className="w-13 text-right text-[14.5px] font-bold tabular-nums text-accent">
                      {item.price12_16!.a}
                    </b>
                    <b className="w-13 text-right text-[14.5px] font-bold tabular-nums text-accent">
                      {item.price12_16!.b}
                    </b>
                  </div>
                }
              />
            ))}
          </div>
          {cat.footnote && <p className="mt-3 px-1 text-[12.5px] italic text-ink-muted">{cat.footnote}</p>}
        </>
      )}

      {cat.type === 'list' && (
        <div className="border-t border-border">
          {cat.items.map((item) => (
            <PriceRow
              key={item.id}
              item={item}
              onClick={() => onSelectItem(item, cat)}
              prices={
                <span className="text-nowrap text-[14.5px] font-bold tabular-nums text-accent">
                  {priceLabel(item)}
                </span>
              }
            />
          ))}
        </div>
      )}

      {cat.type === 'extras' && (
        <div className="grid grid-cols-1 gap-2.25 min-[480px]:grid-cols-2 min-[480px]:gap-2.5 min-[760px]:grid-cols-3">
          {(Object.keys(EXTRAS) as ExtraKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onSelectExtra(key)}
              className="flex min-h-12.5 items-center justify-between gap-2.5 rounded-[14px] border border-border/60 bg-surface px-3.75 py-3 text-left text-ink transition-[transform,background] duration-150 ease-fluid hover:-translate-y-0.25 hover:bg-surface-2 active:scale-[0.97] active:bg-surface-2"
            >
              <span className="text-[14.5px] font-semibold">{EXTRAS[key].name}</span>
              <b className="font-bold tabular-nums text-accent">${EXTRAS[key].price}</b>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
