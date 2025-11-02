import PostTopic from "../../common/components(renewal)/chips/PostTopic.tsx";

interface CommunityPanelProps {
  popularTopicsData: { search_word: string }[];
  handleSetToSearchParams: (selected: string) => void;
  handleCategoryClick: (categoryKey: string) => void;
  topicCategories: { key: string; label: string; img: string }[][];
  searchParams: URLSearchParams;
}

const CommunityPanel = ({
  popularTopicsData,
  handleSetToSearchParams,
  handleCategoryClick,
  topicCategories,
  searchParams,
}: CommunityPanelProps) => {
  return (
    <aside className="sm:hidden md:flex flex-col gap-6 w-[238px]">
      {/* 카테고리 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white">카테고리</h2>
        <div className="flex flex-col gap-2">
          {topicCategories?.map((categoryGroup, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-2">
              {categoryGroup?.map((category) => {
                const isSelected =
                  searchParams.get("category") === category.key ||
                  searchParams.get("category") === category.label;
                return (
                  <PostTopic
                    key={category.key}
                    content={category.label}
                    img={category.img}
                    onClick={() => handleCategoryClick(category.key)}
                    selected={isSelected}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {/* 인기검색 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white">인기 검색어</h2>
        <ul className="grid grid-cols-3 grid-row-6 gap-2">
          {popularTopicsData?.map(
            (topic: { search_word: string }, idx: number) => (
              <li
                key={idx}
                onClick={() => handleSetToSearchParams(topic.search_word)}
                style={{
                  backgroundColor:
                    searchParams.get("search") === topic.search_word
                      ? "#A3F1F2"
                      : "",
                  color:
                    searchParams.get("search") === topic.search_word
                      ? "#000"
                      : "#999",
                }}
                className="transition duration-300 ease-in-out cursor-pointer py-2.5 px-[14px] border border-[#5C5C5C] rounded-[50px] whitespace-nowrap text-xs  flex items-center justify-center "
              >
                {topic.search_word}
              </li>
            )
          )}
        </ul>
      </div>
    </aside>
  );
};

export default CommunityPanel;
