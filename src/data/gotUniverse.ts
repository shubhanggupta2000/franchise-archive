import type { Franchise } from "./types";

export const gotUniverse: Franchise = {
  id: "gotUniverse",
  name: "A Song of Ice and Fire Universe",
  shortName: "Game of Thrones",
  tagline: "When you play the game of thrones, you win or you die. There is no middle ground.",
  description:
    "George R. R. Martin's epic fantasy universe spanning nearly two centuries of Westerosi history, from the height of House Targaryen to the War of the Five Kings and beyond.",
  accent: "#8B1E24",
  chronoIsOfficial: true,
  sagas: ["Age of Valyria", "Targaryen Era", "War of the Five Kings"],
  entries: [
    { id:"hotd-s1", title:"House of the Dragon (Season 1)", year:2022, dateLabel:"August 21, 2022", type:"Series", releaseOrder:1, chronoOrder:1, saga:"Targaryen Era", status:"released", timeline:"129–130 AC", synopsis:"King Viserys I's decision regarding succession ignites the conflict that becomes known as the Dance of the Dragons." },
    { id:"hotd-s2", title:"House of the Dragon (Season 2)", year:2024, dateLabel:"June 16, 2024", type:"Series", releaseOrder:2, chronoOrder:2, saga:"Targaryen Era", status:"released", timeline:"130 AC", synopsis:"Civil war erupts between the Blacks and the Greens as House Targaryen tears itself apart." },
    { id:"hotd-s3", title:"House of the Dragon (Season 3)", year:2026, dateLabel:"June 21, 2026", type:"Series", releaseOrder:4, chronoOrder:3, saga:"Targaryen Era", status:"released", timeline:"132 AC", note: "Season finale airs August 9, 2026", synopsis:"The Dance of the Dragons escalates into full-scale war as Rhaenyra Targaryen and Aegon II battle for the Iron Throne. Major conflicts including the Battle of the Gullet and the campaign toward Tumbleton reshape the balance of power, while alliances fracture and both sides suffer devastating losses." },
    { id:"knight-seven-kingdoms", title:"A Knight of the Seven Kingdoms (Season 1)", year:2026, dateLabel:"January 18, 2026", type:"Series", releaseOrder:3, chronoOrder:3, saga:"Targaryen Era", status:"released", timeline:"209 AC", synopsis:"Ser Duncan the Tall and his young squire Egg travel Westeros nearly ninety years before Game of Thrones." },
    { id:"got-s1", title:"Game of Thrones (Season 1)", year:2011, dateLabel:"April 17, 2011", type:"Series", releaseOrder:4, chronoOrder:4, saga:"War of the Five Kings", status:"released", timeline:"298 AC", synopsis:"The death of Jon Arryn draws the noble houses of Westeros into a struggle for the Iron Throne." },
    { id:"got-s2", title:"Game of Thrones (Season 2)", year:2012, dateLabel:"April 1, 2012", type:"Series", releaseOrder:5, chronoOrder:5, saga:"War of the Five Kings", status:"released", timeline:"299 AC", synopsis:"The War of the Five Kings engulfs Westeros while Daenerys searches for allies across the Narrow Sea." },
    { id:"got-s3", title:"Game of Thrones (Season 3)", year:2013, dateLabel:"March 31, 2013", type:"Series", releaseOrder:6, chronoOrder:6, saga:"War of the Five Kings", status:"released", timeline:"299 AC", synopsis:"The balance of power shifts dramatically as betrayal and vengeance reshape the Seven Kingdoms." },
    { id:"got-s4", title:"Game of Thrones (Season 4)", year:2014, dateLabel:"April 6, 2014", type:"Series", releaseOrder:7, chronoOrder:7, saga:"War of the Five Kings", status:"released", timeline:"300 AC", synopsis:"The War of the Five Kings reaches its bloody climax while threats gather beyond the Wall." },
    { id:"got-s5", title:"Game of Thrones (Season 5)", year:2015, dateLabel:"April 12, 2015", type:"Series", releaseOrder:8, chronoOrder:8, saga:"War of the Five Kings", status:"released", timeline:"300 AC", synopsis:"Cersei loses her grip on King's Landing while Jon Snow attempts to unite enemies against the White Walkers." },
    { id:"got-s6", title:"Game of Thrones (Season 6)", year:2016, dateLabel:"April 24, 2016", type:"Series", releaseOrder:9, chronoOrder:9, saga:"War of the Five Kings", status:"released", timeline:"300–301 AC", synopsis:"Long-hidden truths emerge as Daenerys prepares to sail for Westeros and Jon Snow rises once again." },
    { id:"got-s7", title:"Game of Thrones (Season 7)", year:2017, dateLabel:"July 16, 2017", type:"Series", releaseOrder:10, chronoOrder:10, saga:"War of the Five Kings", status:"released", timeline:"301 AC", synopsis:"Daenerys arrives in Westeros while the living prepare for the coming war against the Night King." },
    { id:"got-s8", title:"Game of Thrones (Season 8)", year:2019, dateLabel:"April 14, 2019", type:"Series", releaseOrder:11, chronoOrder:11, saga:"War of the Five Kings", status:"released", timeline:"301 AC", synopsis:"The fate of Westeros is decided in the final battles against the Night King and for the Iron Throne." }
  ],
  extras: [
    { id:"got-s1-history", title:"Histories & Lore", type:"History & Lore", official:true, note:"Animated lore narrated by characters from the series." }
  ]
};
