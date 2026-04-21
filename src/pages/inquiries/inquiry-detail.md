# Inquiry Detail Page

**Route:** `/inquiries/:id`
**File:** `src/pages/inquiries/InquiryDetail.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

A password-protected inquiry detail view. The page always opens with a password entry modal. On successful verification the modal hides and the full inquiry content is shown. Failed verification keeps the modal open with an error state.

---

## User Flow

```
User navigates to "/inquiries/:id"
  └── Password Modal shown (displayModal = false by default)
        ├── User types their password (set when creating the inquiry)
        └── Clicks verify
              ├── API returns 200
              │     ├── displayModal = true → modal hidden, content shown
              │     └── Inquiry title, body, author info displayed
              ├── API error 401 (wrong password)
              │     └── Modal stays open + error UI inside modal
              └── API error 400 (bad request)
                    └── Modal stays open + error UI inside modal
```

---

## Local State

| State | Type | Default | Purpose |
|---|---|---|---|
| `displayModal` | `boolean` | `false` | `false` = show password modal; `true` = show inquiry content |
| `password` | `string` | `""` | Password input value passed to the API |
| `errorStatus` | `number \| null` | `null` | HTTP error status from a failed verification attempt |

---

## Functions

No named functions — state setters are passed directly as props to child components.

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useParams()` | `react-router-dom` | Reads inquiry `id` from the URL; cast to `number` |
| `useInquiryDetailsHook(id, { password }, setErrorStatus)` | `src/features/inquiries/hooks/useInquiryDetailsHook.tsx` | `useMutation` — verifies password and returns inquiry data |
| `useEffect` | React | Watches `data` and `errorStatus` to toggle `displayModal` |
| `useState` | React | Manages `displayModal`, `password`, `errorStatus` |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/support/anonymous-questions/:id` | None | Verifies the inquiry password; returns inquiry content on success |

**Request body:**
```json
{ "password": "string" }
```

**Response:**
```json
{
  "status_code": 200,
  "data": {
    "title": "string",
    "content": "string",
    "created_at": "string",
    "answers": []
  }
}
```

---

## Props Flow

```
InquiryDetail (page)
│   mutate + data from useInquiryDetailsHook(inquiryDetailId, { password }, setErrorStatus)
│
├── [displayModal === false]
│   └── <Modal
│         setModal={setDisplayModal}     // (bool) => void — close modal
│         setPassword={setPassword}      // (str) => void  — update password state
│         mutate={mutate}               // () => void      — trigger API call
│         errorStatus={errorStatus}     // number | null   — show error UI
│       />
│         ├── Password input → calls setPassword on change
│         ├── Submit → calls mutate()
│         └── [errorStatus 401/400] shows error message
│
└── [displayModal === true]
    └── <UserInquiryInfo inquiryDetailData={data?.data} />
          └── inquiryDetailData: InquiryDetailData | undefined
                ├── title, content, created_at
                └── [data?.data.answers.length > 0] AdminReplyField (currently commented out)
```

---

## State Transitions

```
Initial:      displayModal = false   → Modal shown
After 200:    displayModal = true    → Content shown
After 401/400: displayModal = false  → Modal stays, errorStatus set
```

The `useEffect` that drives this:
```ts
useEffect(() => {
  if (data?.status_code === 200) setDisplayModal(true);
  else if (errorStatus === 401 || errorStatus === 400) setDisplayModal(false);
}, [errorStatus, data]);
```

---

## Notes

- The `useInquiryDetailsHook` catches errors and calls `setErrorStatus(error.response.status)` — this is how `errorStatus` is set (via the hook's catch block, not the mutation's `onError`).
- Admin reply (`AdminReplyField`) is commented out — the response field `answers` is returned by the API but not rendered.
- No Zustand stores are used on this page.
