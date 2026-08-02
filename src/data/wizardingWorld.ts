import type { Franchise } from "./types";

export const wizardingWorld: Franchise = {
  id: "wizarding-world",
  name: "Wizarding World",
  shortName: "Wizarding World",
  tagline: "Eight films that raised a generation, plus a prequel line that split the fandom.",
  description:
    "The Harry Potter saga and its Fantastic Beasts prequel trilogy, spanning a single continuous world of wands, houses, and increasingly complicated Dumbledore backstory.",
  accent: "#7A2E2E",
  chronoIsOfficial: true,
  sagas: ["Fantastic Beasts Era", "Harry Potter Saga"],
  entries: [
    { id: "ww-sorcerers-stone", title: "Harry Potter and the Sorcerer's Stone", year: 2001, dateLabel: "November 16, 2001", type: "Film", releaseOrder: 1, chronoOrder: 4, saga: "Harry Potter Saga", status: "released", synopsis: "An orphaned boy discovers he's a famous wizard and heads off to Hogwarts for his first year of magical school." },
    { id: "ww-chamber", title: "Harry Potter and the Chamber of Secrets", year: 2002, dateLabel: "November 15, 2002", type: "Film", releaseOrder: 2, chronoOrder: 5, saga: "Harry Potter Saga", status: "released", synopsis: "A monster is petrifying students at Hogwarts, and Harry has to work out who opened a legendary hidden chamber." },
    { id: "ww-prisoner", title: "Harry Potter and the Prisoner of Azkaban", year: 2004, dateLabel: "June 4, 2004", type: "Film", releaseOrder: 3, chronoOrder: 6, saga: "Harry Potter Saga", status: "released", synopsis: "An escaped convict said to be hunting Harry turns out to be tangled up in his parents' deaths, and their killer." },
    { id: "ww-goblet", title: "Harry Potter and the Goblet of Fire", year: 2005, dateLabel: "November 18, 2005", type: "Film", releaseOrder: 4, chronoOrder: 7, saga: "Harry Potter Saga", status: "released", synopsis: "Mysteriously entered into a deadly interschool tournament, Harry gets his first real brush with Voldemort's return." },
    { id: "ww-order", title: "Harry Potter and the Order of the Phoenix", year: 2007, dateLabel: "July 11, 2007", type: "Film", releaseOrder: 5, chronoOrder: 8, saga: "Harry Potter Saga", status: "released", synopsis: "With the Ministry in denial about Voldemort's return, Harry secretly trains his classmates to fight back." },
    { id: "ww-prince", title: "Harry Potter and the Half-Blood Prince", year: 2009, dateLabel: "July 15, 2009", type: "Film", releaseOrder: 6, chronoOrder: 9, saga: "Harry Potter Saga", status: "released", synopsis: "Dumbledore and Harry dig into Voldemort's past to find the secret to destroying him for good." },
    { id: "ww-hallows-1", title: "Harry Potter and the Deathly Hallows: Part 1", year: 2010, dateLabel: "November 19, 2010", type: "Film", releaseOrder: 7, chronoOrder: 10, saga: "Harry Potter Saga", status: "released", synopsis: "With Hogwarts no longer safe, Harry, Ron, and Hermione go on the run to hunt down Voldemort's remaining Horcruxes." },
    { id: "ww-hallows-2", title: "Harry Potter and the Deathly Hallows: Part 2", year: 2011, dateLabel: "July 15, 2011", type: "Film", releaseOrder: 8, chronoOrder: 11, saga: "Harry Potter Saga", status: "released", note: "Closes out the original saga", synopsis: "The Battle of Hogwarts arrives as Harry closes in on Voldemort's last Horcruxes and their final confrontation." },
    { id: "ww-fb-1", title: "Fantastic Beasts and Where to Find Them", year: 2016, dateLabel: "November 18, 2016", type: "Film", releaseOrder: 9, chronoOrder: 1, saga: "Fantastic Beasts Era", status: "released", note: "Set roughly 70 years before Harry Potter", synopsis: "A magizoologist's suitcase of escaped creatures causes chaos for the wizarding world hidden inside 1920s New York." },
    { id: "ww-fb-2", title: "Fantastic Beasts: The Crimes of Grindelwald", year: 2018, dateLabel: "November 16, 2018", type: "Film", releaseOrder: 10, chronoOrder: 2, saga: "Fantastic Beasts Era", status: "released", synopsis: "Newt Scamander is drawn into the fight against the dark wizard Grindelwald, who is gathering followers across Europe." },
    { id: "ww-fb-3", title: "Fantastic Beasts: The Secrets of Dumbledore", year: 2022, dateLabel: "April 15, 2022", type: "Film", releaseOrder: 11, chronoOrder: 3, saga: "Fantastic Beasts Era", status: "released", synopsis: "Bound by a blood pact, Dumbledore assembles a small team to stop his old friend Grindelwald's rise to power." },
  ],
};
