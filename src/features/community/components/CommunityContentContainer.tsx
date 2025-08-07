import SearchBar from "../../games/components/game-list/SearchBar.tsx";
import { PostCard } from "./PostCard.tsx";

interface CommunityContentContainerProps {
  setInputContent: (content: string) => void;
}

const CommunityContentContainer = ({
  setInputContent,
}: CommunityContentContainerProps) => {
  return (
    <article className="w-full flex flex-col gap-6">
      <SearchBar setInputContent={setInputContent} title="게시글" />
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
