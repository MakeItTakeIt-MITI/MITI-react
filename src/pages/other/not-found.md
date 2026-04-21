# Not Found Page (404)

**Route:** `*` (wildcard — all unmatched paths)
**File:** `src/pages/other/NotFound.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

A standard 404 error page displayed when a user navigates to a path that does not exist in the router. Shows the error code, an explanation in Korean, and a `MoveToAppBanner` encouraging the user to download the mobile app.

---

## User Flow

```
User enters an unknown URL
  └── Router matches "*" → NotFound renders
        ├── "404" heading
        ├── "페이지를 찾을 수 없습니다." title
        ├── Explanation text
        └── MoveToAppBanner (app download CTA)
```

---

## Component Structure

```
NotFound (page)
├── <h1> 404 </h1>
├── <h2> 페이지를 찾을 수 없습니다. </h2>
├── <p>  explanation text </p>
└── <MoveToAppBanner />
      └── no props — static app download CTA
```

---

## Hooks Used

None.

---

## API Called

None.

---

## Props Flow

No props. Fully static page.

---

## Notes

- `MoveToAppBanner` is a shared component also used on the Policies and Policy Detail pages.
- No Zustand stores, no local state, no API calls.
