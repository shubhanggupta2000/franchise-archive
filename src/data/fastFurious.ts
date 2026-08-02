import type { Franchise } from "./types";

export const fastFurious: Franchise = {
  id: "fast-furious",
  name: "Fast & Furious",
  shortName: "Fast & Furious",
  tagline: "Started as a street-racing film, became a family that steals submarines.",
  description:
    "From illegal street races to space (yes, space), the Toretto crew's saga has quietly become one of the highest-grossing franchises ever made. Includes the Hobbs & Shaw spin-off line.",
  accent: "#C6551A",
  chronoIsOfficial: false,
  sagas: ["Street Racing Era", "Heist Era", "Global Saga", "Spin-offs"],
  entries: [
    { id: "ff-1", title: "The Fast and the Furious", year: 2001, dateLabel: "June 22, 2001", type: "Film", releaseOrder: 1, chronoOrder: 1, saga: "Street Racing Era", status: "released", synopsis: "An undercover cop infiltrates Dominic Toretto's street-racing crew, suspected of running highway heists." },
    { id: "ff-2", title: "2 Fast 2 Furious", year: 2003, dateLabel: "June 6, 2003", type: "Film", releaseOrder: 2, chronoOrder: 2, saga: "Street Racing Era", status: "released", synopsis: "Now disgraced, Brian O'Conner teams with an old friend to take down a Miami drug lord for the feds." },
    { id: "ff-3", title: "The Fast and the Furious: Tokyo Drift", year: 2006, dateLabel: "June 16, 2006", type: "Film", releaseOrder: 3, chronoOrder: 6, saga: "Street Racing Era", status: "released", note: "Chronologically set after Fast & Furious 6", synopsis: "Exiled to Tokyo, a teenage troublemaker learns the art of drift racing and crosses the wrong crime family." },
    { id: "ff-4", title: "Fast & Furious", year: 2009, dateLabel: "April 3, 2009", type: "Film", releaseOrder: 4, chronoOrder: 3, saga: "Street Racing Era", status: "released", synopsis: "Dom and Brian reunite to hunt down the drug kingpin responsible for the death of someone they both loved." },
    { id: "ff-5", title: "Fast Five", year: 2011, dateLabel: "April 29, 2011", type: "Film", releaseOrder: 5, chronoOrder: 4, saga: "Heist Era", status: "released", note: "The franchise's turn into full heist-action", synopsis: "The crew regroups in Rio for one last job, dragging a bank vault through the streets while a federal agent closes in." },
    { id: "ff-6", title: "Fast & Furious 6", year: 2013, dateLabel: "May 24, 2013", type: "Film", releaseOrder: 6, chronoOrder: 5, saga: "Heist Era", status: "released", synopsis: "Dom's crew is offered full pardons to help take down a mercenary crew, one of whom is Letty, thought dead." },
    { id: "ff-7", title: "Furious 7", year: 2015, dateLabel: "April 3, 2015", type: "Film", releaseOrder: 7, chronoOrder: 7, saga: "Global Saga", status: "released", note: "Paul Walker's final film in the series", synopsis: "A vengeful special-ops assassin hunts the crew for what they did to his brother in the previous film." },
    { id: "ff-8", title: "The Fate of the Furious", year: 2017, dateLabel: "April 14, 2017", type: "Film", releaseOrder: 8, chronoOrder: 8, saga: "Global Saga", status: "released", synopsis: "A mysterious hacker blackmails Dom into betraying his own family, mid-global cyberterrorism plot." },
    { id: "ff-hobbs-shaw", title: "Fast & Furious Presents: Hobbs & Shaw", year: 2019, dateLabel: "August 2, 2019", type: "Film", releaseOrder: 9, chronoOrder: 9, saga: "Spin-offs", status: "released", synopsis: "A lawman and a mercenary, sworn enemies, are forced to team up against a cybernetically enhanced supervillain." },
    { id: "ff-9", title: "F9", year: 2021, dateLabel: "June 25, 2021", type: "Film", releaseOrder: 10, chronoOrder: 10, saga: "Global Saga", status: "released", synopsis: "Dom's estranged, highly trained brother resurfaces as the muscle behind a plot with world-ending stakes." },
    { id: "ff-10", title: "Fast X", year: 2023, dateLabel: "May 19, 2023", type: "Film", releaseOrder: 11, chronoOrder: 11, saga: "Global Saga", status: "released", note: "First of a planned two-part finale", synopsis: "The son of a cartel boss the crew killed years ago returns for a slow, theatrical revenge against everyone Dom loves." },
  ],
};
