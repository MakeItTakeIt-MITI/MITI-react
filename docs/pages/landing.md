# Landing Page

**Route:** `/`
**File:** `src/pages/landing/Landing.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

The marketing entry point of the application. Presents an interactive 3D basketball scene (Spline), a brand tagline, and CTAs directing users to the Games page. A YouTube video playlist showing MITI highlights is displayed below the hero. On desktop, a host guide video modal is available. The page is fully responsive with separate DOM trees for mobile and desktop.

---

## User Flow

```
User arrives at "/"
  ├── Sees 3D Spline animation + brand tagline
  ├── [Desktop] Clicks "오늘의 경기 보러가기" ──────────── navigate to /games
  ├── [Desktop] Clicks "게스트 모집 가이드"
  │     ├── Video modal opens (autoplay MP4)
  │     ├── Presses Escape / clicks backdrop / clicks "닫기"
  │     └── Modal closes
  ├── [Mobile]  Clicks "오늘 참여 가능한 경기" ─────────── navigate to /games
  └── Scrolls down ──────────────────────────────────── YouTube playlist visible
```

---

## Local State

| State | Type | Default | Purpose |
|---|---|---|---|
| `openVideo` | `boolean` | `false` | Controls video modal overlay visibility |

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `handleVideoOpen` | `() => void` | Sets `openVideo = true` |
| `handleVideoClose` | `() => void` | Sets `openVideo = false` |
| `onKeyDown` | `(e: KeyboardEvent) => void` | ESC key listener — calls `handleVideoClose`. Registered via `useEffect` when `openVideo` is `true`; cleaned up when it closes |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useYoutuBePlaylist(playlistId, apiKey)` | `src/features/landing/hooks/useYoutubePlaylist.tsx` | Fetches up to 4 YouTube playlist items |
| `useState` | React | Manages `openVideo` |
| `useEffect` | React | Registers/removes ESC key listener when modal opens/closes |

---

## API Called

| Method | URL | Description |
|---|---|---|
| `GET` | `https://www.googleapis.com/youtube/v3/playlistItems` | YouTube Data API v3 — fetches playlist items |

**Params:**
```
part=snippet,contentDetails
playlistId=PLOU4W5XbHwpKXmG3HN_vQmarlYhqOJI5L
maxResults=4
key=VITE_YOUTUBE_API_KEY
```

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_YOUTUBE_API_KEY` | YouTube Data API v3 key |

---

## Props Flow

```
Landing (page)
│
├── [conditional: openVideo === true]
│     └── <video> (inline, no component)
│           src="https://image.makeittakeit.kr/video/host-guide.mp4"
│           ── no props; controlled by local state only
│
└── <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      │   youtubeData: PlaylistItem[] | undefined
      └── renders playlist cards
```

---

## Notes

- The Spline scene URL is hardcoded: `https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode`
- The YouTube playlist ID is hardcoded as a constant: `PLOU4W5XbHwpKXmG3HN_vQmarlYhqOJI5L`
- The host guide video URL is hardcoded: `https://image.makeittakeit.kr/video/host-guide.mp4`
- Mobile and desktop layouts are entirely separate DOM trees (`sm:block md:hidden` / `sm:hidden md:block`)
- The video modal is desktop-only; the mobile layout has no video modal button
