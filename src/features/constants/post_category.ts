import { PostCategoryEnum } from "../enum/post_category.ts";

export const PostCategoryLabel: Record<PostCategoryEnum, string> = {
    [PostCategoryEnum.GENERAL]: "자유주제",
    [PostCategoryEnum.COURT_INFO]: "코트 정보",
    [PostCategoryEnum.TOURNAMENT]: "대회 정보",
    [PostCategoryEnum.TACTIC]: "농구 전술",
    [PostCategoryEnum.SHOES_REVIEW]: "농구화 리뷰",
    [PostCategoryEnum.TIP]: "농구 팁",
    [PostCategoryEnum.TEAM_RECRUITMENT]: "팀원 구해요",
    [PostCategoryEnum.GAME_REVIEW]: "게스트 후기",
    [PostCategoryEnum.FOREIGN_ISSUE]: "해외농구",
    [PostCategoryEnum.DOMESTIC_ISSUE]: "국내농구",
    [PostCategoryEnum.INJURY]: "부상",
    [PostCategoryEnum.GEAR]: "농구용품",
};
