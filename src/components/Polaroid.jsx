import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Tape, PaperClip } from './Decor.jsx'
import { isLinkedPhoto } from '../data/photos.js'
import { useScrapbook } from '../ScrapbookContext.jsx'

export default function Polaroid({
  photo,
  rotate = -2,
  size = 'md',
  tape,
  clip = false,
  caption,
  onOpen,
  className = '',
  delay = 0,
}) {
  const reduce = useReducedMotion()
  const { openPhoto } = useScrapbook()
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const src = photo?.src
  const isVideo = typeof src === 'string' && /\.(mp4|webm|mov)$/i.test(src)
  const handleOpen = onOpen || openPhoto
  const width = size === 'sm' ? 'w-[132px] sm:w-[150px]' : size === 'lg' ? 'w-[200px] sm:w-[230px]' : 'w-[168px] sm:w-[190px]'

  useEffect(() => {
    setFailed(false)
    setLoaded(false)
  }, [src])

  if (!isLinkedPhoto(photo) || failed) return null

  return (
    <motion.button
      type="button"
      className={`polaroid ${width} ${className}`}
      initial={reduce ? false : { opacity: 0, y: 18, rotate: rotate - 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
      whileHover={reduce ? undefined : { y: -6, rotate: rotate * 0.3, transition: { duration: 0.35 } }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => handleOpen?.(photo)}
      aria-label={photo?.alt || photo?.caption || 'Open photo'}
    >
      {tape ? (
        <Tape
          variant={tape}
          rotate={rotate > 0 ? -18 : 16}
          className="left-1/2 top-[-10px] -translate-x-1/2"
        />
      ) : (
        <Tape
          variant="clear"
          rotate={rotate > 0 ? -12 : 14}
          width={64}
          className="left-1/2 top-[-9px] -translate-x-1/2"
        />
      )}
      {clip ? <PaperClip className="absolute -top-3 right-5 z-10" /> : null}
      <div className="polaroid-photo">
        {isVideo ? (
          <video
            src={src}
            muted
            loop
            playsInline
            autoPlay
            className={`absolute inset-0 h-full w-full object-cover ${loaded ? 'anim-develop' : 'opacity-0'}`}
            onLoadedData={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        ) : (
          <img
            src={src}
            alt={photo?.alt || photo?.caption || ''}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${loaded ? 'anim-develop' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span className="polaroid-caption text-[1.05rem] sm:text-[1.15rem]">
        {caption || photo?.caption}
      </span>
    </motion.button>
  )
}
