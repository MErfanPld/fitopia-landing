# فیتوپیا | Fitopia Landing Page

Premium one-page landing page for Fitopia — the smart fitness platform for discovering gyms, comparing memberships, and managing your fitness journey.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **GSAP ScrollTrigger**
- **Three.js + React Three Fiber + Drei**
- **Lenis** smooth scroll
- **Lucide React** icons

## Features

- Full RTL / Persian-only experience
- Mobile-first responsive design
- Cinematic 3D hero with floating phone
- Apple-style scroll storytelling
- Glassmorphism feature cards
- 3D orbiting sports ecosystem
- Animated statistics counters
- Horizontal app preview showcase
- Premium testimonials carousel
- SEO optimized (metadata, Open Graph)
- Reduced-motion support
- High performance (lazy-loaded 3D, optimized dpr)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
cd fitopia-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Type Check & Lint

```bash
npm run typecheck
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme tokens + utilities
│   ├── layout.tsx       # Root layout (RTL, Vazirmatn, SEO)
│   └── page.tsx         # Landing page composition
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, ScrollStory, Features, ...
│   ├── three/           # FloatingPhone, EcosystemScene
│   ├── ui/              # Button, LoadingScreen, PhoneFrame
│   └── providers/       # SmoothScrollProvider
├── hooks/
├── lib/
│   └── utils.ts
public/
  screenshots/           # Real app screenshots (WebP)
```

## Design System

| Token        | Value     |
|--------------|-----------|
| Primary      | `#FF6A00` |
| Background   | `#07070A` |
| Surface      | `#0F0F14` |
| Text         | `#FFFFFF` |
| Font         | Vazirmatn |

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Build Command: `npm run build`
5. Output Directory: `.next` (default)
6. Deploy.

Environment variables are not required for the static landing experience.

### Performance Tips

- 3D scenes use `dpr={[1, 1.5]}` and `powerPreference: "high-performance"`.
- Heavy components are dynamically imported with `ssr: false`.
- Lenis + GSAP respect `prefers-reduced-motion`.
- Tailwind v4 + optimized package imports keep bundle lean.

## Real App Screenshots

The landing page uses **real screenshots** of the Fitopia React App inside device frames.

### Generate / refresh screenshots

1. Start the Fitopia React App:
   ```bash
   cd ../fitopia-react-app   # or your clone of MErfanPld/Fitopia-React-App
   npm install
   npm run dev               # http://localhost:3000
   ```

2. Provide auth tokens (for protected routes):
   ```bash
   # Option A: env vars
   export FITOPIA_ACCESS_TOKEN="..."
   export FITOPIA_REFRESH_TOKEN="..."

   # Option B: scripts/.tokens.json
   # { "access": "...", "refresh": "..." }
   ```

3. From the landing root:
   ```bash
   npm install               # installs playwright, sharp, tsx
   npx playwright install chromium
   npm run generate:screenshots
   ```

Screenshots are written to `public/screenshots/` as WebP (mobile + desktop).

The `PhoneFrame` component and sections (Hero, ScrollStory, AppPreview) automatically use these files.

## License

Proprietary — Fitopia © 2026
