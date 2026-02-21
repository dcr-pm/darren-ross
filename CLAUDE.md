# CLAUDE.md

## Project Overview

Personal portfolio website for Darren Ross — a tech innovator and enthusiast working at the intersection of Salesforce Marketing Cloud, AI product building, and technical project management. The site showcases services, products, and a podcast ("The Prompted Podcast!").

**Live deployment:** Netlify (see `netlify.toml`)
**Domain:** Darren-Ross.com (per `metadata.json`)

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Routing:** react-router-dom v6 using `HashRouter`
- **Styling:** Tailwind CSS loaded via CDN (`<script src="https://cdn.tailwindcss.com">`)
- **Build tool:** esbuild (custom `build.js` script) — NOT Vite at runtime, though `vite.config.ts` exists for local dev
- **Module loading (dev):** Import maps in `index.html` resolve React/ReactDOM/react-router-dom from esm.sh CDN
- **Third-party integrations:**
  - ElevenLabs Conversational AI widget (agent ID embedded in `App.tsx`)
  - Placeholder images from picsum.photos and placehold.co

## Repository Structure

```
/
├── index.html          # HTML shell with Tailwind config, import maps, CDN scripts
├── index.tsx           # React entry point — mounts App into #root with HashRouter
├── App.tsx             # Root component — routing layout with Header, Footer, routes
├── custom.d.ts         # TypeScript declarations for elevenlabs-convai custom element
├── build.js            # Production build script (esbuild, CommonJS)
├── vite.config.ts      # Vite config for local development
├── package.json        # Dependencies and build script
├── tsconfig.json       # TypeScript configuration (strict, bundler mode)
├── metadata.json       # App metadata (name, description, permissions)
├── netlify.toml        # Netlify deployment config (empty)
├── public/             # Public assets directory (currently empty)
├── README.md           # Basic setup instructions
└── components/
    ├── Header.tsx      # Sticky nav bar with responsive mobile layout
    ├── Footer.tsx      # Simple copyright footer
    ├── About.tsx       # Hero section, featured project, podcast embed
    ├── Services.tsx    # Service cards (mentorship, SFMC audit, cert prep, AI building)
    ├── Products.tsx    # Product showcase grid with external links
    ├── Podcast.tsx     # Podcast section with player placeholder and social links
    └── IconComponents.tsx  # SVG icon components (Person, ExternalLink, Spotify, etc.)
```

## Routes

| Path        | Component   | Description                       |
|-------------|-------------|-----------------------------------|
| `/`         | (redirect)  | Redirects to `/about`             |
| `/about`    | `About`     | Hero, featured project, podcast   |
| `/services` | `Services`  | Service offerings grid            |
| `/products` | `Products`  | Product showcase grid             |

## Design System / Theme

Colors are defined in the Tailwind config inside `index.html`:

| Token             | Value     | CSS class prefix    |
|-------------------|-----------|---------------------|
| `brand-primary`   | `#0D9488` | `bg-brand-primary`  |
| `brand-secondary` | `#14B8A6` | `bg-brand-secondary`|
| `base-100`        | `#0F172A` | `bg-base-100`       |
| `base-200`        | `#1E293B` | `bg-base-200`       |
| `base-300`        | `#334155` | `bg-base-300`       |
| `text-primary`    | `#F1F5F9` | `text-text-primary` |
| `text-secondary`  | `#94A3B8` | `text-text-secondary`|

Custom animation: `animate-fade-in-up` (0.8s ease-out fadeInUp)

## Build & Development

### Local development
```bash
npm install
# Use Vite dev server (serves index.html with import maps / esm.sh CDN)
npx vite
```
No `.env` file is required for the portfolio site itself. The `GEMINI_API_KEY` referenced in `vite.config.ts` and `README.md` is a leftover from a prior project scaffold and is not used by any current component.

### Production build
```bash
npm run build
# Runs build.js which:
# 1. Bundles index.tsx with esbuild into dist/index.js
# 2. Copies index.html to dist/ with import maps removed and script tag updated
```
Output goes to `dist/`.

### Deployment
Deployed via Netlify. Push to `master` triggers automatic deployment (standard Netlify Git integration).

## Key Conventions

### Component patterns
- All components are functional React components with `React.FC` typing
- Components use default exports
- SVG icons are centralized in `components/IconComponents.tsx` as named exports
- Data arrays (services, products) are defined inline within their component files
- Card-based layouts use a local `*Card` component (e.g., `ServiceCard`, `ProductCard`)

### Styling conventions
- All styling uses Tailwind utility classes — no CSS files exist
- Dark theme by default (slate/teal palette)
- Responsive breakpoints use standard Tailwind prefixes: `md:`, `lg:`, `sm:`
- Hover effects include `hover:-translate-y-2`, `hover:scale-105`, `hover:shadow-*`
- Sections use `animate-fade-in-up` for entrance animations

### TypeScript
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- Custom element types declared via `JSX.IntrinsicElements` augmentation (both in `custom.d.ts` and `App.tsx`)
- Target: ES2020, JSX: react-jsx

### Adding new content
- **New service:** Add an entry to the `services` array in `components/Services.tsx`
- **New product:** Add an entry to the `productsData` array in `components/Products.tsx`
- **New icon:** Export a new SVG component from `components/IconComponents.tsx`
- **New page/route:** Create component in `components/`, add `<Route>` in `App.tsx`, add nav link in `Header.tsx`

## Important Notes

- The `HashRouter` is used (URLs contain `#`) — this is intentional for static hosting compatibility on Netlify
- The ElevenLabs widget in `App.tsx` requires the `elevenlabs-convai` custom element script loaded in `index.html`
- The `metadata.json` requests microphone permissions (for the ElevenLabs voice agent)
- No test framework is configured
- No linter or formatter is configured
- No `.gitignore` file exists — be cautious about committing `node_modules/` or `dist/`
