import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { timeline } from '../data/timeline.js'
import Polaroid from './Polaroid.jsx'

export default function Timeline() {
  const [openId, setOpenId] = useState(null)
  const reduce = useReducedMotion()

  return (
    <ol className="relative max-w-2xl mx-auto">
      <div
        className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[2px] sm:-translate-x-1/2"
        style={{
          backgroundImage:
            'repeating-linear-gradient(180deg, #6B4E3D 0 8px, transparent 8px 14px)',
        }}
        aria-hidden
      />
      {timeline.map((item, i) => {
        const open = openId === item.id
        const photo = item.photo
        const right = i % 2 === 1
        return (
          <li
            key={item.id}
            className={`relative pl-12 sm:pl-0 mb-8 sm:mb-10 sm:w-1/2 ${
              right ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10 sm:text-right'
            }`}
          >
            <span
              className="absolute left-[9px] sm:left-auto sm:right-[-7px] top-3 h-3.5 w-3.5 rounded-full bg-muted border-2 border-paper"
              style={right ? undefined : { left: undefined }}
              aria-hidden
            />
            <span
              className={`hidden sm:block absolute top-3 h-3.5 w-3.5 rounded-full bg-muted border-2 border-paper ${
                right ? 'left-[-7px]' : 'right-[-7px]'
              }`}
              aria-hidden
            />
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              className={`note-card paper-cream px-4 py-3 text-left w-full ${
                right ? '' : 'sm:text-right'
              }`}
              style={{ rotate: `${i % 2 === 0 ? -1.4 : 1.8}deg` }}
              aria-expanded={open}
            >
              <p className="font-serif tracking-wide text-xs uppercase text-brown">{item.date}</p>
              <h3 className="font-script text-[1.7rem] leading-none text-ink mt-1">{item.title}</h3>
            </button>
            <AnimatePresence>
              {open ? (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`mt-3 flex flex-col gap-3 ${right ? '' : 'sm:items-end'}`}>
                    <Polaroid photo={photo} rotate={right ? 3 : -3} size="sm" />
                    <p className="font-script text-xl text-brown leading-snug max-w-xs">{item.note}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        )
      })}
    </ol>
  )
}
