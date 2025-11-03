import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import GameMapListContainer from "../../features/games/components/layouts/GameMapListContainer.tsx";
import { useGamesPage } from "../../features/games/hooks/useGamesPage.ts";

export const Games = () => {
  // Custom Hook to manages games data, state and interactions

  const {
    tab,
    isFilterBoxOpen,
    handleToggleTab,
    handleToggleMobileFilterBox,
    // isGamesListLoading,
    gamesMapData, // imported from useGameDataProcessing
    // gamesListData, // imported from useGameDataProcessing
    displayedGames, // imported from useGameDataProcessing

    allGames,
    isFetchingNextPage,
    isGamesListLoading,
    inViewGameListRef,
  } = useGamesPage();

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
        {tab === "map" && <Sidebar />}
        <GameMapListContainer
          handleToggleTab={handleToggleTab}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
          gamesMapData={gamesMapData} // Raw map data for map markers
          allGames={allGames} //  Games list data without scrolling/pagination
          displayedGames={displayedGames} // Filtered data for cards display
          isMapGameListLoading={isFetchingNextPage}
          isGamesListLoading={isGamesListLoading}
          isFilterBoxOpen={isFilterBoxOpen}
          tab={tab}
          inViewGameListRef={inViewGameListRef}
        />
      </article>
    </section>
  );
};
