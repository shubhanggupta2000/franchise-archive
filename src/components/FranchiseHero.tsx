import type { Franchise } from "../data/types";

interface Props {
  franchise: Franchise;
}

export default function FranchiseHero({ franchise }: Props) {
  const films = franchise.entries.filter((e) => e.type === "Film").length;
  const series = franchise.entries.filter((e) => e.type !== "Film").length;
  const years = franchise.entries.map((e) => e.year);
  const span = `${Math.min(...years)}\u2013${Math.max(...years)}`;

  return (
    <section
      key={franchise.id}
      className="paper-grain rounded-sm bg-paper px-5 py-6 text-ink sm:px-8 sm:py-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-3xl tracking-wide uppercase sm:text-5xl">
          {franchise.name}
        </h2>
        <span
          className="rounded-sm px-2 py-1 font-mono text-[11px] tracking-wide text-paper uppercase"
          style={{ backgroundColor: franchise.accent }}
        >
          {span}
        </span>
      </div>
      <p className="mt-1 font-body text-base italic text-ink/70 sm:text-lg">{franchise.tagline}</p>
      <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-ink/85 sm:text-base">
        {franchise.description}
      </p>
      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink/15 pt-4 font-mono text-xs uppercase">
        <div>
          <dt className="text-ink/50">Films</dt>
          <dd className="text-base text-ink">{films}</dd>
        </div>
        <div>
          <dt className="text-ink/50">Series &amp; specials</dt>
          <dd className="text-base text-ink">{series}</dd>
        </div>
        <div>
          <dt className="text-ink/50">Sagas</dt>
          <dd className="text-base text-ink">{franchise.sagas.length}</dd>
        </div>
        <div>
          <dt className="text-ink/50">Chronology</dt>
          <dd className="text-base text-ink">
            {franchise.chronoIsOfficial ? "Confirmed" : "Community consensus"}
          </dd>
        </div>
      </dl>
    </section>
  );
}
