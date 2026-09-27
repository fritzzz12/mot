import { secretNotes, secretsPage } from '../data/secrets.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import FlipCard from '../components/FlipCard.jsx'
import { ArrowDoodle, PressedFlower } from '../components/Decor.jsx'

export default function MemoryCards() {
  return (
    <ScrapbookPage pageLabel={secretsPage.pageLabel}>
      <header className="mb-8 relative">
        <h1 className="font-script text-4xl sm:text-5xl text-ink">{secretsPage.title}</h1>
        <p className="font-serif italic text-brown mt-1">{secretsPage.subtitle}</p>
        <ArrowDoodle className="mt-2 w-24" />
        <PressedFlower className="absolute right-0 -top-2 w-12 h-16" />
      </header>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {secretNotes.map((note, i) => (
          <div key={note.id} style={{ marginTop: i % 2 === 0 ? 0 : 18 }}>
            <FlipCard note={note} />
          </div>
        ))}
      </div>
      <p className="text-center font-script text-xl text-brown mt-10">{secretsPage.footer}</p>
    </ScrapbookPage>
  )
}
