# FAQ Page

**Route:** `/faq`
**File:** `src/pages/faq/Faq.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

A Frequently Asked Questions page. FAQs can be filtered by category tab and by search keyword. The active tab is stored in the `?tab=` URL search param. Keyword search is read from `?search=` but no search input is rendered in the current UI.

---

## User Flow

```
User arrives at "/faq"
  ├── All FAQs loaded (no filter)
  ├── Clicks a tab (e.g. "경기") in FaqContainer
  │     └── handleToggleTab("경기") → ?tab=경기 added to URL → FAQs filtered
  └── [URL contains ?search=keyword]
        └── FAQs filtered by keyword (no search input rendered in UI currently)
```

---

## Local State

| State | Type | Default | Purpose |
|---|---|---|---|
| `inputContent` | `string` | `""` (lazy init) | Intended search keyword — always empty; no UI input updates it |

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `handleToggleTab` | `(selected: string) => void` | Merges `{ tab: selected }` into existing URL search params. Wrapped in `useCallback` to prevent unnecessary re-renders of `FaqContainer`. |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useFaqDataHook(search?)` | `src/features/faq/hooks/useFaqDataHook.tsx` | `useQuery` — fetches FAQ list; `staleTime: 5000ms` |
| `useSearchParams()` | `react-router-dom` | Reads `?tab=` and `?search=` params; writes `?tab=` on tab click |
| `useCallback` | React | Memoises `handleToggleTab` |
| `useState` | React | Manages `inputContent` (currently unused) |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/support/faq?search=` | None | Returns FAQ list, optionally filtered by search keyword |

**Response shape (`.data`):**
```ts
FaqDataField[]  // array of FAQ items with question, answer, category fields
```

---

## Props Flow

```
Faq (page)
│   search = inputContent || searchParams.get("search") || undefined
│   data   = useFaqDataHook(search)
│
└── <FaqContainer
      handleToggleTab={handleToggleTab}   // (selected: string) => void
      data={data}                         // FaqDataField[]
      isLoading={isLoading}               // boolean
      currentTab={currentTab}             // string | null
    />
      ├── <FaqTabs currentTab handleToggleTab />
      │     └── Tab buttons — calls handleToggleTab on click
      ├── [isLoading] renders skeleton list items
      └── [loaded] list of <FaqCard /> items
            └── filtered client-side by currentTab (if provided)
```

---

## Notes

- `inputContent` is initialised with `useState<string>(() => "")` using a lazy initialiser but is never updated. The `setInputContent` setter is not used anywhere. Effectively `inputContent` is always `""`.
- Because `inputContent` is always empty, the effective search value is `searchParams.get("search") ?? undefined`. This means keyword search works only if `?search=` is placed in the URL manually or by another component — there is no search input rendered on this page.
- `staleTime: 5000` means the FAQ data is re-fetched at most once every 5 seconds.
- No Zustand stores are used on this page.
