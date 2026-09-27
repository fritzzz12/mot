import { galleryPage } from '../data/gallery.js'
import ScrapbookPage from '../components/ScrapbookPage.jsx'
import PhotoGallery from '../components/PhotoGallery.jsx'
import { Squiggle } from '../components/Decor.jsx'

export default function PhotoWall() {
  return (
    <ScrapbookPage pageLabel={galleryPage.pageLabel}>
      <header className="mb-6">
        <h1 className="font-script text-4xl sm:text-5xl text-ink">{galleryPage.title}</h1>
        <Squiggle className="w-20 mt-1" />
        <p className="font-serif italic text-brown mt-2">{galleryPage.subtitle}</p>
      </header>
      <PhotoGallery />
    </ScrapbookPage>
  )
}
