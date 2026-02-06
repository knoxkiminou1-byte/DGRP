# DGRP Baysound

## Overview
A static website for DGRP Baysound - "Architecting the Future of Sound." Built with Vite + React + TypeScript. Deployed as a static site.

## Project Architecture
- **Frontend**: React 18 with Vite, TailwindCSS, Radix UI components, Framer Motion
- **Routing**: wouter (client-side SPA routing)
- **Deployment**: Static site (HTML/CSS/JS output to dist/public)

## Structure
```
client/          - React frontend (Vite)
  src/
    components/  - UI components (Radix/shadcn)
    pages/       - Page components (home, contact, not-found)
    hooks/       - Custom React hooks
    lib/         - Utilities
attached_assets/ - Static image assets (artist photos, logo)
server/          - Legacy server files (not used in static mode)
shared/          - Shared types/schema
```

## Key Configuration
- Dev: `npm run dev` (Vite dev server on 0.0.0.0:5000)
- Build: `npm run build` (Vite build to dist/public)
- Deployment: Static site from dist/public
- Vite: allowedHosts: true, port 5000

## Recent Changes
- 2026-02-06: Converted from full-stack Express app to static site
- 2026-02-06: Added artist names under roster images (Sylvia & NorCal GMWA Fresno Choir, Izael Garcia, Elois Drew, Breno Brown)
- 2026-02-06: Initial Replit setup
