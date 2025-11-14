import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import GameMapListContainer from "../../features/games/components/layouts/GameMapListContainer.tsx";
import { useGamesPage } from "../../features/games/hooks/useGamesPage.ts";
import { useDatesLogic } from "../../features/games/components/sidebar/hooks/useDatesLogic.ts";
import { useTimeField } from "@/store/Sidebar/useTimeFieldStore.ts";
import useGameStatusStore from "@/features/games/store/useGameStatusStore.ts";
import { useDateStore } from "@/features/games/components/sidebar/store/useDateStore.ts";

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

    selectedProvince,
    handleSetProvinceState,
    handleResetProvince,

    geolocation,
    handleCurrentGeoLocation,
  } = useGamesPage();

  const { INITIAL_DATES, handleSetYearMonthDay, dateFormat, selectedMonth } =
    useDatesLogic();

  // * Logic for Games Map List API and Infinite Scrolling* //

  const { resetTime } = useTimeField();
  const { resetAllStatuses } = useGameStatusStore();
  const { resetToToday } = useDateStore();

  const handleResetSidebarSettings = () => {
    resetTime();
    resetAllStatuses();
    resetToToday();
    handleResetProvince();
  };

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  sm:w-full flex flex-col md:items-center gap-[30px] pb-[30px] "
    >
      <BannerMedium type="manners" />
      <article className="flex gap-[30px] ">
        {/* {tab === "map" && ( */}
        <Sidebar
          INITIAL_DATES={INITIAL_DATES}
          handleSetYearMonthDay={handleSetYearMonthDay}
          dateFormat={dateFormat}
          todayMonth={selectedMonth}
          tab={tab}
          selectedProvince={selectedProvince}
          handleSetProvinceState={handleSetProvinceState}
          handleResetSidebarSettings={handleResetSidebarSettings}
        />
        {/* // )} */}
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
        />
      </article>
    </section>
  );
};
