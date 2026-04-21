# Withdraw Page (Account Deletion)

**Route:** `/withdraw`
**File:** `src/pages/auth/Withdraw.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)
**Access:** Protected — redirects to `/auth` if not logged in

---

## Overview

The account deletion confirmation page. Displays the authenticated user's nickname, two itemised warnings about permanent data loss, a checkbox the user must agree to, and a submit button. Three distinct UI states are rendered based on the API response status.

---

## User Flow

```
User arrives at "/withdraw"
  ├── isLogged === false → navigate immediately to /auth
  └── isLogged === true
        ├── status === 201 (default): show confirmation form
        │     ├── Displays user.nickname
        │     ├── Shows two warning checklist items
        │     ├── User checks the agreement checkbox → button becomes active
        │     └── Clicks "회원 탈퇴하기"
        │           ├── Calls DELETE /auth/withdraw
        │           ├── Success → status = 200 → <WithdrawSuccess />
        │           │     └── localStorage cleared (all tokens removed)
        │           └── Failure → status = 403 → <WithdrawFailure nickname={user.nickname} />
        ├── status === 200 → render <WithdrawSuccess />
        └── status === 403 → render <WithdrawFailure nickname={user.nickname} />
```

---

## Local State

| State | Type | Default | Purpose |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the user agreed to the terms checkbox |
| `status` | `number` | `201` | Response status code — controls which UI variant is shown |

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `handleDeleteAccount` | `() => void` | Fires the `deleteAccount` mutation from `useDeleteAccountHook` |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useLoginStore()` | `src/features/auth/state/useLoginStore.tsx` | Reads `user.nickname` and `isLogged` |
| `useDeleteAccountHook(setStatus)` | `src/features/auth/hooks/useDeleteAccountHook.tsx` | `useMutation` for `DELETE /auth/withdraw`; calls `setStatus` in `onSuccess`; calls `localStorage.clear()` on success |
| `useNavigate()` | `react-router-dom` | Redirects to `/auth` when `isLogged` is falsy |
| `useEffect` | React | Watches `isLogged`; triggers redirect if it becomes false |
| `useState` | React | Manages `checked` and `status` |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `DELETE` | `/auth/withdraw` | `Bearer accessToken` | Permanently deletes the authenticated user's account |

**Response:**
```json
{ "status_code": 200 }   // success
{ "status_code": 403 }   // forbidden (e.g. active ongoing games)
```

---

## Props Flow

```
Withdraw (page)
│
├── [status === 200] <WithdrawSuccess />
│     └── no props
│
├── [status === 403] <WithdrawFailure nickname={user?.nickname} />
│     └── nickname: string | undefined
│
└── [status === 201] confirmation form (inline JSX)
      ├── displays user?.nickname (from useLoginStore)
      ├── <input type="checkbox" checked={checked} onChange={toggle} />
      └── <button disabled={!checked} onClick={handleDeleteAccount} />
```

---

## Side Effects on Success (status 200)

| Storage | Action |
|---|---|
| `localStorage` | Fully cleared (`localStorage.clear()`) — removes all tokens |

---

## Notes

- The `useEffect` dependency array is `[isLogged]`. If the store's `isLogged` changes to `false` at any point (e.g. another tab logs out), this page auto-redirects.
- The button background toggles between `#7FEEF0` (teal, enabled) and `#737373` (grey, disabled) based on `checked`.
- Status `201` is used as the default "pending" state since it is never returned by the API; it simply means "no action taken yet."
