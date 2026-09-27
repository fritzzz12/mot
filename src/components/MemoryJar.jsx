import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { jarMemories, memoryJarPage } from '../data/memoryJar.js'
import { Tape } from './Decor.jsx'

function PaperHeart({ className, delay, left, top, rotate, size }) {
  return (
    <span
      className={`absolute font-script text-muted anim-float ${className || ''}`}
      style={{
        left,
        top,
        rotate: `${rotate}deg`,
        fontSize: size,
        animationDelay: `${delay}s`,
      }}
      aria-hidden
    >
      ♡
    </span>
  )
}

export default function MemoryJar({ onPick }) {
  const reduce = useReducedMotion()
  const [note, setNote] = useState(null)
  const [last, setLast] = useState(-1)
  const hearts = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        i,
        left: `${18 + ((i * 17) % 58)}%`,
        top: `${28 + ((i * 13) % 48)}%`,
        rotate: (i % 7) * 8 - 20,
        size: 14 + (i % 5) * 3,
        delay: (i % 6) * 0.35,
      })),
    [],
  )

  const pick = () => {
    let next = Math.floor(Math.random() * jarMemories.length)
    if (jarMemories.length > 1 && next === last) {
      next = (next + 1) % jarMemories.length
    }
    setLast(next)
    setNote(jarMemories[next])
    onPick?.(jarMemories[next])
  }

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={pick}
        className="relative w-[180px] h-[240px] sm:w-[210px] sm:h-[280px] cursor-pointer group"
        aria-label="Pick a memory from the jar"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[86px] h-[22px] rounded-sm bg-[#c9a882] shadow-sm z-10" />
        <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[70px] h-[16px] rounded-b-md bg-[#b8936c] z-10" />
        <div className="jar-glass absolute left-1/2 -translate-x-1/2 top-[36px] w-[150px] sm:w-[170px] h-[200px] sm:h-[230px] rounded-b-[80px] rounded-t-[28px] overflow-hidden">
          {hearts.map((h) => (
            <PaperHeart key={h.i} {...h} />
          ))}
          <div className="absolute inset-x-4 top-3 h-10 bg-white/20 rounded-full blur-md pointer-events-none" />
        </div>
      </button>
      <p className="font-script text-2xl text-ink mt-2">{memoryJarPage.prompt}</p>
      <p className="text-sm text-brown/80">{memoryJarPage.hint}</p>

      <div className="min-h-[96px] mt-5 w-full max-w-md flex justify-center">
        <AnimatePresence mode="wait">
          {note ? (
            <motion.div
              key={note}
              className="jar-note paper-cream relative px-5 py-4 max-w-sm"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: -8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: -1.5, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 140, damping: 14 }}
            >
              <Tape variant="rose" className="left-1/2 -translate-x-1/2 top-[-9px]" width={54} />
              <p className="font-script text-[1.4rem] leading-snug text-ink text-center">{note}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
