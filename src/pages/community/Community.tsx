import { useState } from "react";
import CommunityContentContainer from "../../features/community/components/CommunityContentContainer.tsx";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";

export default function Community() {
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
      <CommunityContentContainer setInputContent={setInputContent} />
    </section>
  );
}
