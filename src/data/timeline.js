/**
 * ─────────────────────────────────────────────────────────────
 *  TIMELINE
 * ─────────────────────────────────────────────────────────────
 * Each item is a tappable note. photoId comes from photos.js
 */

import { getPhoto } from './photos.js'

export const timelinePage = {
  pageLabel: 'Our timeline',
  title: 'Our Timeline',
  subtitle: 'a line drawn by hand, connecting us',
  hint: 'Tap a note to open the memory.',
  closing: 'Today ♡',
}

export const timeline = [
  {
    id: 'meeting',
    title: 'First Meeting',
    date: 'the first day',
    note: 'nag balik2 najud siya HAHAHA pero special jud ni nga day hehehe',
    photo: getPhoto('date'),
  },
  {
    id: 'chat',
    title: 'First Chat',
    date: 'the first day',
    note: 'AHAHAHAHAHA weird nga first move gyud, pero di jud mawala ang happy birthday',
    photo: getPhoto('chat'),
  },
  {
    id: 'today',
    title: 'Today ♡',
    date: 'today',
    note: 'mao najud ni akong last pic saimo naa, sorry po hehe pero cute baya ka diha :)',
    photo: getPhoto('sleep'),
  },
]
