import Tab from "../../common/components(renewal)/chips/Tab.tsx";

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
}

export default function GameMapListContainer({
  handleToggleTab,
}: GameMapListContainerProps) {
  return (
    <div className=" w-[700px] flex flex-col gap-[30px]">
      <div className="flex">
        <Tab content="지도" isSelected onClick={() => handleToggleTab("map")} />
        <Tab
          content="리스트"
          isSelected={false}
          onClick={() => handleToggleTab("list")}
        />
      </div>
    </div>
  );
}
