import Tab from "../../../common/components(renewal)/chips/Tab.tsx";
import GamesList from "./GamesList.tsx";
import Card from "../card/Card.tsx";
import SearchBar from "../../../common/components(renewal)/search/SearchBar.tsx";
import GameMap from "../../../naver_map/components/GameMap.tsx";
import { GameField } from "../../interface/games.ts";
import "../../../../index.css";
import { useSelectedStore } from "../../../../store/NaverMap/useSelectedStore.tsx";
import settings_mobile from "../../../../assets/v1.3/games/settings_icon.png";
import SettingsContainer from "../game-filter/mobile/SettingsContainer.tsx";
import { useState } from "react";
import FilterBox from "../game-filter/mobile/FilterBox.tsx";
import MapGameListCardSkeleton from "../card/MapGameListCardSkeleton.tsx";

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
  gamesMapData: GameField[];
  gamesListData: GameField[];
  isMapGameListLoading: boolean;
  tab: string;
  isGamesListLoading: boolean;
}

export default function GameMapListContainer({
  handleToggleTab,
  tab,
  gamesMapData,
  gamesListData,
  isMapGameListLoading,
  isGamesListLoading,
}: GameMapListContainerProps) {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);

  const { isSelected, selectedAddress } = useSelectedStore();
  const displayedGames = isSelected
    ? gamesMapData?.filter((game) => game.court.address === selectedAddress)
    : gamesMapData;

  const handleToggleMobileFilterBox = () => {
    setIsFilterBoxOpen((prev) => !prev);
  };

  return (
    <div className=" md:w-[700px]   w-full min-h-[1px] flex flex-col gap-[20px]">
      {isFilterBoxOpen && (
        <FilterBox handleToggleMobileFilterBox={handleToggleMobileFilterBox} />
      )}
      {/* TAB  */}
      <div className="flex px-4">
        <Tab
          content="지도"
          tab={tab}
          isSelected={tab === "map" ? true : false}
          onClick={() => handleToggleTab("map")}
        />
        <Tab
          content="리스트"
          tab={tab}
          isSelected={tab === "list" ? true : false}
          onClick={() => handleToggleTab("list")}
        />
      </div>
      {/* Games MAP/LIST */}
      {tab === "map" ? (
        <div className="flex flex-col gap-5   w-full h-full  ">
          <GameMap gamesMapData={gamesMapData} />
          {/* </Suspense> */}
          <div className="flex flex-col gap-4 sm:h-[528px] md:h-[528px] overflow-y-auto  custom-scrollbar px-4 ">
            <div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-[400] text-white">
                    총 {displayedGames?.length}개의 경기
                  </span>
                  <button
                    className="md:hidden sm:block"
                    onClick={handleToggleMobileFilterBox}
                    type="button"
                  >
                    <img src={settings_mobile} alt="settings_mobile" />
                  </button>
                </div>
                {/* Mobile Game Status */}
                <SettingsContainer />
              </div>
            </div>
            <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] overlflow-y-auto">
              {gamesMapData?.length === 0 && (
                <div className="  w-full flex flex-col gap-4 items-center justify-center">
                  <h3 className="text-lg text-white">
                    검색된 경기가 없습니다.
                  </h3>{" "}
                  <p className="text-sm text-[#999]">
                    필터를 변경하여 다른 경기를 찾아보세요!
                  </p>
                </div>
              )}

              {(isSelected
                ? gamesMapData?.filter(
                    (game) => game.court.address === selectedAddress
                  )
                : gamesMapData
              )?.map((game) =>
                isMapGameListLoading ? (
                  <MapGameListCardSkeleton />
                ) : (
                  <Card key={game.id} game={game} />
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        // ALL GAMES RENDERING CONTAINER
        <div className="flex flex-col gap-5 w-full md:px-0 sm:px-4">
          <SearchBar paramKey="search" title="경기" />
          <GamesList
            gamesListData={gamesListData}
            isGamesListLoading={isGamesListLoading}
          />
        </div>
      )}
    </div>
  );
}
