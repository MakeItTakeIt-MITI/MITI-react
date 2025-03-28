import Footer from "../../components/common/Footer.tsx";

import { useEffect, useState } from "react";
import { useCourtsInfiniteDataHook } from "../../hooks/useCourtsInfiniteDataHook.tsx";
import { useInView } from "react-intersection-observer";

import { Court } from "../../interfaces/games.ts";
import CourtMap from "../../components/courts/CourtMap.tsx";
import MoveToAppBanner from "../../components/common/MoveToAppBanner.tsx";
// import FilterContainer from "../components/courts/FilterContainer.tsx";

import search from "../../assets/v11/search.svg";
import location from "../../assets/v11.2/map_pin.svg";

import { Link } from "react-router-dom";
import { RegionFilterContainer } from "../../features/games/components/RegionFilterContainer.tsx";

const Courts = () => {
  // const [displayDropbox, setDisplayDropbox] = useState(false);
  // const [selectedCity, setSelectedCity] = useState("");
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [regionValue, setRegionValue] = useState("전체");
  const [displayFilterContainer, setDisplayFilterContainer] = useState(false);

  const handleDisplayFilterContainer = () => {
    setDisplayFilterContainer(!displayFilterContainer);
  };

  const handleRegionFilter = (input: string) => {
    setRegionValue(input);
  };

  const {
    data: courtsData,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useCourtsInfiniteDataHook(
    searchInput,
    regionValue === "전체" ? "" : regionValue
  );

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const handleSearchInput = () => {
    setSearchInput(input);
    refetch();
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    refetch();
  }, [refetch, searchInput, input]);

  return (
    <>
      {displayFilterContainer && (
        <RegionFilterContainer
          handleDisplayFilterContainer={handleDisplayFilterContainer}
          handleRegionFilter={handleRegionFilter}
        />
      )}

      <div className="bg-secondary-black ">
        <header
          data-testid="courts-header"
          className="sm:bg-courts_mobile md:bg-courts_web bg-center bg-cover bg-no-repeat   sm:h-[16rem] md:h-[20rem] flex items-center justify-center bg-[#000] relative"
        >
          <div className="sm:w-full md:w-[768px]  absolute top-0 bottom-0 flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
            <p className="sm:text-sm md:text-base font-bold text-primary-teal">
              MITI 서비스 런칭
            </p>
            <h1 className="font-bold  sm:text-[24px] md:text-[44px]">
              우리 동네 농구 핫 플레이스는 어디?
            </h1>
            <p className="sm:font-[300] md:font-[400] sm:text-[14px] md:text-[20px]">
              주변 경기장을 검색해 보세요.
            </p>
          </div>
        </header>

        <section className="pt-[3.75rem] sm:px-[.81rem] pb-[6.25rem] flex flex-col  justify-center  gap-[30px] mx-auto sm:w-full md:w-[768px]">
          <div className="space-y-5 text-[#fff] text-start">
            <h1 className="text-[32px] font-[600]">경기장 목록</h1>
            <h2 className="text-[20px] font-[400]">
              동네에 있는 경기장을 찾아보세요!
            </h2>
          </div>
          <CourtMap courtsData={courtsData} />
          <div className="flex items-center sm:justify-center gap-[1.25rem]">
            <div className="space-y-[1.25rem] w-full">
              <div className="flex items-center gap-[0.75rem] h-[3rem]">
                {/* \search */}
                <div className="flex items-center justify-between bg-light-dark w-full h-full py-[0.75rem] pl-[1.25rem] pr-[0.75rem] rounded-[0.75rem]">
                  <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-light-dark text-secondary-white font-[500] courtsPlaceHolder sm:w-[11rem] md:w-[12rem]"
                    placeholder="경기장 (주소/경기장 명) 검색"
                  />
                  <button onClick={handleSearchInput}>
                    <img src={search} alt="search" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleDisplayFilterContainer}
                  className="w-[122px] h-full flex items-center justify-between bg-light-dark  py-3 pr-3 pl-5 rounded-lg"
                >
                  <span className="font-medium text-white">{regionValue}</span>
                  <img src={search} alt="dropdown" />
                </button>
                {/* <FilterContainer
                  handleDisplayDropbox={handleDisplayDropbox}
                  selectedCity={selectedCity}
                  displayDropbox={displayDropbox}
                  handleSelectCity={handleSelectCity}
                /> */}
              </div>

              <div className="sm:h-[29.5rem] bg-[#343434] md:h-[506px] w-full px-4 pt-4 pb-5 space-y-1 overflow-y-scroll rounded-[20px]  custom-scrollbar">
                {courtsData?.pages.map((page) => {
                  return page.data.page_content.length > 0 ? (
                    page.data.page_content.map((court: Court) => (
                      <Link
                        key={court.id}
                        to={`/courts/${court.id}`}
                        className=" border-b  border-b-[#525252]  w-full   py-2.5 flex justify-between items-center"
                      >
                        <div className="space-y-1 ">
                          <h1 className="font-bold text-primary-white truncate ">
                            {court.name}
                          </h1>
                          <h2 className="text-[12px] text-[#a3a3a3] font-[500] truncate">
                            {court.address} {court.address_detail}
                          </h2>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={location} alt="location" />
                          <p className="text-white text-xs font-medium">0.0m</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="w-full h-full flex  flex-col gap-3 items-center justify-center ">
                      <h1 className="text-primary-white text-[24px] font-bold ">
                        조회 결과가 없습니다.
                      </h1>
                      <h2 className="text-sm font-[400] text-[#d4d4d4]">
                        검색 조건을 변경하여 다른 경기장을 찾아보세요!{" "}
                      </h2>
                    </div>
                  );
                })}
                {hasNextPage && (
                  <div ref={ref} className="h-1 w-full opacity-0" />
                )}{" "}
              </div>
            </div>
          </div>

          <MoveToAppBanner />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Courts;
