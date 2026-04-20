# Community Page

**Route:** `/community`
**File:** `src/pages/community/Community.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

A basketball community forum. A left sidebar panel shows popular search topics and category navigation. The main content area shows all posts with infinite scroll, filterable by category or keyword. Both filters are URL search param–driven, making filtered views shareable via link.

---

## User Flow

```
User arrives at "/community"
  ├── All posts fetched (page 1, no filters)
  │
  ├── [Left panel — Desktop sidebar]
  │     ├── Click a category chip
  │     │     ├── ?category=key added to URL
  │     │     ├── Posts re-fetched with category filter
  │     │     └── Click same category again → ?category=all (deselects)
  │     └── Click a popular topic
  │           ├── ?search=topic added to URL
  │           └── Click same topic again → ?search= removed
  │
  ├── [Right panel — mobile]
  │     └── CategoryFilterContainer + HotTopicBanner handle same interactions
  │
  ├── Scroll to bottom → next page auto-fetched
  │
  └── Click a post card → navigate → /community/:id
```

---

## Local State

No local state — all filter state lives in URL search params.

---

## Functions (from `useCommunityPageData`)

| Function | Signature | Description |
|---|---|---|
| `handleCategoryClick` | `(categoryKey: string) => void` | Sets `?category=key`. If the same key is already active, resets to `?category=all` |
| `handleSetToSearchParams` | `(selected: string) => void` | Sets `?search=selected`. If the same value is already active, removes the `search` param entirely |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useCommunityPageData()` | `src/features/community/hooks/useCommunityPageData.tsx` | All community logic: data, category, search, infinite scroll |
| `useGetPopularTopics()` | query hook | Fetches trending search keywords |
| `useGetPopularPosts()` | query hook | Fetches popular/featured posts |
| `useGetPosts(search, category)` | query hook | `useInfiniteQuery` — cursor-paginated posts |
| `useSearchParams()` | `react-router-dom` | Reads/writes `?search=` and `?category=` |
| `useInView()` | `react-intersection-observer` | Detects list bottom; triggers `fetchNextPage` |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/posts` | None | Paginated post list |
| `GET` | `/posts/popular-search-word` | None | Trending search keywords |
| `GET` | `/posts/popular-posts` | None | Featured/popular posts |

**`/posts` query params:**

| Param | Type | Description |
|---|---|---|
| `search` | `string` | Keyword filter |
| `category` | `string` | Category key (e.g. `"general"`, `"tactic"`) — empty string means all |
| `cursor` | `number \| null` | Pagination cursor |
| `limit` | `number \| null` | Items per page |

---

## Topic Categories

The sidebar category list is defined statically in `useCommunityPageData`:

| Key | Label |
|---|---|
| `general` | 자유주제 |
| `court_info` | 코트 정보 |
| `tournament` | 대회 정보 |
| `tactic` | 농구 전술 |
| `shoes_revie` | 농구화 리뷰 |
| `tip` | 농구 팁 |
| `team_recruitment` | 팀원 구해요 |
| `foreign_issue` | 해외농구 |
| `domestic_issue` | 국내농구 |
| `guest_review` | 게스트후기 |
| `injury` | 부상 |
| `gear` | 농구용품 |

> Note: `shoes_revie` is missing the trailing `w` — this is a typo in the source that must match the backend category key.

---

## Props Flow

```
Community (page)
│   hook: useCommunityPageData()
│
├── <CommunityPanel
│     popularTopicsData={popularTopicsData?.data}       // { search_word: string }[]
│     handleSetToSearchParams={handleSetToSearchParams} // (selected) => void
│     handleCategoryClick={handleCategoryClick}         // (categoryKey) => void
│     topicCategories={topicCategories}                 // { key, label, img }[][]
│     searchParams={searchParams}                       // URLSearchParams
│   />
│     └── Desktop-only sidebar (sm:hidden md:flex)
│           ├── Category grid with active-state styling via searchParams.get("category")
│           └── Popular topics chips — calls handleSetToSearchParams on click
│
└── <CommunityPostsContainer
      allPosts={allPosts ?? []}                         // PostField[]
      popularPostsData={popularPostsData?.data}         // any
      isLoading={isLoading}                             // boolean
      communityPostRef={communityPostRef}               // React.Ref<HTMLDivElement>
    />
      ├── [isLoading] renders skeleton post cards
      ├── <HotTopicBanner popularPostsData />  (mobile)
      ├── <CategoryFilterContainer />  (mobile — reads URL params internally)
      ├── <SearchBar paramKey="search" title="게시글" />
      ├── List of <PostCard /> items
      └── <div ref={communityPostRef} /> — scroll sentinel at bottom
```

---

## Notes

- `?category=all` is treated as "no category filter" — the hook converts `"all"` to an empty string before passing to the API.
- The `topicCategories` array is a 2D array (rows of 2) designed to render a grid layout in the sidebar.
- No Zustand stores are used on this page.
