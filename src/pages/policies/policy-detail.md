# Policy Detail Page

**Route:** `/policies/:id`
**File:** `src/pages/policies/PoliciesDetails.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

Displays the full content of a single policy document — its title, effective date, and HTML body. Content is rendered from server-supplied HTML in a fixed-height scrollable container.

---

## User Flow

```
User clicks a policy name on /policies
  └── navigate → /policies/:id
        ├── Policy document fetched by ID
        └── [Loaded]
              ├── Policy title (h1)
              ├── Effective date formatted as "YYYY년 MM월 DD일"
              ├── HTML content in a 600px scrollable div
              └── MoveToAppBanner at the bottom
```

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useParams()` | `react-router-dom` | Reads policy `id` from the URL; cast to `number` |
| `usePolicyDetailHook({ policyId })` | `src/features/policies/hooks/usePolicyDetailHook.tsx` | `useQuery` — fetches single policy document |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/policies/:id` | None | Returns a single policy document |

**Response shape (`.data`):**
```ts
{
  name: string,
  content: string,   // Raw HTML
  created_at: string // ISO date string e.g. "2024-01-15T00:00:00Z"
}
```

---

## Props Flow

```
PoliciesDetails (page)
│   data = usePolicyDetailHook({ policyId: Number(id) })
│
├── <h1>{data?.data.name}</h1>
│
├── <p> formatted date from data?.data.created_at </p>
│     └── Sliced and formatted inline:
│           "YYYY년 MM월 DD일"
│
├── <p dangerouslySetInnerHTML={{ __html: data?.data.content }} />
│     └── Scrollable container (height: 600px, thin scrollbar)
│
└── <MoveToAppBanner />
      └── no props — static component
```

---

## Notes

- `dangerouslySetInnerHTML` is used to render the policy HTML. The content is server-supplied and assumed to be safe (not user-generated).
- The date formatting is done inline by slicing the ISO string: `created_at.slice(0, 4)` (year), `slice(5, 7)` (month), `slice(8, 10)` (day).
- A custom CSS file (`src/features/policies/css/policy-detail.css`) is imported for policy content styling.
- No local state or Zustand stores are used.
