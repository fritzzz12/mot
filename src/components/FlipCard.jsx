import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Tape } from './Decor.jsx'

const paperClass = {
  cream: 'paper-cream',
  peach: 'paper-peach',
  pink: 'paper-pink',
  lavender: 'paper-lavender',
}

export default function FlipCard({ note }) {
  const [flipped, setFlipped] = useState(false)
  const reduce = useReducedMotion()

  return (
    <button
      type="button"
      className={`note-card relative h-[170px] w-[160px] sm:h-[190px] sm:w-[180px] ${
        flipped ? 'paper-cream' : paperClass[note.paper] || 'paper-cream'
      }`}
      style={{ rotate: `${note.rotate}deg` }}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={flipped ? note.message : note.prompt}
    >
      <Tape variant="dot" className="left-1/2 top-[-9px] -translate-x-1/2" width={56} rotate={-8} />
      <AnimatePresence mode="wait">
        <motion.div
          key={flipped ? 'back' : 'front'}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scaleY: 0.55 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scaleY: 0.55 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {flipped ? (
            <p className="font-script text-[1.35rem] leading-snug text-muted">{note.message}</p>
          ) : (
            <>
              <p className="font-script text-2xl text-ink">{note.prompt}</p>
              <p className="font-serif italic text-sm text-brown mt-2">{note.hint}</p>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
