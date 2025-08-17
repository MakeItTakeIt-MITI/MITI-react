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
        onClick={() => handleToggleTab("games")}
      />
      <Tab
        content="정산"
        isSelected={false}
        onClick={() => handleToggleTab("payments")}
      />{" "}
      <Tab
        content="리뷰"
        isSelected={false}
        onClick={() => handleToggleTab("reviews")}
      />
      <Tab
        content="신고"
        isSelected={false}
        onClick={() => handleToggleTab("reports")}
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
