import GameMap from "../../../naver_map/components/GameMap.tsx";

import { GameField } from "../../interface/games.ts";
import ScrollableGameList from "../lists/ScrollableGameList.tsx";
import GameHeader from "../ui/GameHeader.tsx";
import "../../scrollbar.css";

interface MapViewProps {
  mapDataList: GameField[];
  isMapGameListLoading: boolean;
  handleToggleMobileFilterBox: () => void;
  selectedProvince: string[];
  handleResetProvince: () => void;
  geolocation: { lat: number; lon: number } | null;
  handleCurrentGeoLocation: () => void;
  selectedAddress: string | null;
  isSelected: boolean;
}

export default function MapView({
  mapDataList,
  isMapGameListLoading,
  handleToggleMobileFilterBox,
  selectedProvince,
  handleResetProvince,
  geolocation,
  handleCurrentGeoLocation,
  selectedAddress,
  isSelected,
}: MapViewProps) {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <GameMap
        mapDataList={mapDataList}
        geolocation={geolocation}
        handleCurrentGeoLocation={handleCurrentGeoLocation}
      />
      {/* <GamesMap mapDataList={mapDataList} geolocation={geolocation} /> */}
      {/* <GamesMap /> */}
      <div className="flex flex-col gap-4 sm:h-[528px] md:h-[528px] overflow-y-auto custom-scrollbar px-4">
        <GameHeader
          gameCount={mapDataList?.length ?? 0}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
          selectedProvince={selectedProvince}
          handleResetProvince={handleResetProvince}
        />

        <ScrollableGameList
          mapDataList={mapDataList}
          isLoading={isMapGameListLoading}
          selectedAddress={selectedAddress}
          isSelected={isSelected}
        />
      </div>
    </div>
  );
}
