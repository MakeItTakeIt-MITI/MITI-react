# Games Page

**Route:** `/games`
**File:** `src/pages/games/Games.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

The core feature page. Displays basketball pickup games filtered by date, time, status, and region. Games are shown as either an interactive Naver Map with location markers or a vertically scrollable card list with infinite loading. A sidebar (desktop) and a collapsible modal (mobile) provide filtering controls. The user's geolocation is requested on mount to enable distance calculations.

---

## User Flow

```
User arrives at "/games"
  ├── Browser requests geolocation permission
  ├── Default view: Map tab, today's games, all statuses
  │
  ├── [Desktop Sidebar]
  │     ├── Select a date → dateFormat updated → map/list re-fetched
  │     ├── Pick a time → timeFormat updated → map re-fetched
  │     ├── Toggle game statuses (open / closed / completed)
  │     ├── Select province(s) → map/list re-fetched
  │     └── Click "초기화" → all filters reset to defaults
  │
  ├── [Mobile] Click filter icon → MobileFilterModal opens
  │     └── Same filter controls in overlay
  │
  ├── Click "Map" tab  → GamesMap displayed (Naver Map with markers)
  │     └── Click a marker → map pans to court; address info panel appears
  │
  └── Click "List" tab → infinite scroll card list
        └── Scroll to bottom → next page fetched automatically
```

---

## Local State (inside `useGamesPage`)

| State | Type | Default | Purpose |
|---|---|---|---|
| `tab` | `string` | `"map"` | Active view — `"map"` or `"list"` |
| `isFilterBoxOpen` | `boolean` | `false` | Controls mobile filter modal visibility |
| `selectedProvince` | `string[]` | `[]` | Currently selected province filter values |
| `geolocation` | `{ lat: number, lon: number } \| null` | `null` | Device GPS coordinates for distance display |

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `handleToggleTab` | `(selected: string) => void` | Switches between `"map"` and `"list"` view |
| `handleToggleMobileFilterBox` | `() => void` | Toggles `isFilterBoxOpen` on/off |
| `handleSetProvinceState` | `(province: string) => void` | Adds or removes a province from `selectedProvince` |
| `handleResetProvince` | `() => void` | Clears `selectedProvince` to `[]` |
| `handleCurrentGeoLocation` | `() => void` | Re-requests device GPS on demand |
| `handleResetSidebarSettings` | `() => void` | Resets all filters: calls `resetTime()`, `resetAllStatuses()`, `resetToToday()`, and `handleResetProvince()` |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useGamesPage()` | `src/features/games/hooks/useGamesPage.ts` | Tab state, province filter, infinite scroll, geolocation |
| `useDatesLogic()` | `src/features/games/components/sidebar/hooks/useDatesLogic.ts` | Generates 30-day date array (KST); computes `dateFormat` for API |
| `useTimeField()` | `src/store/Sidebar/useTimeFieldStore.ts` | Reads `hour`, `minutes`; calls `resetTime()` on reset |
| `useGameStatusStore()` | `src/features/games/store/useGameStatusStore.ts` | Reads `gameStatusArray`; calls `resetAllStatuses()` on reset |
| `useDateStore()` | `src/features/games/components/sidebar/store/useDateStore.ts` | Reads selected date; calls `resetToToday()` on reset |
| `useSelectedStore()` | `src/store/NaverMap/useSelectedStore.tsx` | Reads `selectedAddress` and `isSelected` for map marker state |
| `useMapGamesList(date, time, statuses, province)` | `src/features/games/hooks/query/useMapGamesList.tsx` | `useQuery` — fetches all games for map pins |
| `useGamesListData(statuses, province, search)` | `src/features/games/hooks/query/useGamesListData.tsx` | `useInfiniteQuery` — cursor-based paginated game list |
| `useTimeFormatting()` | `src/features/games/hooks/useTimeFormatting.ts` | Computes `timeFormat` string from raw hour/minute state |
| `useInView()` | `react-intersection-observer` | Detects bottom of list; triggers `fetchNextPage` |

---

## Zustand Stores Used

| Store | Values Read | Actions Called |
|---|---|---|
| `useTimeField` | `hour`, `minutes` (via `useTimeFormatting`) | `resetTime()` |
| `useGameStatusStore` | `gameStatusArray` | `resetAllStatuses()` |
| `useDateStore` | `selectedYear`, `selectedMonth`, `selectedDay` | `resetToToday()` |
| `useSelectedStore` | `selectedAddress`, `isSelected` | — (read-only at page level) |

