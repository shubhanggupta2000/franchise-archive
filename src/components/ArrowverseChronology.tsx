import { arrowverseChronology } from "../data/arrowverse";

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

export default function ArrowverseChronology() {
  return (
    <div className="flex flex-col gap-12">
      {eraSections.map((era) => {
        const entries = arrowverseChronology.filter(
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

                      {/* Episode card */}
                      <div className="rounded-sm bg-ink-soft/50 p-5 sm:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-mono text-[10px] tracking-[0.2em] text-gold-bright/70 uppercase">
                              {entry.show} · S
                              {String(entry.season).padStart(2, "0")}E
                              {String(entry.episode).padStart(2, "0")}
                            </p>

                            <h3 className="mt-2 font-display text-lg tracking-widest text-paper uppercase sm:text-xl">
                              {entry.title}
                            </h3>
                          </div>

                          <span className="font-mono text-[10px] text-paper/35">
                            {entry.year}
                          </span>
                        </div>

                        {entry.crossover && (
                          <div className="mt-4 inline-flex rounded-sm border border-gold-bright/20 px-3 py-1">
                            <span className="font-mono text-[10px] tracking-wider text-gold-bright/70 uppercase">
                              {entry.crossover}
                            </span>
                          </div>
                        )}

                        {entry.type === "web" && (
                          <div className="mt-4 inline-flex rounded-sm border border-paper/15 px-3 py-1">
                            <span className="font-mono text-[10px] tracking-wider text-paper/50 uppercase">
                              Web Series
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
      })}
    </div>
  );
}
