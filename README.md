# Edward Lacinski | Eclipse Hub

A personal career hub built with Vite and React. It gives equal space to Edward's work in tech support, data analysis, hospitality, and content creation.

## Run locally

You will need a current version of [Node.js](https://nodejs.org/) installed.

```bash
npm install
npm run dev
```

Vite will print a local address, usually `http://localhost:5173`.

## Create a production build

```bash
npm run build
```

The finished site is written to `dist/`. To test that build locally, run:

```bash
npm run preview
```

## GitHub Pages deployment

The Vite base path is `/` because this site is intended for the user Pages repository `edwlacin.github.io`.

The workflow at `.github/workflows/deploy.yml` runs whenever a change is pushed to `main`. It installs dependencies with `npm ci`, builds the site, uploads `dist`, and deploys it with the official GitHub Pages actions.

In the repository's GitHub settings, open **Pages** and set **Source** to **GitHub Actions**. After that, pushing to `main` will publish the latest successful build.

## Project map

```text
src/
  components/
    layout/      Header, footer, and page shell
    navigation/  Shared navigation link
    cards/       Career, skill, and project cards
    sections/    Reusable page-building sections
  data/          Career paths, skills, experience, and projects
  pages/         Small section compositions for each route
  App.jsx        Lightweight hash routing and app shell
  index.css      Site-wide design and responsive styles
  main.jsx       React entry point
```

The easiest first edits are in the files under `src/data/`. Pages are intentionally small section lists, so sections can be rearranged by changing their order in a page component without rewriting their layout logic.

Creator-platform links, public reach snapshots, profile images, and featured video IDs are maintained in `src/data/platforms.js`. Because this is a static site without private API credentials, those figures are dated snapshots rather than guaranteed real-time counters.

6/21 tried to fix commit