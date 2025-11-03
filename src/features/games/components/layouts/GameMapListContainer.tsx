import { GameField } from "../../interface/games.ts";
import "../../../../index.css";
import FilterBox from "../filters/game-filter/mobile/FilterBox.tsx";
import TabNavigation from "../navigation/TabNavigation.tsx";
import MapView from "../views/MapView.tsx";
import ListView from "../views/ListView.tsx";

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
  handleToggleMobileFilterBox: () => void;
  gamesMapData: GameField[];
  allGames: GameField[];
  displayedGames: GameField[];
  isMapGameListLoading: boolean;
  isGamesListLoading: boolean;
  isFilterBoxOpen: boolean;
  tab: string;
  inViewGameListRef: React.Ref<HTMLDivElement>;
}

export default function GameMapListContainer({
  handleToggleTab,
  handleToggleMobileFilterBox,
  tab,
  gamesMapData = [],
  allGames = [],
  displayedGames = [],
  isMapGameListLoading,
  isGamesListLoading,
  isFilterBoxOpen,
  inViewGameListRef,
}: GameMapListContainerProps) {
  return (
    <div className="md:w-[720px] w-full min-h-[1px] flex flex-col gap-[20px]">
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
          allGames={allGames}
          isGamesListLoading={isGamesListLoading}
          inViewGameListRef={inViewGameListRef}
        />
      )}
    </div>
  );
}
