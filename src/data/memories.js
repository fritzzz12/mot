/**
 * ─────────────────────────────────────────────────────────────
 *  MEMORIES  (photo collage tab)
 * ─────────────────────────────────────────────────────────────
 * photoId values are defined in photos.js
 */

import { getPhoto } from './photos.js'

export const memories = {
  pageLabel: 'Photo collage',
  title: 'Our Photos',
  subtitle: 'taped down, slightly crooked, completely ours',
  items: [
    { photo: getPhoto('first'), rotate: -3, size: 'md' },
    { photo: getPhoto('date'), rotate: 2, size: 'sm' },
    { photo: getPhoto('random'), rotate: -1, size: 'lg' },
    { photo: getPhoto('cute'), rotate: 4, size: 'md' },
    { photo: getPhoto('sunset'), rotate: -2, size: 'sm' },
    { photo: getPhoto('laugh'), rotate: 3, size: 'md' },
    { photo: getPhoto('food'), rotate: -4, size: 'sm' },
    { photo: getPhoto('stars'), rotate: 1, size: 'md' },
  ],
}
