# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MITI (Make It Take It) is a Korean basketball game hosting and participation platform. Users can browse games, join pickups, find nearby courts, and host their own games.

## Commands

```bash
npm run dev          # Start dev server on port 3000
npm run build        # Type-check + production build (tsc && vite build)
npm run lint         # ESLint (zero warnings allowed)
npm run test         # Unit/component tests via Vitest (run once)
npm run test:ui      # Vitest with interactive UI
npm run test:e2e     # Playwright E2E tests (requires dev server running on port 3000)
npm run storybook    # Storybook on port 6006
npm run check:unused # ts-prune scan for unused exports
```

To run a single test file:
```bash
npx vitest run src/features/header/tests/Header.test.tsx
```

## Architecture

### Directory Layout

```
src/
  pages/        # Route-level components — thin wrappers that compose feature components
  features/     # Feature modules (see structure below)
  store/        # Global Zustand stores shared across features
  utils/        # axios instance, date utilities
  mocks/        # MSW browser worker setup
  components/   # (legacy) shared UI components
  interfaces/   # (legacy) shared TypeScript interfaces
```

### Feature Module Structure

Each feature under `src/features/<feature>/` follows this pattern:
- `api/` — axios API call functions
- `interface/` — TypeScript types for the feature
- `hooks/` — React hooks; server state hooks go in `hooks/query/`
- `components/` — Feature-scoped UI components
- `store/` — Feature-local Zustand stores
- `mocks/` — MSW handlers for local dev mocking
- `enum/` and `constants/` — Shared enums and display constants

### State Management

Two layers:
1. **TanStack Query v5** — all server state. Query hooks live in `features/*/hooks/query/`. The single `QueryClient` is created in `main.tsx`.
2. **Zustand** — client UI state only. Global stores in `src/store/` (game filters, lat/long, date/time selection). Feature-local stores live inside the feature's `store/` folder.

### API Layer

`src/utils/axios.ts` exports a single axios instance pointing to `https://api.makeittakeit.kr` with `withCredentials: true` (cookie-based auth). Most feature APIs import this instance. Exception: `src/features/auth/api/auth.ts` calls the auth endpoint directly with raw axios (not the shared instance).

### Routing

All routes are defined in `src/main.tsx` using `createBrowserRouter`. The root layout (`App.tsx`) renders `<Header>`, `<Outlet>`, and `<Footer>`. The `/host-guide` route bypasses the root layout and renders standalone.

### Mock Service Worker

MSW auto-starts in dev mode inside `initApp()` in `main.tsx`. Handlers are registered in `src/features/games/mocks/handler.ts` and wired up in `src/mocks/browser.ts`. The service worker file lives in `public/mockServiceWorker.js`.

### Auth

Authentication uses Kakao OAuth (`/kakao/login` handles the callback) and email/password login. Tokens are stored in httpOnly cookies — all API requests include `withCredentials: true`.

### Path Alias

`@/` resolves to `src/`. Use this for all non-relative imports (e.g., `import { foo } from '@/utils/axios'`).
