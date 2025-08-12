import { useState } from "react";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";
import PostDetailContainer from "../../features/community/components/PostDetailContainer.tsx";

export default function CommunityPost() {
  const [inputContent, setInputContent] = useState("");

  console.log(inputContent);
  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto min-h-screen  w-[968px] flex gap-[30px] py-[30px] pb-[30px]"
    >
      <CommunityPanel />
      <PostDetailContainer setInputContent={setInputContent} />
    </section>
  );
}
