/**
 * ─────────────────────────────────────────────────────────────
 *  OUR STORY  (How It Started)
 * ─────────────────────────────────────────────────────────────
 * Change the photos by editing photoId (see photos.js)
 * or swap the labels / sticky note / intro here.
 */

import { CONFIG } from './config.js'
import { getPhoto } from './photos.js'

export const ourStory = {
  pageLabel: 'How it started',
  title: 'How It Started',
  eyebrow: 'The beginning',
  intro:
    'It started with a simple moment that neither of us knew would become such a big part of our lives.',
  stickyNote: 'this is where it all began →',
  footer: `${CONFIG.name1} & ${CONFIG.name2} — a quiet start`,
  heroPhoto: getPhoto('first'),
  firsts: [
    { label: 'First conversation', photo: getPhoto('chat'), rotate: 2.5 },
    { label: 'First date', photo: getPhoto('date'), rotate: -1.5 },
  ],
}
