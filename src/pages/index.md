# Pages Documentation Index

## Project: MITI (Make It Take It)

Basketball game matchmaking platform. Users browse and join pickup games, discover courts, read community posts, and manage their accounts.

**Stack:** React 18 · TypeScript · Vite · Zustand · TanStack Query v5 · React Router v6 · Tailwind CSS · Axios · Naver Maps

**Base API URL:** `https://api.makeittakeit.kr`

**Global Layout (`App.tsx`):** All pages except `/host-guide` share a persistent `<Header />` + `<Footer />` wrapper via React Router's `<Outlet />`.

---

## Route Map

| Route | Page | File |
|---|---|---|
| `/` | [Landing](./landing.md) | `src/pages/landing/Landing.tsx` |
| `/auth` | [Auth (Login)](./auth.md) | `src/pages/auth/Auth.tsx` |
| `/kakao/login` | [KakaoAuthHandler](./kakao-auth-handler.md) | `src/pages/auth/KakaoAuthHandler.tsx` |
| `/withdraw` | [Withdraw](./withdraw.md) | `src/pages/auth/Withdraw.tsx` |
| `/games` | [Games](./games.md) | `src/pages/games/Games.tsx` |
| `/games/:id` | [Game Detail](./game-detail.md) | `src/pages/games/GameDetail.tsx` |
| `/courts` | [Courts](./courts.md) | `src/pages/courts/Courts.tsx` |
| `/courts/:id` | [Court Details](./court-details.md) | `src/pages/courts/CourtDetails.tsx` |
| `/community` | [Community](./community.md) | `src/pages/community/Community.tsx` |
| `/community/:id` | [Community Post](./community-post.md) | `src/pages/community/CommunityPost.tsx` |
| `/inquiries` | [Inquiries List](./inquiries.md) | `src/pages/inquiries/Inquiries.tsx` |
| `/inquiries/new` | [New Inquiry](./new-inquiry.md) | `src/pages/inquiries/NewInquiry.tsx` |
| `/inquiries/:id` | [Inquiry Detail](./inquiry-detail.md) | `src/pages/inquiries/InquiryDetail.tsx` |
| `/faq` | [FAQ](./faq.md) | `src/pages/faq/Faq.tsx` |
| `/policies` | [Policies](./policies.md) | `src/pages/policies/Policies.tsx` |
| `/policies/:id` | [Policy Detail](./policy-detail.md) | `src/pages/policies/PoliciesDetails.tsx` |
| `/host-guide` | [Hosting Guide](./hosting-guide.md) | `src/pages/hosting-guide/HostingGuide.tsx` |
| `*` | [Not Found](./not-found.md) | `src/pages/other/NotFound.tsx` |

---

## Shared Infrastructure

### Authentication
JWT tokens stored in `localStorage` (`accessToken`, `refreshToken`). Global session state is held in `useLoginStore` (Zustand). State is **not persisted** across page refreshes — tokens must be re-read from `localStorage` on mount.

### Data Fetching
TanStack Query v5. Query keys follow `[feature, ...params]` convention. Mutations use `useMutation`; reads use `useQuery` or `useInfiniteQuery`.

### Infinite Scroll Pattern
`useInfiniteQuery` + `react-intersection-observer` (`useInView`). A sentinel `div` at the list bottom triggers `fetchNextPage()` when 20% visible.

### URL Search Params Pattern
Filter state on FAQ, Community, Courts, and Inquiries pages is written to URL query params rather than component state, enabling shareable filtered URLs.

### Axios Instance
`src/utils/axios.ts` — pre-configured with the base API URL. All internal API calls use this instance. Kakao and YouTube use plain `axios`.
