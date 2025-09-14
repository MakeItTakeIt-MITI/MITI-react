import { CategoryType } from "../interface/post";

const categoryLabels: Record<CategoryType, string> = {
  general: "자유주제",
  court_info: "코트 정보",
  tournament: "대회 정보",
  tactic: "농구 전술",
  shoes_revie: "농구화 리뷰",
  tip: "농구 팁",
  team_recruitment: "팀원 구해요",
  game_review: "게스트 후기",
  foreign_issue: "해외농구",
  domestic_issue: "국내농구",
  injury: "부상",
  gear: "농구용품",
};

interface PostCategoryChipProps {
  category: CategoryType;
}

const PostCategoryChip = ({ category }: PostCategoryChipProps) => {
  return (
    <span className="py-1 px-[6px] text-[10px] rounded-[4px] text-[#858585] bg-[#474747]">
      {categoryLabels[category]}
    </span>
  );
};

export default PostCategoryChip;
