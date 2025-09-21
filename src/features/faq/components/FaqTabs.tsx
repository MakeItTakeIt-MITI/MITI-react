import Tab from "../../common/components(renewal)/chips/Tab.tsx";

interface FaqTabsProps {
  handleToggleTab: (arg: string) => void;
  currentTab: string | null;
}

const FaqTabs = ({ handleToggleTab, currentTab }: FaqTabsProps) => {
  return (
    <div className="flex">
      <Tab
        content="전체"
        isSelected={currentTab === "" || currentTab === "전체"}
        onClick={() => handleToggleTab("")}
      />
      <Tab
        content="경기"
        isSelected={currentTab === "game"}
        onClick={() => handleToggleTab("game")}
      />
      <Tab
        content="참가"
        isSelected={currentTab === "participation"}
        onClick={() => handleToggleTab("participation")}
      />
      <Tab
        content="정산"
        isSelected={currentTab === "settlement"}
        onClick={() => handleToggleTab("settlement")}
      />
      <Tab
        content="리뷰"
        isSelected={currentTab === "review"}
        onClick={() => handleToggleTab("review")}
      />
      <Tab
        content="신고"
        isSelected={currentTab === "report"}
        onClick={() => handleToggleTab("report")}
      />
      <Tab
        content="기타"
        isSelected={currentTab === "etc"}
        onClick={() => handleToggleTab("etc")}
      />
    </div>
  );
};

export default FaqTabs;
