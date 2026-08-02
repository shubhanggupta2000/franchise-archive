import type { Franchise } from "../data/types";
import ArrowverseChronology from "./ArrowverseChronology";
import EntryCard from "./EntryCard";
import type { OrderMode } from "./OrderToggle";

interface Props {
  franchise: Franchise;
  mode: OrderMode;
}

export default function FilmStrip({ franchise, mode }: Props) {
  if (mode === "chrono" && franchise.id === "arrowverse") {
    return <ArrowverseChronology />
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
    const sorted = [...franchise.entries].sort(
      (a, b) => a.chronoOrder - b.chronoOrder,
    );

    return (
      <div className="film-rail relative pl-6 sm:pl-10">
        <ol className="flex flex-col gap-5">
          {sorted.map((entry, i) => (
            <li key={entry.id}>
              <EntryCard
                entry={entry}
                accent={franchise.accent}
                displayOrder={i + 1}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }

  const bySaga = franchise.sagas.map((saga) => ({
    saga,
    entries: franchise.entries
      .filter((e) => e.saga === saga)
      .sort((a, b) => a.releaseOrder - b.releaseOrder),
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
                  <li key={entry.id}>
                    <EntryCard
                      entry={entry}
                      accent={franchise.accent}
                      displayOrder={entry.releaseOrder}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
    </div>
  );
}
