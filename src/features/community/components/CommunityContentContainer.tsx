import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import { PostCard } from "./PostCard.tsx";

interface CommunityContentContainerProps {
  getSearchParam: string | "";
}

const CommunityContentContainer = ({
  getSearchParam,
}: CommunityContentContainerProps) => {
  return (
    <article className="w-full flex flex-col gap-6">
      <SearchBar title="게시글" paramKey="search" />
      {/* Post component */}
      <ul className="flex flex-col gap-4">
        <li>
          <PostCard />
        </li>
        <li>
          <PostCard />
        </li>
        <li>
          <PostCard />
        </li>
        <li>
          <PostCard />
        </li>
        <li>
          <PostCard />
        </li>
        <li>
          <PostCard />
        </li>
      </ul>
    </article>
  );
};

export default CommunityContentContainer;
