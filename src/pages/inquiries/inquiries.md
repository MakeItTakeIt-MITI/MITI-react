# Inquiries List Page

**Route:** `/inquiries`
**File:** `src/pages/inquiries/Inquiries.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

Displays a list of publicly visible anonymous inquiries. Users can search by keyword, navigate to individual inquiry detail pages (password-protected), or navigate to the new inquiry form. Cursor-based pagination is implemented in the hook but the UI controls for it are currently commented out.

---

## User Flow

```
User arrives at "/inquiries"
  ├── Inquiry list loaded (page 1)
  ├── SearchBar: type keyword
  │     └── ?search= written to URL → query re-runs with keyword filter
  ├── [Desktop] Click "문의하기" button (SubmitInquiryButton) → navigate → /inquiries/new
  ├── [Mobile]  Click "문의 작성하기" (Link at bottom)        → navigate → /inquiries/new
  └── Click an inquiry row → navigate → /inquiries/:id
```

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useInquiryPage()` | `src/features/inquiries/hooks/useInquiryPage.ts` | Fetches inquiry list; manages pagination state |
| `useAnonymousInquiryListQuery(search)` | `src/features/inquiries/hooks/query/useAnonymousInquiryListQuery.tsx` | `useInfiniteQuery` for anonymous inquiry list |
| `useSearchParams()` | `react-router-dom` | Reads `?search=` param |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/support/anonymous-questions` | None | Paginated list of public anonymous inquiries |

**Query params:**

| Param | Type | Description |
|---|---|---|
| `cursor` | `number \| null` | Pagination cursor |
| `limit` | `number` | Items per page |
| `search` | `string` | Keyword filter |

---

## Props Flow

```
InquiriesList (page)
│   hook: useInquiryPage()
│
├── <Header />   (static title component — not the global app header)
│     └── no props
│
├── <SearchBar title="문의" paramKey="search" />
│     └── Writes ?search= to URL; shared UI component
│
├── <SubmitInquiryButton />
│     └── no props; renders a Link → /inquiries/new (desktop only)
│
├── <InquiriesListContainer
│     anonymousInquiriesList={anonymousInquiriesList}  // InquiryField[] | undefined
│     isLoading={isLoading}                            // boolean
│   />
│     ├── [isLoading] skeleton rows
│     └── [loaded] list of inquiry rows — each row is a Link → /inquiries/:id
│
└── <Link to="new"> (mobile-only bottom CTA)
      └── navigate → /inquiries/new
```

---

## Notes

- Pagination is fully implemented in `useInquiryPage` (`hasNextPage`, `fetchNextPage`, `hasPreviousPage`, `fetchPreviousPage`, `currentPage`) but the pagination UI (`<Pagination />`) is commented out. Only the first page of results is displayed.
- `anonymousInquiriesList` is derived by flattening `pages[]` from the infinite query — even though the UI shows only one page, the underlying query supports multi-page.
- No Zustand stores are used on this page.
