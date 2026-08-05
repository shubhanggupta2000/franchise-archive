import type { Franchise } from "./types";

export const conjuringUniverse: Franchise = {
  id: "conjuringUniverse",
  name: "The Conjuring Universe",
  shortName: "Conjuring",
  tagline:
    "Based on the case files of Ed and Lorraine Warren. Every case has a beginning.",
  description:
    "An interconnected supernatural horror universe built around paranormal investigators Ed and Lorraine Warren and the entities they encountered.",
  accent: "#5D4037",
  chronoIsOfficial: true,
  sagas: ["Conjuring", "Annabelle", "The Nun"],
  entries: [
    { id:"conjuring-1", title:"The Conjuring", year:2013, dateLabel:"July 19, 2013", type:"Film", releaseOrder:1, chronoOrder:5, saga:"Conjuring", status:"released", timeline:"1971", synopsis:"Ed and Lorraine Warren investigate the haunting of the Perron family, introducing the central paranormal investigators of the franchise." },
    { id:"annabelle", title:"Annabelle", year:2014, dateLabel:"October 3, 2014", type:"Film", releaseOrder:2, chronoOrder:4, saga:"Annabelle", status:"released", timeline:"1967", synopsis:"A possessed doll begins a trail of supernatural terror years before it reaches the Warrens' artifact room." },
    { id:"conjuring-2", title:"The Conjuring 2", year:2016, dateLabel:"June 10, 2016", type:"Film", releaseOrder:3, chronoOrder:8, saga:"Conjuring", status:"released", timeline:"1977", synopsis:"The Warrens travel to England to investigate the infamous Enfield haunting while confronting the demon Valak." },
    { id:"annabelle-creation", title:"Annabelle: Creation", year:2017, dateLabel:"August 11, 2017", type:"Film", releaseOrder:4, chronoOrder:2, saga:"Annabelle", status:"released", timeline:"1955", synopsis:"The origin story of the cursed Annabelle doll begins decades before the events of the first Annabelle." },
    { id:"nun", title:"The Nun", year:2018, dateLabel:"September 7, 2018", type:"Film", releaseOrder:5, chronoOrder:1, saga:"The Nun", status:"released", timeline:"1952", synopsis:"A priest and a novice investigate the mysterious death of a nun in Romania, encountering the demon Valak for the first time." },
    { id:"la-llorona", title:"The Curse of La Llorona", year:2019, dateLabel:"April 19, 2019", type:"Film", releaseOrder:6, chronoOrder:7, saga:"Conjuring", status:"released", timeline:"1973", optional:true, canon:"optional", note:"Loosely connected to the wider Conjuring Universe through Father Perez.", synopsis:"A grieving mother battles the legendary spirit La Llorona with help from Father Perez, previously seen in Annabelle." },
    { id:"annabelle-comes-home", title:"Annabelle Comes Home", year:2019, dateLabel:"June 26, 2019", type:"Film", releaseOrder:7, chronoOrder:6, saga:"Annabelle", status:"released", timeline:"1972", synopsis:"The Warrens' artifact room unleashes its evil after Annabelle awakens the cursed objects stored within." },
    { id:"conjuring-3", title:"The Conjuring: The Devil Made Me Do It", year:2021, dateLabel:"June 4, 2021", type:"Film", releaseOrder:8, chronoOrder:9, saga:"Conjuring", status:"released", timeline:"1981", synopsis:"The Warrens investigate the first U.S. murder trial in which demonic possession is used as a legal defense." },
    { id:"nun-2", title:"The Nun II", year:2023, dateLabel:"September 8, 2023", type:"Film", releaseOrder:9, chronoOrder:3, saga:"The Nun", status:"released", timeline:"1956", synopsis:"Sister Irene once again confronts Valak as the demon's influence spreads across Europe." },
    { id:"conjuring-last-rites", title:"The Conjuring: Last Rites", year:2025, dateLabel:"September 5, 2025", type:"Film", releaseOrder:10, chronoOrder:10, saga:"Conjuring", status:"released", timeline:"1986", note:"Final film centered on Ed and Lorraine Warren.", synopsis:"Ed and Lorraine Warren investigate one final supernatural case, bringing the main Conjuring saga to its conclusion." }
  ]
};
