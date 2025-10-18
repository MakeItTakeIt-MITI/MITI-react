import CommunityContentContainer from "../../features/community/components/CommunityContentContainer.tsx";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";
import { useSearchParams } from "react-router-dom";
import { useGetPosts } from "../../features/community/hooks/query/useGetPosts.tsx";
import { useGetPopularTopics } from "../../features/community/hooks/query/useGetPopularTopics.tsx";
import { useGetPopularPosts } from "../../features/community/hooks/query/useGetPopularPosts.tsx";
import { useCallback } from "react";

export default function Community() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getSearchParam = searchParams.get("search") || "";
  const getCategoryParamRaw = searchParams.get("category") || "";
  const getCategoryParam =
    getCategoryParamRaw === "all" ? "" : getCategoryParamRaw;

  const { data: postsData, isLoading } = useGetPosts(
    getSearchParam,
    getCategoryParam
  );
  const { data: popularTopicsData } = useGetPopularTopics();
  const { data: popularPostsData } = useGetPopularPosts();

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

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto min-h-screen  sm:w-full md:w-[968px] flex gap-[30px] py-[30px] sm:px-4 md:px-0"
    >
      <CommunityPanel
        popularTopicsData={popularTopicsData?.data}
        handleSetToSearchParams={handleSetToSearchParams}
      />
      <CommunityContentContainer
        postsData={postsData?.data}
        popularPostsData={popularPostsData?.data}
      />
    </section>
  );
}
