import { useEffect, useState } from 'react'
import { CONFIG } from '../data/config.js'
import { countingPage } from '../data/counting.js'
import { diffFrom, formatNumber } from '../utils/dates.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import { Tape, Squiggle } from '../components/Decor.jsx'
import HeartSticker from '../components/HeartSticker.jsx'

function Ticket({ label, value, rotate }) {
  return (
    <div className="ticket relative px-4 py-5 text-center min-w-[140px]" style={{ rotate: `${rotate}deg` }}>
      <Tape variant="stripe" width={48} className="left-1/2 -translate-x-1/2 top-[-9px]" rotate={-rotate} />
      <p className="ticket-num text-4xl sm:text-5xl text-ink leading-none">{formatNumber(value)}</p>
      <p className="font-script text-xl text-brown mt-2">{label}</p>
    </div>
  )
}

export default function CountingMonths() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const d = diffFrom(CONFIG.startDate, now)

  return (
    <ScrapbookPage pageLabel={countingPage.pageLabel} lined>
      <header className="text-center mb-8">
        <p className="font-serif italic text-brown">{countingPage.eyebrow}</p>
        <h1 className="font-script text-4xl sm:text-5xl text-ink mt-1">{countingPage.title}</h1>
        <Squiggle className="mx-auto mt-2 w-24" />
      </header>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
        {countingPage.tickets.map((ticket) => (
          <Ticket key={ticket.key} label={ticket.label} value={d[ticket.key]} rotate={ticket.rotate} />
        ))}
      </div>
      <p className="text-center font-script text-2xl text-muted mt-10 flex items-center justify-center gap-2">
        {countingPage.footer} <HeartSticker size="w-5 h-5" />
      </p>
    </ScrapbookPage>
  )
}
