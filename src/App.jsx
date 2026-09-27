import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ScrapbookContext } from './ScrapbookContext.jsx'
import { beginning } from './data/beginning.js'
import { PAGES, pageVariants, reducedPageVariants } from './data/pages.js'
import { playPaperSound, playPopSound } from './utils/sound.js'
import MusicPlayer from './components/MusicPlayer.jsx'
import Navigation from './components/Navigation.jsx'
import PaperModal from './components/PaperModal.jsx'
import HeartBurst from './components/HeartBurst.jsx'
import { BinderHoles } from './components/Decor.jsx'
import Cover from './pages/Cover.jsx'
import HowItStarted from './pages/HowItStarted.jsx'
import TimelinePage from './pages/TimelinePage.jsx'
import LittleThings from './pages/LittleThings.jsx'
import MemoryCards from './pages/MemoryCards.jsx'
import Letter from './pages/Letter.jsx'
import PhotoWall from './pages/PhotoWall.jsx'
import MemoryJarPage from './pages/MemoryJarPage.jsx'
import CountingMonths from './pages/CountingMonths.jsx'
import OneMoment from './pages/OneMoment.jsx'
import Finale from './pages/Finale.jsx'

const PAGE_COMPONENTS = [
  Cover,
  HowItStarted,
  TimelinePage,
  LittleThings,
  MemoryCards,
  Letter,
  PhotoWall,
  MemoryJarPage,
  CountingMonths,
  OneMoment,
  Finale,
]

export default function App() {
  const reduce = useReducedMotion()
  const [pageIndex, setPageIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [opened, setOpened] = useState(false)
  const [opening, setOpening] = useState(false)
  const [selected, setSelected] = useState(null)
  const [bursts, setBursts] = useState([])
  const stageRef = useRef(null)
  const touchX = useRef(null)

  const page = PAGES[pageIndex]
  const Page = PAGE_COMPONENTS[pageIndex]

  const goToIndex = useCallback(
    (next, fromUser = true) => {
      const clamped = Math.max(0, Math.min(PAGES.length - 1, next))
      if (clamped === pageIndex) return
      setDir(clamped > pageIndex ? 1 : -1)
      setPageIndex(clamped)
      if (fromUser && !reduce) playPaperSound()
    },
    [pageIndex, reduce],
  )

  const goToId = useCallback(
    (id) => {
      const idx = PAGES.findIndex((p) => p.id === id)
      if (idx >= 0) goToIndex(idx)
    },
    [goToIndex],
  )

  const openBook = useCallback(() => {
    if (opened) {
      goToIndex(1)
      return
    }
    setOpening(true)
    try {
      if (!reduce) playPaperSound(0.09)
    } catch {
      /* ignore */
    }
    window.setTimeout(
      () => {
        setOpened(true)
        setOpening(false)
        setDir(1)
        setPageIndex(1)
      },
      reduce ? 80 : 560,
    )
  }, [opened, reduce, goToIndex])

  const restart = useCallback(() => {
    setOpened(false)
    setOpening(false)
    setDir(-1)
    setPageIndex(0)
    if (!reduce) playPaperSound()
  }, [reduce])

  const burstHearts = useCallback(
    (x, y) => {
      if (!reduce) playPopSound()
      const stamp = `${Date.now()}-${Math.random()}`
      const extra = Array.from({ length: 6 }).map((_, i) => ({
        id: `${stamp}-${i}`,
        x: x - 8 + Math.random() * 16,
        y,
        drift: -28 + Math.random() * 56,
        size: 16 + Math.random() * 12,
      }))
      setBursts((b) => [...b, ...extra])
      window.setTimeout(() => {
        setBursts((b) => b.filter((p) => !String(p.id).startsWith(stamp)))
      }, 1250)
    },
    [reduce],
  )

  const ctx = useMemo(
    () => ({
      openPhoto: (photo) => setSelected(photo),
      burstHearts,
      goTo: goToId,
      soundsOn: true,
    }),
    [burstHearts, goToId],
  )

  useEffect(() => {
    stageRef.current?.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }, [pageIndex, reduce])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (!opened) openBook()
        else goToIndex(pageIndex + 1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (opened) goToIndex(pageIndex - 1)
      }
      if (e.key === 'Home') goToIndex(0)
      if (e.key === 'End') goToIndex(PAGES.length - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [opened, openBook, goToIndex, pageIndex])

  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) < 70) return
    if (e.target.closest('button, a, input')) return
    if (!opened) {
      if (dx < 0) openBook()
      return
    }
    goToIndex(dx < 0 ? pageIndex + 1 : pageIndex - 1)
  }

  const variants = reduce ? reducedPageVariants : pageVariants

  return (
    <ScrapbookContext.Provider value={ctx}>
      <a className="skip-link" href="#scrapbook">
        Skip to scrapbook
      </a>
      <MusicPlayer />
      <HeartBurst bursts={bursts} />

      <main
        id="scrapbook"
        className="min-h-dvh w-full overflow-x-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative mx-auto w-full min-h-dvh">
          <motion.div
            ref={stageRef}
            className={`book ${page.lined ? 'book-lined' : ''} relative min-h-dvh w-full overflow-y-auto overflow-x-hidden`}
            style={{ perspective: 1400 }}
            animate={
              opening && !reduce
                ? { rotateY: -72, x: -36, opacity: 0.55 }
                : { rotateY: 0, x: 0, opacity: 1 }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BinderHoles />
            <Navigation pageId={page.id} onJump={goToId} open={opened} variant="side" />
            <div className="relative z-[3] min-h-dvh pl-4 sm:pl-14 pr-4 sm:pr-16 lg:pr-20 pt-3 sm:pt-6 pb-8">
              <Navigation pageId={page.id} onJump={goToId} open={opened} variant="top" />
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={page.id}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ transformOrigin: dir >= 0 ? 'left center' : 'right center' }}
                >
                  {page.id === 'cover' ? (
                    <Cover onOpen={openBook} opened={opened} />
                  ) : page.id === 'finale' ? (
                    <Finale onRestart={restart} />
                  ) : (
                    <Page />
                  )}
                </motion.div>
              </AnimatePresence>

              {opened ? (
                <div className="flex items-center justify-between gap-2 mt-8">
                  <button
                    type="button"
                    className="hand-btn px-4 py-2 text-xl min-h-11"
                    onClick={() => goToIndex(pageIndex - 1)}
                    disabled={pageIndex === 0}
                  >
                    ← previous
                  </button>
                  <p className="font-script text-lg text-brown">
                    {pageIndex + 1} / {PAGES.length}
                  </p>
                  <button
                    type="button"
                    className="hand-btn px-4 py-2 text-xl min-h-11"
                    onClick={() => goToIndex(pageIndex + 1)}
                    disabled={pageIndex === PAGES.length - 1}
                  >
                    turn the page →
                  </button>
                </div>
              ) : (
                <p className="text-center font-script text-brown/70 mt-6 pb-2">{beginning.giftNote}</p>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <PaperModal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.caption}
        photo={selected}
      >
        {selected ? (
          <>
            <p className="font-serif text-sm tracking-wide uppercase text-brown/80 mb-2">{selected.date}</p>
            <p>{selected.description}</p>
          </>
        ) : null}
      </PaperModal>
    </ScrapbookContext.Provider>
  )
}
