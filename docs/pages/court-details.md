# Court Details Page

**Route:** `/courts/:id`
**File:** `src/pages/courts/CourtDetails.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

Displays detailed information about a single basketball court: its location on a Naver Map, metadata (address, surface type, facilities), and a paginated list of upcoming games scheduled there. Geolocation is requested on mount for distance calculation.

---

## User Flow

```
User clicks a court card on /courts
  └── navigate → /courts/:id
        ├── Geolocation requested on mount
        ├── Court detail fetched by ID
        ├── Games at this court fetched (first page)
        └── [Loaded]
              ├── Left: Naver Map centered on court coordinates
              └── Right: CourtInfoContainer
                    ├── Court name, address, facilities
                    ├── Game list for this court
                    └── "더 보기" load-more button (if hasNextPage)
```

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useCourtsDataPage()` | `src/features/courts/hooks/useCourtsDataPage.tsx` | Shared hook; provides `courtDetailData`, `courtsGamesPageContent`, `hasCourtsDetailNextPage`, `fetchCourtsDetailNextPage`, `geolocation` |
| `useCourtDetails(courtId)` | `src/features/courts/hooks/query/useCourtDetails.tsx` | `useQuery` — fetches court metadata by ID |
| `useCourtsGameList(courtId)` | `src/features/courts/hooks/query/useCourtsGameList.tsx` | `useInfiniteQuery` — paginated games at this court |
| `useParams()` | `react-router-dom` | Reads court `id` from the URL; cast to `number` |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/courts/:id` | None | Court detail — name, address, latitude, longitude, facilities |
| `GET` | `/courts/:id/games` | None | Paginated games scheduled at this court |

**`/courts/:id/games` query params:**

| Param | Type | Description |
|---|---|---|
| `cursor` | `number \| null` | Pagination cursor |
| `limit` | `number \| null` | Items per page |

---

## Props Flow

```
CourtDetails (page)
│   hook: useCourtsDataPage()
│
├── <Map
│     lat={courtDetailData?.latitude}         // string | number | undefined
│     long={courtDetailData?.longitude}       // string | number | undefined
│   />
│     └── Renders Naver Map centered at given coordinates
│
└── <CourtInfoContainer
      courtDetailData={courtDetailData}                      // CourtsField
      courtsGamesPageContent={courtsGamesPageContent?.items} // CourtGamesDetailsField[]
      fetchNextPage={fetchCourtsDetailNextPage}              // () => void
      hasNextPage={hasCourtsDetailNextPage}                  // boolean
      geoLatitude={geolocation?.lat}                         // number | undefined
      geoLongitude={geolocation?.lon}                        // number | undefined
    />
      ├── <CourtDetailsCard courtDetailData geoLatitude geoLongitude />
      └── <CourtDetailGamesList
            courtsGamesPageContent
            fetchNextPage
            hasNextPage
          />
```

---

## Notes

- `useCourtsDataPage` is a shared hook used by both `Courts` and `CourtDetails`. It reads `useParams()` internally — on the Courts list page the param is undefined, which means `courtId = NaN` and `useCourtDetails(NaN)` returns nothing.
- `courtsGamesPageContent` uses only `pages[0].data` — only the first page of games is shown; manual load-more via `fetchCourtsDetailNextPage` is passed down.
- No Zustand stores are used on this page.
