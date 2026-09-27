import { AnimatePresence, motion } from 'framer-motion'

export default function HeartBurst({ bursts }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden>
      <AnimatePresence>
        {bursts.map((b) => (
          <motion.span
            key={b.id}
            className="absolute font-script text-muted"
            style={{ left: b.x, top: b.y, fontSize: b.size }}
            initial={{ opacity: 1, y: 0, scale: 0.7 }}
            animate={{ opacity: 0, y: -88, x: b.drift, scale: 1.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            ♡
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
