import CommunityContentContainer from "../../features/community/components/CommunityContentContainer.tsx";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";
import useCommunityPageData from "@/features/community/hooks/useCommunityPageData.tsx";

export default function Community() {
  const {
    popularTopicsData,
    popularPostsData,
    postsData,
    isLoading,
    handleSetToSearchParams,
    handleCategoryClick,
    topicCategories,
    searchParams,
  } = useCommunityPageData();

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
        handleCategoryClick={handleCategoryClick}
        topicCategories={topicCategories}
        searchParams={searchParams}
      />
      <CommunityContentContainer
        postsData={postsData?.data}
        popularPostsData={popularPostsData?.data}
        isLoading={isLoading}
      />
    </section>
  );
}
