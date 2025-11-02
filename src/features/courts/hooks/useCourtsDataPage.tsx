import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAllCourts } from "./query/useAllCourts";
import { useInView } from "react-intersection-observer";

const useCourtsDataPage = () => {
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

  // get the URL params for region filtering
  const [regionParams, setRegionParams] = useSearchParams();

  const handleSelectRegion = useCallback(
    (region: string) => {
      const params = Object.fromEntries(regionParams.entries());

      // toggle
      if (regionParams.get("region") === region) {
        const { ...rest } = params;
        setRegionParams({ ...rest, region: "" });
      } else {
        setRegionParams({ ...params, region });
      }
    },

    [setRegionParams]
  );

  // get the URL params for search filtering
  const [inputContent] = useSearchParams();

  // infinite hook for courts data
  const {
    data: courtsData,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useAllCourts(inputContent.get("search"), regionParams.get("region"));

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

  return {
    geolocation,
    regionParams,
    handleSelectRegion,
    courtsData,
    hasNextPage,
    fetchNextPage,
    isLoading,
    courtsDataPage,
    courtsListRef,
  };
};

export default useCourtsDataPage;
