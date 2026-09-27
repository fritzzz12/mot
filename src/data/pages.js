export const PAGES = [
  { id: 'cover', label: 'Beginning', short: 'Cover', lined: true },
  { id: 'story', label: 'Our Story', short: 'Story', lined: true },
  { id: 'timeline', label: 'Timeline', short: 'Time', lined: false },
  { id: 'little', label: 'Little Things', short: 'Little', lined: true },
  { id: 'cards', label: 'Secrets', short: 'Peek', lined: false },
  { id: 'letter', label: 'Letters', short: 'Letter', lined: false },
  { id: 'gallery', label: 'Gallery', short: 'Photos', lined: false },
  { id: 'jar', label: 'Memory Jar', short: 'Jar', lined: false },
  { id: 'counting', label: 'Our Months', short: 'Months', lined: true },
  { id: 'moment', label: 'One Moment', short: 'Moment', lined: false },
  { id: 'finale', label: 'Finale', short: 'End', lined: true },
]

export const NAV_TABS = [
  { id: 'cover', label: 'Beginning' },
  { id: 'story', label: 'Our Story' },
  { id: 'little', label: 'Little Things' },
  { id: 'letter', label: 'Letters' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'finale', label: 'Finale' },
]

export const easeOut = [0.22, 1, 0.36, 1]

export const pageVariants = {
  enter: (dir) => ({
    opacity: 0,
    x: dir >= 0 ? 56 : -56,
    rotate: dir >= 0 ? 1.4 : -1.4,
    scale: 0.985,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.62, ease: easeOut },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir >= 0 ? -48 : 48,
    rotate: dir >= 0 ? -1.2 : 1.2,
    scale: 0.99,
    transition: { duration: 0.4, ease: easeOut },
  }),
}

export const reducedPageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

export const piece = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
}

export const spread = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

