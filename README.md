# Edward Lacinski | Eclipse Hub

A modular personal career hub for Edward Lacinski’s work in tech support, data analysis, hospitality and guest service, and content creation. The site combines experience snapshots with privacy-safe portfolio proof and clear professional contact paths.

## Tech stack

- Vite
- React
- JavaScript
- Plain CSS
- Hash-based navigation
- GitHub Pages and GitHub Actions

## Local development

Install dependencies and start Vite:

```bash
npm install
npm run dev
```

Create and inspect a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/   Layout, navigation, cards, and reusable sections
  data/         Career, experience, proof, project, platform, and contact data
  pages/        Small page compositions built from shared sections
  App.jsx       Hash routing, route metadata, and application shell
  index.css     Site-wide branding and responsive styles
public/images/ Experience, social preview, and icon assets
```

Most content updates begin in `src/data/`. Page components primarily arrange reusable sections, so sections can be moved without rewriting their layout logic.

## GitHub Pages deployment

This user Pages site uses a Vite base path of `/`. The workflow in `.github/workflows/deploy.yml` runs on pushes to `main`, installs dependencies with `npm ci`, refreshes available public platform snapshots, builds `dist`, and deploys through the official GitHub Pages actions.

Set the repository’s Pages source to **GitHub Actions** before the first deployment.

Platform display copy lives in `src/data/platforms.js`; generated public snapshots live in `src/data/platformSnapshots.json`. The refresh remains fault tolerant when credentials or platform APIs are unavailable. See the workflow for the optional YouTube, Twitch, and X repository secrets.

## Image assets

- Experience images: `public/images/experience/`
- Social preview: `public/images/social/eclipse-hub-preview.png` at 1200 × 630
- Site icons: `public/images/icons/`

Each image folder includes its own README with dimensions and naming guidance. The included SVG favicon works immediately; additional PNG and Apple icons can be added later.

## Privacy

Portfolio proof uses synthetic, anonymized, employer-safe, or privacy-safe examples. It does not publish real student, staff, district, internal reporting, private community, sponsor, partner, phone, or address information.

## Launch checklist

- [ ] Run `npm install` if dependencies changed.
- [ ] Run `npm run build`, then inspect the production site with `npm run preview`.
- [ ] Check Home, Tech Support, Data Analysis, Hospitality, Content Creation, and Contact at desktop and mobile widths.
- [ ] Confirm all Contact URLs, email links, proof links, hash navigation, and external profile links.
- [ ] Check the browser console for errors and confirm there is no horizontal overflow.
- [ ] Confirm metadata, social preview, favicon, current metrics, dates, and image assets.
- [ ] Review every page for private employer, student, staff, partner, sponsor, phone, address, or community information.
- [ ] Confirm portfolio examples remain synthetic, anonymized, employer-safe, or privacy-safe.
- [ ] Push to `main` only after the production build passes.
- [ ] After deployment, test the public URL and refresh its preview in the social platforms where it will be shared.
- [ ] Publish or personalize the drafts in `docs/launch-posts.md`.
