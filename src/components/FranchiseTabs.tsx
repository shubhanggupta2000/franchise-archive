import type { Franchise } from "../data/types";

interface Props {
  franchises: Franchise[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function FranchiseTabs({ franchises, activeId, onSelect }: Props) {
  return (
    <nav
      aria-label="Choose a franchise"
      className="mask-fade-x -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:gap-3 sm:px-0"
    >
      {franchises.map((f) => {
        const active = f.id === activeId;
        return (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            aria-current={active}
            className={`group relative shrink-0 rounded-sm px-4 py-2.5 text-left font-mono text-xs tracking-wide uppercase transition-colors ${
              active
                ? "bg-paper text-ink"
                : "bg-ink-soft text-paper/65 hover:bg-ink-soft/70 hover:text-paper"
            }`}
            style={active ? { boxShadow: `inset 3px 0 0 ${f.accent}` } : undefined}
          >
            {!active && (
              <span
                className="absolute inset-y-0 left-0 w-0.75 opacity-70"
                style={{ backgroundColor: f.accent }}
                aria-hidden="true"
              />
            )}
            {f.shortName}
          </button>
        );
      })}
    </nav>
  );
}
