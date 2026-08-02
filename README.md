# The Franchise Archive

A fully responsive React + TypeScript site that tracks nine major cinematic franchises
— MCU, DCEU, DCU (the 2025 DC reboot), Arrowverse, Fast & Furious, Star Wars,
Wizarding World, Middle-earth, and X-Men — with release order, in-universe
chronological order, saga/phase groupings, and short synopses for every entry.

## Why it will never go out of date or break

- **Zero external APIs.** No TMDB, no OMDb, no image CDN, no API keys, nothing that
  requires a paid tier, a trial, or a rate limit. All film/show data lives in
  hand-written TypeScript files in `src/data/`.
- **No hotlinked posters.** Real movie poster art is copyrighted, and hotlinked images
  break the moment a URL changes. Instead, every entry renders as a stylised
  "ticket stub" card built entirely from CSS and typography, in the theme color of
  its franchise.
- **Fully static.** Once built, the whole site is HTML/CSS/JS with no server,
  database, or backend to maintain.

The only network request the deployed site makes is loading Google Fonts (Bebas Neue,
IBM Plex Serif, IBM Plex Mono), which is a free, keyless, permanent Google service. If
you want the site to work 100% offline as well, see "Going fully offline" below.

## Updating the data

Each franchise lives in its own file: `src/data/mcu.ts`, `src/data/dceu.ts`, etc.,
all following the shared shape in `src/data/types.ts`. To add a new film/show, add an
object to that franchise's `entries` array with a unique `id`. To add a whole new
franchise, copy an existing file, fill it in, and register it in `src/data/index.ts`.

Upcoming/unreleased entries are marked `status: "upcoming"` and show an "Upcoming"
badge automatically — update `status` to `"released"` once they're out.

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploying (free, forever)

**Vercel**

```bash
npm i -g vercel
vercel
```

Framework preset: Vite. No environment variables needed.

**Cloudflare Pages**

1. Push this folder to a GitHub repo.
2. In the Cloudflare dashboard: Pages -> Create a project -> Connect to Git.
3. Build command: `npm run build`, output directory: `dist`.

Both have permanent free tiers for static sites like this one.

## Going fully offline (optional)

If you'd rather not load Google Fonts at runtime, download the three font families
as `.woff2` files, drop them in `public/fonts/`, and replace the `@import url(...)`
line at the top of `src/index.css` with local `@font-face` declarations pointing at
`/fonts/...`. Everything else already works without any network access.

## Contributing

Contributions are welcome!

Franchise Archive is an open-source project, and contributions from the community are encouraged.

You can contribute by:

- Adding new franchises
- Correcting release dates
- Correcting chronological orders
- Adding missing movies, series, episodes, or specials
- Improving the user interface
- Fixing bugs
- Improving accessibility
- Improving documentation

Before contributing, please read the [Contributing Guide](CONTRIBUTING.md).

The recommended workflow is:

1. Fork the repository.
2. Clone your fork.
3. Create a new branch.
4. Make your changes.
5. Run `npm run build`.
6. Test your changes locally.
7. Commit your changes.
8. Push your branch.
9. Open a Pull Request.

All Pull Requests are reviewed before being merged into the `main` branch.
