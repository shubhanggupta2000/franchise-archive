interface AboutModalProps {
  onClose: () => void;
}

export default function AboutModal({ onClose }: AboutModalProps) {
  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* Page Header */}
      <header className="border-b border-paper/15 px-5 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] tracking-[0.35em] text-gold-bright/80 uppercase">
            Reel No. 001 · About
          </p>

          <h1 className="mt-2 font-display text-4xl leading-none tracking-wide text-paper uppercase sm:text-6xl">
            About &amp; Disclaimer
          </h1>

          <p className="mt-3 max-w-xl font-body text-sm text-paper/70 sm:text-base">
            The story behind The Franchise Archive, its creator, and the
            principles behind the project.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        <div className="paper-grain rounded-sm bg-paper p-6 text-ink sm:p-10">
          {/* ABOUT THE DEVELOPER */}
          <section>
            <h2 className="font-display text-2xl uppercase tracking-wide">
              About the Developer
            </h2>

            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Developer Information */}
              <div>
                <h3 className="font-display text-xl uppercase tracking-wide">
                  Shubhang Gupta
                </h3>

                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/60">
                  Developer · Creator · Movie Enthusiast
                </p>

                <p className="mt-4 font-body leading-relaxed">
                  Hi! I'm Shubhang, a developer and movie enthusiast who created
                  The Franchise Archive as a way to make navigating large
                  cinematic universes easier and more enjoyable.
                </p>

                <p className="mt-4 font-body leading-relaxed">
                  I built this project to bring franchise viewing orders,
                  timelines, and related information together in one place —
                  without relying on complicated spreadsheets or scattered lists
                  across the internet.
                </p>

                {/* Social Links */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/shubhanggupta2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink/20 px-3 py-2 font-mono text-xs uppercase transition-colors hover:bg-ink hover:text-paper"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gupta-shubhang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink/20 px-3 py-2 font-mono text-xs uppercase transition-colors hover:bg-ink hover:text-paper"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://guptashubhang.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink/20 px-3 py-2 font-mono text-xs uppercase transition-colors hover:bg-ink hover:text-paper"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="my-10 border-t border-ink/15" />

          {/* ========================================= */}
          {/* ABOUT THE PROJECT */}
          {/* ========================================= */}

          <section>
            <h2 className="font-display text-2xl uppercase tracking-wide">
              About The Franchise Archive
            </h2>

            <p className="mt-4 font-body leading-relaxed">
              The Franchise Archive is a fan-made project created to organize
              major cinematic universes and franchises into easy-to-follow
              viewing orders.
            </p>

            <p className="mt-4 font-body leading-relaxed">
              The goal is simple: bring the films, series, and stories that
              belong to a franchise together in one place and help you decide
              where to start, what to watch next, and how everything fits
              together.
            </p>

            <p className="mt-4 font-body leading-relaxed">
              Each franchise can be explored through different viewing
              approaches, including release order and chronological order,
              wherever applicable.
            </p>
          </section>

          {/* Divider */}
          <div className="my-10 border-t border-ink/15" />

          {/* ========================================= */}
          {/* HOW IT WORKS */}
          {/* ========================================= */}

          <section>
            <h2 className="font-display text-2xl uppercase tracking-wide">
              How It Works
            </h2>

            <p className="mt-4 font-body leading-relaxed">
              The Franchise Archive uses a static, hand-maintained dataset
              rather than relying on third-party movie APIs. This keeps the
              project lightweight, predictable, and independent from API keys,
              rate limits, and external services that may change or disappear.
            </p>

            <p className="mt-4 font-body leading-relaxed">
              Viewing orders are presented based on release order or
              chronological story order, depending on the franchise and the
              viewing experience you are looking for.
            </p>
          </section>

          {/* Divider */}
          <div className="my-10 border-t border-ink/15" />

          {/* ========================================= */}
          {/* DISCLAIMER */}
          {/* ========================================= */}

          <section>
            <h2 className="font-display text-2xl uppercase tracking-wide">
              Disclaimer
            </h2>

            <p className="mt-4 font-body leading-relaxed">
              The Franchise Archive is a non-commercial, fan-created project.
              All movie titles, television series, characters, logos,
              trademarks, images, and other related intellectual property belong
              to their respective owners.
            </p>

            <p className="mt-4 font-body leading-relaxed">
              The Franchise Archive is not affiliated with, endorsed by, or
              officially connected to Marvel Studios, Disney, DC Studios, Warner
              Bros., Lucasfilm, or any other studio, production company,
              franchise owner, or rights holder mentioned on this website.
            </p>

            <p className="mt-4 font-body leading-relaxed">
              The use of franchise names and related materials on this website
              is intended for informational and fan purposes. No ownership of
              any third-party intellectual property is claimed by The Franchise
              Archive.
            </p>
          </section>

          {/* Divider */}
          <div className="my-10 border-t border-ink/15" />

          {/* ========================================= */}
          {/* CREDITS */}
          {/* ========================================= */}

          <section>
            <h2 className="font-display text-2xl uppercase tracking-wide">
              Credits &amp; Acknowledgements
            </h2>

            <p className="mt-4 font-body leading-relaxed">
              The organization of large cinematic universes is a complicated
              task, and this project would not be possible without the work of
              fans, writers, wiki editors, and communities who document
              timelines, release orders, and franchise histories.
            </p>

            <p className="mt-4 font-body leading-relaxed">
              Thank you to everyone who has contributed information and
              discussion that helps fans make sense of these increasingly
              interconnected universes.
            </p>
          </section>

          {/* Divider */}
          <div className="my-10 border-t border-ink/15" />

          {/* ========================================= */}
          {/* PROJECT PHILOSOPHY */}
          {/* ========================================= */}

          <section>
            <h2 className="font-display text-2xl uppercase tracking-wide">
              A Note From The Developer
            </h2>

            <p className="mt-4 font-body leading-relaxed">
              This project is built for people who have ever asked: "Where do I
              even start?"
            </p>

            <p className="mt-4 font-body leading-relaxed">
              Whether you're watching the Marvel Cinematic Universe for the
              first time, revisiting Star Wars, catching up on the Arrowverse,
              or discovering a completely new franchise, I hope this archive
              makes the journey a little easier.
            </p>

            <p className="mt-4 font-body leading-relaxed">
              Thanks for visiting, and happy watching.
            </p>
          </section>

          {/* Back Button */}
          <button
            onClick={onClose}
            className="mt-10 font-mono text-xs uppercase underline transition-opacity hover:opacity-60"
          >
            ← Back to Archive
          </button>
        </div>
      </section>
    </main>
  );
}
