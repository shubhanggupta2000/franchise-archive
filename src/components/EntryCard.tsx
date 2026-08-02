import type { Entry } from "../data/types";

interface Props {
  entry: Entry;
  accent: string;
  displayOrder: number;
}

export default function EntryCard({ entry, accent, displayOrder }: Props) {
  return (
    <article className="paper-grain relative flex gap-4 rounded-sm bg-paper p-4 text-ink shadow-[0_6px_18px_rgba(0,0,0,0.25)] sm:p-5">
      <div className="flex w-12 shrink-0 flex-col items-center border-r border-dashed border-ink/25 pr-3 sm:w-16">
        <span className="font-mono text-[10px] uppercase tracking-wide text-ink/45">No.</span>
        <span className="font-display text-3xl leading-none text-ink sm:text-4xl">
          {String(displayOrder).padStart(2, "0")}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-sm px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-paper"
            style={{ backgroundColor: accent }}
          >
            {entry.type}
          </span>
          <span className="font-mono text-[11px] text-ink/55">{entry.dateLabel}</span>
          {entry.status === "upcoming" && (
            <span className="rounded-sm border border-ink/30 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/60">
              Upcoming
            </span>
          )}
        </div>
        <h3 className="mt-1 font-display text-xl leading-tight tracking-wide uppercase sm:text-2xl">
          {entry.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink/50">
          {entry.saga}
        </p>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink/85">{entry.synopsis}</p>
        {entry.note && (
          <p className="mt-2 font-body text-xs italic text-ink/55">{entry.note}</p>
        )}
      </div>
    </article>
  );
}
