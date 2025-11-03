import GameMap from "../../../naver_map/components/GameMap.tsx";

import { GameField } from "../../interface/games.ts";
import ScrollableGameList from "../lists/ScrollableGameList.tsx";
import GameHeader from "../ui/GameHeader.tsx";
import "../../scrollbar.css";

interface MapViewProps {
  gamesMapData: GameField[];
  mapDataList: GameField[];
  isMapGameListLoading: boolean;
  handleToggleMobileFilterBox: () => void;
}

export default function MapView({
  mapDataList,
  isMapGameListLoading,
  handleToggleMobileFilterBox,
}: MapViewProps) {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <GameMap mapDataList={mapDataList} />

      <div className="flex flex-col gap-4 sm:h-[528px] md:h-[528px] overflow-y-auto custom-scrollbar px-4">
        <GameHeader
          gameCount={mapDataList?.length ?? 0}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
        />

        <ScrollableGameList
          mapDataList={mapDataList}
          isLoading={isMapGameListLoading}
        />
      </div>
    </div>
  );
}
