import CommunityContentContainer from "../../features/community/components/CommunityContentContainer.tsx";
import CommunityPanel from "../../features/community/components/CommunityPanel.tsx";

export default function Community() {
  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  w-[968px] flex gap-[30px] py-[30px] pb-[30px]"
    >
      <CommunityPanel />
      <CommunityContentContainer />
    </section>
  );
}
