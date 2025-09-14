import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import { PostCard } from "./PostCard.tsx";
import { PostDataField } from "../interface/community.ts";

interface CommunityContentContainerProps {
  postsData: PostDataField[];
}

const CommunityContentContainer = ({
  postsData,
}: CommunityContentContainerProps) => {
  return (
    <article className="w-full flex flex-col gap-6">
      <SearchBar title="게시글" paramKey="search" />
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
