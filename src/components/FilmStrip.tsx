import { lazy, Suspense } from "react";
import type { Entry, Franchise } from "../data/types";
import EntryCard from "./EntryCard";
import type { OrderMode } from "./OrderToggle";
import SeriesSeasonCard from "./SeriesSeasonCard";
import type { SeriesEpisode } from "./SeriesEpisodeCard";

const ArrowverseFilmStrip = lazy(() => import("./ArrowverseFilmStrip"));

interface Props {
  franchise: Franchise;
  mode: OrderMode;
}

function getSeriesEpisodes(
  entry: Entry,
  entries: Entry[],
): SeriesEpisode[] {
  if (!entry.series || entry.season === undefined) return [];

  return entries
    .filter(
      (item) =>
        item.type === "Episode" &&
        item.series === entry.series &&
        item.season === entry.season &&
        (item.episode ?? 0) >= (entry.episodeFrom ?? 1) &&
        (entry.episodeTo === undefined ||
          (item.episode ?? 0) <= entry.episodeTo),
    )
    .sort((a, b) => (a.episode ?? 0) - (b.episode ?? 0))
    .map((episode) => ({
      id: episode.id,
      show: episode.series ?? entry.series ?? "",
      season: episode.season ?? entry.season ?? 0,
      episode: episode.episode ?? 0,
      title: episode.title,
      year: episode.year,
      dateLabel: episode.dateLabel,
      crossover: episode.crossover,
    }));
}

function collapseSplitSeasons(entries: Entry[]): Entry[] {
  const groups = new Map<string, Entry[]>();
  for (const entry of entries) {
    if (!entry.series || entry.season === undefined) continue;
    const key = `${entry.series}:${entry.season}`;
    groups.set(key, [...(groups.get(key) ?? []), entry]);
  }

  const seen = new Set<string>();
  return entries.flatMap((entry) => {
    if (!entry.series || entry.season === undefined) return [entry];

    const key = `${entry.series}:${entry.season}`;
    if (seen.has(key)) return [];
    seen.add(key);

    const group = groups.get(key) ?? [entry];
    const merged = group.length > 1;
    const synopsis = [...new Set(group.map((item) => item.synopsis))].join(" ");
    const notes = [
      ...new Set(
        group
          .map((item) => item.note)
          .filter((note): note is string => Boolean(note)),
      ),
    ];

    return [
      {
        ...entry,
        id: merged ? `${entry.series}-s${entry.season}-release` : entry.id,
        title: `${entry.series}: Season ${entry.season}`,
        dateLabel:
          group.length > 1
            ? `${group[0].dateLabel} · full season`
            : entry.dateLabel,
        synopsis,
        note: merged
          ? [
              ...notes,
              "Season shown as a whole in release order; its story-order segments remain in place.",
            ].join(" ")
          : entry.note,
        episodeFrom: merged ? undefined : entry.episodeFrom,
        episodeTo: merged ? undefined : entry.episodeTo,
      },
    ];
  });
}

export default function FilmStrip({ franchise, mode }: Props) {
  if (franchise.id === "arrowverse") {
    return (
      <Suspense
        fallback={
          <p className="font-mono text-xs text-paper/50">
            Loading series chronology…
          </p>
        }
      >
        <ArrowverseFilmStrip franchise={franchise} mode={mode} />
      </Suspense>
    );
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
                          franchiseId={franchise.id}
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
            <SeriesSeasonCard
              key={entry.id}
              entry={entry}
              accent={franchise.accent}
              displayOrder={i + 1}
              episodes={getSeriesEpisodes(entry, franchise.entries)}
              franchiseId={franchise.id}
            />
          ))}
        </ol>
      </div>
    );
  }

  const releaseOrder = collapseSplitSeasons(
    franchise.entries
      .filter((entry) => entry.type !== "Episode")
      .sort((a, b) => a.releaseOrder - b.releaseOrder),
  );

  return (
    <div className="film-rail relative pl-6 sm:pl-10">
      <ol className="flex flex-col gap-5">
        {releaseOrder.map((entry, index) => (
          <SeriesSeasonCard
            key={entry.id}
            entry={entry}
            accent={franchise.accent}
            displayOrder={index + 1}
            episodes={getSeriesEpisodes(entry, franchise.entries)}
            franchiseId={franchise.id}
          />
        ))}
      </ol>
    </div>
  );
}
