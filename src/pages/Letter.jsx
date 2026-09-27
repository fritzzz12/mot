import { lettersPage } from '../data/letters.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import LoveLetter from '../components/LoveLetter.jsx'
import { PressedFlower, Star } from '../components/Decor.jsx'

export default function Letter() {
  return (
    <ScrapbookPage pageLabel={lettersPage.pageLabel}>
      <header className="text-center mb-8 relative">
        <Star className="absolute left-4 top-0 w-4 h-4" />
        <h1 className="font-script text-4xl sm:text-5xl text-ink">{lettersPage.title}</h1>
        <p className="font-serif italic text-brown mt-1">{lettersPage.subtitle}</p>
      </header>
      <LoveLetter />
      <div className="mt-8 flex items-end justify-between max-w-xl mx-auto px-2">
        <PressedFlower className="w-14 h-18" />
        <p className="font-script text-lg text-brown rotate-[-6deg] mb-4">{lettersPage.sidenote}</p>
      </div>
    </ScrapbookPage>
  )
}
