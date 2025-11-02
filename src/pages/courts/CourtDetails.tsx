import { useParams, useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import SearchBar from "../../features/common/components(renewal)/search/SearchBar.tsx";
import Sidebar from "../../features/courts/components/v1.3/Sidebar.tsx";
import useCourtDetails from "../../features/courts/hooks/query/useCourtDetails.tsx";
import Map from "../../features/courts/components/map/Map.tsx";
import useCourtsGameList from "../../features/courts/hooks/query/useCourtsGameList.tsx";
import CourtInfoContainer from "../../features/courts/components/court-details/CourtInfoContainer.tsx";
import useCourtsDataPage from "@/features/courts/hooks/useCourtsDataPage.tsx";

export default function CourtDetails() {
  const {
    geolocation,
    handleSelectProvince,
    courtDetailData,
    courtGamesList,
    hasCourtsDetailNextPage,
    fetchCourtsDetailNextPage,
  } = useCourtsDataPage();

  // const [geolocation, setGeolocation] = useState<{
  //   lat: number;
  //   lon: number;
  // } | null>(null);

  // callback function to filter by region
  // const handleSelectRegion = useCallback(
  //   (region: string) => {
  //     const params = Object.fromEntries(searchParams.entries());

  //     // toggle
  //     if (searchParams.get("region") === region) {
  //       const { ...rest } = params;
  //       setSearchParams({ ...rest, region: "" });
  //     } else {
  //       setSearchParams({ ...params, region });
  //     }
  //   },

  //   [setSearchParams, searchParams]
  // );

  // const {
  //   data: courtsGamesListData,
  //   hasNextPage,
  //   fetchNextPage,
  // } = useCourtsGameList(Number(id));

  // const courtsGamesPageContent = courtsGamesListData?.pages.flatMap(
  //   (page) => page.data.page_content
  // );

  // console.log(courtsGamesPageContent);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setGeolocation({
  //           lat: position.coords.latitude,
  //           lon: position.coords.longitude,
  //         });
  //       },
  //       (err) => console.log(err.message),
  //       { enableHighAccuracy: true }
  //     );
  //   }
  // }, []);

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto  sm:w-full md:w-[968px] sm:h-full md:min-h-[840px] flex flex-col  gap-[30px] sm:pb-[30px] md:py-[30px]"
    >
      <article className="flex gap-6">
        {/* <Sidebar handleSelectProvince={handleSelectRegion} /> */}
        <div className="sm:w-full md:w-[800px] min-h-[1px] flex flex-col gap-[20px]">
          {/* <div className="sm:hidden md:block">
            <SearchBar paramKey="search" title="경기장" />
          </div> */}
          {/* <CourtsListContainer /> */}
          <div className="flex md:flex-row sm:flex-col sm:gap-3 md:gap-[30px]">
            <Map
              lat={courtDetailData?.latitude}
              long={courtDetailData?.longitude}
            />
            <CourtInfoContainer
              courtDetailData={courtDetailData}
              courtGamesList={courtGamesList ?? []}
              fetchNextPage={fetchCourtsDetailNextPage}
              hasNextPage={hasCourtsDetailNextPage}
              geoLatitude={geolocation?.lat}
              geoLongitude={geolocation?.lon}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
