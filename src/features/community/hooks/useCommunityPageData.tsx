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
import { useCallback } from "react";
import { useGetPopularTopics } from "./query/useGetPopularTopics";
import { useGetPopularPosts } from "./query/useGetPopularPosts";
import { useGetPosts } from "./query/useGetPosts";

const useCommunityPageData = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getSearchParam = searchParams.get("search") || "";
  const getCategoryParamRaw = searchParams.get("category") || "";
  const getCategoryParam =
    getCategoryParamRaw === "all" ? "" : getCategoryParamRaw;

  const { data: popularTopicsData } = useGetPopularTopics();
  const { data: popularPostsData } = useGetPopularPosts();

  const { data: postsData, isLoading } = useGetPosts(
    getSearchParam,
    getCategoryParam
  );

  const handleCategoryClick = (categoryKey: string) => {
    const params = Object.fromEntries(searchParams.entries());
    // If already selected, set param to 'all' instead of removing
    if (searchParams.get("category") === categoryKey) {
      setSearchParams({ ...params, category: "all" });
    } else {
      setSearchParams({ ...params, category: categoryKey });
    }
  };

  const handleSetToSearchParams = useCallback(
    (selected: string) => {
      const params = Object.fromEntries(searchParams.entries());
      if (searchParams.get("search") === selected) {
        const { search, ...rest } = params;
        setSearchParams(rest);
      } else {
        setSearchParams({ ...params, search: selected });
      }
    },
    [searchParams, setSearchParams]
  );

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

  return {
    getSearchParam,
    getCategoryParamRaw,
    handleSetToSearchParams,
    handleCategoryClick,
    topicCategories,
    searchParams,
    popularTopicsData,
    popularPostsData,
    postsData,
    isLoading,
  };
};

export default useCommunityPageData;
