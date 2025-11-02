import Sidebar from "../../features/courts/components/v1.3/Sidebar.tsx";
import SearchBar from "../../features/common/components(renewal)/search/SearchBar.tsx";
import CourtsListContainer from "../../features/courts/components/v1.3/CourtsListContainer.tsx";
import MobileFilterBox from "../../features/courts/components/v1.3/MobileFilterBox.tsx";
import useCourtsDataPage from "@/features/courts/hooks/useCourtsDataPage.tsx";

export default function Courts() {
  const {
    geolocation,
    courtsDataPage,
    handleSelectRegion,
    hasNextPage,
    courtsListRef,
    isLoading,
  } = useCourtsDataPage();

  return (
    <section
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto sm:w-full md:w-[968px] flex flex-col sm:px-4 md:px-0  md:items-center gap-[30px] py-[30px]"
    >
      <article className="flex  gap-[30px]">
        <Sidebar handleSelectRegion={handleSelectRegion} />

        <div className="sm:w-full md:w-[880px] flex flex-col  gap-[20px]">
          <div className="sm:w-full md:w-[800px] mx-auto ">
            <SearchBar title="경기장" paramKey="search" />
          </div>{" "}
          <MobileFilterBox />
          <CourtsListContainer
            courstDataPage={courtsDataPage}
            hasNextPage={hasNextPage}
            courtsListRef={courtsListRef}
            geoLatitude={geolocation?.lat}
            geoLongitude={geolocation?.lon}
            isLoading={isLoading}
          />
        </div>
      </article>
    </section>
  );
}
