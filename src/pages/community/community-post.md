# Community Post Detail Page

**Route:** `/community/:id`
**File:** `src/pages/community/CommunityPost.tsx`
**Layout:** Global (`<Header />` + `<Footer />`)

---

## Overview

Displays the full content of a single community post — body text, metadata (author, date, category), and all comments. Includes a native share button using the Web Share API.

---

## User Flow

```
User clicks a post card on /community
  └── navigate → /community/:id
        ├── Post details fetched by ID
        ├── Post comments fetched by ID
        └── [Loaded]
              ├── Post title, category chip, author info, body
              ├── Comments list
              └── Share button (if navigator.share is supported)
                    └── Triggers native OS share sheet for current URL
```

---

## Functions

| Function | Signature | Description |
|---|---|---|
| `handleSharePost` | `() => void` | Calls `navigator.share({ url: window.location.href })` if the Web Share API is supported. Logs success/failure to the console. |

---

## Hooks Used

| Hook | Source | Purpose |
|---|---|---|
| `useParams()` | `react-router-dom` | Reads post `id` from the URL; cast to `number` |
| `useGetPostDetails(id)` | `src/features/community/hooks/query/useGetPostDetails.tsx` | `useQuery` — fetches post body and metadata |
| `useGetPostComments(id)` | `src/features/community/hooks/query/useGetPostComments.tsx` | `useQuery` — fetches all comments for the post |

---

## API Called

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/posts/:id` | None | Post detail: title, body, author, category, date, like count |
| `GET` | `/posts/:id/comments` | None | All comments for the post |

---

## Props Flow

```
CommunityPost (page)
│   data:
│     postDetails = useGetPostDetails(id).data?.data  // CommunityPostDetail
│     postComments = useGetPostComments(id).data       // any
│
└── <PostDetailContainer
      postDetails={postDetails}              // CommunityPostDetail
      postComments={postComments}            // any (raw query response)
      handleSharePost={handleSharePost}      // () => void
    />
      ├── <PostCategoryChip category={postDetails.category} />
      ├── <PostUserInfo author date likes />
      ├── Post body content
      ├── Like / share action buttons
      │     └── share button → calls handleSharePost (passed as prop)
      └── <CommentsContainer postComments={postComments} />
```

---

## Notes

- `navigator.share` is not available in all browsers (e.g. desktop Chrome without specific conditions). The share button should only be visible or enabled when `navigator.share` exists. The current implementation checks at call time but does not conditionally render the button.
- Like functionality (`LikeCommentFeatures`) is commented out in `PostDetailContainer`.
- No Zustand stores are used on this page.
