import { useSearchParams } from "react-router-dom";
import Tab from "../../common/components(renewal)/chips/Tab.tsx";
import GamesListMap from "./map/GamesListMap.tsx";
import GamesList from "./game-list/GamesList.tsx";
import Card from "./card/Card.tsx";

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
}

export default function GameMapListContainer({
  handleToggleTab,
}: GameMapListContainerProps) {
  const [serchParams] = useSearchParams();
  const tab = serchParams.get("tab");

  return (
    <div className=" w-[700px] flex flex-col gap-[30px]">
      {/* TAB  */}
      <div className="flex">
        <Tab content="지도" isSelected onClick={() => handleToggleTab("map")} />
        <Tab
          content="리스트"
          isSelected={false}
          onClick={() => handleToggleTab("list")}
        />
      </div>
      {/* Games MAP/LIST */}
      {tab === "map" ? <GamesListMap /> : <GamesList />}

      {/* GAME CARD LIST CAONTAINER */}
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
}
