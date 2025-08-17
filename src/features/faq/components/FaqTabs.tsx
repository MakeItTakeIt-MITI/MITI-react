import Tab from "../../common/components(renewal)/chips/Tab.tsx";

interface FaqTabsProps {
  handleToggleTab: (arg: string) => void;
}

const FaqTabs = ({ handleToggleTab }: FaqTabsProps) => {
  return (
    <div className="flex">
      <Tab
        content="전체"
        isSelected={true}
        onClick={() => handleToggleTab("all")}
      />
      <Tab
        content="경기"
        isSelected={false}
        onClick={() => handleToggleTab("game")}
      />
      <Tab
        content="참가"
        isSelected={false}
        onClick={() => handleToggleTab("participation")}
      />
      <Tab
        content="정산"
        isSelected={false}
        onClick={() => handleToggleTab("settlement")}
      />{" "}
      <Tab
        content="리뷰"
        isSelected={false}
        onClick={() => handleToggleTab("review")}
      />
      <Tab
        content="신고"
        isSelected={false}
        onClick={() => handleToggleTab("report")}
      />
      <Tab
        content="기타"
        isSelected={false}
        onClick={() => handleToggleTab("etc")}
      />
    </div>
  );
};

export default FaqTabs;
