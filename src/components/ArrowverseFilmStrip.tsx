import type { Entry, Franchise } from "../data/types";
import {
  arrowverseChronology,
  type ArrowverseEpisode,
} from "../data/arrowverseEpisodes";
import ArrowverseChronology from "./ArrowverseChronology";
import type { OrderMode } from "./OrderToggle";
import SeriesSeasonCard from "./SeriesSeasonCard";

interface Props {
  franchise: Franchise;
  mode: OrderMode;
}

function getAdditionalSeries(franchise: Franchise): Entry[] {
  const sourceShows = new Set(
    arrowverseChronology.map((episode) => episode.show),
  );

  return franchise.entries.filter(
    (entry) =>
      entry.type === "Series" &&
      !sourceShows.has(entry.title) &&
      !sourceShows.has(entry.title.replace(/^DC's /, "")),
  );
}

function getReleaseSeasons(franchise: Franchise) {
  const seasonGroups = new Map<string, ArrowverseEpisode[]>();

  for (const episode of arrowverseChronology) {
    const key = `${episode.show}:${episode.season}`;
    seasonGroups.set(key, [...(seasonGroups.get(key) ?? []), episode]);
  }

  const seasons = [...seasonGroups.values()].map((episodes) => {
    const firstEpisode = episodes[0];
    const seriesEntry = franchise.entries.find(
      (entry) =>
        entry.title === firstEpisode.show ||
        entry.title === `DC's ${firstEpisode.show}`,
    );

    return {
      releaseDate: firstEpisode.releaseDate,
      episodes,
      entry: {
        id: `arrowverse-${firstEpisode.show
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}-s${firstEpisode.season}`,
        title: `${firstEpisode.show}: Season ${firstEpisode.season}`,
        series: firstEpisode.show,
        season: firstEpisode.season,
        year: firstEpisode.year,
        dateLabel: firstEpisode.dateLabel,
        type: "Series" as const,
        releaseOrder: 0,
        chronoOrder: 0,
        saga: seriesEntry?.saga ?? "Expansion",
        status: "released" as const,
        synopsis:
          seriesEntry?.synopsis ??
          `${firstEpisode.show} season ${firstEpisode.season}.`,
        note: `${episodes.length} episodes are listed in story order.`,
      },
    };
  });

  const additionalSeries = getAdditionalSeries(franchise).map((entry) => ({
    releaseDate: `${entry.year}-12-31`,
    episodes: [] as ArrowverseEpisode[],
    entry,
  }));

  return [...seasons, ...additionalSeries]
    .sort((a, b) => a.releaseDate.localeCompare(b.releaseDate))
    .map((item, index) => ({
      ...item,
      entry: { ...item.entry, releaseOrder: index + 1 },
    }));
}

export default function ArrowverseFilmStrip({ franchise, mode }: Props) {
  if (mode === "chrono") {
    return (
      <ArrowverseChronology
        episodes={arrowverseChronology}
        additionalSeries={getAdditionalSeries(franchise)}
        accent={franchise.accent}
      />
    );
  }

  const seasons = getReleaseSeasons(franchise);

  return (
    <div className="film-rail relative pl-6 sm:pl-10">
      <ol className="flex flex-col gap-5">
        {seasons.map((season, index) => (
          <SeriesSeasonCard
            key={season.entry.id}
            entry={season.entry}
            accent={franchise.accent}
            displayOrder={index + 1}
            episodes={season.episodes}
            franchiseId={franchise.id}
          />
        ))}
      </ol>
    </div>
  );
}
