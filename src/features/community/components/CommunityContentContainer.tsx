import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import { PostCard } from "./PostCard.tsx";
import { PostDataField } from "../interface/community.ts";
import CategoryFilterContainer from "./mobile/CategoryFilterContainer.tsx";
import HotTopicBanner from "./mobile/HotTopicBanner.tsx";

interface CommunityContentContainerProps {
  postsData: PostDataField[];
  popularPostsData: any;
}

const CommunityContentContainer = ({
  postsData,
  popularPostsData,
}: CommunityContentContainerProps) => {
  return (
    <article className="w-full flex flex-col gap-6">
      <SearchBar title="게시글" paramKey="search" />
      <CategoryFilterContainer />
      <HotTopicBanner popularPostsData={popularPostsData} />
      {/* Post component */}
      <ul className="custom-scrollbar flex flex-col gap-4 h-[750px] overflow-y-auto">
        {postsData?.items.map((post) => (
          <PostCard post={post} />
        ))}
      </ul>
    </article>
  );
};

export default CommunityContentContainer;
