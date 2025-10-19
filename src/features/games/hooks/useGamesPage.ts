import { useCallback, useEffect, useState } from "react";
import { useMapGamesList } from "./query/useMapGamesList.tsx";
import { useGamesListOnly } from "./query/useGamesList.tsx";
import { useGameUrlParams } from "./useGameUrlParams.ts";
import { useTimeFormatting } from "./useTimeFormatting.ts";
import { useGameDataProcessing } from "./useGameDataProcessing.ts";

export const useGamesPage = () => {
  // UI State Management
  const [tab, setTab] = useState("map");
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);

  // 1. Get URL params & time format
  const { startdate, game_status, regionParam, searchParam } = useGameUrlParams();
  const { timeFormat } = useTimeFormatting();

    // 2. Fetch raw data from APIs
  const { data: mapData, isLoading: isMapGameListLoading } = useMapGamesList(
    startdate,
    timeFormat,
    game_status
  );

    // 3. Process & filter the data ← HERE'S WHERE useGameDataProcessing IS USED

  const {
    data: gamesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isGamesListLoading,
  } = useGamesListOnly(regionParam, searchParam);

  // Data Processing
  const gameDataProcessing = useGameDataProcessing({ mapData, gamesData });

  // Event Handlers
  const handleToggleTab = useCallback(
    (selected: string) => {
      setTab(selected);
    },
    [tab]
  );

  const handleToggleMobileFilterBox = useCallback(() => {
    setIsFilterBoxOpen((prev) => !prev);
  }, []);

  // Infinite Scroll Effect
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    // UI State
    tab,
    isFilterBoxOpen,
    
    // Event Handlers
    handleToggleTab,
    handleToggleMobileFilterBox,
    
    // Loading States
    isMapGameListLoading,
    isGamesListLoading,
    
    // Processed Data
    ...gameDataProcessing,
  };
};