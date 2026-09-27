import { thingsDonePage, thingsWeveDone } from '../data/thingsDone.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import Polaroid from '../components/Polaroid.jsx'
import { Tape } from '../components/Decor.jsx'

export default function ThingsWeveDone() {
  return (
    <ScrapbookPage pageLabel={thingsDonePage.pageLabel} lined>
      <header className="mb-6">
        <h1 className="font-script text-4xl sm:text-5xl text-ink">{thingsDonePage.title}</h1>
        <p className="font-serif italic text-brown mt-1">{thingsDonePage.subtitle}</p>
      </header>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {thingsWeveDone.map((item, i) => (
          <li key={item.id} className="flex items-center gap-3">
            <Polaroid photo={item.photo} rotate={i % 2 === 0 ? -2.5 : 3} size="sm" />
            <div
              className="note-card paper-cream px-3 py-2 relative"
              style={{ rotate: `${i % 2 === 0 ? 2 : -2}deg` }}
            >
              <Tape variant="clear" width={36} className="left-3 top-[-8px]" rotate={-12} />
              <p className="font-script text-[1.35rem] leading-tight text-ink">♡ {item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrapbookPage>
  )
}
