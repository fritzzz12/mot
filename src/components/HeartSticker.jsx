import { Heart } from './Decor.jsx'
import { useScrapbook } from '../ScrapbookContext.jsx'

export default function HeartSticker({ className = '', color = '#B85C70', size = 'w-7 h-7' }) {
  const { burstHearts } = useScrapbook()
  return (
    <button
      type="button"
      className={`inline-flex ${className}`}
      aria-label="Float a heart"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        burstHearts(r.left + r.width / 2, r.top)
      }}
    >
      <Heart className={size} color={color} />
    </button>
  )
}
