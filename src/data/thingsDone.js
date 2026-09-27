/**
 * ─────────────────────────────────────────────────────────────
 *  THINGS WE'VE DONE
 * ─────────────────────────────────────────────────────────────
 */

import { getPhoto } from './photos.js'

export const thingsDonePage = {
  pageLabel: "Things we've done",
  title: "Things We've Done",
  subtitle: 'a collection of ordinary magic',
}

export const thingsWeveDone = [
  { id: 'first-date', title: 'First date', photo: getPhoto('date') },
  { id: 'first-picture', title: 'First picture together', photo: getPhoto('first') },
  { id: 'late-nights', title: 'Late-night conversations', photo: getPhoto('chat') },
  { id: 'food-trips', title: 'Random food trips', photo: getPhoto('food') },
  { id: 'long-calls', title: 'Long calls', photo: getPhoto('stars') },
  { id: 'adventures', title: 'Adventures', photo: getPhoto('adventure') },
  { id: 'laughing', title: 'Laughing at nothing', photo: getPhoto('laugh') },
  { id: 'support', title: 'Supporting each other', photo: getPhoto('garden') },
  { id: 'wins', title: 'Celebrating little wins', photo: getPhoto('lights') },
]
