# KakaoAuthHandler

**Route:** `/kakao/login`
**File:** `src/pages/auth/KakaoAuthHandler.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)
**Renders:** Nothing visible (`return <></>`)

---

## Overview

An invisible OAuth callback handler. Kakao redirects here after the user authorises the app. The component reads the `code` query param, exchanges it for a Kakao access token, then forwards that token to the MITI backend. On success the user is navigated to `/withdraw`.

---

## User Flow

```
Kakao OAuth consent screen
  └── Redirects to "/kakao/login?code=AUTH_CODE"
        └── KakaoAuthHandler mounts
              └── useEffect fires immediately
                    ├── Step 1: POST to Kakao token endpoint
                    │     └── Receives Kakao access_token
                    ├── Step 2: POST to MITI /auth/login/kakao
                    │     ├── Success (200)
                    │     │     ├── Store accessToken + refreshToken in localStorage
                    │     │     ├── Set useLoginStore.user + isLogged = true
                    │     │     └── navigate → /withdraw
                    │     ├── Error (403)
                    │     │     └── alert "다른 방법으로 로그인 시도해주세요."
                    │     └── Network error
                    │           ├── isLogged = false
                    │           ├── alert (Korean error message)
                    │           └── navigate → /auth
                    └── Component renders nothing
```

---

## Constants

| Constant | Value / Source | Description |
|---|---|---|
| `AUTHORIZE_CODE` | `?code=` URL param | One-time Kakao authorization code |
| `GRANT_TYPE` | `"authorization_code"` | Required Kakao OAuth grant type |
| `REST_API_KEY` | `VITE_KAKAO_REST_API_KEY` | Kakao application REST API key |
| `REDIRECT_URI` | `VITE_KAKAO_REDIRECT_URI` | Must match the URI registered in Kakao Developer Console |

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `fetchData` | `async () => void` | Full OAuth flow. Runs inside `useEffect` on mount. Performs both the Kakao token exchange and the MITI login call sequentially. |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useKakaoLoginHook()` | `src/features/auth/hooks/useKakaoLoginHook.tsx` | `useMutation` wrapping `POST /auth/login/kakao` |
| `useLoginStore()` | `src/features/auth/state/useLoginStore.tsx` | `setUser`, `setIsLogged` |
| `useNavigate()` | `react-router-dom` | Navigates to `/withdraw` or `/auth` |
| `useEffect` | React | Triggers the OAuth flow on mount (empty dependency array) |

---

## API Called

| Method | URL | Auth | Description |
|---|---|---|---|
| `POST` | `https://kauth.kakao.com/oauth/token` | None | Exchanges authorization code for Kakao access token |
| `POST` | `/auth/login/kakao` | Optional Bearer | Exchanges Kakao access token for MITI JWT tokens |

**Kakao token exchange body:**
```json
{
  "grant_type": "authorization_code",
  "redirect_uri": "VITE_KAKAO_REDIRECT_URI",
  "client_id": "VITE_KAKAO_REST_API_KEY",
  "code": "AUTH_CODE_FROM_URL"
}
```

**MITI Kakao login body:**
```json
{ "access_token": "kakao_access_token_string" }
```

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_KAKAO_REST_API_KEY` | Kakao application REST API key |
| `VITE_KAKAO_REDIRECT_URI` | OAuth redirect URI (must match Kakao console setting) |

---

## Props Flow

This page accepts no props and renders no visible children. All logic is self-contained in the `useEffect`.

---

## Side Effects on Success

| Storage | Key | Value |
|---|---|---|
| `localStorage` | `accessToken` | MITI JWT access token |
| `localStorage` | `refreshToken` | MITI JWT refresh token |
| Zustand (`useLoginStore`) | `user` | User profile object |
| Zustand (`useLoginStore`) | `isLogged` | `true` |

---

## Notes

- The `useEffect` dependency array is empty (`[]`), so the OAuth flow runs exactly once on mount.
- `fetchData` is defined and immediately called inside the effect rather than being used as a hook — this pattern allows `async/await` inside `useEffect`.
- Plain `axios` (not the shared instance) is used for the Kakao token exchange because it calls an external domain.
