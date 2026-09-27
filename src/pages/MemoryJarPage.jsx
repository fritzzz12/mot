import { memoryJarPage } from '../data/memoryJar.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import MemoryJar from '../components/MemoryJar.jsx'
import { Star, PressedFlower } from '../components/Decor.jsx'
import { useScrapbook } from '../ScrapbookContext.jsx'

export default function MemoryJarPage() {
  const { burstHearts } = useScrapbook()
  return (
    <ScrapbookPage pageLabel={memoryJarPage.pageLabel}>
      <header className="text-center mb-4 relative">
        <Star className="absolute left-8 top-1 w-4 h-4 anim-float" />
        <h1 className="font-script text-4xl sm:text-5xl text-ink">{memoryJarPage.title}</h1>
        <p className="font-serif italic text-brown mt-1">{memoryJarPage.subtitle}</p>
        <PressedFlower className="absolute right-6 top-0 w-12 h-16" tone="lavender" />
      </header>
      <MemoryJar
        onPick={() => {
          burstHearts(window.innerWidth / 2, window.innerHeight * 0.42)
        }}
      />
    </ScrapbookPage>
  )
}
