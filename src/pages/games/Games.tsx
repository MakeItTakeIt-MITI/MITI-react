import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useMapGamesList } from "../../features/games/hooks/query/useMapGamesList.tsx";
import { useGamesListOnly } from "../../features/games/hooks/query/useGamesList.tsx";
import { GameField } from "../../features/games/interface/games.ts";
import { useTimeField } from "../../store/Sidebar/useTimeFieldStore.ts";
import { useSelectedStore } from "../../store/NaverMap/useSelectedStore.tsx";
import GameMapListContainer from "../../features/games/components/layouts/GameMapListContainer.tsx";

export const Games = () => {
  // UI State Management
  const [tab, setTab] = useState("map");
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  
  // URL and Store State
  const [searchParams] = useSearchParams();
  const { hour, minutes } = useTimeField();
  const { isSelected, selectedAddress } = useSelectedStore();

  // Tab handling - centralized in parent
  const handleToggleTab = useCallback(
    (selected: string) => {
      setTab(selected);
    },
    [tab]
  );

  // Mobile filter handling - centralized in parent
  const handleToggleMobileFilterBox = useCallback(() => {
    setIsFilterBoxOpen((prev) => !prev);
  }, []);

  // URL Parameters - centralized extraction
  const month = searchParams.get("month");
  const day = searchParams.get("day");
  const year = searchParams.get("year");
  const game_status = searchParams.getAll("game_status");
  const regionParam = searchParams.get("region") || "";
  const searchParam = searchParams.get("search") || "";

  // Date and Time formatting - centralized
  const timeFormat = `${hour}:${minutes}`;
  const startdate = `${year}-${month}-${day}`;

  // Data fetching - centralized
  const { data: mapData, isLoading: isMapGameListLoading } = useMapGamesList(
    startdate,
    timeFormat,
    game_status
  );

  const {
    data: gamesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isGamesListLoading,
  } = useGamesListOnly(regionParam, searchParam);

  // Data processing - centralized in parent
  const gamesMapData = mapData?.data || [];
  const gamesListData: GameField[] =
    gamesData?.pages.flatMap((page) => page.data.page_content) ?? [];

  // Game filtering logic - moved from child to parent
  const displayedGames = isSelected
    ? gamesMapData.filter((game: GameField) => game.court.address === selectedAddress)
    : gamesMapData;

  // Infinite scroll handling - centralized
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  sm:w-full flex flex-col md:items-center gap-[30px] pb-[30px] "
    >
      {/* BANNER Component */}
      <BannerMedium type="manners" />
      {/* Displays games filter sidebar and games list */}
      <article className="flex gap-[30px] ">
        {/* Sidebar component to filter game rendering */}
        {tab === "map" && <Sidebar />}
        {/* Main display component between game map and game list components */}
        <GameMapListContainer
          handleToggleTab={handleToggleTab}
          handleToggleMobileFilterBox={handleToggleMobileFilterBox}
          gamesMapData={gamesMapData}
          gamesListData={gamesListData}
          displayedGames={displayedGames}
          isMapGameListLoading={isMapGameListLoading}
          isGamesListLoading={isGamesListLoading}
          isFilterBoxOpen={isFilterBoxOpen}
          tab={tab}
        />
      </article>
    </section>
  );
};
