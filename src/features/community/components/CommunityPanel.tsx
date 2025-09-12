import PostTopic from "../../common/components(renewal)/chips/PostTopic.tsx";
import { CategoryType } from "../interface/post.ts";

const CommunityPanel = () => {
  const topicCategories = [
    [{ general: "자유주제" }, { court_info: "코트 정보" }],
    [{ tournament: "대회 정보" }, { shoes_revie: "농구화 리뷰" }],
    [{ tactic: "농구 전술" }, , { team_recruitment: "팀원 구해요" }],
    [{ tip: "농구 팁" }, { foreign_issue: "해외농구" }],
    [{ domestic_issue: "국내농구" }, ,],
    [{ injury: "부상" }, { gear: "농구용품" }],
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
          {topicCategories.map((categoryGroup, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-2">
              {categoryGroup.map((category, catIdx) =>
                category
                  ? Object.entries(category).map(([key, value]) => (
                      <PostTopic key={key} content={value} />
                    ))
                  : null
              )}
            </div>
          ))}
          {/* {topicCategories.map((group, idx) => (
            <ul key={idx} className="flex items-center gap-2">
              {group.map((topic) => (
                <li key={topic}>
                  <PostTopic content={topic} />
                </li>
              ))}
            </ul>
          ))} */}
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
