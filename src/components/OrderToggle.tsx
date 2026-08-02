export type OrderMode = "release" | "chrono";

interface Props {
  mode: OrderMode;
  onChange: (mode: OrderMode) => void;
  chronoIsOfficial: boolean;
}

export default function OrderToggle({ mode, onChange, chronoIsOfficial }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        role="radiogroup"
        aria-label="Sort order"
        className="inline-flex rounded-full border border-paper/25 bg-ink-soft p-1 font-mono text-xs uppercase tracking-wide"
      >
        <button
          role="radio"
          aria-checked={mode === "release"}
          onClick={() => onChange("release")}
          className={`rounded-full px-4 py-1.5 transition-colors ${
            mode === "release" ? "bg-gold text-ink" : "text-paper/60 hover:text-paper"
          }`}
        >
          Release order
        </button>
        <button
          role="radio"
          aria-checked={mode === "chrono"}
          onClick={() => onChange("chrono")}
          className={`rounded-full px-4 py-1.5 transition-colors ${
            mode === "chrono" ? "bg-gold text-ink" : "text-paper/60 hover:text-paper"
          }`}
        >
          Story order
        </button>
      </div>
      {mode === "chrono" && !chronoIsOfficial && (
        <p className="font-mono text-[11px] text-paper/45">
          approximate &mdash; fan-consensus placement, not officially confirmed
        </p>
      )}
    </div>
  );
}
