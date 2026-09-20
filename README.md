# trip-gallery

Photo gallery for the **Turkey 2026** trip. Built with React + Vite under **YayLayer** — every unit of code is preceded by a formal specification that gets signed before merge.

## What it does

- Eight photo cards in a responsive grid
- Each card flips on click to show the description on the back
- Light + dark mode toggle, persists in localStorage, respects `prefers-color-scheme`

## Cells (signed specs)

| ID | Unit | Purpose |
|---|---|---|
| C-b21b-2 | `useTheme` | Theme state hook (light/dark + persistence) |
| C-b21b-3 | `Header` | Site title + theme toggle button |
| C-b21b-4 | `FlipCard` | Single photo card with flip state |
| C-b21b-6 | `Gallery` | Responsive grid of cards |
| C-b21b-7 | `App` | Header + Gallery composition |
| C-b21b-8 | `mountApp` | React entry point |

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle in dist/
```

## Replace the photos

Edit the `TRIP_PHOTOS` array in `src/components/Gallery.jsx` — each entry has `id`, `title`, `description`, `alt`, and `takenAt`. The cards adapt automatically.

## YayLayer

This project follows the protocol in [AGENTS.md](./AGENTS.md). Specs are written *before* code and signed on a paired phone. The CI gate blocks any merge that isn't green.
