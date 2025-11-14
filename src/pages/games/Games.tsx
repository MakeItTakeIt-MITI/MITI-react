import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import GameMapListContainer from "../../features/games/components/layouts/GameMapListContainer.tsx";
import { useGamesPage } from "../../features/games/hooks/useGamesPage.ts";
import { useDatesLogic } from "../../features/games/components/sidebar/hooks/useDatesLogic.ts";

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
  } = useGamesPage();

  const { INITIAL_DATES, handleSetYearMonthDay, dateFormat, selectedMonth } =
    useDatesLogic();

  // * Logic for Games Map List API and Infinite Scrolling* //

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
        />
      </article>
    </section>
  );
};
