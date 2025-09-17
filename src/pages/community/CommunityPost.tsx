import { useState } from "react";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";
import PostDetailContainer from "../../features/community/components/post-details/PostDetailContainer.tsx";
import { useGetPostDetails } from "../../features/community/hooks/query/useGetPostDetails.tsx";
import { useParams } from "react-router-dom";
import { useGetPostComments } from "../../features/community/hooks/query/useGetPostComments.tsx";

export default function CommunityPost() {
  const { id } = useParams();
  const { data: postDetailsData } = useGetPostDetails(Number(id));
  const postDetails = postDetailsData?.data;

  const { data: postComments } = useGetPostComments(Number(id));

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto min-h-screen  w-[968px] flex gap-[30px] py-[30px] pb-[30px]"
    >
      <CommunityPanel />
      <PostDetailContainer
        postDetails={postDetails}
        postComments={postComments}
      />
    </section>
  );
}
