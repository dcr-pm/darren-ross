# CLAUDE.md

## Project Overview

Personal portfolio website for Darren Ross — a tech innovator and enthusiast working at the intersection of Salesforce Marketing Cloud, AI product building, and technical project management. The site showcases services, products, a contact page, and a podcast ("The Prompted Podcast!").

**Live deployment:** Netlify (see `netlify.toml`)
**Domain:** Darren-Ross.com (per `metadata.json`)

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Routing:** react-router-dom v6+ using `HashRouter`
- **Styling:** Tailwind CSS loaded via CDN, with custom theme in `index.html`
- **Typography:** Inter (sans) and JetBrains Mono (mono) via Google Fonts
- **Build tool:** esbuild (custom `build.js` script) — NOT Vite at runtime, though `vite.config.ts` exists for local dev
- **Module loading (dev):** Import maps in `index.html` resolve React/ReactDOM/react-router-dom from esm.sh CDN
- **Third-party integrations:**
  - ElevenLabs Conversational AI widget (agent ID embedded in `App.tsx`)
  - Placeholder images from picsum.photos

## Repository Structure

```
/
├── index.html          # HTML shell — Tailwind config, theme, CSS utilities, import maps
├── index.tsx           # React entry point — mounts App into #root with HashRouter
├── App.tsx             # Root component — routing layout with Header, Footer, 4 routes
├── custom.d.ts         # TypeScript declarations for elevenlabs-convai custom element
├── build.js            # Production build script (esbuild, CommonJS)
├── vite.config.ts      # Vite config for local development
├── package.json        # Dependencies and build script
├── tsconfig.json       # TypeScript configuration (strict, bundler mode)
├── metadata.json       # App metadata (name, description, permissions)
├── netlify.toml        # Netlify deployment config (empty)
├── public/             # Public assets directory (currently empty)
├── README.md           # Basic setup instructions
├── CLAUDE.md           # This file — AI assistant context
└── components/
    ├── Header.tsx      # Glass-effect sticky nav with mobile hamburger menu
    ├── Footer.tsx      # Multi-column footer with nav, resources, social links
    ├── About.tsx       # Hero with gradient text, stats bar, featured project, podcast
    ├── Services.tsx    # Service cards with tags, CTA section linking to contact
    ├── Products.tsx    # Product cards with gradient accents and tech tags
    ├── Podcast.tsx     # Podcast section with episode cards and platform links
    ├── Contact.tsx     # Contact form with subject selector and social sidebar
    └── IconComponents.tsx  # SVG icon components (Menu, Close, Arrow, social icons, etc.)
```

## Routes

| Path        | Component   | Description                            |
|-------------|-------------|----------------------------------------|
| `/`         | (redirect)  | Redirects to `/about`                  |
| `/about`    | `About`     | Hero, stats, featured project, podcast |
| `/services` | `Services`  | Service offerings + CTA                |
| `/products` | `Products`  | Product showcase grid                  |
| `/contact`  | `Contact`   | Contact form + info sidebar            |

## Design System / Theme

### Color scales (defined in `index.html` Tailwind config)

**Brand (teal):** `brand-50` through `brand-900` — primary accent color
- Key values: `brand-400` (#34D4BF) for text accents, `brand-500` (#14B8A6) for badges, `brand-600` (#0D9488) for buttons

**Surface (slate):** `surface-50` through `surface-950` — backgrounds and text
- Key values: `surface-950` (#020617) body bg, `surface-900` (#0F172A) card bg, `surface-400` (#94A3B8) secondary text

### CSS utilities (defined in `<style>` in `index.html`)
- `.gradient-text` — brand gradient text fill
- `.glass` — frosted glass background (used by Header)
- `.card-hover` — lift + glow shadow on hover
- `.dot-pattern` — subtle dot grid background

### Animations
- `animate-fade-in`, `animate-fade-in-up`, `animate-fade-in-down`
- `animate-slide-in-left`, `animate-slide-in-right`
- `animate-scale-in`

### Layout
- Max content width: `max-w-6xl` (72rem / 1152px)
- Responsive breakpoints: `sm:`, `md:`, `lg:`

## Build & Development

### Local development
```bash
npm install
npx vite
```
No `.env` file is required. The `GEMINI_API_KEY` in `vite.config.ts` and `README.md` is a leftover from a prior scaffold and unused.

### Production build
```bash
npm run build
# Runs build.js → bundles to dist/index.js, processes index.html
```
Output goes to `dist/`.

### Deployment
Deployed via Netlify. Push to `master` triggers automatic deployment.

## Key Conventions

### Component patterns
- All components are functional React components with `React.FC` typing
- Components use default exports
- SVG icons are centralized in `components/IconComponents.tsx` using a shared `IconProps` type
- Data arrays (services, products) are defined inline within their component files
- Card-based layouts use a local `*Card` component (e.g., `ServiceCard`, `ProductCard`)
- Header manages mobile menu state with `useState`
- Contact form uses controlled inputs with `useState`

### Styling conventions
- All styling uses Tailwind utility classes — no standalone CSS files
- Dark theme by default (surface-950 background, brand teal accents)
- Cards: `bg-surface-900 border border-surface-800 rounded-2xl` + `card-hover` class
- Buttons: `bg-brand-600 rounded-xl shadow-lg shadow-brand-600/25` pattern
- Section headers: uppercase tracking-widest brand-400 label + font-black h1
- Responsive: mobile-first, grid columns collapse on smaller screens

### TypeScript
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- Custom element types declared via `JSX.IntrinsicElements` augmentation (in `custom.d.ts` and `App.tsx`)
- Target: ES2020, JSX: react-jsx

### Adding new content
- **New service:** Add an entry to the `services` array in `components/Services.tsx` (include `tag` field)
- **New product:** Add an entry to the `productsData` array in `components/Products.tsx` (include `tags`, `color`, `abbr`)
- **New icon:** Export a new component from `components/IconComponents.tsx` using the `IconProps` type
- **New page/route:** Create component in `components/`, add `<Route>` in `App.tsx`, add entry to `navItems` in `Header.tsx`

## Important Notes

- The `HashRouter` is used (URLs contain `#`) — intentional for static hosting compatibility on Netlify
- The ElevenLabs widget in `App.tsx` requires the `elevenlabs-convai` script loaded in `index.html`
- The `metadata.json` requests microphone permissions (for the ElevenLabs voice agent)
- The contact form is client-side only — no backend submission currently wired up
- No test framework is configured
- No linter or formatter is configured
- No `.gitignore` file exists — be cautious about committing `node_modules/` or `dist/`
