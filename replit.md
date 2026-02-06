# DGRP Baysound

## Overview
A full-stack web application for DGRP Baysound - "Architecting the Future of Sound." Built with Express + Vite + React + TypeScript.

## Project Architecture
- **Frontend**: React 18 with Vite, TailwindCSS, Radix UI components, Framer Motion
- **Backend**: Express.js with TypeScript (tsx)
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Routing**: wouter (client-side), Express (server-side API)
- **State Management**: TanStack React Query

## Structure
```
client/          - React frontend (Vite)
  src/
    components/  - UI components
    pages/       - Page components
    hooks/       - Custom React hooks
    lib/         - Utilities
server/          - Express backend
  index.ts       - Entry point, binds to port 5000
  routes.ts      - API routes (/api/*)
  storage.ts     - Data storage interface (MemStorage)
  vite.ts        - Vite dev server integration
shared/          - Shared types/schema (Drizzle)
attached_assets/ - Static image assets
```

## Key Configuration
- Dev: `npm run dev` (tsx server/index.ts) - serves both API and frontend on port 5000
- Build: `npm run build` (vite build + esbuild server bundle)
- Production: `npm run start` (node dist/index.js)
- DB Push: `npm run db:push` (drizzle-kit push)
- Server binds to `0.0.0.0:5000`
- Vite allowedHosts: true (configured in server/vite.ts)

## Recent Changes
- 2026-02-06: Initial Replit setup - installed dependencies, created PostgreSQL database, pushed schema, configured workflow and deployment
