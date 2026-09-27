import { ourStory } from '../data/ourStory.js'
import { isLinkedPhoto } from '../data/photos.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import Polaroid from '../components/Polaroid.jsx'
import { Tape, ArrowDoodle, PressedFlower, Squiggle } from '../components/Decor.jsx'
import HeartSticker from '../components/HeartSticker.jsx'

export default function HowItStarted() {
  const heroLinked = isLinkedPhoto(ourStory.heroPhoto)

  return (
    <ScrapbookPage pageLabel={ourStory.pageLabel} lined>
      <header className="relative mb-6 sm:mb-8">
        <h1 className="font-script text-4xl sm:text-5xl text-ink rotate-[-2deg] inline-block">
          {ourStory.title}
        </h1>
        <Squiggle className="mt-1 w-28" />
        <p className="font-serif italic text-lg text-brown mt-2 max-w-md">{ourStory.eyebrow}</p>
      </header>

      <div className={`grid gap-8 items-start ${heroLinked ? 'lg:grid-cols-[1fr_1.1fr]' : ''}`}>
        {heroLinked ? (
          <div className="relative flex justify-center">
            <Polaroid photo={ourStory.heroPhoto} rotate={-3} size="lg" tape="stripe" />
            <div
              className="absolute -right-1 sm:right-2 bottom-6 paper-peach px-3 py-2 max-w-[150px] shadow-sm"
              style={{ rotate: '7deg' }}
            >
              <Tape variant="dot" width={40} className="left-3 top-[-8px]" rotate={-10} />
              <p className="font-script text-lg leading-tight text-ink">{ourStory.stickyNote}</p>
            </div>
            <PressedFlower className="absolute -left-2 top-4 w-12 h-16" />
          </div>
        ) : null}

        <div className="pb-16 sm:pb-8">
          <div className="flex items-start gap-3 max-w-md">
            {heroLinked ? null : <PressedFlower className="w-11 h-14 shrink-0 -rotate-6" />}
            <p className="font-script text-[1.45rem] leading-snug text-brown">{ourStory.intro}</p>
          </div>

          {heroLinked ? null : (
            <div
              className="paper-peach relative mt-5 inline-block px-3 py-2 max-w-[190px] shadow-sm"
              style={{ rotate: '3deg' }}
            >
              <Tape variant="dot" width={40} className="left-3 top-[-8px]" rotate={-10} />
              <p className="font-script text-lg leading-tight text-ink">{ourStory.stickyNote}</p>
            </div>
          )}

          <ArrowDoodle className="my-5 w-28 opacity-80" />

          <ul className="space-y-5">
            {ourStory.firsts.map((item) => {
              const linked = isLinkedPhoto(item.photo)
              return (
                <li key={item.label} className="flex flex-wrap items-center gap-4">
                  <div
                    className="note-card paper-cream px-4 py-3 w-fit max-w-xs"
                    style={{ rotate: `${item.rotate}deg` }}
                  >
                    <p className="font-serif text-[11px] tracking-widest uppercase text-brown">
                      {item.photo?.date}
                    </p>
                    <p className="font-script text-2xl text-ink leading-none">{item.label}</p>
                  </div>
                  {linked ? (
                    <Polaroid photo={item.photo} rotate={item.rotate * -1} size="sm" />
                  ) : null}
                </li>
              )
            })}
          </ul>

          <p className="font-script text-xl text-muted mt-8 flex items-center gap-2">
            <HeartSticker size="w-5 h-5" />
            {ourStory.footer}
          </p>
        </div>
      </div>
    </ScrapbookPage>
  )
}
