import { oneMoment } from '../data/oneMoment.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import Polaroid from '../components/Polaroid.jsx'
import { Tape, PressedFlower, Star, ArrowDoodle } from '../components/Decor.jsx'
import HeartSticker from '../components/HeartSticker.jsx'

export default function OneMoment() {
  return (
    <ScrapbookPage pageLabel={oneMoment.pageLabel}>
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-2">
        <Star className="absolute left-6 top-8 w-4 h-4 anim-float" />
        <Star className="absolute right-10 top-16 w-3 h-3" color="#D98FA7" />
        <HeartSticker className="absolute right-8 bottom-24" />
        <PressedFlower className="absolute left-2 sm:left-8 bottom-20 w-14 h-18" />

        <h1 className="font-script text-3xl sm:text-5xl text-ink max-w-lg leading-tight mb-6">
          {oneMoment.title}
        </h1>

        <div className="relative">
          <Tape variant="kraft" className="left-4 top-[-10px] z-10" rotate={-16} width={80} />
          <Tape variant="stripe" className="right-6 top-[-8px] z-10" rotate={12} width={64} />
          <Polaroid photo={oneMoment.photo} rotate={-1.5} size="lg" caption={oneMoment.caption} />
          <div
            className="absolute -right-2 sm:-right-10 -bottom-4 paper-peach px-3 py-2 max-w-[140px] shadow-sm"
            style={{ rotate: '8deg' }}
          >
            <p className="font-script text-lg leading-tight">{oneMoment.stickyNote}</p>
          </div>
        </div>

        <ArrowDoodle className="mt-8 w-24 opacity-70" />
        <p className="font-script text-[1.5rem] sm:text-[1.75rem] leading-snug text-brown max-w-md mt-4">
          {oneMoment.message}
        </p>
      </div>
    </ScrapbookPage>
  )
}
