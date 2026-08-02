interface HeaderProps {
  onAboutClick: () => void;
}

export default function Header({ onAboutClick }: HeaderProps) {
  return (
    <header className="border-b border-paper/15 px-5 py-6 sm:px-8 sm:py-8">
      <div className="flex items-start justify-between">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] tracking-[0.35em] text-gold-bright/80 uppercase">
            Reel No. 001 &middot; Est. always free
          </p>
          <h1 className="marquee-flicker mt-2 font-display text-4xl leading-none tracking-wide text-paper uppercase sm:text-6xl">
            The Franchise Archive
          </h1>
          <p className="mt-3 max-w-xl font-body text-sm text-paper/70 sm:text-base">
            Every major cinematic universe, filed by saga and threaded onto one
            reel &mdash; in the order they came out, or the order they happened.
          </p>
        </div>
        <button
          onClick={onAboutClick}
          aria-label="About and disclaimer"
          className="text-paper/50 hover:text-gold-bright transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="11" x2="12" y2="16" />
            <circle cx="12" cy="8" r="0.5" fill="currentColor" />
          </svg>
        </button>
      </div>
    </header>
  );
}
