import { useState } from "react";
import type { Entry } from "../data/types";
import EntryCard from "./EntryCard";
import SeriesEpisodeCard, { type SeriesEpisode } from "./SeriesEpisodeCard";

interface Props {
  entry: Entry;
  accent: string;
  displayOrder: number;
  episodes: SeriesEpisode[];
  franchiseId?: string;
}

export default function SeriesSeasonCard({
  entry,
  accent,
  displayOrder,
  episodes,
  franchiseId,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <EntryCard
        entry={entry}
        accent={accent}
        displayOrder={displayOrder}
        onClick={episodes.length ? () => setExpanded((open) => !open) : undefined}
        expanded={expanded}
        franchiseId={franchiseId}
      />

      {expanded && episodes.length > 0 && (
        <ol className="ml-8 mt-3 flex flex-col gap-3 border-l-2 border-paper/20 pl-4">
          {episodes.map((episode) => (
            <li key={episode.id}>
              <SeriesEpisodeCard
                episode={{ ...episode, franchiseId }}
              />
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}
