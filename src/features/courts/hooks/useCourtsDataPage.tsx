import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAllCourts } from "./query/useAllCourts";
import { useInView } from "react-intersection-observer";
import useCourtDetails from "./query/useCourtDetails";
import useCourtsGameList from "./query/useCourtsGameList";

const useCourtsDataPage = () => {
  const [selectedProvince, setSelectedProvince] = useState<string[]>([]);

  // get the URL params for search filtering
  const [inputContent] = useSearchParams();

  // infinite hook for courts data
  const {
    data: courtsData,
    hasNextPage,
    fetchNextPage,
    isLoading,
    refetch,
  } = useAllCourts(selectedProvince, inputContent.get("search"));

  const toggleProvince = (region: string) => {
    refetch();
    setSelectedProvince((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  // flatten the paginated data
  const courtsDataPage = courtsData?.pages?.flatMap(
    (page) => page?.data?.items
  );

  // infinite scroll observer **hint**: threshold 0.2 means when 20% of the target is visible
  const { ref: courtsListRef, inView } = useInView({
    threshold: 0.2,
  });

  // fetch next page when in view (react-intersection-observer)
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  //  ========   Courts Detail Page Logic  =========

  const { id } = useParams();
  const courtId = Number(id);

  const { data } = useCourtDetails(courtId);
  const courtDetailData = data?.data;

  const {
    data: courtsGamesListData,
    hasNextPage: hasCourtsDetailNextPage,
    fetchNextPage: fetchCourtsDetailNextPage,
  } = useCourtsGameList(courtId);

  const courtsGamesPageContent = courtsGamesListData?.pages[0].data;

  // store distance info for geolocation
  const [geolocation, setGeolocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

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
    geolocation,

    courtsData,
    hasNextPage,
    fetchNextPage,
    isLoading,
    courtsDataPage,
    courtsListRef,

    courtDetailData,
    courtsGamesPageContent,
    hasCourtsDetailNextPage,
    fetchCourtsDetailNextPage,

    selectedProvince,
    toggleProvince,
  };
};

export default useCourtsDataPage;
