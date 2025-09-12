import CommunityContentContainer from "../../features/community/components/CommunityContentContainer.tsx";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";
import { useSearchParams } from "react-router-dom";
import { useGetPosts } from "../../features/community/hooks/query/useGetPosts.tsx";

export default function Community() {
  const [searchParams] = useSearchParams();

  const getSearchParam = searchParams.get("search") || "";

  const { data: postsData } = useGetPosts(getSearchParam);

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto min-h-screen  w-[968px] flex gap-[30px] py-[30px] pb-[30px]"
    >
      <CommunityPanel />
      <CommunityContentContainer postsData={postsData?.data} />
    </section>
  );
}
