import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Tape } from './Decor.jsx'
import { isLinkedPhoto } from '../data/photos.js'

function PeekPhoto({ photo }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const src = photo?.src
  const isVideo = typeof src === 'string' && /\.(mp4|webm|mov)$/i.test(src)
  if (failed) return null
  return (
    <div className="mx-auto w-[180px] sm:w-[200px] bg-[#fbf6ee] p-2 pb-8 shadow-[var(--paper-shadow)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e7d7c8]">
        {src && !failed && isVideo ? (
          <video
            src={src}
            muted
            loop
            playsInline
            autoPlay
            className={`absolute inset-0 h-full w-full object-cover ${loaded ? '' : 'opacity-0'}`}
            onLoadedData={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        ) : null}
        {src && !failed && !isVideo ? (
          <img
            src={src}
            alt={photo?.alt || photo?.caption || ''}
            className={`absolute inset-0 h-full w-full object-cover ${loaded ? '' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        ) : null}
      </div>
    </div>
  )
}

export default function PaperModal({ open, onClose, title, children, photo }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="modal-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="paper-modal-title"
            className="relative w-full max-w-lg max-h-[85dvh] overflow-y-auto px-5 sm:px-8 py-6 sm:py-8"
            style={{ background: '#FFF8EE', boxShadow: '0 20px 50px rgba(20,10,8,0.4)' }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, rotate: reduce ? 0 : -0.6 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Tape variant="stripe" className="left-6 top-[-10px]" rotate={-8} />
            <Tape variant="kraft" className="right-8 top-[-8px]" rotate={12} width={60} />
            <button
              type="button"
              className="absolute right-3 top-3 z-10 font-script text-xl text-brown"
              onClick={onClose}
            >
              tuck away
            </button>
            {title ? (
              <h3 id="paper-modal-title" className="font-serif text-2xl sm:text-3xl text-ink mb-3 pr-16">
                {title}
              </h3>
            ) : (
              <h3 id="paper-modal-title" className="sr-only">
                Memory
              </h3>
            )}
            {isLinkedPhoto(photo) ? (
              <div className="flex justify-center mb-4">
                <PeekPhoto photo={photo} />
              </div>
            ) : null}
            <div className="font-script text-[1.35rem] leading-snug text-brown">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
