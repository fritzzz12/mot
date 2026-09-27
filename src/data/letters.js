/**
 * ─────────────────────────────────────────────────────────────
 *  LETTERS
 * ─────────────────────────────────────────────────────────────
 * Replace the letter body below. Names update from config.js
 */

import { CONFIG } from './config.js'
import { getPhoto } from './photos.js'

export const lettersPage = {
  pageLabel: 'A little letter for you',
  title: 'A Little Letter For You',
  subtitle: 'written slowly, the way I meant it',
  sidenote: `for ${CONFIG.name2} ♡`,
  photo: getPhoto('keep'),
}

export function getLetter() {
  const { name1, name2, monthsaryNumber } = CONFIG
  return `Dear ${name1},

Happy monthsary, baby. ❤️

I know nga dili ta okay karon, and I know nga things between us have been really difficult lately. Pero bisan pa sa tanan nga nahitabo, I still wanted to take a moment to remind you how important this day is to me—and how important you are to me.

I miss you so much, baby. Pero I also understand nga basin you need your own space and time right now, and I respect that. Bisan wala ko kabalo unsay nahitabo sa imong life karon or unsa gyud imong gaka feel, I want you to know nga naa gihapon ko diri waiting, praying for you, and hoping every day nga okay ra ka.

I’m so thankful for your existence in my life. Meeting you and having you in my life is something nga I will always be grateful for. You have been one of the biggest blessings and answered prayers nga akong nadawat sa akong life, and I hope you never forget how much you mean to me.

I know nga naa koy mga mistakes. Kabalo ko nga naa’y mga times nga I became too much for you, nga instead of making things better, my actions or words made things heavier for you. I’ve been thinking a lot about everything nga nahitabo between us, and I feel genuinely sorry sa mga things nga akong nabuhat nga nakapasakit nimo, nakadrain nimo, or nakahatag ug pressure sa imo.

I’m not asking you to forget everything overnight, and I don’t expect you to simply forgive me tungod lang kay niingon ko og sorry. I know that an apology means nothing if I don’t learn from my mistakes and change the things nga nakapasakit nimo. If someday you’re willing to give me another chance, I want to use that chance to become better—not just for you, but for myself and for the kind of relationship nga deserve nato both.

I love you so much, baby. Kabalo ko nga life can be really tough sometimes. We have our own pressures, uncertainties, worries, and fears about the future. Pero through all of those things, I want you to know nga I will always wish you well. Bisan pa sa imong lowest moments, I will always hope nga makakita ka ug strength to keep going, and I will always be proud of you for trying.

I’m sorry, baby, for everything I did this past month. Sorry kaayo nga daghan ta’g arguments and nga those arguments eventually brought us to where we are now. I’m sorry nga usahay selfish ko about your happiness. I’m sorry sa mga things nga akong nabuhat nga nakahatag ug pressure dili lang sa imo, but also sa mga tao nga naa sa imong palibot. I wish I had handled things differently, and I truly regret those moments nga napafeel nako nimo nga loving me was something heavy to carry.

I know nga I cannot change what already happened, pero I can learn from it. And if you ever give me the opportunity, I want to show you through my actions—not just my words—that I can love you in a healthier, gentler, and more understanding way.

For now, I won’t ask you for anything. Gusto lang nako nga makahibalo ka nga grateful kaayo ko sa every memory, every laugh, every conversation, every moment, and every part of our story nga we shared together. Bisan unsa pa ka-difficult ang situation nato karon, I will always treasure what we had and what you have meant to me.

Happy monthsary, baby. ❤️

Bisan dili ta okay karon, I still hope nga someday, when everything feels lighter and when we’re both ready, we can look back at everything nga nahitabo and understand why we had to go through it. I don’t know what the future holds for us, but I want you to know nga I’m thankful for you, for us, and for every moment nga nahatag nimo sa akong life.

I love you, baby. And I’m truly sorry. ❤️
Love,
${name2} ♡`
}
