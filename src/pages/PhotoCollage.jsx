import { memories } from '../data/memories.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import Polaroid from '../components/Polaroid.jsx'
import { PressedFlower, Squiggle } from '../components/Decor.jsx'

export default function PhotoCollage() {
  return (
    <ScrapbookPage pageLabel={memories.pageLabel}>
      <header className="mb-6 sm:mb-8">
        <h1 className="font-script text-4xl sm:text-5xl text-ink rotate-[-1.5deg] inline-block">
          {memories.title}
        </h1>
        <Squiggle className="w-24 mt-1" />
        <p className="font-serif italic text-brown mt-2">{memories.subtitle}</p>
      </header>
      <div className="flex flex-wrap justify-center items-end gap-x-3 gap-y-8 sm:gap-6">
        {memories.items.map((item, i) => (
          <Polaroid
            key={`${item.photo.id}-${i}`}
            photo={item.photo}
            rotate={item.rotate}
            size={item.size}
            tape={i % 2 === 0 ? 'stripe' : 'kraft'}
            delay={i * 0.05}
          />
        ))}
      </div>
      <div className="flex justify-end mt-2 pr-6">
        <PressedFlower className="w-14 h-18" tone="lavender" />
      </div>
    </ScrapbookPage>
  )
}
