# Courts Page

**Route:** `/courts`
**File:** `src/pages/courts/Courts.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

A searchable, filterable directory of basketball courts. Users filter by Korean province and search by court name. Results are loaded with infinite scroll. A sidebar (desktop) and a mobile filter popup offer province multi-select. Each court card links to the Court Details page.

---

## User Flow

```
User arrives at "/courts"
  ├── Geolocation requested on mount
  ├── All courts loaded (page 1, no filters)
  │
  ├── [Desktop] Sidebar province checkboxes
  │     └── Click province → toggleProvince(region) → refetch + update filter
  │
  ├── [Mobile] MobileFilterBox popup
  │     └── Same province multi-select
  │
  ├── SearchBar: type court name
  │     └── Writes ?search= to URL → query re-runs with search param
  │
  ├── Scroll to bottom → next page fetched automatically (infinite scroll)
  │
  └── Click a court card → navigate → /courts/:id
```

---

## Local State (inside `useCourtsDataPage`)

| State | Type | Default | Purpose |
|---|---|---|---|
| `selectedProvince` | `string[]` | `[]` | Currently active province filters |
| `geolocation` | `{ lat: number, lon: number } \| null` | `null` | Device GPS for distance display |

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `toggleProvince` | `(region: string) => void` | Adds or removes `region` from `selectedProvince`; also calls `refetch()` immediately to refresh results |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useCourtsDataPage()` | `src/features/courts/hooks/useCourtsDataPage.tsx` | All page logic: data, scroll, province filter, geolocation |
| `useAllCourts(province, search)` | `src/features/courts/hooks/query/useAllCourts` | `useInfiniteQuery` — cursor-paginated courts list |
| `useSearchParams()` | `react-router-dom` | Reads `?search=` URL param |
| `useInView()` | `react-intersection-observer` | Detects list bottom; triggers `fetchNextPage` |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/courts` | None | Paginated list of courts |

**Query params:**

| Param | Type | Description |
|---|---|---|
| `cursor` | `number \| null` | Pagination cursor |
| `limit` | `number \| null` | Items per page |
| `province` | `string[]` | Province filter (multi-value) |
| `search` | `string \| null` | Court name keyword |

> Null, empty string, and empty array values are stripped before the request.

---

## Props Flow

```
Courts (page)
│   hook: useCourtsDataPage()
│
├── <CourtsSidebar
│     toggleProvince={toggleProvince}        // (region: string) => void
│     selectedProvince={selectedProvince}    // string[]
│   />
│     └── Province checkbox list — calls toggleProvince on each click
│
├── <SearchBar title="경기장" paramKey="search" />
│     └── Writes ?search= to URL; no props carrying data — reads/writes URL directly
│
├── <MobileFilterBox
│     toggleProvince={toggleProvince}        // (region: string) => void
│     selectedProvince={selectedProvince}    // string[]
│   />
│     └── Mobile province selector popup
│
└── <CourtsListContainer
      courstDataPage={courtsDataPage}        // CourtsField[] | undefined
      hasNextPage={hasNextPage}              // boolean
      courtsListRef={courtsListRef}          // ref for scroll sentinel
      geoLatitude={geolocation?.lat}         // string | number | null | undefined
      geoLongitude={geolocation?.lon}        // string | number | null | undefined
      isLoading={isLoading}                  // boolean
    />
      ├── [isLoading] renders <CourtsListSkeleton /> (8 skeleton rows)
      └── [loaded] renders list of <CourtsCard /> items
            └── <div ref={courtsListRef} /> at bottom — scroll sentinel
```

---

## Notes

- `toggleProvince` calls `refetch()` before updating state, ensuring the UI refreshes with the new filter immediately.
- `SearchBar` is a shared component — it writes `?search=` to the URL directly via `useSearchParams`; the hook reads it via `inputContent.get("search")`.
- Geolocation is requested automatically on mount via `navigator.geolocation.getCurrentPosition` inside `useCourtsDataPage`.
- Distance between user and each court is computed inside `CourtsCard` using `geoLatitude`/`geoLongitude`.
