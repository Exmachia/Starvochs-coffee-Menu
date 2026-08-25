'use client'

import type { RefObject } from 'react'
import { IconMapPin, IconPlus, IconShare } from '@/components/icons'
import { GlassIcon } from '@/components/menu/GlassIcon'
import {
  EXTRAS,
  extrasAppliesTo,
  priceLabel,
  type Category,
  type ExtraKey,
  type MenuItem,
} from '@/data/menu'

export type ModalState =
  | { kind: 'item'; item: MenuItem; cat: Category }
  | { kind: 'extra'; key: ExtraKey }
  | null

export function MenuModal({
  state,
  mounted,
  open,
  cardRef,
  closeButtonRef,
  onClose,
  onShare,
}: {
  state: ModalState
  mounted: boolean
  open: boolean
  cardRef: RefObject<HTMLDivElement | null>
  closeButtonRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
  onShare: () => void
}) {
  if (!mounted || !state) {
    return (
      <div
        hidden
        className="fixed inset-0 z-[100] flex items-end justify-center bg-[var(--backdrop)] opacity-0"
      />
    )
  }

  const isItem = state.kind === 'item'
  const item = state.kind === 'item' ? state.item : null
  const cat = state.kind === 'item' ? state.cat : null
  const extraKey = state.kind === 'extra' ? state.key : null
  const extra = extraKey ? EXTRAS[extraKey] : null

  const name = item ? item.name : extra!.name
  const note = item?.note
  const desc = item ? item.desc : extra!.desc
  const lleva = item?.lleva
  const extraKeys = item ? (item.extras ?? (cat && 'extras' in cat ? cat.extras : [])) : []
  const availableIn = extraKey ? extrasAppliesTo(extraKey) : []
  const showShare = isItem && !!item?.id

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className={`fixed inset-0 z-[100] flex items-end justify-center bg-[var(--backdrop)] transition-opacity duration-[180ms] ease-out min-[640px]:items-center min-[640px]:p-5 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalName"
        className={`relative max-h-[88vh] w-full max-w-[440px] overflow-y-auto rounded-t-[22px] bg-surface px-5 pt-3.5 pb-[calc(24px+env(safe-area-inset-bottom))] shadow-[0_-12px_40px_-12px_var(--shadow)] transition-transform duration-200 ease-out min-[640px]:rounded-[24px] min-[640px]:px-5.5 min-[640px]:pt-6.5 min-[640px]:pb-7 ${
          open ? 'translate-y-0 scale-100' : 'translate-y-3.5 scale-[0.98] min-[640px]:translate-y-1.5'
        }`}
      >
        <div className="mx-auto mb-3.5 block h-1 w-9 rounded-[3px] bg-border min-[640px]:hidden" />

        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 flex h-9.5 w-9.5 items-center justify-center rounded-full border border-border bg-surface-2 text-lg leading-none text-ink hover:bg-chip-bg active:scale-90 active:bg-chip-bg"
        >
          &times;
        </button>

        {showShare && (
          <button
            type="button"
            aria-label="Compartir esta bebida"
            onClick={onShare}
            className="absolute top-3.5 left-3.5 flex h-9.5 w-9.5 items-center justify-center rounded-full border border-border bg-surface-2 text-ink hover:bg-chip-bg hover:text-accent active:scale-90 active:bg-chip-bg"
          >
            <IconShare className="h-[17px] w-[17px]" />
          </button>
        )}

        <div className="mx-auto mb-3.5 flex h-22 w-22 items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_32%,var(--color-surface-2),var(--color-chip-bg))] min-[640px]:h-24 min-[640px]:w-24">
          {item?.glass ? (
            <GlassIcon {...item.glass} className="h-[62%] w-[62%]" />
          ) : item && cat ? (
            <cat.icon className="h-[46%] w-[46%] text-accent" />
          ) : (
            <IconPlus className="h-[46%] w-[46%] text-accent" />
          )}
        </div>

        <h3 id="modalName" className="text-balance text-center font-display text-[21px] font-semibold text-heading min-[640px]:text-[22px]">
          {name}
        </h3>
        {note && (
          <span className="mt-1 block text-center text-[13px] italic text-ink-muted">{note}</span>
        )}

        <div className="mt-2.5 flex flex-wrap justify-center gap-2.5">
          {item?.price12_16 && cat?.type === 'sizes' ? (
            <>
              <span className="rounded-full bg-chip-bg px-3.5 py-1.25 text-sm font-bold tabular-nums text-accent">
                {cat.sizeLabels[0]} ${item.price12_16.a}
              </span>
              <span className="rounded-full bg-chip-bg px-3.5 py-1.25 text-sm font-bold tabular-nums text-accent">
                {cat.sizeLabels[1]} ${item.price12_16.b}
              </span>
            </>
          ) : item?.priceSD ? (
            <>
              <span className="rounded-full bg-chip-bg px-3.5 py-1.25 text-sm font-bold tabular-nums text-accent">
                S ${item.priceSD.s}
              </span>
              <span className="rounded-full bg-chip-bg px-3.5 py-1.25 text-sm font-bold tabular-nums text-accent">
                D ${item.priceSD.d}
              </span>
            </>
          ) : (
            <span className="rounded-full bg-chip-bg px-3.5 py-1.25 text-sm font-bold tabular-nums text-accent">
              {item ? priceLabel(item) : `$${extra!.price}`}
            </span>
          )}
        </div>

        <div className="my-4 h-px bg-border" />

        <div>
          <p className="mb-1.75 text-[11px] font-bold tracking-[0.8px] text-ink-muted uppercase">Descripción</p>
          <p className="mb-4 text-[14.5px] leading-relaxed text-ink">{desc}</p>
        </div>

        {lleva && lleva.length > 0 && (
          <div>
            <p className="mb-1.75 text-[11px] font-bold tracking-[0.8px] text-ink-muted uppercase">Lleva</p>
            <div className="mb-4 flex flex-wrap gap-1.75">
              {lleva.map((l) => (
                <span key={l} className="rounded-full border border-border bg-chip-bg px-2.75 py-1.5 text-[12.5px] font-medium text-ink">
                  {l}
                </span>
              ))}
            </div>
          </div>
        )}

        {isItem && extraKeys.length > 0 && (
          <div>
            <p className="mb-1.75 text-[11px] font-bold tracking-[0.8px] text-ink-muted uppercase">Extras disponibles</p>
            <div className="mb-4 flex flex-wrap gap-1.75">
              {extraKeys.map((k) => (
                <span key={k} className="rounded-full border border-border bg-chip-bg px-2.75 py-1.5 text-[12.5px] font-semibold text-heading-soft">
                  {EXTRAS[k].name} <b className="font-bold text-accent">+${EXTRAS[k].price}</b>
                </span>
              ))}
            </div>
          </div>
        )}

        {extra && availableIn.length > 0 && (
          <div>
            <p className="mb-1.75 text-[11px] font-bold tracking-[0.8px] text-ink-muted uppercase">Disponible en</p>
            <div className="mb-4 flex flex-wrap gap-1.75">
              {availableIn.map((label) => (
                <span key={label} className="rounded-full border border-border bg-chip-bg px-2.75 py-1.5 text-[12.5px] font-medium text-ink">
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}

        {isItem && (
          <div className="mt-0.5 flex items-start gap-2.25 rounded-[14px] bg-chip-bg p-3.25">
            <IconMapPin className="mt-px h-4.5 w-4.5 flex-none text-accent" />
            <p className="m-0 text-[12.5px] leading-relaxed font-medium text-heading-soft">
              Disponible en todas nuestras sucursales. Por ahora no tomamos pedidos por WhatsApp ni
              apps: ¡te esperamos en la más cercana!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
