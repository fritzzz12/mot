import { finale } from '../data/finale.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import { PressedFlower, Star, Squiggle } from '../components/Decor.jsx'
import HeartSticker from '../components/HeartSticker.jsx'

export default function Finale({ onRestart }) {
  const [firstLine, secondLine] = finale.body.split('\n')

  return (
    <ScrapbookPage pageLabel={finale.pageLabel} lined>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative">
        <Star className="absolute left-8 top-10 w-4 h-4" />
        <Star className="absolute right-10 top-16 w-3 h-3 anim-float" color="#D98FA7" />
        <PressedFlower className="absolute left-4 bottom-16 w-14 h-18" />
        <PressedFlower className="absolute right-6 bottom-24 w-12 h-16" tone="lavender" />

        <p className="font-serif italic text-brown">{finale.kicker}</p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink mt-2 tracking-wide">{finale.title}</h1>
        <Squiggle className="w-28 mt-3" />
        <p className="font-script text-[1.6rem] sm:text-[1.9rem] leading-snug text-brown max-w-sm mt-6">
          {firstLine}
          <br />
          {secondLine}
        </p>
        <p className="font-script text-2xl sm:text-3xl text-ink mt-6">
          {finale.wish}{' '}
          <HeartSticker className="inline-flex align-middle" size="w-6 h-6" />
        </p>
        <p className="font-serif italic text-xl text-brown mt-3">{finale.closing}</p>
        <button type="button" onClick={onRestart} className="hand-btn mt-8 px-6 py-2.5 text-2xl">
          {finale.restartButton}
        </button>
      </div>
    </ScrapbookPage>
  )
}
