
import { GameField } from "../../interface/games.ts";
import "../../../../index.css";

import TabNavigation from "../navigation/TabNavigation.tsx"
import MapView from "../views/MapView.tsx";
import ListView from "../views/ListView.tsx";
import FilterBox from "../filters/game-filter/mobile/FilterBox.tsx";

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
  handleToggleMobileFilterBox: () => void;
  gamesMapData: GameField[];
  gamesListData: GameField[];
  displayedGames: GameField[];
  isMapGameListLoading: boolean;
  isGamesListLoading: boolean;
  isFilterBoxOpen: boolean;
  tab: string;
}

export default function GameMapListContainer({
  handleToggleTab,
  handleToggleMobileFilterBox,
  tab,
  gamesMapData = [],
  gamesListData = [],
  displayedGames = [],
  isMapGameListLoading,
  isGamesListLoading,
  isFilterBoxOpen,
}: GameMapListContainerProps) {


  return (
    <div className="md:w-[700px] w-full min-h-[1px] flex flex-col gap-[20px]">
      {/* Mobile Filter Modal */}
      {isFilterBoxOpen && (
        <FilterBox handleToggleMobileFilterBox={handleToggleMobileFilterBox} />
      )}

      {/* Tab Navigation */}
      <TabNavigation tab={tab} handleToggleTab={handleToggleTab} />

      {/* Main Content - Map or List View */}
      {tab === "map" ? (
        <MapView
          gamesMapData={gamesMapData}
          displayedGames={displayedGames}
          isMapGameListLoading={isMapGameListLoading}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
        />
      ) : (
        <ListView
          gamesListData={gamesListData}
          isGamesListLoading={isGamesListLoading}
        />
      )}
    </div>
  );
}
