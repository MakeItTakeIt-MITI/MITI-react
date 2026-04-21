# Policies Page

**Route:** `/policies`
**File:** `src/pages/policies/Policies.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

An index page listing all service terms and legal policy documents (e.g. Terms of Service, Privacy Policy). Each item is a link to its detail page. An app download banner is displayed at the bottom.

---

## User Flow

```
User arrives at "/policies"
  ├── List of policy documents fetched
  ├── User clicks a policy name → navigate → /policies/:id
  └── Bottom: MoveToAppBanner (app download CTA)
```

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useServiceTermsDataHook()` | `src/features/policies/hooks/useServiceTermsDataHook.tsx` | `useQuery` — fetches the list of all policy documents |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/policies` | None | Returns list of all service term documents |

**Response shape (`.data`):**
```ts
PoliciesField[]
// each item: { id: number, name: string }
```

---

## Props Flow

```
Policies (page)
│   data = useServiceTermsDataHook()
│
├── <h1> 서비스 약관 </h1>
│
├── <ul>
│     {data?.data.map((service: PoliciesField) => (
│       <li key={service.id}>
│         <Link to={`${service.id}`}>{service.name}</Link>
│       </li>
│     ))}
│   </ul>
│   └── Each Link navigates → /policies/:id
│
└── <MoveToAppBanner />
      └── no props — static app download CTA component
```

---

## Notes

- No local state or Zustand stores are used.
- The `Link to` uses a relative path (`{service.id}`), which resolves to `/policies/{id}` given the current route context.
- `MoveToAppBanner` is a shared component also used on the Policy Detail and Not Found pages.
