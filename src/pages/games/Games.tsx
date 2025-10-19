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
    isMapGameListLoading,
    isGamesListLoading,
    gamesMapData,   // imported from useGameDataProcessing
    gamesListData, // imported from useGameDataProcessing
    displayedGames, // imported from useGameDataProcessing
  } = useGamesPage();

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
          gamesListData={gamesListData} //  Games list data without scrolling/pagination
          displayedGames={displayedGames}  // Filtered data for cards display
          isMapGameListLoading={isMapGameListLoading}
          isGamesListLoading={isGamesListLoading}
          isFilterBoxOpen={isFilterBoxOpen}
          tab={tab}
        />
      </article>
    </section>
  );
};
