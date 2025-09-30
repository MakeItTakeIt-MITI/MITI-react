import PostTopic from "../../common/components(renewal)/chips/PostTopic.tsx";
import generalImg from "../../../assets/v1.3/community_icons/general.png";
import courtInfoImg from "../../../assets/v1.3/community_icons/court_info.png";
import tournamentImg from "../../../assets/v1.3/community_icons/tournament.png";
import tacticImg from "../../../assets/v1.3/community_icons/tactic.png";
import shoesReviewImg from "../../../assets/v1.3/community_icons/shoes_review.png";
import tipImg from "../../../assets/v1.3/community_icons/tip.png";
import teamRecruitmentImg from "../../../assets/v1.3/community_icons/team_recruitment.png";
import foreignIssueImg from "../../../assets/v1.3/community_icons/foreign_issue.png";
import domesticIssueImg from "../../../assets/v1.3/community_icons/domestic_issue.png";
import guestReviewImg from "../../../assets/v1.3/community_icons/guest_review.png";
import injuryImg from "../../../assets/v1.3/community_icons/injury.png";
import gearImg from "../../../assets/v1.3/community_icons/gear.png";
import { useSearchParams } from "react-router-dom";

interface CommunityPanelProps {
  popularTopicsData: { search_word: string }[];
  handleSetToSearchParams: (selected: string) => void;
}

const CommunityPanel = ({
  popularTopicsData,
  handleSetToSearchParams,
}: CommunityPanelProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryClick = (categoryKey: string) => {
    const params = Object.fromEntries(searchParams.entries());
    // If already selected, set param to 'all' instead of removing
    if (searchParams.get("category") === categoryKey) {
      setSearchParams({ ...params, category: "all" });
    } else {
      setSearchParams({ ...params, category: categoryKey });
    }
  };

  const topicCategories = [
    [
      { key: "general", label: "자유주제", img: generalImg },
      { key: "court_info", label: "코트 정보", img: courtInfoImg },
    ],
    [
      { key: "tournament", label: "대회 정보", img: tournamentImg },
      { key: "tactic", label: "농구 전술", img: tacticImg },
    ],
    [
      { key: "shoes_revie", label: "농구화 리뷰", img: shoesReviewImg },
      { key: "tip", label: "농구 팁", img: tipImg },
    ],
    [
      {
        key: "team_recruitment",
        label: "팀원 구해요",
        img: teamRecruitmentImg,
      },
      { key: "foreign_issue", label: "해외농구", img: foreignIssueImg },
    ],
    [
      { key: "domestic_issue", label: "국내농구", img: domesticIssueImg },
      { key: "guest_review", label: "게스트후기", img: guestReviewImg },
    ],
    [
      { key: "injury", label: "부상", img: injuryImg },
      { key: "gear", label: "농구용품", img: gearImg },
    ],
  ];

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
      {/* 최근 검색어 */}
      {/* <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white">최근 검색어</h2>
      </div> */}
    </aside>
  );
};

export default CommunityPanel;
