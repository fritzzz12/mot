import { NAV_TABS, PAGES } from '../data/pages.js'

export default function Navigation({ pageId, onJump, open, variant = 'all' }) {
  if (!open) return null
  const currentIndex = PAGES.findIndex((p) => p.id === pageId)
  const showSide = variant === 'all' || variant === 'side'
  const showTop = variant === 'all' || variant === 'top'

  return (
    <>
      {showSide ? (
        <nav
          className="pointer-events-none hidden lg:flex flex-col gap-1 absolute right-2 top-1/2 -translate-y-1/2 z-20"
          aria-label="Scrapbook sections"
        >
          {NAV_TABS.map((tab, i) => {
            const active = pageId === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                data-tone={i % 8}
                className={`nav-tab pointer-events-auto px-1.5 py-3 text-[1.05rem] leading-none shadow-sm ${
                  active ? 'translate-x-[-2px]' : 'hover:translate-x-[-4px]'
                }`}
                onClick={() => onJump(tab.id)}
                aria-current={active ? 'page' : undefined}
              >
                ♡ {tab.label}
              </button>
            )
          })}
        </nav>
      ) : null}

      {showTop ? (
        <nav className="lg:hidden sticky top-0 z-30 mb-4 py-2 overflow-x-auto bg-paper/95" aria-label="Scrapbook sections">
          <ul className="flex gap-2 min-w-max pb-1">
            {NAV_TABS.map((tab, i) => {
              const active = pageId === tab.id
              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    data-tone={i % 8}
                    className={`nav-tab px-3 py-1.5 text-[1.05rem] ${active ? 'ring-1 ring-brown/30' : ''}`}
                    style={{ writingMode: 'horizontal-tb', transform: 'none' }}
                    onClick={() => onJump(tab.id)}
                    aria-current={active ? 'page' : undefined}
                  >
                    ♡ {tab.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : null}

      <p className="sr-only">
        Page {currentIndex + 1} of {PAGES.length}
      </p>
    </>
  )
}
