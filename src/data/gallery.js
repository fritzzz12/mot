/**
 * ─────────────────────────────────────────────────────────────
 *  GALLERY  (photo wall)
 * ─────────────────────────────────────────────────────────────
 */

import { getPhoto } from './photos.js'

export const galleryPage = {
  pageLabel: 'Photo wall',
  title: 'The Wall',
  subtitle: 'printed, taped, clipped — tap a photo to look closer',
}

export const wallItems = [
  { photo: getPhoto('cute'), rotate: 2, tape: 'stripe' },
  { photo: getPhoto('her-smile'), rotate: -2, tape: 'rose', clip: true },
  { photo: getPhoto('her-candid'), rotate: 3.2, tape: 'kraft' },
  { photo: getPhoto('her-face'), rotate: -4, tape: 'stripe', note: true },
  { photo: getPhoto('her-quiet'), rotate: 1.8, tape: 'lavender' },
  { photo: getPhoto('her-laugh'), rotate: -2.4, tape: 'dot', clip: true },
  { photo: getPhoto('her-soft'), rotate: 2.6, tape: 'rose', note: true },
].filter((item) => item.photo)