---

## API Called

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/games/map` | Fetches all games matching filters for map pin rendering |
| `GET` | `/games/list` | Fetches paginated game list (cursor-based, 20 per page) |

**`/games/map` query params:**

| Param | Type | Description |
|---|---|---|
| `startdate` | `string` | `YYYY-MM-DD` (KST) |
| `starttime` | `string` | Time string e.g. `"09:30"` |
| `game_status` | `string[]` | e.g. `["open","closed","completed"]` |
| `province` | `string[]` | e.g. `["서울","경기"]` |

**`/games/list` query params:**

| Param | Type | Description |
|---|---|---|
| `game_status` | `string[]` | Status filter |
| `province` | `string[]` | Region filter |
| `search` | `string` | Keyword search |
| `cursor` | `number \| null` | Pagination cursor |
| `limit` | `number` | Items per page (hardcoded `20`) |

> Empty arrays and null values are stripped from query params before the request is sent.

---

## Props Flow

```
Games (page)
│
├── <BannerMedium type="manners" />
│     └── type: string — selects which banner image/content to render
│
├── <GameSideBar
│     INITIAL_DATES={INITIAL_DATES}           // InitialDateField[] — 30-day date array
│     handleSetYearMonthDay={handleSetYearMonthDay} // (year, month, day) => void
│     dateFormat={dateFormat}                 // string — "YYYY-MM-DD"
│     todayMonth={selectedMonth}              // number — current month (1-12)
│     selectedProvince={selectedProvince}     // string[] — active province filters
│     handleSetProvinceState={handleSetProvinceState} // (province) => void
│     handleResetSidebarSettings={handleResetSidebarSettings} // () => void
│     tab={tab}                               // string — "map" | "list"
│   />
│     ├── <DatesField INITIAL_DATES handleSetYearMonthDay todayMonth />
│     ├── <TimesField />  (reads useTimeField + useTimeFieldStore directly)
│     ├── <GameStatusContainer /> (reads useGameStatusStore directly)
│     ├── <ProvinceField selectedProvince handleSetProvinceState />
│     └── <ResetStatusField handleResetSidebarSettings />
│
└── <GameMapListContainer
      handleToggleTab={handleToggleTab}         // (tab) => void
      handleToggleMobileFilterBox={handleToggleMobileFilterBox} // () => void
      gamesMapData={mapDataList}               // GameField[] — for map markers
      allGames={allGames}                      // GameField[] — for list view
      mapDataList={mapDataList}                // GameField[] — for card display
      isMapGameListLoading={isMapGameListLoading} // boolean
      isGamesListLoading={isFetchingNextPage}  // boolean
      isFilterBoxOpen={isFilterBoxOpen}        // boolean
      tab={tab}                               // string
      inViewGameListRef={inViewGameListRef}    // React.Ref<HTMLDivElement> — scroll sentinel
      selectedProvince={selectedProvince}      // string[]
      handleResetProvince={handleResetProvince} // () => void
      handleSetProvinceState={handleSetProvinceState} // (province) => void
      geolocation={geolocation}               // { lat, lon } | null
      handleCurrentGeoLocation={handleCurrentGeoLocation} // () => void
      selectedAddress={selectedAddress}        // string | null (from useSelectedStore)
      isSelected={isSelected}                 // boolean (from useSelectedStore)
    />
      ├── <TabNavigation handleToggleTab tab />
      ├── [tab === "map"]  <MapView gamesMapData selectedAddress isSelected ... />
      │     └── <GamesMap /> or <GameMap />
      │           └── reads useMapCoordinatesStore + useSelectedStore directly
      └── [tab === "list"] <ListView allGames inViewGameListRef ... />
            └── + <MobileFilterModal isFilterBoxOpen ... /> (mobile only)
```

---

## Notes

- `selectedProvince` is local component state (in `useGamesPage`), not a Zustand store. The `useProvinceStore` was evaluated but commented out in favour of this simpler approach.
- The `useFilterBoxSettings` hook bridges raw store values into the display chip labels used by `useGameFilterStore` (the filter header chips). It is used inside sidebar/filter components, not directly in the page.
- Both `/games/map` and `/games/list` are fetched simultaneously. The map endpoint returns all matching games without pagination; the list endpoint is cursor-paginated.
