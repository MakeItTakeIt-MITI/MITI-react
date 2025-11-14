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
  mapDataList: GameField[];
  isMapGameListLoading: boolean;
  isGamesListLoading: boolean;
  isFilterBoxOpen: boolean;
  tab: string;
  inViewGameListRef: React.Ref<HTMLDivElement>;
  selectedProvince: string[];
  handleResetProvince: () => void;
  handleSetProvinceState: (province: string) => void;
  geolocation: { lat: number; lon: number } | null;
  handleCurrentGeoLocation: () => void;
}

export default function GameMapListContainer({
  handleToggleTab,
  handleToggleMobileFilterBox,
  tab,
  allGames = [],
  mapDataList = [],
  isMapGameListLoading,
  isGamesListLoading,
  isFilterBoxOpen,
  inViewGameListRef,
  selectedProvince,
  handleResetProvince,
  handleSetProvinceState,
  geolocation,
  handleCurrentGeoLocation,
}: GameMapListContainerProps) {
  return (
    <div className="md:w-[720px] w-full min-h-[1px] flex flex-col gap-[20px]">
      {/* Tab Navigation */}
      <TabNavigation tab={tab} handleToggleTab={handleToggleTab} />

      {/* Mobile Filter Modal */}
      {isFilterBoxOpen && (
        <FilterBox
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
          selectedProvince={selectedProvince}
          handleResetProvince={handleResetProvince}
          handleSetProvinceState={handleSetProvinceState}
        />
      )}

      {/* Main Content - Map or List View */}
      {tab === "map" ? (
        <MapView
          mapDataList={mapDataList}
          isMapGameListLoading={isMapGameListLoading}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
          selectedProvince={selectedProvince}
          handleResetProvince={handleResetProvince}
          geolocation={geolocation}
          handleCurrentGeoLocation={handleCurrentGeoLocation}
        />
      ) : (
        <ListView
          allGames={allGames}
          isGamesListLoading={isGamesListLoading}
          inViewGameListRef={inViewGameListRef}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
          selectedProvince={selectedProvince}
          handleResetProvince={handleResetProvince}
        />
      )}
    </div>
  );
}
