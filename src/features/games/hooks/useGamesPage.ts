// import { useDatesLogic } from './../components/sidebar/hooks/useDatesLogic';
import { useCallback, useState, useMemo, useEffect } from "react";
import { useMapGamesList } from "./query/useMapGamesList.tsx";
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
    setSelectedProvince((prev) =>
      prev.includes(province)
        ? prev.filter((p) => p !== province)
        : [...prev, province]
    );
  };

  const handleResetProvince = useCallback(() => {
    setSelectedProvince([]);
  }, []);

  const searchParams = new URLSearchParams();
  const searchValue = searchParams.get("search");

  // * Logic for Games Map List Hook/API/Parameter * //
  const { timeFormat } = useTimeFormatting();
  const { gameStatusArray } = useGameStatusStore()
  const selectedStatusesArray = useMemo(() => {
    return gameStatusArray
      .flat()
      .filter((status) => status.isSelected)
      .map((status) => status.status);
  }, [gameStatusArray]);


  const { data: mapData, isLoading: isMapGameListLoading } = useMapGamesList(dateFormat, timeFormat, selectedStatusesArray, selectedProvince,);

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
  } = useGamesListData(
    selectedStatusesArray,
    selectedProvince,
    searchValue
  );

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

  ]);


  //* Handler to display filter box for Mobile View * //
  const handleToggleMobileFilterBox = useCallback(() => {
    setIsFilterBoxOpen((prev) => !prev);
  }, []);


  // store distance info for geolocation
  const [geolocation, setGeolocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  const handleCurrentGeoLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => console.log(err.message),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // on page load, get user's geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => console.log(err.message),
        { enableHighAccuracy: true }
      );
    }
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
    handleResetProvince,

    geolocation,
    handleCurrentGeoLocation



  };
};