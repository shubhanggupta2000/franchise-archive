import type { Franchise } from "./types";

export const narnia: Franchise = {
  id: "narnia",
  name: "The Chronicles of Narnia",
  shortName: "Narnia",
  tagline: "A world beyond the wardrobe.",
  description:
    "C. S. Lewis' beloved fantasy world where children from Earth journey into the magical kingdom of Narnia.",
  accent: "#4FC3F7",
  chronoIsOfficial: true,
  sagas: ["The Chronicles of Narnia"],
  entries: [
    {
      id: "lww",
      title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      year: 2005,
      dateLabel: "December 9, 2005",
      type: "Film",
      releaseOrder: 1,
      chronoOrder: 2,
      saga: "The Chronicles of Narnia",
      status: "released",
      note: "Produced by Walden Media and Walt Disney Pictures.",
      synopsis:
        "Four siblings evacuated during World War II discover a wardrobe leading to Narnia, where they help Aslan free the land from the White Witch's eternal winter.",
    },
    {
      id: "prince-caspian",
      title: "The Chronicles of Narnia: Prince Caspian",
      year: 2008,
      dateLabel: "May 16, 2008",
      type: "Film",
      releaseOrder: 2,
      chronoOrder: 3,
      saga: "The Chronicles of Narnia",
      status: "released",
      timeline: "1,300 Narnian years after the first film",
      synopsis:
        "The Pevensie children return to a Narnia ruled by the tyrannical Telmarines and help the rightful heir, Prince Caspian, reclaim his throne.",
    },
    {
      id: "dawn-treader",
      title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
      year: 2010,
      dateLabel: "December 10, 2010",
      type: "Film",
      releaseOrder: 3,
      chronoOrder: 4,
      saga: "The Chronicles of Narnia",
      status: "released",
      note: "Produced independently by Walden Media and 20th Century Fox after Disney exited the franchise.",
      synopsis:
        "Edmund, Lucy and their cousin Eustace sail with King Caspian aboard the Dawn Treader on a voyage to the edge of the world.",
    },
    {
      id: "magicians-nephew",
      title: "Narnia: The Magician's Nephew",
      year: 2027,
      dateLabel: "February 12, 2027 (theatrical); April 2, 2027 (Netflix)",
      type: "Film",
      releaseOrder: 4,
      chronoOrder: 1,
      saga: "The Chronicles of Narnia",
      status: "upcoming",
      note: "Written and directed by Greta Gerwig for Netflix; an origin story adapting the first book in reading order, with a cast including Daniel Craig and Meryl Streep.",
      synopsis:
        "A boy and girl in Victorian London are tricked into another world by a magician, stumbling into the creation of Narnia itself.",
    },
  ],
};
