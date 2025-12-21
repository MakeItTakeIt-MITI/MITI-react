import CourtsSidebar from "../../features/courts/components/v1.3/CourtsSidebar.tsx";
import SearchBar from "../../features/common/components(renewal)/search/SearchBar.tsx";
import CourtsListContainer from "../../features/courts/components/v1.3/CourtsListContainer.tsx";
import MobileFilterBox from "../../features/courts/components/v1.3/MobileFilterBox.tsx";
import useCourtsDataPage from "@/features/courts/hooks/useCourtsDataPage.tsx";

export default function Courts() {
  const {
    geolocation,
    courtsDataPage,
    hasNextPage,
    courtsListRef,
    isLoading,
    toggleProvince,
    selectedProvince,
  } = useCourtsDataPage();

  return (
    <main
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto sm:w-full md:w-[968px] flex flex-col sm:px-4 md:px-0  md:items-center gap-[30px] py-[30px]"
    >
      <section className="flex  gap-[30px]">
        <CourtsSidebar
          toggleProvince={toggleProvince}
          selectedProvince={selectedProvince}
        />

        <div className="sm:w-full md:w-[880px] flex flex-col  gap-[20px]">
          <div className="sm:w-full md:w-[800px] mx-auto ">
            <SearchBar title="경기장" paramKey="search" />
          </div>{" "}
          <MobileFilterBox
            toggleProvince={toggleProvince}
            selectedProvince={selectedProvince}
          />
          <CourtsListContainer
            courstDataPage={courtsDataPage}
            hasNextPage={hasNextPage}
            courtsListRef={courtsListRef}
            geoLatitude={geolocation?.lat}
            geoLongitude={geolocation?.lon}
            isLoading={isLoading}
          />
        </div>
      </section>
    </main>
  );
}
