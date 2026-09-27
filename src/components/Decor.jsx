export function Tape({
  variant = 'stripe',
  rotate = -12,
  width = 78,
  className = '',
  style = {},
}) {
  return (
    <span
      aria-hidden
      className={`tape tape-${variant} ${className}`}
      style={{ width, transform: `rotate(${rotate}deg)`, ...style }}
    />
  )
}

export function Heart({ className = 'w-6 h-6', color = '#B85C70' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill={color}>
      <path d="M12 21s-6.4-4.2-9.2-8.1C.7 10.2 1.1 6.6 3.8 5.1 6 3.9 8.4 4.6 12 8c3.6-3.4 6-4.1 8.2-2.9 2.7 1.5 3.1 5.1 1 7.8C18.4 16.8 12 21 12 21z" />
    </svg>
  )
}

export function Star({ className = 'w-5 h-5', color = '#C9A882' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill={color}>
      <path d="M12 2.4 14.2 8l6 .5-4.6 3.8 1.5 5.8L12 15.6 6.9 18.1l1.5-5.8L3.8 8.5l6-.5L12 2.4z" />
    </svg>
  )
}

export function ArrowDoodle({ className = 'w-24 h-10', color = '#6B4E3D' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden fill="none">
      <path
        d="M6 28c22-18 50-24 84-16"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M78 8l30 6-18 18" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Squiggle({ className = 'w-20 h-6', color = '#D98FA7' }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path
        d="M4 14c8-10 14 8 24 0s16 10 24 0 16 10 24 0 10-8 20-2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function FlowerDoodle({ className = 'w-10 h-10', color = '#D98FA7' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="12" r="6" fill={color} />
      <circle cx="12" cy="20" r="6" fill={color} opacity="0.85" />
      <circle cx="28" cy="20" r="6" fill={color} opacity="0.85" />
      <circle cx="16" cy="28" r="6" fill={color} opacity="0.75" />
      <circle cx="24" cy="28" r="6" fill={color} opacity="0.75" />
      <circle cx="20" cy="20" r="4" fill="#F5D5C8" />
    </svg>
  )
}

export function PressedFlower({ className = 'w-16 h-20', tone = 'rose' }) {
  const petal = tone === 'lavender' ? '#E5DDF2' : tone === 'cream' ? '#F5D5C8' : '#D98FA7'
  return (
    <svg viewBox="0 0 60 80" className={className} aria-hidden>
      <path d="M30 28c2 18 4 32 3 48" stroke="#6B4E3D" strokeWidth="1.6" fill="none" />
      <ellipse cx="30" cy="24" rx="10" ry="16" fill={petal} opacity="0.85" />
      <ellipse cx="18" cy="28" rx="9" ry="14" fill={petal} opacity="0.7" transform="rotate(-28 18 28)" />
      <ellipse cx="42" cy="28" rx="9" ry="14" fill={petal} opacity="0.7" transform="rotate(28 42 28)" />
      <circle cx="30" cy="30" r="4" fill="#C9A882" />
      <path d="M32 50c10-4 14 2 12 8" stroke="#7d9a62" strokeWidth="1.4" fill="none" />
    </svg>
  )
}

export function PaperClip({ className = '' }) {
  return <span aria-hidden className={`photo-clip ${className}`} />
}

export function BinderHoles() {
  return (
    <div className="binder hidden sm:flex flex-col justify-around py-10 items-center" aria-hidden>
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="binder-hole" />
      ))}
    </div>
  )
}

export function TinyHearts({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <Heart className="w-4 h-4 absolute" color="#D98FA7" />
    </div>
  )
}

export function DoodleBurst({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <Star className="absolute -top-2 left-4 w-4 h-4 anim-float" />
      <Heart className="absolute top-1 right-6 w-3.5 h-3.5" color="#D98FA7" />
      <FlowerDoodle className="absolute -bottom-2 right-8 w-7 h-7" />
    </div>
  )
}
