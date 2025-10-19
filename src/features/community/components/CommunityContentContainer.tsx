import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import { PostCard } from "./PostCard.tsx";
import { PostDataField, PostField } from "../interface/community.ts";
import CategoryFilterContainer from "./mobile/CategoryFilterContainer.tsx";
import HotTopicBanner from "./mobile/HotTopicBanner.tsx";

interface CommunityContentContainerProps {
  postsData?: PostDataField | null;
  popularPostsData?: any;
  isLoading?: boolean;
}

const SkeletonPost = () => (
  <li className="py-4 border-b border-[#2A2A2A]">
    <div className="animate-pulse space-y-3">
      <div className="h-5 bg-[#2A2A2A] rounded w-3/4" />
      <div className="flex items-center justify-between">
        <div className="h-3 bg-[#2A2A2A] rounded w-24" />
        <div className="h-3 bg-[#2A2A2A] rounded w-20" />
      </div>
    </div>
  </li>
);

const CommunityContentContainer = ({
  postsData,
  popularPostsData,
  isLoading = false,
}: CommunityContentContainerProps) => {
  const items = postsData?.items ?? [];

  // early return for loading state (keeps render logic clean)
  if (isLoading) {
    return (
      <article className="w-full flex flex-col gap-6">
        <SearchBar title="게시글" paramKey="search" />
        <CategoryFilterContainer />
        <HotTopicBanner popularTopicsData={popularPostsData} />
        <ul className="custom-scrollbar flex flex-col gap-4 h-[750px] overflow-y-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonPost key={`skeleton-post-${i}`} />
          ))}
        </ul>
      </article>
    );
  }

  return (
    <article className="w-full flex flex-col gap-6">
      <SearchBar title="게시글" paramKey="search" />
      <CategoryFilterContainer />
      <HotTopicBanner popularTopicsData={popularPostsData} />
      {/* Post component */}
      <ul className="custom-scrollbar flex flex-col gap-4 h-[750px] overflow-y-auto">
        {items.map((post: PostField) => (
          <PostCard
            key={post.id ?? `${post.title}-${Math.random()}`}
            post={post}
          />
        ))}
      </ul>
    </article>
  );
};

export default CommunityContentContainer;
