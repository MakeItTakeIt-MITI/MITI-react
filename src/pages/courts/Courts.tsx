import { useSearchParams } from "react-router-dom";
import Sidebar from "../../features/courts/components/v1.3/Sidebar.tsx";
import { useCallback, useEffect, useState } from "react";
import SearchBar from "../../features/games/components/game-list/SearchBar.tsx";
import CourtsListContainer from "../../features/courts/components/v1.3/CourtsListContainer.tsx";
import { useAllCourts } from "../../features/courts/hooks/query/useAllCourts.tsx";
import { useInView } from "react-intersection-observer";
import { useCalculateDistance } from "../../features/courts/hooks/useCalculateDistance.ts";

export default function Courts() {
  const [geolocation, setGeolocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  const [regionParams, setRegionParams] = useSearchParams();
  const [inputContent, setInputContent] = useSearchParams();

  // callback function to filter by region
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

    [setRegionParams, regionParams]
  );

  const handleSearch = useCallback(
    (search: string) => {
      const params = Object.fromEntries(inputContent.entries());

      // toggle
      if (inputContent.get("search") === search) {
        const { ...rest } = params;
        setInputContent({ ...rest, search: "" });
      } else {
        setInputContent({ ...params, search });
      }
    },

    [setRegionParams, regionParams]
  );

  const {
    data: courtsData,
    hasNextPage,
    fetchNextPage,
  } = useAllCourts("", regionParams.get("region"));

  const courtsDataPage = courtsData?.pages?.flatMap(
    (page) => page?.data?.page_content
  );

  const { ref: courtsListRef, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

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

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
    >
      <article className="flex  gap-[30px]">
        <Sidebar handleSelectRegion={handleSelectRegion} />

        <div className=" w-[880px] flex flex-col  gap-[20px]">
          <div className="w-[800px] mx-auto ">
            <SearchBar setInputContent={setInputContent} title="경기장" />
          </div>{" "}
          <CourtsListContainer
            courstDataPage={courtsDataPage}
            hasNextPage={hasNextPage}
            courtsListRef={courtsListRef}
            geoLatitude={geolocation?.lat}
            geoLongitude={geolocation?.lon}
          />
        </div>
      </article>
    </section>
  );
}
