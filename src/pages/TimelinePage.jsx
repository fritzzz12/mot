import { timelinePage } from '../data/timeline.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import Timeline from '../components/Timeline.jsx'
import { Star, PressedFlower } from '../components/Decor.jsx'

export default function TimelinePage() {
  return (
    <ScrapbookPage pageLabel={timelinePage.pageLabel}>
      <header className="text-center mb-8 relative">
        <PressedFlower className="absolute left-0 top-0 w-12 h-16 opacity-80" tone="cream" />
        <Star className="absolute right-6 top-2 w-4 h-4" />
        <h1 className="font-script text-4xl sm:text-5xl text-ink">{timelinePage.title}</h1>
        <p className="font-serif italic text-brown mt-1">{timelinePage.subtitle}</p>
        <p className="font-sans text-sm text-brown/80 mt-2">{timelinePage.hint}</p>
      </header>
      <Timeline />
      <p className="text-center font-script text-2xl text-muted mt-4">{timelinePage.closing}</p>
    </ScrapbookPage>
  )
}
