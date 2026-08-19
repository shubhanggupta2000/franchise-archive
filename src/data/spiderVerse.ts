import type { Franchise } from "./types";

export const spiderVerse: Franchise = {
  id: "spiderVerse",
  name: "Spider-Man Universe",
  shortName: "Spider-Man",
  tagline: "Anyone can wear the mask.",
  description:
    "The complete on-screen Spider-Man multiverse spanning classic television, the Raimi trilogy, The Amazing Spider-Man, the MCU Spider-Man saga, Sony's Spider-Man Universe, the animated Spider-Verse, and modern Spider-Man television series.",
  accent: "#D32F2F",
  chronoIsOfficial: true,
  sagas: [
    "Classic Spider-Man",
    "Raimi Spider-Man Trilogy",
    "The Amazing Spider-Man",
    "MCU Spider-Man",
    "Sony's Spider-Man Universe",
    "Spider-Verse",
    "Spider-Man Television",
  ],
  entries: [
    // ============================================================
    // CLASSIC SPIDER-MAN
    // ============================================================

    {
      id: "spider-man-1967",
      title: "Spider-Man",
      year: 1967,
      dateLabel: "September 9, 1967",
      type: "Series",
      releaseOrder: 1,
      chronoOrder: 1,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "Earth-6799",
      synopsis:
        "Peter Parker uses his spider-powers to fight criminals and supervillains while balancing his life as a student and photographer.",
    },

    {
      id: "amazing-spider-man-1977",
      title: "The Amazing Spider-Man",
      year: 1977,
      dateLabel: "April 19, 1977",
      type: "Series",
      releaseOrder: 2,
      chronoOrder: 2,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "1970s",
      synopsis:
        "Peter Parker becomes Spider-Man and uses his powers to protect New York while working as a photographer.",
    },

    {
      id: "spider-man-1977-film",
      title: "Spider-Man",
      year: 1977,
      dateLabel: "September 14, 1977",
      type: "Film",
      releaseOrder: 3,
      chronoOrder: 3,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "1970s",
      synopsis:
        "Peter Parker gains spider-like abilities and becomes Spider-Man while investigating a criminal organization.",
    },

    {
      id: "spider-man-strikes-back",
      title: "Spider-Man Strikes Back",
      year: 1978,
      dateLabel: "May 21, 1978",
      type: "Film",
      releaseOrder: 4,
      chronoOrder: 4,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "1970s",
      synopsis:
        "Spider-Man battles a criminal organization attempting to use a stolen device capable of controlling people's minds.",
    },

    {
      id: "japanese-spider-man",
      title: "Spider-Man",
      year: 1978,
      dateLabel: "May 17, 1978",
      type: "Series",
      releaseOrder: 5,
      chronoOrder: 5,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "Earth-51778",
      synopsis:
        "Takuya Yamashiro receives the powers of Spider-Man and uses the giant robot Leopardon against the Iron Cross Army.",
    },

    {
      id: "spider-man-dragons-challenge",
      title: "Spider-Man: The Dragon's Challenge",
      year: 1981,
      dateLabel: "May 9, 1981",
      type: "Film",
      releaseOrder: 6,
      chronoOrder: 6,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "1970s",
      synopsis:
        "Spider-Man travels to Hong Kong and becomes involved in a mystery surrounding an old friend's father.",
    },

    {
      id: "spider-man-1981",
      title: "Spider-Man",
      year: 1981,
      dateLabel: "September 12, 1981",
      type: "Series",
      releaseOrder: 7,
      chronoOrder: 7,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "Earth-8107",
      synopsis:
        "Peter Parker fights a variety of Marvel supervillains while protecting New York City.",
    },

    {
      id: "spider-man-amazing-friends",
      title: "Spider-Man and His Amazing Friends",
      year: 1981,
      dateLabel: "September 12, 1981",
      type: "Series",
      releaseOrder: 8,
      chronoOrder: 8,
      saga: "Classic Spider-Man",
      status: "released",
      timeline: "Earth-8107",
      synopsis:
        "Spider-Man teams up with Iceman and Firestar to fight supervillains and protect New York.",
    },

    // ============================================================
    // 1990s / 2000s ANIMATION
    // ============================================================

    {
      id: "spider-man-1994",
      title: "Spider-Man (1994)",
      year: 1994,
      dateLabel: "November 19, 1994",
      type: "Series",
      releaseOrder: 9,
      chronoOrder: 9,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Earth-92131",
      synopsis:
        "Peter Parker balances his life as a college student and photographer with his responsibilities as Spider-Man.",
    },

    {
      id: "spider-man-unlimited",
      title: "Spider-Man Unlimited",
      year: 1999,
      dateLabel: "October 2, 1999",
      type: "Series",
      releaseOrder: 10,
      chronoOrder: 10,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Counter-Earth",
      synopsis:
        "Spider-Man travels to Counter-Earth to rescue J. Jonah Jameson's son and becomes involved in a struggle against the High Evolutionary.",
    },

    {
      id: "spider-man-new-animated-series",
      title: "Spider-Man: The New Animated Series",
      year: 2003,
      dateLabel: "July 11, 2003",
      type: "Series",
      releaseOrder: 11,
      chronoOrder: 11,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Raimi-adjacent continuity",
      synopsis:
        "Peter Parker attempts to balance his college life, relationship with Mary Jane and responsibilities as Spider-Man.",
    },

    // ============================================================
    // TOBEY MAGUIRE — RAIMI
    // ============================================================

    {
      id: "spider-man-2002",
      title: "Spider-Man",
      year: 2002,
      dateLabel: "May 3, 2002",
      type: "Film",
      releaseOrder: 12,
      chronoOrder: 12,
      saga: "Raimi Spider-Man Trilogy",
      status: "released",
      timeline: "Earth-96283",
      synopsis:
        "Peter Parker gains spider-like abilities after being bitten by a genetically modified spider and becomes Spider-Man.",
    },

    {
      id: "spider-man-2",
      title: "Spider-Man 2",
      year: 2004,
      dateLabel: "June 30, 2004",
      type: "Film",
      releaseOrder: 13,
      chronoOrder: 13,
      saga: "Raimi Spider-Man Trilogy",
      status: "released",
      timeline: "Earth-96283",
      synopsis:
        "Peter struggles with his personal life and his responsibilities as Spider-Man while confronting the scientist Doctor Octavius.",
    },

    {
      id: "spider-man-3",
      title: "Spider-Man 3",
      year: 2007,
      dateLabel: "May 4, 2007",
      type: "Film",
      releaseOrder: 14,
      chronoOrder: 14,
      saga: "Raimi Spider-Man Trilogy",
      status: "released",
      timeline: "Earth-96283",
      synopsis:
        "Peter Parker's life is transformed by an alien symbiote while he faces Sandman, Harry Osborn and Eddie Brock.",
    },

    // ============================================================
    // SPECTACULAR SPIDER-MAN
    // ============================================================

    {
      id: "spectacular-spider-man",
      title: "The Spectacular Spider-Man",
      year: 2008,
      dateLabel: "March 8, 2008",
      type: "Series",
      releaseOrder: 15,
      chronoOrder: 15,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Earth-26496",
      synopsis:
        "Teenager Peter Parker learns to balance high school life with his growing responsibilities as Spider-Man.",
    },

    // ============================================================
    // ANDREW GARFIELD
    // ============================================================

    {
      id: "amazing-spider-man",
      title: "The Amazing Spider-Man",
      year: 2012,
      dateLabel: "July 3, 2012",
      type: "Film",
      releaseOrder: 16,
      chronoOrder: 16,
      saga: "The Amazing Spider-Man",
      status: "released",
      timeline: "Earth-120703",
      synopsis:
        "Peter Parker investigates the disappearance of his parents and becomes Spider-Man after being bitten by a genetically modified spider.",
    },

    {
      id: "ultimate-spider-man",
      title: "Ultimate Spider-Man",
      year: 2012,
      dateLabel: "April 1, 2012",
      type: "Series",
      releaseOrder: 17,
      chronoOrder: 17,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Earth-12041",
      synopsis:
        "Peter Parker joins forces with other young heroes after Nick Fury recruits him to become a more effective superhero.",
    },

    {
      id: "amazing-spider-man-2",
      title: "The Amazing Spider-Man 2",
      year: 2014,
      dateLabel: "May 2, 2014",
      type: "Film",
      releaseOrder: 18,
      chronoOrder: 18,
      saga: "The Amazing Spider-Man",
      status: "released",
      timeline: "Earth-120703",
      synopsis:
        "Spider-Man faces Electro and the Green Goblin while his relationship with Gwen Stacy reaches a tragic turning point.",
    },

    // ============================================================
    // MCU SPIDER-MAN
    // ============================================================

    {
      id: "captain-america-civil-war",
      title: "Captain America: Civil War",
      year: 2016,
      dateLabel: "May 6, 2016",
      type: "Film",
      releaseOrder: 19,
      chronoOrder: 19,
      saga: "MCU Spider-Man",
      status: "released",
      timeline: "Earth-616",
      synopsis:
        "Tony Stark recruits teenage Peter Parker to help the Avengers during their conflict over the Sokovia Accords.",
    },

    {
      id: "spider-man-homecoming",
      title: "Spider-Man: Homecoming",
      year: 2017,
      dateLabel: "July 7, 2017",
      type: "Film",
      releaseOrder: 20,
      chronoOrder: 20,
      saga: "MCU Spider-Man",
      status: "released",
      timeline: "Earth-616",
      synopsis:
        "Peter Parker attempts to balance high school with his life as Spider-Man while investigating the criminal activities of the Vulture.",
    },

    {
      id: "avengers-infinity-war",
      title: "Avengers: Infinity War",
      year: 2018,
      dateLabel: "April 27, 2018",
      type: "Film",
      releaseOrder: 21,
      chronoOrder: 21,
      saga: "MCU Spider-Man",
      status: "released",
      timeline: "Earth-616",
      synopsis:
        "Spider-Man joins Iron Man and other heroes in the battle against Thanos and his forces.",
    },

    {
      id: "avengers-endgame",
      title: "Avengers: Endgame",
      year: 2019,
      dateLabel: "April 26, 2019",
      type: "Film",
      releaseOrder: 22,
      chronoOrder: 22,
      saga: "MCU Spider-Man",
      status: "released",
      timeline: "Earth-616",
      synopsis:
        "Spider-Man returns after the Blip and joins the Avengers in their final battle against Thanos.",
    },

    {
      id: "spider-man-far-from-home",
      title: "Spider-Man: Far From Home",
      year: 2019,
      dateLabel: "July 2, 2019",
      type: "Film",
      releaseOrder: 23,
      chronoOrder: 23,
      saga: "MCU Spider-Man",
      status: "released",
      timeline: "Earth-616",
      synopsis:
        "Peter Parker travels across Europe with his classmates while secretly helping Mysterio fight elemental creatures.",
    },

    // ============================================================
    // SONY'S SPIDER-MAN UNIVERSE
    // ============================================================

    {
      id: "venom",
      title: "Venom",
      year: 2018,
      dateLabel: "October 5, 2018",
      type: "Film",
      releaseOrder: 24,
      chronoOrder: 24,
      saga: "Sony's Spider-Man Universe",
      status: "released",
      timeline: "Earth-688",
      synopsis:
        "Investigative journalist Eddie Brock bonds with an alien symbiote and becomes the lethal protector known as Venom.",
    },

    {
      id: "venom-let-there-be-carnage",
      title: "Venom: Let There Be Carnage",
      year: 2021,
      dateLabel: "October 1, 2021",
      type: "Film",
      releaseOrder: 25,
      chronoOrder: 25,
      saga: "Sony's Spider-Man Universe",
      status: "released",
      timeline: "Earth-688",
      synopsis:
        "Eddie Brock and Venom face serial killer Cletus Kasady after he bonds with the symbiote Carnage.",
    },

    {
      id: "morbius",
      title: "Morbius",
      year: 2022,
      dateLabel: "April 1, 2022",
      type: "Film",
      releaseOrder: 26,
      chronoOrder: 26,
      saga: "Sony's Spider-Man Universe",
      status: "released",
      timeline: "Sony's Spider-Man Universe",
      synopsis:
        "Scientist Michael Morbius accidentally transforms himself into a living vampire while searching for a cure to his blood disease.",
    },

    {
      id: "madame-web",
      title: "Madame Web",
      year: 2024,
      dateLabel: "February 14, 2024",
      type: "Film",
      releaseOrder: 27,
      chronoOrder: 27,
      saga: "Sony's Spider-Man Universe",
      status: "released",
      timeline: "2003",
      synopsis:
        "Cassandra Webb develops the ability to see the future and attempts to protect three young women from a mysterious enemy.",
    },

    {
      id: "kraven-the-hunter",
      title: "Kraven the Hunter",
      year: 2024,
      dateLabel: "December 13, 2024",
      type: "Film",
      releaseOrder: 28,
      chronoOrder: 28,
      saga: "Sony's Spider-Man Universe",
      status: "released",
      timeline: "Sony's Spider-Man Universe",
      synopsis:
        "Sergei Kravinoff develops extraordinary abilities and becomes the ruthless hunter known as Kraven.",
    },

    {
      id: "venom-the-last-dance",
      title: "Venom: The Last Dance",
      year: 2024,
      dateLabel: "October 25, 2024",
      type: "Film",
      releaseOrder: 29,
      chronoOrder: 29,
      saga: "Sony's Spider-Man Universe",
      status: "released",
      timeline: "Earth-688",
      synopsis:
        "Eddie Brock and Venom go on the run while being hunted by enemies from both the human and symbiote worlds.",
    },

    // ============================================================
    // SPIDER-VERSE
    // ============================================================

    {
      id: "into-the-spider-verse",
      title: "Spider-Man: Into the Spider-Verse",
      year: 2018,
      dateLabel: "December 14, 2018",
      type: "Film",
      releaseOrder: 30,
      chronoOrder: 30,
      saga: "Spider-Verse",
      status: "released",
      timeline: "Earth-1610B",
      synopsis:
        "Miles Morales becomes Spider-Man and meets Spider-People from across the multiverse after a collider destabilizes reality.",
    },

    {
      id: "across-the-spider-verse",
      title: "Spider-Man: Across the Spider-Verse",
      year: 2023,
      dateLabel: "June 2, 2023",
      type: "Film",
      releaseOrder: 31,
      chronoOrder: 31,
      saga: "Spider-Verse",
      status: "released",
      timeline: "Earth-1610B / Spider-Verse",
      synopsis:
        "Miles Morales encounters hundreds of Spider-People and challenges Miguel O'Hara's rules concerning canon events.",
    },

    {
      id: "the-spider-within",
      title: "The Spider Within: A Spider-Verse Story",
      year: 2024,
      dateLabel: "March 27, 2024",
      type: "Special",
      releaseOrder: 32,
      chronoOrder: 32,
      saga: "Spider-Verse",
      status: "released",
      timeline: "Earth-1610B",
      synopsis:
        "Miles Morales struggles with anxiety and the pressures of being a superhero while attempting to cope with his responsibilities.",
    },

    // ============================================================
    // LATER ANIMATED SERIES
    // ============================================================

    {
      id: "marvels-spider-man",
      title: "Marvel's Spider-Man",
      year: 2017,
      dateLabel: "August 19, 2017",
      type: "Series",
      releaseOrder: 33,
      chronoOrder: 33,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Earth-17628",
      synopsis:
        "Peter Parker learns to master his powers while facing supervillains and protecting New York.",
    },

    {
      id: "spidey-and-his-amazing-friends",
      title: "Spidey and His Amazing Friends",
      year: 2021,
      dateLabel: "August 6, 2021",
      type: "Series",
      releaseOrder: 34,
      chronoOrder: 34,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Alternate animated continuity",
      synopsis:
        "Peter Parker, Miles Morales and Gwen Stacy work together as young Spider-heroes.",
    },

    {
      id: "your-friendly-neighborhood-spider-man",
      title: "Your Friendly Neighborhood Spider-Man (Season 1)",
      year: 2025,
      dateLabel: "January 29, 2025",
      type: "Series",
      releaseOrder: 35,
      chronoOrder: 35,
      saga: "Spider-Man Television",
      status: "released",
      timeline: "Earth-TRN??",
      synopsis:
        "An alternate-universe Peter Parker begins his journey toward becoming Spider-Man while receiving guidance from Norman Osborn.",
    },

    // ============================================================
    // LIVE-ACTION SPIDER-MAN MULTIVERSE
    // ============================================================

    {
      id: "spider-man-no-way-home",
      title: "Spider-Man: No Way Home",
      year: 2021,
      dateLabel: "December 17, 2021",
      type: "Film",
      releaseOrder: 36,
      chronoOrder: 36,
      saga: "MCU Spider-Man",
      status: "released",
      timeline: "Earth-616 / Multiverse",
      synopsis:
        "Peter Parker's identity is exposed, and a spell intended to restore his anonymity accidentally brings villains from other Spider-Man universes into his world.",
    },

    // ============================================================
    // FUTURE / ANNOUNCED
    // ============================================================

    {
      id: "spider-man-brand-new-day",
      title: "Spider-Man: Brand New Day",
      year: 2026,
      dateLabel: "July 31, 2026",
      type: "Film",
      releaseOrder: 37,
      chronoOrder: 37,
      saga: "MCU Spider-Man",
      status: "released",
      timeline: "Earth-616",
      synopsis:
        "Peter Parker returns as Spider-Man four years after No Way Home, living as a largely forgotten hero while confronting a new threat.",
    },

    {
      id: "spider-noir",
      title: "Spider-Noir (Season 1)",
      year: 2026,
      dateLabel: "2026",
      type: "Series",
      releaseOrder: 38,
      chronoOrder: 38,
      saga: "Spider-Man Television",
      status: "upcoming",
      timeline: "Noir Universe",
      synopsis:
        "An aging Spider-Man Noir investigates a dangerous criminal conspiracy in 1930s New York.",
    },

    {
      id: "beyond-the-spider-verse",
      title: "Spider-Man: Beyond the Spider-Verse",
      year: 2027,
      dateLabel: "June 18, 2027",
      type: "Film",
      releaseOrder: 39,
      chronoOrder: 39,
      saga: "Spider-Verse",
      status: "upcoming",
      timeline: "Spider-Verse",
      synopsis:
        "Miles Morales' story continues as the Spider-Verse trilogy reaches its conclusion.",
    },
  ],
};
