import { useState } from "react";
import type { Entry, Franchise } from "../data/types";
import ArrowverseChronology from "./ArrowverseChronology";
import EntryCard from "./EntryCard";
import type { OrderMode } from "./OrderToggle";

interface Props {
  franchise: Franchise;
  mode: OrderMode;
}

function ExpandableSeasonEntry({
  entry,
  entries,
  accent,
  displayOrder,
}: {
  entry: Entry;
  entries: Entry[];
  accent: string;
  displayOrder: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const episodes = entries
    .filter(
      (item) =>
        item.type === "Episode" &&
        item.series === entry.series &&
        item.season === entry.season &&
        (item.episode ?? 0) >= (entry.episodeFrom ?? 1) &&
        (entry.episodeTo === undefined ||
          (item.episode ?? 0) <= entry.episodeTo),
    )
    .sort((a, b) => (a.episode ?? 0) - (b.episode ?? 0));

  return (
    <li>
      <EntryCard
        entry={entry}
        accent={accent}
        displayOrder={displayOrder}
        onClick={
          episodes.length ? () => setExpanded((open) => !open) : undefined
        }
        expanded={expanded}
      />

      {expanded && episodes.length > 0 && (
        <ol className="ml-8 mt-3 border-l-2 border-paper/20 pl-4">
          {episodes.map((episode) => (
            <li key={episode.id} className="flex gap-4 py-3">
              <span className="font-mono text-paper/50">{episode.episode}</span>
              <div>
                <p className="font-display text-lg uppercase">
                  {episode.title}
                </p>
                <p className="font-mono text-xs text-paper/50">
                  {episode.dateLabel}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function collapseAgentsOfShieldReleaseSeasons(
  entries: Entry[],
  allEntries: Entry[],
): Entry[] {
  const seenSeasons = new Set<number>();

  return [...entries]
    .sort((a, b) => a.releaseOrder - b.releaseOrder)
    .filter((entry) => {
      if (
        entry.series !== "Agents of S.H.I.E.L.D." ||
        entry.season === undefined
      ) {
        return true;
      }

      if (seenSeasons.has(entry.season)) return false;
      seenSeasons.add(entry.season);
      return true;
    })
    .map((entry) => {
      if (
        entry.series !== "Agents of S.H.I.E.L.D." ||
        entry.season === undefined
      ) {
        return entry;
      }

      const episodeCount = allEntries.filter(
        (item) =>
          item.type === "Episode" &&
          item.series === entry.series &&
          item.season === entry.season,
      ).length;

      return {
        ...entry,
        id: `mcu-agents-of-shield-s${entry.season}-release`,
        title: `Agents of S.H.I.E.L.D.: Season ${entry.season}`,
        episodeFrom: undefined,
        episodeTo: undefined,
        synopsis: `Full season of Agents of S.H.I.E.L.D. Select to view all ${episodeCount} episodes.`,
      };
    });
}

export default function FilmStrip({ franchise, mode }: Props) {
  if (mode === "chrono" && franchise.id === "arrowverse") {
    return <ArrowverseChronology />;
  }
  if (mode === "chrono" && franchise.id === "xmen") {
    const timelines = [
      {
        name: "Timeline A — Original Future",
        entries: [
          "xm-first-class",
          "xm-days-future-past",
          "xm-origins-wolverine",
          "xm-1",
          "xm-2",
          "xm-3",
          "xm-wolverine",
        ],
      },

      {
        name: "Timeline B — Revised Future",
        entries: [
          "xm-first-class",
          "xm-days-future-past",
          "xm-apocalypse",
          "xm-dark-phoenix",
          "xm-new-mutants",
          "xm-deadpool-1",
          "xm-deadpool-2",
          "xm-logan",
        ],
      },

      {
        name: "Marvel Multiverse",
        entries: ["xm-deadpool-wolverine"],
      },
    ];

    return (
      <div className="flex flex-col gap-10">
        {timelines.map((timeline) => {
          const entries = timeline.entries
            .map((id) => franchise.entries.find((entry) => entry.id === id))
            .filter(Boolean);

          return (
            <div key={timeline.name}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="font-display text-lg tracking-[0.15em] text-gold-bright uppercase sm:text-xl">
                  {timeline.name}
                </h3>

                <div className="h-px flex-1 bg-paper/15" aria-hidden="true" />
              </div>

              <div className="relative">
                <ol className="flex flex-col gap-5">
                  {entries.map((entry, index) => {
                    if (!entry) return null;

                    return (
                      <li key={entry.id}>
                        <EntryCard
                          entry={entry}
                          accent={franchise.accent}
                          displayOrder={index + 1}
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (mode === "chrono") {
    const sorted = franchise.entries
      .filter((entry) => entry.type !== "Episode")
      .sort((a, b) => a.chronoOrder - b.chronoOrder);

    return (
      <div className="film-rail relative pl-6 sm:pl-10">
        <ol className="flex flex-col gap-5">
          {sorted.map((entry, i) => (
            <ExpandableSeasonEntry
              key={entry.id}
              entry={entry}
              entries={franchise.entries}
              accent={franchise.accent}
              displayOrder={i + 1}
            />
          ))}
        </ol>
      </div>
    );
  }

  const bySaga = franchise.sagas.map((saga) => ({
    saga,
    entries: collapseAgentsOfShieldReleaseSeasons(
      franchise.entries
        .filter((entry) => entry.saga === saga && entry.type !== "Episode")
        .sort((a, b) => a.releaseOrder - b.releaseOrder),
      franchise.entries,
    ),
  }));

  return (
    <div className="flex flex-col gap-8">
      {bySaga
        .filter((group) => group.entries.length > 0)
        .map((group) => (
          <div key={group.saga}>
            <div className="mb-3 flex items-center gap-3">
              <h3 className="font-display text-lg tracking-[0.15em] text-gold-bright uppercase sm:text-xl">
                {group.saga}
              </h3>
              <div className="h-px flex-1 bg-paper/15" aria-hidden="true" />
              <span className="font-mono text-[11px] text-paper/45">
                {group.entries.length}{" "}
                {group.entries.length === 1 ? "entry" : "entries"}
              </span>
            </div>
            <div className="film-rail relative pl-6 sm:pl-10">
              <ol className="flex flex-col gap-5">
                {group.entries.map((entry) => (
                  <ExpandableSeasonEntry
                    key={entry.id}
                    entry={entry}
                    entries={franchise.entries}
                    accent={franchise.accent}
                    displayOrder={entry.releaseOrder}
                  />
                ))}
              </ol>
            </div>
          </div>
        ))}
    </div>
  );
}
