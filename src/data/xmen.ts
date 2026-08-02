import type { Franchise } from "./types";

export const xmen: Franchise = {
  id: "x-men",
  name: "X-Men",
  shortName: "X-Men",
  tagline:
    "Fox's mutant saga, fractured by time travel and eventually pulled into the multiverse.",
  description:
    "The X-Men film universe spans multiple timelines created by the events of Days of Future Past, alongside the Deadpool films and their eventual connection to the wider Marvel multiverse.",
  accent: "#C9A227",
  chronoIsOfficial: false,
  sagas: ["Original Trilogy", "Prequel Era", "Deadpool", "Merged Timeline"],

  entries: [
    {
      id: "xm-1",
      title: "X-Men",
      year: 2000,
      dateLabel: "July 14, 2000",
      type: "Film",
      releaseOrder: 1,
      chronoOrder: 8,
      saga: "Original Trilogy",
      timeline: "Timeline A — Original Future",
      status: "released",
      synopsis:
        "Professor Xavier's school for gifted mutants faces off against Magneto's plan to force the world to evolve.",
    },

    {
      id: "xm-2",
      title: "X2: X-Men United",
      year: 2003,
      dateLabel: "May 2, 2003",
      type: "Film",
      releaseOrder: 2,
      chronoOrder: 9,
      saga: "Original Trilogy",
      timeline: "Timeline A — Original Future",
      status: "released",
      synopsis:
        "A military scientist attacks Xavier's school, forcing mutants and their enemies into an uneasy alliance.",
    },

    {
      id: "xm-3",
      title: "X-Men: The Last Stand",
      year: 2006,
      dateLabel: "May 26, 2006",
      type: "Film",
      releaseOrder: 3,
      chronoOrder: 10,
      saga: "Original Trilogy",
      timeline: "Timeline A — Original Future",
      status: "released",
      synopsis:
        "A 'cure' for mutation splits the mutant community as Jean Grey returns, transformed into something uncontrollable.",
    },

    {
      id: "xm-origins-wolverine",
      title: "X-Men Origins: Wolverine",
      year: 2009,
      dateLabel: "May 1, 2009",
      type: "Film",
      releaseOrder: 4,
      chronoOrder: 6,
      saga: "Original Trilogy",
      timeline: "Timeline A — Original Future",
      status: "released",
      synopsis:
        "Logan's past as a black-ops mutant experiment catches up with him after a betrayal by his own brother.",
    },

    {
      id: "xm-first-class",
      title: "X-Men: First Class",
      year: 2011,
      dateLabel: "June 3, 2011",
      type: "Film",
      releaseOrder: 5,
      chronoOrder: 1,
      saga: "Prequel Era",
      timeline: "Both Timelines",
      status: "released",
      note: "The shared starting point of the two major Fox X-Men timelines.",
      synopsis:
        "Young Charles Xavier and Erik Lehnsherr form an unlikely friendship during the Cuban Missile Crisis, before it fractures them apart.",
    },

    {
      id: "xm-wolverine",
      title: "The Wolverine",
      year: 2013,
      dateLabel: "July 26, 2013",
      type: "Film",
      releaseOrder: 6,
      chronoOrder: 11,
      saga: "Original Trilogy",
      timeline: "Timeline A — Original Future",
      status: "released",
      note: "Set after the events of X-Men: The Last Stand.",
      synopsis:
        "Logan travels to Japan to say goodbye to a dying friend and gets pulled into a Yakuza succession war.",
    },

    {
      id: "xm-days-future-past",
      title: "X-Men: Days of Future Past",
      year: 2014,
      dateLabel: "May 23, 2014",
      type: "Film",
      releaseOrder: 7,
      chronoOrder: 2,
      saga: "Prequel Era",
      timeline: "Timeline Split",
      status: "released",
      note: "The pivotal time-travel event that changes history and creates the revised future.",
      synopsis:
        "Wolverine's consciousness is sent back to 1973 to stop an assassination that leads to a mutant-hunting apocalypse.",
    },

    {
      id: "xm-deadpool-1",
      title: "Deadpool",
      year: 2016,
      dateLabel: "February 12, 2016",
      type: "Film",
      releaseOrder: 8,
      chronoOrder: 7,
      saga: "Deadpool",
      timeline: "Revised Timeline",
      status: "released",
      synopsis:
        "A wisecracking mercenary gains regenerative powers from a shady experiment and goes looking for the man who scarred him.",
    },

    {
      id: "xm-apocalypse",
      title: "X-Men: Apocalypse",
      year: 2016,
      dateLabel: "May 27, 2016",
      type: "Film",
      releaseOrder: 9,
      chronoOrder: 3,
      saga: "Prequel Era",
      timeline: "Timeline B — Revised Future",
      status: "released",
      synopsis:
        "The world's first mutant awakens after millennia and recruits four horsemen to tear down modern civilization.",
    },

    {
      id: "xm-logan",
      title: "Logan",
      year: 2017,
      dateLabel: "March 3, 2017",
      type: "Film",
      releaseOrder: 10,
      chronoOrder: 10,
      saga: "Original Trilogy",
      timeline: "Timeline B — Distant Future",
      status: "released",
      note: "Set in 2029. Its exact relationship to the revised timeline is intentionally ambiguous.",
      synopsis:
        "An aging, ailing Logan cares for a failing Professor X until a young girl with familiar claws needs his protection.",
    },

    {
      id: "xm-deadpool-2",
      title: "Deadpool 2",
      year: 2018,
      dateLabel: "May 18, 2018",
      type: "Film",
      releaseOrder: 11,
      chronoOrder: 8,
      saga: "Deadpool",
      timeline: "Revised Timeline",
      status: "released",
      synopsis:
        "Grieving and reckless, Deadpool assembles a team to protect a troubled young mutant from a time-traveling soldier.",
    },

    {
      id: "xm-dark-phoenix",
      title: "Dark Phoenix",
      year: 2019,
      dateLabel: "June 7, 2019",
      type: "Film",
      releaseOrder: 12,
      chronoOrder: 4,
      saga: "Prequel Era",
      timeline: "Timeline B — Revised Future",
      status: "released",
      note: "The final main X-Men film set within the revised timeline's past.",
      synopsis:
        "A cosmic accident unlocks a power in Jean Grey that even she can't control, and it starts consuming her.",
    },

    {
      id: "xm-new-mutants",
      title: "The New Mutants",
      year: 2020,
      dateLabel: "August 28, 2020",
      type: "Film",
      releaseOrder: 13,
      chronoOrder: 5,
      saga: "Prequel Era",
      timeline: "Revised Timeline",
      status: "released",
      note: "A standalone mutant story with an intentionally loose connection to the wider X-Men continuity.",
      synopsis:
        "Five young mutants held in a secretive facility have to confront their own powers, which are starting to manifest as horror.",
    },

    {
      id: "xm-deadpool-wolverine",
      title: "Deadpool & Wolverine",
      year: 2024,
      dateLabel: "July 26, 2024",
      type: "Film",
      releaseOrder: 14,
      chronoOrder: 1,
      saga: "Merged Timeline",
      timeline: "Marvel Multiverse",
      status: "released",
      note: "A multiverse story connecting the Fox X-Men universe with the MCU.",
      synopsis:
        "Recruited by a bureaucratic multiverse agency, Deadpool drags a reluctant Wolverine variant along to save his reality.",
    },
  ],
};
