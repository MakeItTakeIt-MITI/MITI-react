import { useCallback, useState, useMemo, useEffect } from "react";
import { useMapGamesList } from "./query/useMapGamesList.tsx";
import { useGameUrlParams } from "./useGameUrlParams.ts";
import { useTimeFormatting } from "./useTimeFormatting.ts";
import useGameStatusStore from "../store/useGameStatusStore.ts";
import { useGamesListData } from "./query/useGamesListData.tsx";
import { useInView } from "react-intersection-observer";

export const useGamesPage = () => {
  // UI State Management
  const [tab, setTab] = useState("map");
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);



  // 1. Get URL params & time format
  const { startdate, } = useGameUrlParams();
  const { timeFormat } = useTimeFormatting();


  const { gameStatusArray } = useGameStatusStore()

  // Extract selected statuses reactively with memoization
  const selectedStatusesArray = useMemo(() => {
    return gameStatusArray
      .flat()
      .filter((status) => status.isSelected)
      .map((status) => status.status);
  }, [gameStatusArray]);


  const { data: mapData, isLoading: isMapGameListLoading } = useMapGamesList(
    startdate,
    timeFormat,
    selectedStatusesArray, // reactive game status filter
    ""
  );


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





  // * Logic for Games List Only API and Infinite Scrolling* //
  const { ref: inViewGameListRef, inView } = useInView({
    threshold: 0.2,
  });


  const {
    data: gamesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isGamesListLoading,
  } = useGamesListData();

  const allGames = gamesData?.pages.flatMap((page) => page.data.items) || [];

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
      console.log("Fetching next page");
    }
  }, [
    inView,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    inViewGameListRef,
  ]);

  return {
    tab,
    isFilterBoxOpen,
    handleToggleTab,
    handleToggleMobileFilterBox,
    isMapGameListLoading,

    //* Games Map List Logic /


    //*Games List Logic */
    allGames,
    isFetchingNextPage,
    isGamesListLoading,
    inViewGameListRef,
  };
};