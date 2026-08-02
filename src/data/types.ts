export type EntryType = "Film" | "Series" | "Special";
export type EntryStatus = "released" | "upcoming";

export interface Entry {
  id: string;
  title: string;

  series?: string;
  season?: number;
  episode?: number;

  year: number;
  /** Human-readable release date, used only for display */
  dateLabel: string;
  type: "Film" | "Series" | "Episode" | "Special" | "Web";
  /** 1-indexed position in real-world release order */
  releaseOrder: number;
  /** 1-indexed position in in-universe chronological order (community-consensus, approximate) */
  chronoOrder: number;
  /** Saga / Phase / Era grouping label */
  saga: string;

  era?: "pre-crisis" | "crisis" | "post-crisis";

  synopsis: string;
  status: EntryStatus;
  /** Optional short badge, e.g. "Directed by Taika Waititi" or a franchise-specific note */
  note?: string;
  timeline?: string;

  optional?: boolean;
  crossover?: string;
}

export interface Franchise {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Hex accent color, used sparingly */
  accent: string;
  /** Whether chronological order is officially confirmed vs fan/community consensus */
  chronoIsOfficial: boolean;
  sagas: string[];
  entries: Entry[];
  icon?: string;
}
