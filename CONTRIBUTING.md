# Contributing to Franchise Archive

Thank you for your interest in contributing to Franchise Archive.

Franchise Archive is an open-source project that aims to provide accurate, structured viewing orders and chronological timelines for major movie and television franchises.

Contributions are welcome, especially improvements to timeline accuracy, missing entries, UI, accessibility, and documentation.

## Important

The `main` branch is the protected production branch.

Contributors should never push directly to `main`.

All changes must be submitted through a Pull Request.

Pull Requests are reviewed by project maintainers before being merged.

## Workflow

1. Fork the repository.
2. Clone your fork.
3. Create a branch.
4. Make your changes.
5. Run `npm install`.
6. Run `npm run build`.
7. Test locally.
8. Commit your changes.
9. Push your branch to your fork.
10. Open a Pull Request.
11. GitHub CI runs checks.
12. You review the changes.
13. You merge the Pull Request.

## Before You Start

Please read this guide before opening an issue or submitting a Pull Request.

For major changes, please open an issue first to discuss the proposed change.

Small fixes such as typo corrections, factual corrections, and minor UI improvements can generally be submitted directly as Pull Requests.

## Fork the Repository

Do not clone the original repository and push directly to it.

Instead:

1. Open the Franchise Archive repository on GitHub.
2. Click the `Fork` button.
3. Create a fork under your own GitHub account.

You will now have your own copy of the repository.

## Clone Your Fork

Clone your fork to your local computer:

```bash
git clone https://github.com/shubhanggupta2000/franchise-archive.git
```

## Create a Branch

Create a new branch for your work:

```bash
git checkout -b my-feature-branch
```

## Install and Build

After making your changes, install dependencies and build the project:

```bash
npm install
npm run build
```

## Test Locally

Before opening a Pull Request, test your changes locally to make sure everything works as expected.

## Project Structure

### Franchise Data

Franchise data is stored in:

`src/data/`

### UI Components

UI components are stored in:

`src/components/`

### Icons

Franchise-specific icons are stored in:

`src/components/icons/`

## Data Contributions

Franchise Archive is a curated project.

If you are correcting a release date, chronological placement, episode order, or timeline entry, please provide a reliable source or explain the reasoning behind your proposed change.

This is especially important for franchises involving:

- Multiple timelines.
- Reboots.
- Time travel.
- Multiverses.
- Crossovers.
- Retcons.
- Alternate universes.

Do not present speculation as established canon.
