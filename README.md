## NBA Archetype Clustering (Web)

Modern Next.js site for exploring NBA positional archetype clusters with an analytical, minimal UI. Data is loaded from a static JSON file and grouped into clusters per position (PG, SG, SF, PF, C). Each position page presents cluster cards with summary metrics and player lists.

### Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Motion (for subtle grid/hover effects)

### Project structure

- `public/`
  - `data/nba_clustered_data.json`: source dataset (players with per-100, advanced, shooting splits and `Cluster_ID`).
- `src/app/`
  - `page.tsx`: Home (hero + position section)
  - `point-guard/`, `shooting-guard/`, `small-forward/`, `power-forward/`, `center/`: position pages
  - `layout.tsx`: global layout and `SiteHeader`
  - `globals.css`: Tailwind and global styles
- `src/components/`
  - `hero-section.tsx`: landing hero
  - `position-section.tsx`: position cards linking to each position page
  - `site-header.tsx`: fixed, route-aware header (light on home, dark on position pages)
  - `positions/position-cluster.tsx` or `position-cluster.tsx`: renders cluster cards only (no header)
  - `ui/background-boxes.tsx`: background grid effect
- `src/lib/`
  - `nba-data.ts`: server-only data loader, grouping, and mean helpers

### Getting started

1. Install dependencies
   ```bash
   pnpm i # or npm i / yarn
   ```
2. Run dev server
   ```bash
   pnpm dev # or npm run dev / yarn dev
   ```
3. Open `http://localhost:3000`

### Scripts

- `dev`: start Next.js in dev (`--turbopack` enabled)
- `build`: build for production
- `start`: run production server
- `lint`: run Next.js ESLint

### Data model

Each JSON record includes at least:

- `Player` (string), `Team` (string), `Pos` ("PG" | "SG" | "SF" | "PF" | "C"), `Cluster_ID` (number)
- Many numeric fields such as `PTS`, `AST`, `TRB`, `3P%`, `TS%`, `ORtg`, `DRtg`, etc.

Data loading and grouping:

- `getAllPlayers()`: reads `public/data/nba_clustered_data.json`
- `groupByClusterForPos(rows, pos)`: filters by position and groups players by `Cluster_ID`
- `mean(rows, key)`: computes average for numeric fields

### UI/UX

- Home hero section with analytical background
- Position section with five cards (PG, SG, SF, PF, C)
- Each position page:
  - Custom contrasting background themed to the position’s accent
  - Cluster cards in a 2-column grid
  - Each card includes a themed conic glow, small stat summary, and a scrollable player list (with styled scrollbar)

### Theming

- Header (`site-header.tsx`) automatically adapts style based on route:
  - Home (`/`): light header (white translucent), light inactive pills
  - Position pages: dark header (slate translucent), dark inactive pills
- Cluster card accents are position-themed via `themeByPos` mapping

### Adding a new metric to cluster cards

1. Update `src/components/position-cluster.tsx` where stats are listed ("PTS", "AST", etc.)
2. Add a call to `mean(rows, '<FieldName>')` and render a new `Stat` component

### Linking position cards to pages

- In `position-section.tsx`, each card can link to `/point-guard`, `/shooting-guard`, `/small-forward`, `/power-forward`, `/center`.

### Production build

```bash
pnpm build && pnpm start
```

### Notes

- Ensure `public/data/nba_clustered_data.json` remains valid JSON (array of records)
- If dataset shape changes, adjust `PlayerRow` type in `src/lib/nba-data.ts`
- Tailwind v4 is used via `@import "tailwindcss";` in `globals.css`

### License

MIT
