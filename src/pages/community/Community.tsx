import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";
import useCommunityPageData from "@/features/community/hooks/useCommunityPageData.tsx";
import CommunityPostsContainer from "../../features/community/components/CommunityPostsContainer.tsx";

export default function Community() {
  const {
    popularTopicsData,
    popularPostsData,
    allPosts,
    isLoading,
    handleSetToSearchParams,
    handleCategoryClick,
    topicCategories,
    searchParams,
    communityPostRef,
  } = useCommunityPageData();

  return (
    <main
      style={{ backgroundColor: "#141414" }}
      className="mx-auto min-h-screen sm:w-full md:w-[968px] flex gap-[30px] py-[30px] sm:px-4 md:px-0"
      aria-labelledby="community-page-title"
    >
      <h1 id="community-page-title" className="sr-only">
        게시판 페이지
      </h1>

      <aside className="sm:hidden md:block" aria-label="커뮤니티 사이드 패널">
        <CommunityPanel
          popularTopicsData={popularTopicsData?.data}
          handleSetToSearchParams={handleSetToSearchParams}
          handleCategoryClick={handleCategoryClick}
          topicCategories={topicCategories}
          searchParams={searchParams}
        />
      </aside>

      <section
        className="flex-1"
        role="region"
        aria-labelledby="community-content-title"
      >
        <h2 id="community-content-title" className="sr-only">
          게시판 목록
        </h2>
        <CommunityPostsContainer
          allPosts={allPosts ? allPosts : []}
          popularPostsData={popularPostsData?.data}
          isLoading={isLoading}
          communityPostRef={communityPostRef}
        />
      </section>
    </main>
  );
}
