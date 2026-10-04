import type { ArrowverseEpisode } from "../data/arrowverseEpisodes";
import type { Entry } from "../data/types";
import EntryCard from "./EntryCard";
import SeriesEpisodeCard from "./SeriesEpisodeCard";

interface Props {
  episodes: ArrowverseEpisode[];
  additionalSeries: Entry[];
  accent: string;
}

const eraSections = [
  {
    id: "pre-crisis",
    number: "01",
    title: "Pre-Crisis",
    subtitle:
      "The original Arrowverse multiverse, before the events of Crisis on Infinite Earths.",
  },
  {
    id: "crisis",
    number: "02",
    title: "Crisis on Infinite Earths",
    subtitle:
      "The multiverse collapses and the surviving heroes fight to create a new reality.",
  },
  {
    id: "post-crisis",
    number: "03",
    title: "Post-Crisis / Earth-Prime",
    subtitle:
      "The restructured shared universe following the creation of Earth-Prime.",
  },
] as const;

export default function ArrowverseChronology({
  episodes,
  additionalSeries,
  accent,
}: Props) {
  return (
    <div className="flex flex-col gap-12">
      {eraSections.map((era) => {
        const entries = episodes.filter(
          (entry) => entry.era === era.id,
        );

        if (entries.length === 0) return null;

        return (
          <section key={era.id}>
            {/* Era heading */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-gold-bright/60">
                  {era.number}
                </span>

                <h2 className="font-display text-2xl tracking-[0.15em] text-gold-bright uppercase sm:text-3xl">
                  {era.title}
                </h2>

                <div className="h-px flex-1 bg-paper/15" aria-hidden="true" />
              </div>

              <p className="max-w-2xl font-body text-sm leading-relaxed text-paper/50">
                {era.subtitle}
              </p>
            </div>

            {/* Episode timeline */}
            <div className="relative">
              <ol className="flex flex-col gap-5">
                {entries.map((entry, index) => (
                  <li key={entry.id}>
                    <div className="relative">
                      {/* Timeline number */}
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-mono text-[10px] tracking-widest text-paper/30">
                          {String(index + 1).padStart(3, "0")}
                        </span>

                        <div
                          className="h-px flex-1 bg-paper/10"
                          aria-hidden="true"
                        />
                      </div>

                      <SeriesEpisodeCard
                        episode={{ ...entry, franchiseId: "arrowverse" }}
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
      })}

      {additionalSeries.length > 0 && (
        <section>
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-gold-bright/60">
                04
              </span>
              <h2 className="font-display text-2xl tracking-[0.15em] text-gold-bright uppercase sm:text-3xl">
                Additional series
              </h2>
              <div className="h-px flex-1 bg-paper/15" aria-hidden="true" />
            </div>
            <p className="max-w-2xl font-body text-sm leading-relaxed text-paper/50">
              These shows are part of the franchise overview, but the supplied
              episode-by-episode order does not include their seasons.
            </p>
          </div>

          <ol className="flex flex-col gap-5">
            {additionalSeries.map((entry, index) => (
              <li key={entry.id}>
                <EntryCard
                  entry={entry}
                  accent={accent}
                  displayOrder={index + 1}
                  franchiseId="arrowverse"
                />
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
