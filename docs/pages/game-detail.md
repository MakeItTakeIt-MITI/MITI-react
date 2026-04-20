# Game Detail Page

**Route:** `/games/:id`
**File:** `src/pages/games/GameDetail.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

Displays the full details of a single basketball game identified by its URL `:id` parameter. Two side-by-side panels cover game metadata (court, date, host, participants) and participation actions (join/leave). A promotional banner appears at the bottom.

---

## User Flow

```
User clicks a game card or map marker on /games
  └── navigate → /games/:id
        ├── Game data fetched by ID
        ├── [Loading] skeleton placeholders shown in both panels
        └── [Loaded]
              ├── Left panel:  court name, date/time, host info, participant count
              └── Right panel: join/leave game actions, guest list
```

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useParams()` | `react-router-dom` | Reads game `id` from the URL |
| `useGameDetails({ id })` | `src/features/game-detail/hooks/query/useGameDetails.tsx` | `useQuery` — fetches full game data by ID |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/games/:id` | None | Returns full game details |

**Response shape (`.data`):**
```ts
{
  id: number,
  title: string,
  court: { name: string, address: string, latitude: string, longitude: string },
  host: { nickname: string, ... },
  start_date: string,       // "YYYY-MM-DD"
  start_time: string,       // "HH:MM"
  status: string,           // "open" | "closed" | "completed" | "canceled"
  max_invitation: number,
  guests: GuestField[],
  ...
}
```

---

## Props Flow

```
GameDetail (page)
│   data = useGameDetails({ id })
│
├── <GameDetailsPanel
│     gameDetailData={gameDetailData?.data || {}}   // GameDetail object
│     isLoading={isLoading}                         // boolean
│   />
│     ├── [isLoading] renders animated skeleton
│     └── [loaded]
│           ├── <GameDetailMap lat long />
│           ├── <HostDetails host={gameDetailData.host} />
│           └── <JoinGameButton gameDetailData />
│
├── <GameDetailContainer
│     gameDetailData={gameDetailData?.data || {}}   // GameDetail object (optional)
│     isLoading={isLoading}                         // boolean
│   />
│     ├── [isLoading] renders animated skeleton
│     └── [loaded]
│           └── game participation UI (join/leave/guest list)
│
└── <BannerMedium type="dongtan_court" />
      └── type: string — selects banner image
```

---

## Notes

- Both `GameDetailsPanel` and `GameDetailContainer` independently handle loading state with their own skeleton components — the page itself does not gate rendering.
- `gameDetailData?.data || {}` means an empty object is passed during load. Both child components handle the case where data fields may be undefined.
- No Zustand stores are used on this page.
