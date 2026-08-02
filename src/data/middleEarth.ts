import type { Franchise } from "./types";

export const middleEarth: Franchise = {
  id: "middle-earth",
  name: "Middle-earth",
  shortName: "Middle-earth",
  tagline: "Six films, two trilogies, one very long walk to a volcano.",
  description:
    "Peter Jackson's adaptations of Tolkien's Middle-earth, from the Hobbit's small, reluctant errand to the Fellowship's war for the whole of the world.",
  accent: "#4A5D45",
  chronoIsOfficial: true,
  sagas: ["The Hobbit Trilogy", "The Lord of the Rings Trilogy"],
  entries: [
    { id: "me-hobbit-1", title: "The Hobbit: An Unexpected Journey", year: 2012, dateLabel: "December 14, 2012", type: "Film", releaseOrder: 1, chronoOrder: 1, saga: "The Hobbit Trilogy", status: "released", note: "Set roughly 60 years before The Fellowship of the Ring", synopsis: "Bilbo Baggins is swept out of his comfortable hobbit-hole to help a company of dwarves reclaim their mountain home." },
    { id: "me-hobbit-2", title: "The Hobbit: The Desolation of Smaug", year: 2013, dateLabel: "December 13, 2013", type: "Film", releaseOrder: 2, chronoOrder: 2, saga: "The Hobbit Trilogy", status: "released", synopsis: "The company presses toward the Lonely Mountain, and Bilbo has to outwit the dragon guarding it." },
    { id: "me-hobbit-3", title: "The Hobbit: The Battle of the Five Armies", year: 2014, dateLabel: "December 17, 2014", type: "Film", releaseOrder: 3, chronoOrder: 3, saga: "The Hobbit Trilogy", status: "released", synopsis: "Smaug's death sparks a five-way war over the dragon's hoard, and Bilbo just wants everyone to go home." },
    { id: "me-fellowship", title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, dateLabel: "December 19, 2001", type: "Film", releaseOrder: 4, chronoOrder: 4, saga: "The Lord of the Rings Trilogy", status: "released", synopsis: "Frodo inherits a ring that must be destroyed, and sets out from the Shire with eight companions to do it." },
    { id: "me-two-towers", title: "The Lord of the Rings: The Two Towers", year: 2002, dateLabel: "December 18, 2002", type: "Film", releaseOrder: 5, chronoOrder: 5, saga: "The Lord of the Rings Trilogy", status: "released", synopsis: "The broken Fellowship fights on three fronts while Frodo and Sam gain an untrustworthy guide in Gollum." },
    { id: "me-return-king", title: "The Lord of the Rings: The Return of the King", year: 2003, dateLabel: "December 17, 2003", type: "Film", releaseOrder: 6, chronoOrder: 6, saga: "The Lord of the Rings Trilogy", status: "released", note: "Won all 11 Oscars it was nominated for", synopsis: "Gondor makes its last stand against Sauron's armies while Frodo carries the Ring to Mount Doom." },
  ],
};
