# Auth Page (Login)

**Route:** `/auth`
**File:** `src/pages/auth/Auth.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

The login page supporting two authentication methods: email/password and Kakao OAuth. On successful login, tokens are stored in `localStorage` and the user is redirected to `/withdraw`. Failed attempts display an inline error.

---

## User Flow

```
User arrives at "/auth"
  ├── Enters email + password
  │     ├── Submit button disabled until both fields are non-empty
  │     └── Clicks "로그인 하기"
  │           ├── Success (200)
  │           │     ├── accessToken + refreshToken stored in localStorage
  │           │     ├── useLoginStore.user set
  │           │     ├── useLoginStore.isLogged = true
  │           │     └── navigate → /withdraw
  │           └── Error (401)
  │                 └── Red border on inputs + error message shown
  └── Clicks KakaoLoginButton
        └── Redirected to Kakao OAuth flow → /kakao/login (callback)
```

---

## Local State

| State | Type | Default | Purpose |
|---|---|---|---|
| `status` | `number` | `0` | HTTP status from login response; drives error UI |

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `onSubmit` | `(data: EmailLoginField) => void` | Fires the login mutation. On success: stores tokens, updates global state, navigates. On error: sets `status` to the HTTP status code |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useForm<EmailLoginField>()` | `react-hook-form` | Field registration, `handleSubmit`, and `watch` for real-time field values |
| `useEmailLoginHook()` | `src/features/auth/hooks/useEmailLoginHook.tsx` | `useMutation` wrapping `POST /auth/login/email` |
| `useLoginStore()` | `src/features/auth/state/useLoginStore.tsx` | `setIsLogged`, `setUser` — updates global auth state |
| `useNavigate()` | `react-router-dom` | Redirects to `/withdraw` after success |
| `useState` | React | Manages `status` |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/auth/login/email` | None | Authenticates with email + password |

**Request body:**
```json
{ "email": "string", "password": "string" }
```

**Response:**
```json
{
  "status_code": 200,
  "data": {
    "token": { "access": "string", "refresh": "string" },
    "nickname": "string"
  }
}
```

---

## Props Flow

```
Auth (page)
│
├── <form onSubmit={handleSubmit(onSubmit)}>
│     ├── <input id="email"    {...register("email")}    />
│     ├── <input id="password" {...register("password")} />
│     └── <button type="submit" disabled={!isInputted} />
│           isInputted = email.length > 0 && password.length > 0
│
└── <KakaoLoginButton />
      ── no props; self-contained Kakao OAuth redirect
```

---

## Side Effects on Success

| Storage | Key | Value |
|---|---|---|
| `localStorage` | `accessToken` | JWT access token |
| `localStorage` | `refreshToken` | JWT refresh token |
| Zustand (`useLoginStore`) | `isLogged` | `true` |
| Zustand (`useLoginStore`) | `user` | Full user profile object |

---

## Notes

- The password visibility toggle button is rendered but does not change the input type — it is non-functional as of the current version.
- `isInputted` is computed from `watch()` values; the submit button is styled teal when enabled and grey when disabled.
