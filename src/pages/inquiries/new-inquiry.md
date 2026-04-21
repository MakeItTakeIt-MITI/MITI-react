# New Inquiry Page

**Route:** `/inquiries/new`
**File:** `src/pages/inquiries/NewInquiry.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

A form page for submitting a new anonymous inquiry. Users provide a title, content body, and a password (used later to authenticate access to the inquiry detail). The page is a thin shell — all form logic lives inside the `InquiryForm` feature component.

---

## User Flow

```
User navigates to "/inquiries/new"
  ├── Sees page title + instructions (InquiryFormHeader)
  └── Fills out InquiryForm
        ├── Title field
        ├── Content / body field
        ├── Password field (required for later access)
        └── Submit
              ├── Success → navigate back to /inquiries (or show confirmation)
              └── Error   → inline error displayed
```

---

## Hooks Used

None at the page level. All hooks are encapsulated in `InquiryForm`.

---

## API Called (inside `InquiryForm`)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/support/anonymous-questions` | None | Submits a new anonymous inquiry |

**Request body:**
```json
{
  "title": "string",
  "content": "string",
  "password": "string"
}
```

---

## Props Flow

```
NewInquiry (page)
│
├── <InquiryFormHeader />
│     └── no props — static title and description text
│
└── <InquiryForm />
      └── no props — self-contained
            ├── useForm() — manages title, content, password fields
            ├── usePrivateInquiryHook() — useMutation for POST /support/anonymous-questions
            └── On success: navigates away or shows confirmation
```

---

## Notes

- The password set here is required to view the inquiry detail later at `/inquiries/:id`. There is no password recovery mechanism.
- All validation, error display, and submission logic is in `InquiryForm` — the page component is intentionally minimal.
- No Zustand stores are used on this page.
