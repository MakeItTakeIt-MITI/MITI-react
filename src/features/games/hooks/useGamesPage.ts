import { useCallback, useEffect, useState, useMemo } from "react";
import { useMapGamesList } from "./query/useMapGamesList.tsx";
import { useGamesListOnly } from "./query/useGamesList.tsx";
import { useGameUrlParams } from "./useGameUrlParams.ts";
import { useTimeFormatting } from "./useTimeFormatting.ts";
import { useGameDataProcessing } from "./useGameDataProcessing.ts";
import useGameStatusStore from "../store/useGameStatusStore.ts";
import { useCurrentLocationSetting } from "./useCurrentLocationSetting.tsx";

export const useGamesPage = () => {
  // UI State Management
  const [tab, setTab] = useState("map");
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
 const [geolocation, setGeolocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);


  // 1. Get URL params & time format
  const { startdate, regionParam, searchParam } = useGameUrlParams();
  const { timeFormat } = useTimeFormatting();

  
const { gameStatusArray } = useGameStatusStore()

// Extract selected statuses reactively with memoization
const selectedStatusesArray = useMemo(() => {
  return gameStatusArray
    .flat()
    .filter((status) => status.isSelected)
    .map((status) => status.status);
}, [gameStatusArray]);

console.log('Selected statuses:', selectedStatusesArray)

// 2. Fetch raw data from APIs
const { data: mapData, isLoading: isMapGameListLoading } = useMapGamesList(
  startdate,
  timeFormat,
  selectedStatusesArray, // reactive game status filter
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


  // Geolocation Button and finder
  const handleGeolocationClick= () => {
    useCurrentLocationSetting({ setGeolocation });
  }

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