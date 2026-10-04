export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 bg-ink-soft text-paper shadow-lg transition hover:border-gold-bright/60 hover:text-gold-bright focus-visible:ring-2 focus-visible:ring-gold-bright focus-visible:outline-none sm:right-8 sm:bottom-8"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}
