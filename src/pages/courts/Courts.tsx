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
      aria-labelledby="courts-page-title"
      style={{
        backgroundColor: "#141414",
      }}
      className="mx-auto sm:w-full md:w-[968px] flex flex-col sm:px-4 md:px-0  md:items-center gap-[30px] py-[30px]"
    >
      {/* 페이지 제목: 스크린 리더용 */}
      <h1 id="courts-page-title" className="sr-only">
        경기장 목록 페이지
      </h1>

      <section
        className="flex gap-[30px]"
        aria-labelledby="courts-section-title"
      >
        <h2 id="courts-section-title" className="sr-only">
          경기장 검색 및 필터
        </h2>

        <aside aria-label="경기장 필터 사이드바">
          <CourtsSidebar
            toggleProvince={toggleProvince}
            selectedProvince={selectedProvince}
          />
        </aside>

        <div
          className="sm:w-full md:w-[880px] flex flex-col gap-[20px]"
          role="region"
          aria-labelledby="courts-search-title"
        >
          <div className="sm:w-full md:w-[800px] mx-auto">
            <h3 id="courts-search-title" className="sr-only">
              경기장 검색
            </h3>
            <SearchBar
              title="경기장"
              paramKey="search"
              aria-label="경기장 검색 입력"
            />
          </div>

          <MobileFilterBox
            toggleProvince={toggleProvince}
            selectedProvince={selectedProvince}
            aria-label="모바일 지역 필터 박스"
          />
          <section
            role="region"
            aria-labelledby="courts-list-title"
            className="w-full"
          >
            <h3 id="courts-list-title" className="sr-only">
              경기장 목록
            </h3>
            <CourtsListContainer
              courstDataPage={courtsDataPage}
              hasNextPage={hasNextPage}
              courtsListRef={courtsListRef}
              geoLatitude={geolocation?.lat}
              geoLongitude={geolocation?.lon}
              isLoading={isLoading}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
