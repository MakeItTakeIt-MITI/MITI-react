import CommunityContentContainer from "../../features/community/components/CommunityContentContainer.tsx";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";
import { useSearchParams } from "react-router-dom";
import { useGetPosts } from "../../features/community/hooks/query/useGetPosts.tsx";
import { useGetPopularTopics } from "../../features/community/hooks/query/useGetPopularTopics.tsx";

export default function Community() {
  const [searchParams] = useSearchParams();

  const getSearchParam = searchParams.get("search") || "";
  const getCategoryParamRaw = searchParams.get("category") || "";
  const getCategoryParam =
    getCategoryParamRaw === "all" ? "" : getCategoryParamRaw;

  const { data: postsData } = useGetPosts(getSearchParam, getCategoryParam);
  const { data: popularTopicsData } = useGetPopularTopics();

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto min-h-screen  sm:w-full md:w-[968px] flex gap-[30px] py-[30px] sm:px-4 md:px-0"
    >
      <CommunityPanel popularTopicsData={popularTopicsData?.data} />
      <CommunityContentContainer postsData={postsData?.data} />
    </section>
  );
}
