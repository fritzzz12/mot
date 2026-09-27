/**
 * ─────────────────────────────────────────────────────────────
 *  SECRETS  (flip / unfold notes)
 * ─────────────────────────────────────────────────────────────
 */

export const secretsPage = {
  pageLabel: 'Hidden notes',
  title: 'Look closer',
  subtitle: 'some notes are hiding on purpose',
  footer: 'flip them back if you want to keep a secret',
}

export const secretNotes = [
  {
    id: 'open',
    prompt: 'Open this',
    hint: 'a little paper door',
    message: 'You make my ordinary days feel special.',
    paper: 'cream',
    rotate: -3,
  },
  {
    id: 'tap',
    prompt: 'Tap me',
    hint: 'go on',
    message: 'I still smile when I think about this.',
    paper: 'peach',
    rotate: 2.5,
  },
  {
    id: 'behind',
    prompt: "There's something behind this",
    hint: 'peek',
    message: 'I hope we make many more memories together.',
    paper: 'lavender',
    rotate: -1.5,
  },
  {
    id: 'thank',
    prompt: 'A small thank you',
    hint: 'unfold me',
    message: 'Thank you for being part of my life.',
    paper: 'pink',
    rotate: 4,
  },
]
