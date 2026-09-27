import { wallItems } from '../data/gallery.js'
import Polaroid from './Polaroid.jsx'
import { Tape } from './Decor.jsx'

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 sm:gap-6 place-items-center pb-4">
      {wallItems.map((item, i) => (
        <div key={`${item.photo.id}-${i}`} className="relative">
          <Polaroid
            photo={item.photo}
            rotate={item.rotate}
            size={i % 5 === 0 ? 'md' : 'sm'}
            tape={item.tape}
            clip={item.clip}
            delay={i * 0.04}
          />
          {item.note ? (
            <div
              className="absolute -bottom-4 -right-2 paper-peach px-2 py-1 shadow-sm"
              style={{ rotate: '6deg' }}
            >
              <Tape variant="clear" width={36} className="left-1/2 -translate-x-1/2 top-[-7px]" />
              <p className="font-script text-sm text-ink">{item.photo.caption}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
