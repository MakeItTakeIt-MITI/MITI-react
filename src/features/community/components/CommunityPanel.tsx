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
    <aside
      className="sm:hidden md:flex flex-col gap-6 w-[238px]"
      aria-label="커뮤니티 사이드 패널"
    >
      {/* 카테고리 */}
      <div
        className="flex flex-col gap-4"
        role="group"
        aria-labelledby="community-categories-title"
      >
        <h2 id="community-categories-title" className="font-bold text-white">
          카테고리
        </h2>
        <div
          role="listbox"
          aria-label="카테고리 선택"
          className="flex flex-col gap-2"
        >
          {topicCategories?.map((categoryGroup, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-2">
              {categoryGroup?.map((category) => {
                const isSelected =
                  searchParams.get("category") === category.key ||
                  searchParams.get("category") === category.label;
                return (
                  <button
                    key={category.key}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    aria-label={`카테고리: ${category.label}${
                      isSelected ? " (선택됨)" : ""
                    }`}
                    onClick={() => handleCategoryClick(category.key)}
                    className="transition duration-300 ease-in-out cursor-pointer"
                  >
                    <PostTopic
                      content={category.label}
                      img={category.img}
                      onClick={() => handleCategoryClick(category.key)}
                      selected={isSelected}
                    />
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* 인기검색 */}
      <div
        className="flex flex-col gap-4"
        role="group"
        aria-labelledby="popular-search-title"
      >
        <h2 id="popular-search-title" className="font-bold text-white">
          인기 검색어
        </h2>
        <ul
          className="grid grid-cols-3 grid-row-6 gap-2"
          role="listbox"
          aria-label="인기 검색어 선택"
        >
          {popularTopicsData?.map(
            (topic: { search_word: string }, idx: number) => {
              const selected = searchParams.get("search") === topic.search_word;
              return (
                <li key={idx}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    aria-label={`검색어: ${topic.search_word}${
                      selected ? " (선택됨)" : ""
                    }`}
                    onClick={() => handleSetToSearchParams(topic.search_word)}
                    style={{
                      backgroundColor: selected ? "#A3F1F2" : "",
                      color: selected ? "#000" : "#999",
                    }}
                    className="transition duration-300 ease-in-out cursor-pointer py-2.5 px-[14px] border border-[#5C5C5C] rounded-[50px] whitespace-nowrap text-xs flex items-center justify-center w-full"
                  >
                    {topic.search_word}
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </aside>
  );
};

export default CommunityPanel;
