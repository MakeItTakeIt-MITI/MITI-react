import GameMap from "../../../naver_map/components/GameMap.tsx";

import { GameField } from "../../interface/games.ts";
import ScrollableGameList from "../lists/ScrollableGameList.tsx";
import GameHeader from "../ui/GameHeader.tsx";

interface MapViewProps {
  gamesMapData: GameField[];
  displayedGames: GameField[];
  isMapGameListLoading: boolean;
  handleToggleMobileFilterBox: () => void;
}

export default function MapView({
  gamesMapData,
  displayedGames,
  isMapGameListLoading,
  handleToggleMobileFilterBox,
}: MapViewProps) {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <GameMap gamesMapData={gamesMapData} />

      <div className="flex flex-col gap-4 sm:h-[528px] md:h-[528px] overflow-y-auto custom-scrollbar px-4">
        <GameHeader
          gameCount={displayedGames?.length ?? 0}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
        />

        <ScrollableGameList
          displayedGames={displayedGames}
          isLoading={isMapGameListLoading}
        />
      </div>
    </div>
  );
}