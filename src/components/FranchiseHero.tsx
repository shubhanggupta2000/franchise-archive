import type { Franchise } from "../data/types";
import { franchiseIcons } from "./icons";

interface Props {
  franchise: Franchise;
}

export default function FranchiseHero({ franchise }: Props) {
  const films = franchise.entries.filter((e) => e.type === "Film").length;
  const series = franchise.entries.filter((e) => e.type !== "Film").length;

  const years = franchise.entries.map((e) => e.year);
  const span = `${Math.min(...years)}–${Math.max(...years)}`;
  const Icon = franchiseIcons[franchise.id];

  return (
    <section className="paper-grain rounded-sm bg-paper p-6 text-ink sm:p-8">
      <div className="flex gap-6 sm:gap-8">
        <div className="flex w-20 shrink-0 items-start justify-center sm:w-28">
          {Icon && (
            <Icon className="h-26 w-26 object-contain sm:h-24 sm:w-24" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-6">
            <h1 className="font-display text-4xl leading-none uppercase sm:text-5xl">
              {franchise.name}
            </h1>

            <span
              className="shrink-0 rounded-sm px-2 py-1 font-mono text-[11px] tracking-wide text-paper uppercase"
              style={{
                backgroundColor: franchise.accent,
              }}
            >
              {span}
            </span>
          </div>

          <p className="mt-5 font-body text-lg italic text-ink/70">
            {franchise.tagline}
          </p>

          <p className="mt-4 max-w-4xl font-body text-base leading-relaxed text-ink/80">
            {franchise.description}
          </p>

          <div className="mt-6 border-t border-ink/15 pt-5">
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                  Films
                </p>

                <p className="font-mono text-lg">{films}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                  Series & specials
                </p>

                <p className="font-mono text-lg">{series}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                  Sagas
                </p>

                <p className="font-mono text-lg">{franchise.sagas.length}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">
                  Chronology
                </p>

                <p className="font-mono text-lg uppercase">
                  {franchise.chronoIsOfficial
                    ? "Confirmed"
                    : "Community consensus"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
