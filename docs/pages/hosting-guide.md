# Hosting Guide Page

**Route:** `/host-guide`
**File:** `src/pages/hosting-guide/HostingGuide.tsx`
**Layout:** Standalone — **NOT wrapped in the global `App` layout** (no shared `<Header />`)

---

## Overview

A static informational page explaining how to host a basketball game on MITI. Content is split into four carousel-style sections presenting the steps and benefits of hosting. The page has its own `<Footer />` but no global navigation header.

---

## User Flow

```
User navigates to "/host-guide"
  ├── No global header rendered (standalone route)
  ├── FirstCarousel  — introduction / what is hosting
  ├── SecondCarousel — hosting benefits
  ├── ThirdCarousel  — step-by-step how-to
  ├── FourthArticle  — closing CTA
  └── Footer
```

---

## Component Structure

```
HostingGuide (page — standalone layout)
├── <FirstCarousel />   no props — static content
├── <SecondCarousel />  no props — static content
├── <ThirdCarousel />   no props — static content
├── <FourthArticle />   no props — static content
└── <Footer />          no props — shared footer component
```

---

## Hooks Used

None — fully static page.

---

## API Called

None.

---

## Props Flow

No props passed to any component. All content is hardcoded within each carousel component.

---

## Notes

- This is the only route defined outside the root `App` layout in `main.tsx`. It uses its own isolated route tree:
  ```ts
  { path: "/host-guide", children: [{ path: "", element: <HostingGuide /> }] }
  ```
- The `<Navbar />` component is commented out in the source — the page originally had its own navigation bar.
- No Zustand stores, no API calls, no local state.
