// import { useDatesLogic } from './../components/sidebar/hooks/useDatesLogic';
import { useCallback, useState, useMemo, useEffect } from "react";
import { useMapGamesList } from "./query/useMapGamesList.tsx";
import { useGameUrlParams } from "./useGameUrlParams.ts";
import { useTimeFormatting } from "./useTimeFormatting.ts";
import useGameStatusStore from "../store/useGameStatusStore.ts";
import { useGamesListData } from "./query/useGamesListData.tsx";
import { useInView } from "react-intersection-observer";
import { useDatesLogic } from "../components/sidebar/hooks/useDatesLogic.ts";

export const useGamesPage = () => {



  const { dateFormat } = useDatesLogic()
  // const { selectedProvince } = useProvinceStore()

  // UI State Management
  const [tab, setTab] = useState("map");
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  // const { dateFormat } = useDatesLogic();

  // ** PROVINCE LOGIC
  const [selectedProvince, setSelectedProvince] = useState<string[]>([]);

  const handleSetProvinceState = (province: string) => {
    setSelectedProvince((prev) => {
      if (prev.includes(province)) {
        return prev.filter((p) => p !== province);
      } else {
        return [...prev, province];
      }
    });
  };




  // * Logic for Games Map List Hook/API/Parameter * //
  const { timeFormat } = useTimeFormatting();
  const { gameStatusArray } = useGameStatusStore()
  const selectedStatusesArray = useMemo(() => {
    return gameStatusArray
      .flat()
      .filter((status) => status.isSelected)
      .map((status) => status.status);
  }, [gameStatusArray]);


  const { data: mapData, isLoading: isMapGameListLoading } = useMapGamesList(dateFormat, timeFormat, selectedStatusesArray, selectedProvince);

  const mapDataList = mapData?.data || [];

  // *Logic for Switching Tabs Between Map/list * //
  const handleToggleTab = useCallback(
    (selected: string) => {
      setTab(selected);
    },
    [tab]
  );



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

    return () => { inView }
  }, [
    inView,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    inViewGameListRef,
    dateFormat,
    selectedProvince


  ]);


  //* Handler to display filter box for Mobile View * //
  const handleToggleMobileFilterBox = useCallback(() => {
    setIsFilterBoxOpen((prev) => !prev);
  }, []);


  return {
    tab,
    isFilterBoxOpen,
    handleToggleTab,
    handleToggleMobileFilterBox,
    isMapGameListLoading,

    //* Games Map List Logic /
    mapDataList,

    //*Games List Logic */
    allGames,
    isFetchingNextPage,
    isGamesListLoading,
    inViewGameListRef,


    selectedProvince,
    handleSetProvinceState,


  };
};