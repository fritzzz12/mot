import { getLetter } from '../data/letters.js'
import { Tape, PressedFlower } from './Decor.jsx'

export default function LoveLetter() {
  const text = getLetter()

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="envelope absolute -z-0 -rotate-6 inset-x-4 -top-6 h-[72%] rounded-sm" aria-hidden />
      <div className="letter-sheet relative px-5 sm:px-8 py-7 sm:py-9 rotate-[-1deg]">
        <Tape variant="kraft" className="left-6 top-[-10px]" rotate={-12} />
        <Tape variant="stripe" className="right-10 top-[-8px]" rotate={16} width={62} />
        <PressedFlower className="absolute -right-3 -bottom-4 w-16 h-20 opacity-80" />
        <p className="font-script text-[1.45rem] sm:text-[1.6rem] leading-[1.55] text-ink whitespace-pre-wrap">
          {text}
        </p>
      </div>
    </div>
  )
}
