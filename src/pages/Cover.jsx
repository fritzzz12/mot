import { beginning } from '../data/beginning.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import { Tape, PressedFlower, Star, Squiggle, ArrowDoodle } from '../components/Decor.jsx'

export default function Cover({ onOpen, opened }) {
  return (
    <ScrapbookPage pageLabel={beginning.pageLabel} lined>
      <div className="flex min-h-[72vh] sm:min-h-[78vh] items-center justify-center py-4">
        <div className="cover-card paper-cream relative w-full max-w-md mx-auto px-6 sm:px-10 py-10 sm:py-12 text-center shadow-[var(--paper-shadow)]">
          <Tape variant="stripe" className="left-8 top-[-11px]" rotate={-18} width={86} />
          <Tape variant="kraft" className="right-10 top-[-9px]" rotate={14} width={70} />
          <PressedFlower className="absolute -left-3 top-8 w-14 h-18 opacity-90" />
          <PressedFlower className="absolute -right-2 bottom-16 w-12 h-16 opacity-80" tone="lavender" />
          <Star className="absolute right-8 top-16 w-4 h-4" />
          <Star className="absolute left-10 bottom-24 w-3 h-3" color="#D98FA7" />

          <p className="font-script text-lg text-brown tracking-wide">{beginning.kicker}</p>
          <h1 className="font-serif text-[2.35rem] sm:text-5xl leading-none text-ink mt-2">
            {beginning.title}
          </h1>
          <p className="font-script text-3xl sm:text-4xl text-muted mt-4">{beginning.names}</p>
          <p className="font-serif italic text-xl sm:text-2xl text-brown mt-3">{beginning.monthsLine}</p>
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-brown/80 mt-2">
            {beginning.date}
          </p>
          <Squiggle className="mx-auto mt-4 w-24" />
          <p className="font-script text-[1.45rem] sm:text-[1.7rem] text-ink leading-snug mt-4 max-w-sm mx-auto">
            “{beginning.quote}”
          </p>

          {!opened ? (
            <button type="button" onClick={onOpen} className="hand-btn mt-8 px-6 py-2.5 text-2xl">
              {beginning.openButton}
            </button>
          ) : (
            <p className="font-script text-xl text-brown mt-8">{beginning.openedNote}</p>
          )}

          <p className="font-script text-lg text-brown/80 mt-5 italic">“{beginning.handwrittenQuote}”</p>
          <ArrowDoodle className="mx-auto mt-3 w-20 opacity-70" />
        </div>
      </div>
    </ScrapbookPage>
  )
}
