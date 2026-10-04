import { getSigilUrl } from "./EntrySigil";

export interface SeriesEpisode {
  id: string;
  show: string;
  season: number;
  episode: number;
  title: string;
  year: number;
  dateLabel: string;
  crossover?: string;
  type?: "web";
  franchiseId?: string;
}

interface Props {
  episode: SeriesEpisode;
}

export default function SeriesEpisodeCard({ episode }: Props) {
  const sigil = getSigilUrl(
    [episode.show],
    episode.crossover,
    episode.franchiseId,
  );

  return (
    <article className="flex items-center gap-4 rounded-sm bg-ink-soft/50 p-4">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-gold-bright/70 uppercase">
              {episode.show} · S{String(episode.season).padStart(2, "0")}E
              {String(episode.episode).padStart(2, "0")}
            </p>
            <h4 className="mt-2 font-display text-lg tracking-widest text-paper uppercase sm:text-xl">
              {episode.title}
            </h4>
          </div>
          <span className="font-mono text-[10px] text-paper/35">
            {episode.dateLabel}
          </span>
        </div>

        {episode.crossover && (
          <p className="mt-4 inline-flex rounded-sm border border-gold-bright/20 px-3 py-1 font-mono text-[10px] tracking-wider text-gold-bright/70 uppercase">
            {episode.crossover}
          </p>
        )}

        {episode.type === "web" && (
          <p className="mt-4 inline-flex rounded-sm border border-paper/15 px-3 py-1 font-mono text-[10px] tracking-wider text-paper/50 uppercase">
            Web series
          </p>
        )}
      </div>
      {sigil && (
        <div className="flex w-12 shrink-0 justify-center sm:w-16">
          <img
            src={sigil}
            alt=""
            aria-hidden="true"
            className="max-h-12 max-w-full object-contain sm:max-h-16"
          />
        </div>
      )}
    </article>
  );
}
