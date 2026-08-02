import type { Franchise } from "./types";

export const dcu: Franchise = {
  id: "dcu",
  name: "DC Universe (Gods and Monsters)",
  shortName: "DCU",
  tagline: "James Gunn's clean-slate DC, currently unfolding in real time.",
  description:
    "The rebooted DC continuity launched by James Gunn and Peter Safran in 2025. Gunn has said the timeline is, for now, simply the release order — so that's exactly how it's tracked here.",
  accent: "#2E6F5E",
  chronoIsOfficial: true,
  sagas: ["Chapter One: Gods and Monsters"],
  entries: [
    { id: "dcu-creature-commandos", title: "Creature Commandos (Season 1)", year: 2024, dateLabel: "December 5, 2024", type: "Series", releaseOrder: 1, chronoOrder: 1, saga: "Chapter One: Gods and Monsters", status: "released", synopsis: "Amanda Waller assembles a black-ops squad of literal monsters for missions no one else could survive." },
    { id: "dcu-superman", title: "Superman", year: 2025, dateLabel: "July 11, 2025", type: "Film", releaseOrder: 2, chronoOrder: 2, saga: "Chapter One: Gods and Monsters", status: "released", note: "The DCU's true starting point", synopsis: "An already-established Superman balances kindness with geopolitics as Lex Luthor engineers a war to bring him down." },
    { id: "dcu-peacemaker-2", title: "Peacemaker (Season 2)", year: 2025, dateLabel: "August 21, 2025", type: "Series", releaseOrder: 3, chronoOrder: 3, saga: "Chapter One: Gods and Monsters", status: "released", note: "Feeds directly into Man of Tomorrow", synopsis: "Christopher Smith's messy second chapter, now folded into the new DCU continuity after Superman." },
    { id: "dcu-lanterns", title: "Lanterns", year: 2026, dateLabel: "2026", type: "Series", releaseOrder: 4, chronoOrder: 4, saga: "Chapter One: Gods and Monsters", status: "upcoming", synopsis: "A Green Lantern detective story pairing veteran Hal Jordan with rookie John Stewart on a small-town murder case with cosmic roots." },
    { id: "dcu-supergirl", title: "Supergirl: Woman of Tomorrow", year: 2026, dateLabel: "June 26, 2026", type: "Film", releaseOrder: 5, chronoOrder: 5, saga: "Chapter One: Gods and Monsters", status: "upcoming", synopsis: "Kara Zor-El, older and rougher around the edges than her cousin, takes on a bounty-hunting job across the stars." },
    { id: "dcu-clayface", title: "Clayface", year: 2026, dateLabel: "2026", type: "Film", releaseOrder: 6, chronoOrder: 6, saga: "Chapter One: Gods and Monsters", status: "upcoming", synopsis: "A washed-up actor's desperate gamble with an experimental substance turns him into Gotham's shape-shifting monster." },
    { id: "dcu-man-of-tomorrow", title: "Man of Tomorrow", year: 2027, dateLabel: "July 9, 2027", type: "Film", releaseOrder: 7, chronoOrder: 7, saga: "Chapter One: Gods and Monsters", status: "upcoming", note: "Direct Superman sequel", synopsis: "Superman and Lex Luthor are forced to work together against a much larger threat, with Brainiac entering the DCU." },
  ],
};
