---
name: MITI codebase patterns for legacy collection
description: Patterns discovered during 2026-04-21 legacy scan — dead zones, orphan areas, and architectural notes
type: project
---

# MITI Codebase Dead Code Patterns (scanned 2026-04-21)

## Why: Full legacy scan performed to archive unused files.
## How to apply: Use these patterns to guide future cleanup runs.

## Dead Code Zones Found

### Old game list architecture (pre-GameMapListContainer era)
The following files represent the old games page architecture before the `GameMapListContainer` + `ListView`/`MapView` refactor:
- `GameListContainer.tsx`, `MobileGameListContainer.tsx`, `MobileGameListCard.tsx` (at `src/features/games/` root)
- `NaverMap.tsx` (replaced by `src/features/naver_map/components/GameMap.tsx`)
- `GamesMap.tsx`, `Layout.tsx` (in `src/features/games/components/`)
- `FilteredGameCard.tsx`, `FilteredGameListContainer.tsx`, `FilteredStatus.tsx`, `RegionFilterContainer.tsx`
- `GameCardLink.tsx`, `GameCardSkeleton.tsx`, `GameListCard.tsx`, `GameDetailMap.tsx`
- `GameCardStatic.tsx` (in `cards/` subfolder)

### Old filter box architecture
The hook-based filter box (now replaced by sidebar + mobile modal) is dead:
- `src/features/games/hooks/useFilterBox.tsx`
- `src/features/games/hooks/useFilterBoxSettings.tsx`
- `src/features/games/hooks/useGameUrlParams.ts`
- `src/features/games/utils/dateUtils.ts`
- `src/features/games/components/filters/game-filter/DateCard.tsx`

### Old global stores (only used by dead filter box)
- `src/store/useCurrentLocationStore.ts`
- `src/store/useLatLongStore.ts`
- `src/store/useCurrentMonthStore.ts`
- `src/store/useDateSelectionStore.ts`
- `src/store/useStatusSelectionStore.ts`
- `src/store/useTimeStore.ts` (separate from active `store/Sidebar/useTimeFieldStore.ts`)

### naver_map vs naver-map duplicate
- `src/features/naver_map/` — the active version (GameMap.tsx is LIVE, used by MapView)
- `src/features/naver-map/` — duplicate dead feature (MapIcon, MapGameOverlapBadge)
- Dead within naver_map: `GamesMap.tsx`, `MediumMap.tsx`, `SmallMap.tsx`, `interface/naver_map.ts`

### Old MSW mock setup
- `src/mocks/handlers.ts` — old handlers file (active is `src/mocks/browser.ts` using `games/mocks/handler.ts`)
- `src/mocks/common.ts` — only used by dead handlers.ts
- `src/features/inquiries/mock/inquiriesListHandler.ts` — only registered in dead handlers.ts
- `src/features/inquiries/mock/inquiriesListMockData.ts` — only used by dead handler

### Old shared UI
- `src/components/common/Footer.tsx` — replaced by `src/features/common/components(renewal)/common/Footer.tsx`
- `src/interfaces/courts.ts` — not used anywhere

### Unused renewal components (Storybook-only)
- `BannerSmall.tsx` + stories
- `Hamburger.tsx` + stories
- `StoreButton.tsx` + stories
- `FilterStatus.tsx` + stories

### Duplicate courts hook
- `src/features/courts/hooks/query/useAllCourts.tsx` — shadowed by `.ts` version (bundler resolves `.ts` first)
- `src/features/courts/hooks/useCourtDetailData.tsx` — not imported anywhere

### Misc dead files
- `src/features/landing/components/Card.tsx` + stories + `CardsContainer.tsx` — not imported in Landing page
- `src/features/inquiries/components/ListCard.tsx` — not imported
- `src/features/inquiries/components/Pagination.tsx` — commented out import in Inquiries.tsx
- `src/features/inquiry-details/components/AdminReplyField.tsx` — commented out in InquiryDetail.tsx

## Active Architecture Notes
- `src/features/naver_map/components/GameMap.tsx` IS LIVE — used by MapView.tsx
- `src/features/games/scrollbar.css` IS LIVE — used by MapView.tsx (`../../scrollbar.css` from views/)
- `src/store/Sidebar/useTimeFieldStore.ts` IS LIVE — used by Games page, MobileFilterModal, etc.
- `src/store/useGameFilterStore.ts` IS LIVE (used by live useGamesPage... wait, only dead useFilterBoxSettings imports it — needs review)
- The `components(renewal)` directory naming is intentional — it's the new design system
