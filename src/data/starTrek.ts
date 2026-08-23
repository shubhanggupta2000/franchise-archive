import type { Franchise } from "./types";

export const starTrek: Franchise = {
  id: "starTrek",
  name: "Star Trek",
  shortName: "Star Trek",
  tagline: "To boldly go where no one has gone before.",
  description:
    "One of the largest science-fiction franchises ever created, spanning centuries of Federation history across television, films, animation and officially produced short-form stories.",
  accent: "#1565C0",
  chronoIsOfficial: false,
  sagas: [
    "Enterprise Era",
    "Discovery Era",
    "Strange New Worlds",
    "The Original Series",
    "The Original Series Films",
    "The Next Generation Era",
    "The Next Generation Films",
    "Deep Space Nine",
    "Voyager",
    "Kelvin Timeline",
    "Lower Decks",
    "Picard Era",
    "32nd Century",
    "Starfleet Academy",
    "Short Treks",
  ],
  entries: [
    // ============================================================
    // ENTERPRISE ERA
    // ============================================================

    {
      id: "enterprise-s1",
      title: "Star Trek: Enterprise (Season 1)",
      year: 2001,
      dateLabel: "September 26, 2001",
      type: "Series",
      releaseOrder: 1,
      chronoOrder: 1,
      saga: "Enterprise Era",
      status: "released",
      timeline: "2151–2152",
      synopsis:
        "Captain Jonathan Archer commands humanity's first warp-five starship Enterprise as Earth begins its first deep-space exploration mission.",
    },

    {
      id: "enterprise-s2",
      title: "Star Trek: Enterprise (Season 2)",
      year: 2002,
      dateLabel: "September 18, 2002",
      type: "Series",
      releaseOrder: 2,
      chronoOrder: 2,
      saga: "Enterprise Era",
      status: "released",
      timeline: "2152–2153",
      synopsis:
        "Enterprise continues exploring the galaxy while humanity establishes its earliest relationships with alien civilizations.",
    },

    {
      id: "enterprise-s3",
      title: "Star Trek: Enterprise (Season 3)",
      year: 2003,
      dateLabel: "September 10, 2003",
      type: "Series",
      releaseOrder: 3,
      chronoOrder: 3,
      saga: "Enterprise Era",
      status: "released",
      timeline: "2153–2154",
      synopsis:
        "After a devastating attack on Earth, Enterprise enters the Delphic Expanse to stop the Xindi from destroying humanity.",
    },

    {
      id: "enterprise-s4",
      title: "Star Trek: Enterprise (Season 4)",
      year: 2004,
      dateLabel: "October 8, 2004",
      type: "Series",
      releaseOrder: 4,
      chronoOrder: 4,
      saga: "Enterprise Era",
      status: "released",
      timeline: "2154–2161",
      synopsis:
        "Enterprise deals with the aftermath of the Xindi crisis and lays the foundations for the United Federation of Planets.",
    },

    // ============================================================
    // DISCOVERY / 23RD CENTURY PRE-TOS
    // ============================================================

    {
      id: "discovery-s1",
      title: "Star Trek: Discovery (Season 1)",
      year: 2017,
      dateLabel: "September 24, 2017",
      type: "Series",
      releaseOrder: 5,
      chronoOrder: 5,
      saga: "Discovery Era",
      status: "released",
      timeline: "2256–2257",
      synopsis:
        "Commander Michael Burnham becomes central to a war between the Federation and Klingon Empire while serving aboard the experimental U.S.S. Discovery.",
    },

    {
      id: "discovery-s2",
      title: "Star Trek: Discovery (Season 2)",
      year: 2019,
      dateLabel: "January 17, 2019",
      type: "Series",
      releaseOrder: 6,
      chronoOrder: 6,
      saga: "Discovery Era",
      status: "released",
      timeline: "2257",
      synopsis:
        "Discovery encounters Captain Christopher Pike and the crew of the Enterprise while investigating mysterious signals and a powerful artificial intelligence.",
    },

    // ============================================================
    // SHORT TREKS — 23RD CENTURY
    // ============================================================

    {
      id: "short-treks-runaway",
      title: "Star Trek: Short Treks — Runaway",
      year: 2018,
      dateLabel: "October 4, 2018",
      type: "Special",
      releaseOrder: 7,
      chronoOrder: 7,
      saga: "Short Treks",
      status: "released",
      timeline: "2256",
      synopsis:
        "Ensign Tilly encounters a mysterious stowaway aboard Discovery and discovers an unexpected connection.",
    },

    {
      id: "short-treks-calypso",
      title: "Star Trek: Short Treks — Calypso",
      year: 2018,
      dateLabel: "November 8, 2018",
      type: "Special",
      releaseOrder: 8,
      chronoOrder: 8,
      saga: "Short Treks",
      status: "released",
      timeline: "Unknown distant future",
      synopsis:
        "A lone soldier awakens aboard the abandoned Discovery and forms an unusual relationship with the ship's computer.",
    },

    {
      id: "short-treks-brightest-star",
      title: "Star Trek: Short Treks — The Brightest Star",
      year: 2018,
      dateLabel: "December 6, 2018",
      type: "Special",
      releaseOrder: 9,
      chronoOrder: 9,
      saga: "Short Treks",
      status: "released",
      timeline: "2255",
      synopsis:
        "Young Saru dreams of leaving his homeworld and seeing the stars beyond Kaminar.",
    },

    {
      id: "short-treks-escape-connexion",
      title: "Star Trek: Short Treks — Escape Artist",
      year: 2019,
      dateLabel: "January 3, 2019",
      type: "Special",
      releaseOrder: 10,
      chronoOrder: 10,
      saga: "Short Treks",
      status: "released",
      timeline: "23rd century",
      synopsis:
        "Harry Mudd attempts another elaborate escape while continuing his life as a con artist.",
    },

    // ============================================================
    // STRANGE NEW WORLDS
    // ============================================================

    {
      id: "strange-new-worlds-s1",
      title: "Star Trek: Strange New Worlds (Season 1)",
      year: 2022,
      dateLabel: "May 5, 2022",
      type: "Series",
      releaseOrder: 11,
      chronoOrder: 11,
      saga: "Strange New Worlds",
      status: "released",
      timeline: "2259",
      synopsis:
        "Captain Christopher Pike commands the Enterprise years before James T. Kirk takes command, exploring strange new worlds alongside Spock and Number One.",
    },

    {
      id: "strange-new-worlds-s2",
      title: "Star Trek: Strange New Worlds (Season 2)",
      year: 2023,
      dateLabel: "June 15, 2023",
      type: "Series",
      releaseOrder: 12,
      chronoOrder: 12,
      saga: "Strange New Worlds",
      status: "released",
      timeline: "2259–2260",
      synopsis:
        "The Enterprise crew faces increasingly dangerous missions while dealing with personal relationships, Klingon tensions and the consequences of Pike's future knowledge.",
    },

    {
      id: "short-treks-q-a",
      title: "Star Trek: Short Treks — Q&A",
      year: 2019,
      dateLabel: "October 5, 2019",
      type: "Special",
      releaseOrder: 13,
      chronoOrder: 13,
      saga: "Short Treks",
      status: "released",
      timeline: "2259",
      synopsis:
        "A young Spock's first day aboard the Enterprise becomes an unexpected conversation with Number One.",
    },

    {
      id: "short-treks-the-trouble-with-edward",
      title: "Star Trek: Short Treks — The Trouble with Edward",
      year: 2019,
      dateLabel: "October 10, 2019",
      type: "Special",
      releaseOrder: 14,
      chronoOrder: 14,
      saga: "Short Treks",
      status: "released",
      timeline: "2250s",
      synopsis:
        "A Starfleet scientist attempts to improve the tribble species, creating consequences that become legendary.",
    },

    {
      id: "short-treks-ask-not",
      title: "Star Trek: Short Treks — Ask Not",
      year: 2019,
      dateLabel: "November 14, 2019",
      type: "Special",
      releaseOrder: 15,
      chronoOrder: 15,
      saga: "Short Treks",
      status: "released",
      timeline: "2259",
      synopsis:
        "Cadet Thira Sidhu faces an ethical test while serving aboard the Enterprise.",
    },

    {
      id: "short-treks-children-of-mars",
      title: "Star Trek: Short Treks — Children of Mars",
      year: 2020,
      dateLabel: "January 9, 2020",
      type: "Special",
      releaseOrder: 16,
      chronoOrder: 16,
      saga: "Short Treks",
      status: "released",
      timeline: "2385",
      synopsis:
        "Two teenage girls from Mars experience the devastating attack that changes the Federation's future.",
    },

    // ============================================================
    // ORIGINAL SERIES
    // ============================================================

    {
      id: "tos-s1",
      title: "Star Trek: The Original Series (Season 1)",
      year: 1966,
      dateLabel: "September 8, 1966",
      type: "Series",
      releaseOrder: 17,
      chronoOrder: 17,
      saga: "The Original Series",
      status: "released",
      timeline: "2265–2266",
      synopsis:
        "Captain James T. Kirk commands the Enterprise on a five-year mission to explore the galaxy.",
    },

    {
      id: "tos-s2",
      title: "Star Trek: The Original Series (Season 2)",
      year: 1967,
      dateLabel: "September 15, 1967",
      type: "Series",
      releaseOrder: 18,
      chronoOrder: 18,
      saga: "The Original Series",
      status: "released",
      timeline: "2266–2267",
      synopsis:
        "The Enterprise continues its exploration while confronting new civilizations, alien threats and moral dilemmas.",
    },

    {
      id: "tos-s3",
      title: "Star Trek: The Original Series (Season 3)",
      year: 1968,
      dateLabel: "September 20, 1968",
      type: "Series",
      releaseOrder: 19,
      chronoOrder: 19,
      saga: "The Original Series",
      status: "released",
      timeline: "2268–2269",
      synopsis:
        "Kirk and his crew continue their five-year mission while facing increasingly dangerous threats to the Enterprise and Federation.",
    },

    // ============================================================
    // ANIMATED SERIES
    // ============================================================

    {
      id: "tas-s1",
      title: "Star Trek: The Animated Series (Season 1)",
      year: 1973,
      dateLabel: "September 8, 1973",
      type: "Series",
      releaseOrder: 20,
      chronoOrder: 20,
      saga: "The Original Series",
      status: "released",
      timeline: "2269",
      synopsis:
        "The Enterprise crew continues its five-year mission in animated form, encountering strange worlds and alien civilizations.",
    },

    {
      id: "tas-s2",
      title: "Star Trek: The Animated Series (Season 2)",
      year: 1974,
      dateLabel: "September 7, 1974",
      type: "Series",
      releaseOrder: 21,
      chronoOrder: 21,
      saga: "The Original Series",
      status: "released",
      timeline: "2270",
      synopsis:
        "Kirk and the Enterprise continue exploring the galaxy on missions that extend the original crew's adventures.",
    },

    // ============================================================
    // ORIGINAL SERIES FILMS
    // ============================================================

    {
      id: "star-trek-motion-picture",
      title: "Star Trek: The Motion Picture",
      year: 1979,
      dateLabel: "December 7, 1979",
      type: "Film",
      releaseOrder: 22,
      chronoOrder: 22,
      saga: "The Original Series Films",
      status: "released",
      timeline: "2270",
      synopsis:
        "The Enterprise confronts a mysterious alien entity known as V'Ger while beginning a new era of Starfleet exploration.",
    },

    {
      id: "star-trek-2-wrath-of-khan",
      title: "Star Trek II: The Wrath of Khan",
      year: 1982,
      dateLabel: "June 4, 1982",
      type: "Film",
      releaseOrder: 23,
      chronoOrder: 23,
      saga: "The Original Series Films",
      status: "released",
      timeline: "2285",
      synopsis:
        "Admiral Kirk faces his old enemy Khan Noonien Singh, who seeks revenge while attempting to seize the Genesis technology.",
    },

    {
      id: "star-trek-3-search-for-spock",
      title: "Star Trek III: The Search for Spock",
      year: 1984,
      dateLabel: "June 1, 1984",
      type: "Film",
      releaseOrder: 24,
      chronoOrder: 24,
      saga: "The Original Series Films",
      status: "released",
      timeline: "2285",
      synopsis:
        "Kirk risks everything to recover Spock's body and restore his friend's soul after the events of the Genesis incident.",
    },

    {
      id: "star-trek-4-voyage-home",
      title: "Star Trek IV: The Voyage Home",
      year: 1986,
      dateLabel: "November 26, 1986",
      type: "Film",
      releaseOrder: 25,
      chronoOrder: 25,
      saga: "The Original Series Films",
      status: "released",
      timeline: "2286",
      synopsis:
        "The crew travels back to 20th-century Earth to save humanity and the planet's whales from a mysterious alien probe.",
    },

    {
      id: "star-trek-5-final-frontier",
      title: "Star Trek V: The Final Frontier",
      year: 1989,
      dateLabel: "June 9, 1989",
      type: "Film",
      releaseOrder: 26,
      chronoOrder: 26,
      saga: "The Original Series Films",
      status: "released",
      timeline: "2287",
      synopsis:
        "The Enterprise is hijacked by Spock's half-brother Sybok, who seeks a legendary world at the center of the galaxy.",
    },

    {
      id: "star-trek-6-undiscovered-country",
      title: "Star Trek VI: The Undiscovered Country",
      year: 1991,
      dateLabel: "December 6, 1991",
      type: "Film",
      releaseOrder: 27,
      chronoOrder: 27,
      saga: "The Original Series Films",
      status: "released",
      timeline: "2293",
      synopsis:
        "Kirk and the Enterprise become involved in a conspiracy threatening the historic peace process between the Federation and Klingon Empire.",
    },

    // ============================================================
    // NEXT GENERATION
    // ============================================================

    {
      id: "tng-s1",
      title: "Star Trek: The Next Generation (Season 1)",
      year: 1987,
      dateLabel: "September 28, 1987",
      type: "Series",
      releaseOrder: 28,
      chronoOrder: 28,
      saga: "The Next Generation Era",
      status: "released",
      timeline: "2364",
      synopsis:
        "Captain Jean-Luc Picard commands a new Enterprise on a mission of exploration more than 70 years after Kirk's era.",
    },

    {
      id: "tng-s2",
      title: "Star Trek: The Next Generation (Season 2)",
      year: 1988,
      dateLabel: "November 21, 1988",
      type: "Series",
      releaseOrder: 29,
      chronoOrder: 29,
      saga: "The Next Generation Era",
      status: "released",
      timeline: "2365",
      synopsis:
        "The Enterprise continues exploring the galaxy while confronting complex ethical and scientific challenges.",
    },

    {
      id: "tng-s3",
      title: "Star Trek: The Next Generation (Season 3)",
      year: 1989,
      dateLabel: "September 25, 1989",
      type: "Series",
      releaseOrder: 30,
      chronoOrder: 30,
      saga: "The Next Generation Era",
      status: "released",
      timeline: "2366–2367",
      synopsis:
        "Picard and his crew encounter new civilizations and threats while the Enterprise becomes increasingly important to Federation affairs.",
    },

    {
      id: "tng-s4",
      title: "Star Trek: The Next Generation (Season 4)",
      year: 1990,
      dateLabel: "September 24, 1990",
      type: "Series",
      releaseOrder: 31,
      chronoOrder: 31,
      saga: "The Next Generation Era",
      status: "released",
      timeline: "2367–2368",
      synopsis:
        "The Enterprise crew faces political conflicts, alien threats and personal challenges across Federation space.",
    },

    {
      id: "tng-s5",
      title: "Star Trek: The Next Generation (Season 5)",
      year: 1991,
      dateLabel: "September 23, 1991",
      type: "Series",
      releaseOrder: 32,
      chronoOrder: 32,
      saga: "The Next Generation Era",
      status: "released",
      timeline: "2368–2369",
      synopsis:
        "Picard and his crew continue exploring the galaxy while confronting threats including the Borg and Romulan Empire.",
    },

    {
      id: "tng-s6",
      title: "Star Trek: The Next Generation (Season 6)",
      year: 1992,
      dateLabel: "September 21, 1992",
      type: "Series",
      releaseOrder: 33,
      chronoOrder: 33,
      saga: "The Next Generation Era",
      status: "released",
      timeline: "2369–2370",
      synopsis:
        "The Enterprise crew navigates increasingly complicated political and existential threats across the Federation.",
    },

    {
      id: "tng-s7",
      title: "Star Trek: The Next Generation (Season 7)",
      year: 1993,
      dateLabel: "September 20, 1993",
      type: "Series",
      releaseOrder: 34,
      chronoOrder: 34,
      saga: "The Next Generation Era",
      status: "released",
      timeline: "2370",
      synopsis:
        "The Enterprise's final television season brings the crew's seven-year mission toward its conclusion.",
    },

    // ============================================================
    // DEEP SPACE NINE
    // ============================================================

    {
      id: "ds9-s1",
      title: "Star Trek: Deep Space Nine (Season 1)",
      year: 1993,
      dateLabel: "January 3, 1993",
      type: "Series",
      releaseOrder: 35,
      chronoOrder: 35,
      saga: "Deep Space Nine",
      status: "released",
      timeline: "2369",
      synopsis:
        "Commander Benjamin Sisko takes command of Deep Space Nine and discovers the wormhole leading to the distant Gamma Quadrant.",
    },

    {
      id: "ds9-s2",
      title: "Star Trek: Deep Space Nine (Season 2)",
      year: 1993,
      dateLabel: "September 26, 1993",
      type: "Series",
      releaseOrder: 36,
      chronoOrder: 36,
      saga: "Deep Space Nine",
      status: "released",
      timeline: "2369–2370",
      synopsis:
        "Sisko and his crew explore the Gamma Quadrant while political tensions surrounding Bajor and the Federation intensify.",
    },

    {
      id: "ds9-s3",
      title: "Star Trek: Deep Space Nine (Season 3)",
      year: 1994,
      dateLabel: "September 26, 1994",
      type: "Series",
      releaseOrder: 37,
      chronoOrder: 37,
      saga: "Deep Space Nine",
      status: "released",
      timeline: "2370–2371",
      synopsis:
        "The station faces the growing threat of the Dominion as the crew encounters the powerful shape-shifting Founders.",
    },

    {
      id: "ds9-s4",
      title: "Star Trek: Deep Space Nine (Season 4)",
      year: 1995,
      dateLabel: "October 2, 1995",
      type: "Series",
      releaseOrder: 38,
      chronoOrder: 38,
      saga: "Deep Space Nine",
      status: "released",
      timeline: "2372",
      synopsis:
        "The Klingon-Federation relationship deteriorates as the Dominion threat continues to grow.",
    },

    {
      id: "ds9-s5",
      title: "Star Trek: Deep Space Nine (Season 5)",
      year: 1996,
      dateLabel: "January 1, 1996",
      type: "Series",
      releaseOrder: 39,
      chronoOrder: 39,
      saga: "Deep Space Nine",
      status: "released",
      timeline: "2373",
      synopsis:
        "The Dominion's influence expands as Deep Space Nine becomes increasingly central to the coming conflict.",
    },

    {
      id: "ds9-s6",
      title: "Star Trek: Deep Space Nine (Season 6)",
      year: 1997,
      dateLabel: "September 29, 1997",
      type: "Series",
      releaseOrder: 40,
      chronoOrder: 40,
      saga: "Deep Space Nine",
      status: "released",
      timeline: "2374",
      synopsis:
        "The Dominion War reaches its decisive phase as Starfleet and its allies struggle to defend the Alpha Quadrant.",
    },

    {
      id: "ds9-s7",
      title: "Star Trek: Deep Space Nine (Season 7)",
      year: 1998,
      dateLabel: "September 30, 1998",
      type: "Series",
      releaseOrder: 41,
      chronoOrder: 41,
      saga: "Deep Space Nine",
      status: "released",
      timeline: "2375",
      synopsis:
        "The Dominion War reaches its conclusion while Sisko confronts the final spiritual and military challenges of his mission.",
    },

    // ============================================================
    // VOYAGER
    // ============================================================

    {
      id: "voyager-s1",
      title: "Star Trek: Voyager (Season 1)",
      year: 1995,
      dateLabel: "January 16, 1995",
      type: "Series",
      releaseOrder: 42,
      chronoOrder: 42,
      saga: "Voyager",
      status: "released",
      timeline: "2371",
      synopsis:
        "Captain Kathryn Janeway and Voyager are stranded 70,000 light-years from Earth and begin the journey home.",
    },

    {
      id: "voyager-s2",
      title: "Star Trek: Voyager (Season 2)",
      year: 1995,
      dateLabel: "August 28, 1995",
      type: "Series",
      releaseOrder: 43,
      chronoOrder: 43,
      saga: "Voyager",
      status: "released",
      timeline: "2371–2372",
      synopsis:
        "Voyager continues its journey through the Delta Quadrant while integrating its Starfleet and Maquis crews.",
    },

    {
      id: "voyager-s3",
      title: "Star Trek: Voyager (Season 3)",
      year: 1996,
      dateLabel: "September 4, 1996",
      type: "Series",
      releaseOrder: 44,
      chronoOrder: 44,
      saga: "Voyager",
      status: "released",
      timeline: "2373",
      synopsis:
        "Voyager encounters new alien civilizations and the Borg while continuing its long journey toward Earth.",
    },

    {
      id: "voyager-s4",
      title: "Star Trek: Voyager (Season 4)",
      year: 1997,
      dateLabel: "September 3, 1997",
      type: "Series",
      releaseOrder: 45,
      chronoOrder: 45,
      saga: "Voyager",
      status: "released",
      timeline: "2374",
      synopsis:
        "Seven of Nine joins Voyager after being liberated from the Borg, transforming the crew's journey home.",
    },

    {
      id: "voyager-s5",
      title: "Star Trek: Voyager (Season 5)",
      year: 1998,
      dateLabel: "October 14, 1998",
      type: "Series",
      releaseOrder: 46,
      chronoOrder: 46,
      saga: "Voyager",
      status: "released",
      timeline: "2375",
      synopsis:
        "Voyager continues its journey through increasingly dangerous regions of the Delta Quadrant.",
    },

    {
      id: "voyager-s6",
      title: "Star Trek: Voyager (Season 6)",
      year: 1999,
      dateLabel: "September 22, 1999",
      type: "Series",
      releaseOrder: 47,
      chronoOrder: 47,
      saga: "Voyager",
      status: "released",
      timeline: "2376",
      synopsis:
        "Voyager's crew encounters new threats and civilizations while gradually shortening the distance to Earth.",
    },

    {
      id: "voyager-s7",
      title: "Star Trek: Voyager (Season 7)",
      year: 2000,
      dateLabel: "October 4, 2000",
      type: "Series",
      releaseOrder: 48,
      chronoOrder: 48,
      saga: "Voyager",
      status: "released",
      timeline: "2377–2378",
      synopsis:
        "Voyager makes its final push toward Earth and confronts the Borg in the final stage of its journey.",
    },

    // ============================================================
    // TNG FILMS
    // ============================================================

    {
      id: "generations",
      title: "Star Trek Generations",
      year: 1994,
      dateLabel: "November 18, 1994",
      type: "Film",
      releaseOrder: 49,
      chronoOrder: 49,
      saga: "The Next Generation Films",
      status: "released",
      timeline: "2293 / 2371",
      synopsis:
        "Captain Picard joins forces with Captain Kirk to stop the villain Tolian Soran from destroying entire worlds.",
    },

    {
      id: "first-contact",
      title: "Star Trek: First Contact",
      year: 1996,
      dateLabel: "November 22, 1996",
      type: "Film",
      releaseOrder: 50,
      chronoOrder: 50,
      saga: "The Next Generation Films",
      status: "released",
      timeline: "2373",
      synopsis:
        "The Enterprise travels back to 2063 to stop the Borg from preventing humanity's first contact with an alien civilization.",
    },

    {
      id: "insurrection",
      title: "Star Trek: Insurrection",
      year: 1998,
      dateLabel: "December 11, 1998",
      type: "Film",
      releaseOrder: 51,
      chronoOrder: 51,
      saga: "The Next Generation Films",
      status: "released",
      timeline: "2375",
      synopsis:
        "Picard and the Enterprise crew rebel against a Federation plan to forcibly relocate the peaceful Ba'ku people.",
    },

    {
      id: "nemesis",
      title: "Star Trek: Nemesis",
      year: 2002,
      dateLabel: "December 13, 2002",
      type: "Film",
      releaseOrder: 52,
      chronoOrder: 52,
      saga: "The Next Generation Films",
      status: "released",
      timeline: "2379",
      synopsis:
        "Picard faces Shinzon, a dangerous human clone who has seized control of the Romulan Empire.",
    },

    // ============================================================
    // KELVIN TIMELINE
    // ============================================================

    {
      id: "star-trek-2009",
      title: "Star Trek",
      year: 2009,
      dateLabel: "May 8, 2009",
      type: "Film",
      releaseOrder: 53,
      chronoOrder: 53,
      saga: "Kelvin Timeline",
      status: "released",
      timeline: "2258 — Kelvin Timeline",
      synopsis:
        "A Romulan mining vessel travels into the past, creating an alternate reality in which a new version of Kirk and the Enterprise crew begin their adventures.",
    },

    {
      id: "star-trek-into-darkness",
      title: "Star Trek Into Darkness",
      year: 2013,
      dateLabel: "May 17, 2013",
      type: "Film",
      releaseOrder: 54,
      chronoOrder: 54,
      saga: "Kelvin Timeline",
      status: "released",
      timeline: "2259 — Kelvin Timeline",
      synopsis:
        "Kirk pursues the terrorist John Harrison while uncovering a conspiracy inside Starfleet.",
    },

    {
      id: "star-trek-beyond",
      title: "Star Trek Beyond",
      year: 2016,
      dateLabel: "July 22, 2016",
      type: "Film",
      releaseOrder: 55,
      chronoOrder: 55,
      saga: "Kelvin Timeline",
      status: "released",
      timeline: "2263 — Kelvin Timeline",
      synopsis:
        "The Enterprise is destroyed during a mission beyond Federation space, forcing Kirk and his crew to survive on an unknown planet.",
    },

    // ============================================================
    // LOWER DECKS
    // ============================================================

    {
      id: "lower-decks-s1",
      title: "Star Trek: Lower Decks (Season 1)",
      year: 2020,
      dateLabel: "August 6, 2020",
      type: "Series",
      releaseOrder: 56,
      chronoOrder: 56,
      saga: "Lower Decks",
      status: "released",
      timeline: "2380",
      synopsis:
        "The junior officers of the U.S.S. Cerritos handle the less glamorous duties of Starfleet while becoming involved in increasingly bizarre adventures.",
    },

    {
      id: "lower-decks-s2",
      title: "Star Trek: Lower Decks (Season 2)",
      year: 2021,
      dateLabel: "August 12, 2021",
      type: "Series",
      releaseOrder: 57,
      chronoOrder: 57,
      saga: "Lower Decks",
      status: "released",
      timeline: "2381",
      synopsis:
        "The Cerritos crew continues its missions while Mariner, Boimler, Tendi and Rutherford become increasingly experienced Starfleet officers.",
    },

    {
      id: "lower-decks-s3",
      title: "Star Trek: Lower Decks (Season 3)",
      year: 2022,
      dateLabel: "August 25, 2022",
      type: "Series",
      releaseOrder: 58,
      chronoOrder: 58,
      saga: "Lower Decks",
      status: "released",
      timeline: "2381",
      synopsis:
        "The Cerritos returns from its previous mission and becomes involved in new adventures across the Federation.",
    },

    {
      id: "lower-decks-s4",
      title: "Star Trek: Lower Decks (Season 4)",
      year: 2023,
      dateLabel: "September 7, 2023",
      type: "Series",
      releaseOrder: 59,
      chronoOrder: 59,
      saga: "Lower Decks",
      status: "released",
      timeline: "2381–2382",
      synopsis:
        "The junior officers face new alien threats and increasingly important Starfleet responsibilities.",
    },

    {
      id: "lower-decks-s5",
      title: "Star Trek: Lower Decks (Season 5)",
      year: 2024,
      dateLabel: "October 24, 2024",
      type: "Series",
      releaseOrder: 60,
      chronoOrder: 60,
      saga: "Lower Decks",
      status: "released",
      timeline: "2382",
      synopsis:
        "The Cerritos crew investigates mysterious spatial rifts while confronting threats that could destabilize the Federation.",
    },

    // ============================================================
    // PICARD ERA
    // ============================================================

    {
      id: "picard-s1",
      title: "Star Trek: Picard (Season 1)",
      year: 2020,
      dateLabel: "January 23, 2020",
      type: "Series",
      releaseOrder: 61,
      chronoOrder: 61,
      saga: "Picard Era",
      status: "released",
      timeline: "2399",
      synopsis:
        "Jean-Luc Picard comes out of retirement to investigate the mystery surrounding a young woman connected to the android Data.",
    },

    {
      id: "picard-s2",
      title: "Star Trek: Picard (Season 2)",
      year: 2022,
      dateLabel: "March 3, 2022",
      type: "Series",
      releaseOrder: 62,
      chronoOrder: 62,
      saga: "Picard Era",
      status: "released",
      timeline: "2401 / 2024",
      synopsis:
        "Picard and his allies are transported to an alternate 2024 and must repair the timeline while confronting a new threat.",
    },

    {
      id: "picard-s3",
      title: "Star Trek: Picard (Season 3)",
      year: 2023,
      dateLabel: "February 16, 2023",
      type: "Series",
      releaseOrder: 63,
      chronoOrder: 63,
      saga: "Picard Era",
      status: "released",
      timeline: "2401",
      synopsis:
        "Picard reunites with the crew of the Enterprise-D while facing a new threat connected to his past and the Borg.",
    },

    // ============================================================
    // DISCOVERY — LATE 23RD CENTURY
    // ============================================================

    {
      id: "discovery-s3",
      title: "Star Trek: Discovery (Season 3)",
      year: 2020,
      dateLabel: "October 15, 2020",
      type: "Series",
      releaseOrder: 64,
      chronoOrder: 64,
      saga: "32nd Century",
      status: "released",
      timeline: "3188",
      synopsis:
        "Discovery travels more than 900 years into the future and arrives in a Federation weakened by a catastrophic event known as the Burn.",
    },

    {
      id: "discovery-s4",
      title: "Star Trek: Discovery (Season 4)",
      year: 2021,
      dateLabel: "November 18, 2021",
      type: "Series",
      releaseOrder: 65,
      chronoOrder: 65,
      saga: "32nd Century",
      status: "released",
      timeline: "3190",
      synopsis:
        "Burnham and the restored Federation face a gravitational anomaly while working with new civilizations in the 32nd century.",
    },

    {
      id: "discovery-s5",
      title: "Star Trek: Discovery (Season 5)",
      year: 2024,
      dateLabel: "April 4, 2024",
      type: "Series",
      releaseOrder: 66,
      chronoOrder: 66,
      saga: "32nd Century",
      status: "released",
      timeline: "3191",
      synopsis:
        "Discovery races against rivals to uncover an ancient technology connected to the Progenitors and a mystery spanning Federation history.",
    },

    // ============================================================
    // PRODIGY
    // ============================================================

    {
      id: "prodigy-s1",
      title: "Star Trek: Prodigy (Season 1)",
      year: 2021,
      dateLabel: "October 28, 2021",
      type: "Series",
      releaseOrder: 67,
      chronoOrder: 67,
      saga: "Starfleet Academy",
      status: "released",
      timeline: "2383–2384",
      synopsis:
        "A group of alien teenagers discovers an abandoned Starfleet vessel and learns the principles of Starfleet under the guidance of a holographic Janeway.",
    },

    {
      id: "prodigy-s2",
      title: "Star Trek: Prodigy (Season 2)",
      year: 2024,
      dateLabel: "July 1, 2024",
      type: "Series",
      releaseOrder: 68,
      chronoOrder: 68,
      saga: "Starfleet Academy",
      status: "released",
      timeline: "2384",
      synopsis:
        "The young crew continues its journey toward Starfleet while attempting to rescue Chakotay and repair the damage to the timeline.",
    },

    // ============================================================
    // VERY SHORT TREKS
    // ============================================================

    {
      id: "very-short-treks-fabrication",
      title: "Very Short Treks — Skin a Cat",
      year: 2023,
      dateLabel: "September 8, 2023",
      type: "Special",
      releaseOrder: 69,
      chronoOrder: 69,
      saga: "Short Treks",
      status: "released",
      timeline: "Animated / comedic continuity",
      synopsis:
        "An animated comedic Special featuring the Enterprise crew in an absurd adventure.",
    },

    {
      id: "very-short-treks-holograms",
      title: "Very Short Treks — Holiday",
      year: 2023,
      dateLabel: "October 5, 2023",
      type: "Special",
      releaseOrder: 70,
      chronoOrder: 70,
      saga: "Short Treks",
      status: "released",
      timeline: "Animated / comedic continuity",
      synopsis:
        "A Special animated Star Trek comedy featuring the familiar characters of the franchise.",
    },

    {
      id: "very-short-treks-passion",
      title: "Very Short Treks — Worst Contact",
      year: 2023,
      dateLabel: "October 12, 2023",
      type: "Special",
      releaseOrder: 71,
      chronoOrder: 71,
      saga: "Short Treks",
      status: "released",
      timeline: "Animated / comedic continuity",
      synopsis:
        "The Enterprise crew encounters a bizarre alien situation in a deliberately exaggerated animated adventure.",
    },

    {
      id: "very-short-treks-escape",
      title: "Very Short Treks — Room for Growth",
      year: 2023,
      dateLabel: "October 19, 2023",
      type: "Special",
      releaseOrder: 72,
      chronoOrder: 72,
      saga: "Short Treks",
      status: "released",
      timeline: "Animated / comedic continuity",
      synopsis:
        "The crew encounters an unusual problem aboard the Enterprise in another comedic animated Special.",
    },

    {
      id: "very-short-treks-historic",
      title: "Very Short Treks — One Night in Sickbay",
      year: 2023,
      dateLabel: "October 26, 2023",
      type: "Special",
      releaseOrder: 73,
      chronoOrder: 73,
      saga: "Short Treks",
      status: "released",
      timeline: "Animated / comedic continuity",
      synopsis:
        "A comedic animated Star Trek Special focusing on the chaos surrounding the Enterprise crew.",
    },

    // ============================================================
    // SECTION 31
    // ============================================================

    {
      id: "section-31",
      title: "Star Trek: Section 31",
      year: 2025,
      dateLabel: "January 24, 2025",
      type: "Film",
      releaseOrder: 74,
      chronoOrder: 74,
      saga: "Discovery Era",
      status: "released",
      timeline: "23rd century",
      synopsis:
        "Emperor Philippa Georgiou joins a secret Section 31 division tasked with protecting the Federation while confronting the sins of her past.",
    },

    // ============================================================
    // STRANGE NEW WORLDS — LATER SEASONS
    // ============================================================

    {
      id: "strange-new-worlds-s3",
      title: "Star Trek: Strange New Worlds (Season 3)",
      year: 2025,
      dateLabel: "July 17, 2025",
      type: "Series",
      releaseOrder: 75,
      chronoOrder: 75,
      saga: "Strange New Worlds",
      status: "released",
      timeline: "2260",
      synopsis:
        "Pike and the Enterprise crew continue their five-year mission while confronting new civilizations, personal challenges and increasingly dangerous threats.",
    },

    {
      id: "strange-new-worlds-s4",
      title: "Star Trek: Strange New Worlds (Season 4)",
      year: 2026,
      dateLabel: "July 23, 2026",
      type: "Series",
      releaseOrder: 76,
      chronoOrder: 76,
      saga: "Strange New Worlds",
      status: "released",
      timeline: "2260–2261",
      synopsis:
        "The Enterprise crew continues exploring the galaxy while facing new threats and genre-bending adventures in the final stages of the Pike era.",
    },

    // ============================================================
    // STARFLEET ACADEMY
    // ============================================================

    {
      id: "starfleet-academy-s1",
      title: "Star Trek: Starfleet Academy (Season 1)",
      year: 2026,
      dateLabel: "January 15, 2026",
      type: "Series",
      releaseOrder: 77,
      chronoOrder: 77,
      saga: "Starfleet Academy",
      status: "released",
      timeline: "32nd century",
      synopsis:
        "A new generation of cadets enters Starfleet Academy and faces friendships, rivalries, romance and a threat to the Federation.",
    },

    {
      id: "starfleet-academy-s2",
      title: "Star Trek: Starfleet Academy (Season 2)",
      year: 2027,
      dateLabel: "2027",
      type: "Series",
      releaseOrder: 78,
      chronoOrder: 78,
      saga: "Starfleet Academy",
      status: "upcoming",
      timeline: "32nd century",
      synopsis:
        "The young cadets continue their education and adventures at Starfleet Academy in the 32nd century.",
    },

    // ============================================================
    // STRANGE NEW WORLDS FINAL SEASON
    // ============================================================

    {
      id: "strange-new-worlds-s5",
      title: "Star Trek: Strange New Worlds (Season 5)",
      year: 2027,
      dateLabel: "2027",
      type: "Series",
      releaseOrder: 79,
      chronoOrder: 79,
      saga: "Strange New Worlds",
      status: "upcoming",
      timeline: "2260s",
      synopsis:
        "The final season of Captain Pike's Enterprise continues the crew's five-year mission before the events of The Original Series.",
    },

    // ============================================================
    // UPCOMING THEATRICAL STAR TREK
    // ============================================================

    {
      id: "untitled-star-trek-toby-haynes",
      title: "Untitled Star Trek Film",
      year: 2027,
      dateLabel: "In development",
      type: "Film",
      releaseOrder: 80,
      chronoOrder: 80,
      saga: "Enterprise Era",
      status: "upcoming",
      timeline: "Before the Original Series",
      synopsis:
        "An announced Star Trek theatrical project from director Toby Haynes exploring an earlier chapter of humanity's first encounters with extraterrestrial life.",
    },
  ],
};
