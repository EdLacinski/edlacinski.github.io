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

Creator-platform links and display copy are maintained in `src/data/platforms.js`. Public reach figures and latest-content IDs live in `src/data/platformSnapshots.json` and are refreshed immediately before each GitHub Pages build by `npm run update:snapshots`.

The refresh is fault tolerant: if a credential is missing or a platform API is temporarily unavailable, deployment continues using the last saved snapshot. Discord member counts use the public invite endpoint and need no secret. To enable the other refreshes, add the applicable repository Actions secrets under **Settings → Secrets and variables → Actions**:

- `YOUTUBE_API_KEY` for both YouTube channels, including subscriber/view/video totals, profile images, and latest uploads.
- `TWITCH_CLIENT_ID` plus `TWITCH_CLIENT_SECRET` for public channel details. Add `TWITCH_ACCESS_TOKEN` with the necessary follower permissions to refresh the follower total; otherwise the last follower snapshot is retained.
- `X_BEARER_TOKEN` for the X follower total, profile image, and latest original post. X API access depends on the account's current API plan.

Run `npm run update:snapshots` locally to refresh available sources. Use `npm run update:snapshots -- --offline` to validate the script without network requests.

## Pre-deploy checklist

- Run `npm install` if dependencies changed.
- Run `npm run build`.
- Run `npm run preview` and check Home, Tech Support, Data Analysis, Hospitality, Content Creation, and Contact.
- Check desktop and mobile layouts.
- Check the browser console for errors.
- Push to `main` only after the production build passes.
