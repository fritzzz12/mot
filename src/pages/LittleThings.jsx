import { littleThings, littleThingsPage } from '../data/littleThings.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import { Tape, FlowerDoodle, Star } from '../components/Decor.jsx'
import HeartSticker from '../components/HeartSticker.jsx'

const paper = {
  cream: 'paper-cream',
  peach: 'paper-peach',
  pink: 'paper-pink',
  lavender: 'paper-lavender',
}

export default function LittleThings() {
  return (
    <ScrapbookPage pageLabel={littleThingsPage.pageLabel} lined>
      <header className="mb-6">
        <h1 className="font-script text-4xl sm:text-[2.8rem] leading-tight text-ink max-w-md">
          {littleThingsPage.title}
        </h1>
        <p className="font-serif italic text-brown mt-2">{littleThingsPage.subtitle}</p>
      </header>

      <div className="flex flex-wrap gap-4 sm:gap-5 justify-center pb-6">
        {littleThings.map((item, i) => (
          <article
            key={item.text}
            className={`note-card relative ${paper[item.paper]} px-4 py-4 w-[46%] sm:w-[200px] anim-wiggle`}
            style={{
              rotate: `${item.rotate}deg`,
              animationDelay: `${i * 0.2}s`,
              marginTop: i % 3 === 0 ? '1.2rem' : i % 2 === 0 ? '0.3rem' : '0',
            }}
          >
            <Tape variant={item.tape} width={52} className="left-1/2 -translate-x-1/2 top-[-9px]" rotate={-item.rotate} />
            <p className="font-script text-[1.45rem] leading-snug text-ink">♡ {item.text}</p>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-2">
        <FlowerDoodle className="w-8 h-8" />
        <HeartSticker />
        <Star className="w-5 h-5" />
      </div>
    </ScrapbookPage>
  )
}
