'use client'

import { useEffect, useRef, useState } from 'react'
import { CategoryPanel } from '@/components/menu/CategoryPanel'
import { MenuModal, type ModalState } from '@/components/menu/MenuModal'
import {
  CATEGORIES,
  ITEM_INDEX,
  TABS,
  priceShareText,
  type Category,
  type ExtraKey,
  type MenuItem,
} from '@/data/menu'

export function MenuClient() {
  const [mode, setMode] = useState('todos')
  const [highlighted, setHighlighted] = useState('todos')

  const [modal, setModal] = useState<ModalState>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMounted, setModalMounted] = useState(false)

  const [toastMsg, setToastMsg] = useState('')
  const [toastShow, setToastShow] = useState(false)
  const [toastMounted, setToastMounted] = useState(false)

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const panelRefs = useRef<Record<string, HTMLElement | null>>({})
  const lastFocused = useRef<HTMLElement | null>(null)
  const modalCardRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const closeUnmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const toastHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const toastUnmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function highlightTab(id: string) {
    setHighlighted(id)
    tabRefs.current[id]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }

  function selectTab(id: string) {
    setMode(id)
    if (id === 'todos') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      panelRefs.current[id]?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    highlightTab(id)
  }

  function handleTabKeyDown(e: React.KeyboardEvent, tabId: string) {
    const idx = TABS.findIndex((t) => t.id === tabId)
    let next: (typeof TABS)[number] | null = null
    if (e.key === 'ArrowRight') next = TABS[(idx + 1) % TABS.length]
    else if (e.key === 'ArrowLeft') next = TABS[(idx - 1 + TABS.length) % TABS.length]
    else if (e.key === 'Home') next = TABS[0]
    else if (e.key === 'End') next = TABS[TABS.length - 1]
    if (next) {
      e.preventDefault()
      selectTab(next.id)
      tabRefs.current[next.id]?.focus()
    }
  }

  // Scrollspy: while every section is visible ("todos"), the pill for whichever section is
  // currently in view lights up, so the tab bar stays a live "you are here" reading of a long
  // page instead of a static filter list.
  useEffect(() => {
    if (mode !== 'todos') return

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 32) return
        for (const entry of entries) {
          if (entry.isIntersecting) {
            highlightTab(entry.target.id.replace('panel-', ''))
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    for (const cat of CATEGORIES) {
      const el = panelRefs.current[cat.id]
      if (el) observer.observe(el)
    }

    function onScroll() {
      if (window.scrollY < 32) highlightTab('todos')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [mode])

  function showModal() {
    if (closeUnmountTimer.current) clearTimeout(closeUnmountTimer.current)
    setModalMounted(true)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    closeUnmountTimer.current = setTimeout(() => setModalMounted(false), 180)
    lastFocused.current?.focus()
  }

  // Lock body scroll while the modal is open.
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  function openItemModal(item: MenuItem, cat: Category) {
    lastFocused.current = document.activeElement as HTMLElement
    setModal({ kind: 'item', item, cat })
    showModal()
  }

  function openExtraModal(key: ExtraKey) {
    lastFocused.current = document.activeElement as HTMLElement
    setModal({ kind: 'extra', key })
    showModal()
  }

  useEffect(() => {
    if (modalOpen) closeButtonRef.current?.focus()
  }, [modalOpen])

  // Focus trap (Tab cycling) + Escape to close, scoped to the modal card.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!modalOpen) return
      if (e.key === 'Escape') {
        closeModal()
        return
      }
      if (e.key === 'Tab' && modalCardRef.current) {
        const focusables = modalCardRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [modalOpen])

  function showToast(msg: string) {
    if (toastHideTimer.current) clearTimeout(toastHideTimer.current)
    if (toastUnmountTimer.current) clearTimeout(toastUnmountTimer.current)
    setToastMsg(msg)
    setToastMounted(true)
    setToastShow(false)
    requestAnimationFrame(() => setToastShow(true))
    toastHideTimer.current = setTimeout(() => {
      setToastShow(false)
      toastUnmountTimer.current = setTimeout(() => setToastMounted(false), 200)
    }, 2000)
  }

  async function copyToClipboard(text: string) {
    if (navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(text)
    }
    return new Promise<void>((resolve, reject) => {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
        resolve()
      } catch (err) {
        reject(err)
      } finally {
        document.body.removeChild(ta)
      }
    })
  }

  async function shareItem(item: MenuItem, cat: Category) {
    const price = priceShareText(item, cat)
    const url = `${location.origin}${location.pathname}#${item.id}`
    const text = `${item.name}: ${price} en Starvochs Coffee`
    if (navigator.share) {
      try {
        await navigator.share({ title: item.name, text, url })
      } catch {
        // user cancelled the native share sheet: nothing to do
      }
      return
    }
    try {
      await copyToClipboard(`${text}\n${url}`)
      showToast('Enlace copiado')
    } catch {
      showToast('No se pudo copiar el enlace')
    }
  }

  // A shared link (#coco-matcha) lands here, filters to that product's category so it's visible
  // in context, and opens its modal directly.
  useEffect(() => {
    function openFromHash() {
      const id = decodeURIComponent(location.hash.slice(1))
      const entry = id ? ITEM_INDEX[id] : undefined
      if (!entry) return
      selectTab(entry.cat.id)
      openItemModal(entry.item, entry.cat)
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
    // Intentionally mount-only: selectTab/openItemModal only touch state setters and
    // refs, which are stable, so there's nothing meaningful to re-subscribe on.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mx-auto max-w-[1000px] px-[18px] pt-5 pb-[calc(56px+env(safe-area-inset-bottom))] max-[480px]:px-[14px] max-[480px]:pt-4 max-[480px]:pb-[calc(48px+env(safe-area-inset-bottom))]">
      <div className="sticky top-[var(--nav-h)] z-20 -mx-[18px] bg-bg pt-2.5 pb-3 max-[480px]:-mx-[14px]">
        <div className="overflow-x-auto px-[18px] [mask-image:linear-gradient(90deg,transparent_0,#000_18px,#000_calc(100%-18px),transparent_100%)] [scrollbar-width:none] max-[480px]:px-[14px] [&::-webkit-scrollbar]:hidden">
          <div role="tablist" aria-label="Categorías del menú" className="flex w-max gap-2 p-0.5">
            {TABS.map((tab) => {
              const selected = highlighted === tab.id
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el
                  }}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={tab.id === 'todos' ? 'panels' : `panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectTab(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, tab.id)}
                  className={`flex min-h-10.5 items-center gap-1.75 rounded-full border-[1.5px] px-3.75 py-2.25 text-sm font-semibold whitespace-nowrap transition-[transform,background,color,border-color] duration-150 ease-out hover:-translate-y-0.25 active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    selected
                      ? 'border-heading bg-heading text-accent-contrast'
                      : 'border-border bg-surface text-heading-soft hover:border-heading-soft'
                  }`}
                >
                  <tab.icon className="h-4 w-4 flex-none" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div id="panels">
        {CATEGORIES.map((cat, i) => {
          const active = mode === 'todos' || mode === cat.id
          return (
            <CategoryPanel
              key={cat.id}
              cat={cat}
              active={active}
              spaced={mode === 'todos' && i > 0}
              panelRef={(el) => {
                panelRefs.current[cat.id] = el
              }}
              onSelectItem={openItemModal}
              onSelectExtra={openExtraModal}
            />
          )
        })}
      </div>

      <MenuModal
        state={modal}
        mounted={modalMounted}
        open={modalOpen}
        cardRef={modalCardRef}
        closeButtonRef={closeButtonRef}
        onClose={closeModal}
        onShare={() => modal?.kind === 'item' && shareItem(modal.item, modal.cat)}
      />

      {toastMounted && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-[calc(24px+env(safe-area-inset-bottom))] left-1/2 z-[200] -translate-x-1/2 rounded-full bg-heading px-5 py-2.75 text-sm font-semibold whitespace-nowrap text-accent-contrast shadow-[0_10px_30px_-8px_var(--shadow)] transition-[opacity,transform] duration-[180ms] ease-out ${
            toastShow ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2.5 opacity-0'
          }`}
        >
          {toastMsg}
        </div>
      )}
    </div>
  )
}
