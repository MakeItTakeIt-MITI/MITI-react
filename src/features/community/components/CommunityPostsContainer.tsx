import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import { PostCard } from "./PostCard.tsx";
import { PostField } from "../interface/community.ts";
import CategoryFilterContainer from "./mobile/CategoryFilterContainer.tsx";
import HotTopicBanner from "./mobile/HotTopicBanner.tsx";

interface CommunityPostsContainerProps {
  allPosts?: PostField[];
  popularPostsData?: any;
  isLoading?: boolean;
  communityPostRef: React.Ref<HTMLDivElement>;
}

const SkeletonPost = () => (
  <li
    className="py-4 border-b border-[#2A2A2A]"
    role="article"
    aria-busy="true"
    aria-label="게시글 로딩 중"
  >
    <div className="animate-pulse space-y-3" aria-hidden="true">
      <div className="h-5 bg-[#2A2A2A] rounded w-3/4" />
      <div className="flex items-center justify-between">
        <div className="h-3 bg-[#2A2A2A] rounded w-24" />
        <div className="h-3 bg-[#2A2A2A] rounded w-20" />
      </div>
    </div>
  </li>
);

const CommunityPostsContainer = ({
  allPosts,
  popularPostsData,
  isLoading = false,
  communityPostRef,
}: CommunityPostsContainerProps) => {
  if (isLoading) {
    return (
      <article
        className="w-full flex flex-col gap-6"
        aria-labelledby="community-content-title"
      >
        <h2 id="community-content-title" className="sr-only">
          커뮤니티 게시글 목록
        </h2>
        <SearchBar title="게시글" paramKey="search" aria-label="게시글 검색" />
        <CategoryFilterContainer aria-label="카테고리 필터" />
        <HotTopicBanner
          popularTopicsData={popularPostsData}
          aria-label="인기 게시글 배너"
        />
        <ul
          className="custom-scrollbar flex flex-col gap-4 h-[750px] overflow-y-auto"
          role="list"
          aria-live="polite"
          aria-busy="true"
          aria-label="게시글 목록 로딩 중"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonPost key={`skeleton-post-${i}`} />
          ))}
        </ul>
      </article>
    );
  }

  return (
    <article
      className="w-full flex flex-col gap-6"
      aria-labelledby="community-content-title"
    >
      <h2 id="community-content-title" className="sr-only">
        커뮤니티 게시글 목록
      </h2>
      <SearchBar title="게시글" paramKey="search" aria-label="게시글 검색" />
      <CategoryFilterContainer aria-label="카테고리 필터" />
      <HotTopicBanner
        popularTopicsData={popularPostsData}
        aria-label="인기 게시글 배너"
      />
      {/* Post component */}
      <ul
        className="custom-scrollbar flex flex-col gap-4 h-[750px] overflow-y-auto"
        role="list"
        aria-label="게시글 목록"
      >
        {allPosts?.map((post: PostField) => (
          <li
            key={post.id ?? `${post.title}-${Math.random()}`}
            role="article"
            aria-label={`게시글: ${post.title}`}
          >
            <PostCard post={post} />
          </li>
        ))}
        {/* Infinite scroll 관찰 지점 */}
        <div
          ref={communityPostRef}
          className="h-1"
          role="separator"
          aria-hidden="true"
        />
      </ul>
    </article>
  );
};

export default CommunityPostsContainer;
