import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import GameSideBar from "../../features/games/components/sidebar/GameSideBar.tsx";
import GameMapListContainer from "../../features/games/components/layouts/GameMapListContainer.tsx";
import { useGamesPage } from "../../features/games/hooks/useGamesPage.ts";
import { useDatesLogic } from "../../features/games/components/sidebar/hooks/useDatesLogic.ts";
import { useTimeField } from "@/store/Sidebar/useTimeFieldStore.ts";
import useGameStatusStore from "@/features/games/store/useGameStatusStore.ts";
import { useDateStore } from "@/features/games/components/sidebar/store/useDateStore.ts";
import { useSelectedStore } from "@/store/NaverMap/useSelectedStore.tsx";

export const Games = () => {
  // Custom Hook to manages games data, state and interactions

  const {
    tab,
    isFilterBoxOpen,
    handleToggleTab,
    handleToggleMobileFilterBox,

    // * Games Map List Logic *
    mapDataList,
    isMapGameListLoading,

    // * Games List Logic *
    allGames,
    isFetchingNextPage,

    inViewGameListRef,

    // * Province Filtering Logic *
    selectedProvince,
    handleSetProvinceState,
    handleResetProvince,

    // * Province Filtering Logic *
    geolocation,
    handleCurrentGeoLocation,
  } = useGamesPage();

  const { INITIAL_DATES, handleSetYearMonthDay, dateFormat, selectedMonth } =
    useDatesLogic();

  // * Logic for Games Map List API and Infinite Scrolling* //

  const { resetTime } = useTimeField();
  const { resetAllStatuses } = useGameStatusStore();
  const { resetToToday } = useDateStore();

  const { selectedAddress, isSelected } = useSelectedStore();

  const handleResetSidebarSettings = () => {
    resetTime();
    resetAllStatuses();
    resetToToday();
    handleResetProvince();
  };

  return (
    <main
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  sm:w-full flex flex-col md:items-center gap-[30px] pb-[30px] "
    >
      <BannerMedium type="manners" />
      <article className="flex gap-[30px] ">
        <GameSideBar
          INITIAL_DATES={INITIAL_DATES}
          handleSetYearMonthDay={handleSetYearMonthDay}
          dateFormat={dateFormat}
          todayMonth={selectedMonth}
          selectedProvince={selectedProvince}
          handleSetProvinceState={handleSetProvinceState}
          handleResetSidebarSettings={handleResetSidebarSettings}
          tab={tab}
        />
        <GameMapListContainer
          handleToggleTab={handleToggleTab}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
          gamesMapData={mapDataList} // Raw map data for map markers
          allGames={allGames} //  Games list data without scrolling/pagination
          mapDataList={mapDataList} // Filtered data for cards display
          isMapGameListLoading={isMapGameListLoading}
          isGamesListLoading={isFetchingNextPage}
          isFilterBoxOpen={isFilterBoxOpen}
          tab={tab}
          inViewGameListRef={inViewGameListRef}
          selectedProvince={selectedProvince}
          handleResetProvince={handleResetProvince}
          handleSetProvinceState={handleSetProvinceState}
          geolocation={geolocation}
          handleCurrentGeoLocation={handleCurrentGeoLocation}
          selectedAddress={selectedAddress}
          isSelected={isSelected}
        />
      </article>
    </main>
  );
};
