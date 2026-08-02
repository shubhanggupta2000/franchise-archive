import { useState } from "react";
import { franchises } from "./data";
import Header from "./components/Header";
import FranchiseTabs from "./components/FranchiseTabs";
import FranchiseHero from "./components/FranchiseHero";
import OrderToggle, { type OrderMode } from "./components/OrderToggle";
import FilmStrip from "./components/FilmStrip";
import AboutModal from "./components/AboutModal";

export default function App() {
  const [activeId, setActiveId] = useState(franchises[0].id);
  const [mode, setMode] = useState<OrderMode>("release");

  // Controls whether the About page is displayed
  const [showAbout, setShowAbout] = useState(false);

  const active = franchises.find((f) => f.id === activeId) ?? franchises[0];

  // If About is open, show AboutModal instead of the archive
  if (showAbout) {
    return <AboutModal onClose={() => setShowAbout(false)} />;
  }

  return (
    <div className="min-h-screen bg-ink text-paper">
      <Header onAboutClick={() => setShowAbout(true)} />

      <main className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <FranchiseTabs
          franchises={franchises}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div className="mt-5">
          <FranchiseHero franchise={active} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-8">
          <h2 className="font-mono text-xs tracking-[0.25em] text-paper/50 uppercase">
            Viewing order
          </h2>

          <OrderToggle
            mode={mode}
            onChange={setMode}
            chronoIsOfficial={active.chronoIsOfficial}
          />
        </div>

        <div className="mt-6 sm:mt-8">
          <FilmStrip franchise={active} mode={mode} />
        </div>
      </main>

      <footer className="border-t border-paper/10 px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] leading-relaxed text-paper/40">
            Built entirely from a static, hand-maintained dataset &mdash; no
            third-party movie APIs, no keys, no rate limits, nothing that can go
            away. Release dates for upcoming entries are subject to change;
            check the studio's own announcements for the latest.
          </p>
        </div>
      </footer>
    </div>
  );
}
