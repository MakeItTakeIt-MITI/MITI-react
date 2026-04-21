---
name: Pre-existing TypeScript build errors in MITI
description: Known TS errors that existed before 2026-04-21 legacy cleanup — not introduced by the cleanup
type: project
---

# Pre-existing Build Errors (as of 2026-04-21)

**Why:** These errors existed before legacy collection. Verified by git stash + rebuild.

**How to apply:** Do not treat these as regressions when future cleanup causes `tsc` to fail. Investigate separately.

## Errors

1. `src/pages/courts/court-details/CourtDetails.tsx` — uses `../../features/...` relative paths but file is 3 levels deep (`pages/courts/court-details/`), so `../../features/` resolves to `pages/features/` (non-existent). Should be `../../../features/`. The `@/`-aliased import works fine.

2. `src/pages/games/game-detail/GameDetail.tsx` — same issue: uses `../../features/...` relative paths from 3 levels deep. Should be `../../../features/`.

These files appear to have been moved from flat `src/pages/courts/` and `src/pages/games/` into subdirectories without updating relative import paths. The `@/`-aliased imports in the same files work correctly.
