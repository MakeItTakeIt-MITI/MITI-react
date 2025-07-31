import PostTopic from "../../common/components(renewal)/chips/PostTopic.tsx";

const CommunityPanel = () => {
  const topicCategories = [
    ["자유주제", "코트정보"],
    ["대회정보", "농구전술"],
    ["농구화리뷰", "농구팀"],
    ["팀원 구해요", "게스트후기"],
    ["해외농구", "국내농구"],
    ["부상", "농구용품"],
  ];

  const popularSearches = [
    ["search word", "서울", "픽업게임"],
    ["동아리농구방", "MITI", "오늘"],
  ];

  return (
    <aside className="flex flex-col gap-6 w-[238px]">
      {/* 카테고리 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white">카테고리</h2>
        <div className="flex flex-col gap-2">
          {topicCategories.map((group, idx) => (
            <ul key={idx} className="flex items-center gap-2">
              {group.map((topic) => (
                <li key={topic}>
                  <PostTopic content={topic} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {/* 인기검색 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white">인기 검색어</h2>
        <div className="flex flex-col gap-2">
          {popularSearches.map((group, idx) => (
            <ul key={idx} className="flex items-center gap-2">
              {group.map((topic) => (
                <li key={topic}>
                  <PostTopic content={topic} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {/* 최근 검색어 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white">최근 검색어</h2>
      </div>
    </aside>
  );
};

export default CommunityPanel;
