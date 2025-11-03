import Map from "../../features/courts/components/map/Map.tsx";
import CourtInfoContainer from "../../features/courts/components/court-details/CourtInfoContainer.tsx";
import useCourtsDataPage from "@/features/courts/hooks/useCourtsDataPage.tsx";

export default function CourtDetails() {
  const {
    geolocation,

    courtDetailData,
    courtsGamesPageContent,
    hasCourtsDetailNextPage,
    fetchCourtsDetailNextPage,
  } = useCourtsDataPage();

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
              courtsGamesPageContent={courtsGamesPageContent?.items}
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
