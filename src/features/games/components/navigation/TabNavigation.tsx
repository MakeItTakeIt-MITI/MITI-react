import Tab from "../../../common/components(renewal)/chips/Tab.tsx";

interface TabNavigationProps {
  tab: string;
  handleToggleTab: (tab: string) => void;
}

export default function TabNavigation({ tab, handleToggleTab }: TabNavigationProps) {
  return (
    <div className="flex px-4">
      <Tab
        content="지도"
        isSelected={tab === "map"}
        onClick={() => handleToggleTab("map")}
      />
      <Tab
        content="리스트"
        isSelected={tab === "list"}
        onClick={() => handleToggleTab("list")}
      />
    </div>
  );
}