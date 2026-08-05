export type EntryType = "Film" | "Series" | "Special";
export type EntryStatus = "released" | "upcoming";

export interface Entry {
  id: string;
  title: string;
  type: "Film" | "Series" | "Episode" | "Special" | "Web";
  series?: string;
  season?: number;
  episode?: number;
  year: number;
  dateLabel: string; // Human-readable release date, used only for display
  releaseOrder: number; // 1-indexed position in real-world release order
  chronoOrder: number; // 1-indexed position in in-universe chronological order (community-consensus, approximate)
  saga: string; // Saga / Phase / Era grouping label
  era?: "pre-crisis" | "crisis" | "post-crisis";
  synopsis: string;
  status: EntryStatus;
  note?: string; // Optional short badge, e.g. "Directed by Taika Waititi" or a franchise-specific note
  timeline?: string;
  optional?: boolean;
  crossover?: string;
  canon?: "main" | "optional";
  extras?: Extra[];
}

interface Extra {
  id: string;
  title: string;
  type: "History & Lore" | "Behind the Scenes" | "Featurette";
  official: boolean;
  releaseDate?: string;
  note?: string;
}

export interface Franchise {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  accent: string; // Hex accent color, used sparingly
  chronoIsOfficial: boolean; // Whether chronological order is officially confirmed vs fan/community consensus
  sagas: string[];
  entries: Entry[];
  extras?: Extra[];
  icon?: string;
}
