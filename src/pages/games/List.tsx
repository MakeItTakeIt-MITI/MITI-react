import { Link } from "react-router-dom";
import right_arrow from "../../assets/v11.2/right_arrow.svg";
import seaarch from "../../assets/v11.2/search.svg";
import dropdown from "../../assets/v11.2/dropdown.png";
import { GameListCard } from "../../features/games/components/GameListCard.tsx";

import "../../features/common/scrollbar.css";
import MoveToAppBanner from "../../components/common/MoveToAppBanner.tsx";
import Footer from "../../components/common/Footer.tsx";
import { useGamesList } from "../../features/games/hooks/useGamesList.tsx";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { GameCardSkeleton } from "../../features/games/components/GameCardSkeleton.tsx";
import { GameField } from "../../features/games/interface/games.ts";
import { RegionFilterContainer } from "../../features/games/components/RegionFilterContainer.tsx";
import mobile_dropdown from "../../assets/v11.2/mobile_dropdown.svg";

export const List = () => {
  const [searchValue, setSearchValue] = useState("");
  const [test, setTest] = useState("");

  const [regionValue, setRegionValue] = useState("전체");
  const [displayFilterContainer, setDisplayFilterContainer] = useState(false);

  const handleRegionFilter = (input: string) => {
    setRegionValue(input);
  };

  const handleDisplayFilterContainer = () => {
    setDisplayFilterContainer(!displayFilterContainer);
  };

  const handleSearch = () => {
    setTest(searchValue);
  };

  const {
    data: gamesListData,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGamesList(regionValue === "전체" ? "" : regionValue, test);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <>
      {/* filter container */}
      {displayFilterContainer && (
        <RegionFilterContainer
          handleDisplayFilterContainer={handleDisplayFilterContainer}
          handleRegionFilter={handleRegionFilter}
        />
      )}

      <header className="bg-games_web bg-center bg-cover bg-no-repeat  h-[20rem] sm:hidden md:flex justify-center items-center bg-[#000] relative">
        {/* pc hero */}
        <div className="absolute md:w-[768px] flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
          <p className="text-base font-bold text-primary-teal">
            MITI 서비스 런칭
          </p>
          <h1 className="font-bold  text-[44px]">
            오늘 퇴근하고 농구 어떠세요?
          </h1>
          <p className="font-[400] text-[20px]">
            당신 근처의 경기를 지금 찾아보세요.
          </p>
        </div>
      </header>

      {/* mobile hero */}
      <header className="bg-games_mobile bg-center bg-cover bg-no-repeat    sm:flex items-center  justify-center md:hidden h-[16.125rem]  ">
        <div className="flexCenter flex-col gap-[1.5rem] text-[#fff]  ">
          <div className="space-y-[.75rem] text-center">
            <p className="text-sm font-bold text-primary-teal">
              MITI 서비스 런칭
            </p>
            <h1 className="font-bold text-[24px]">
              오늘 퇴근하고 농구 어떠세요?
            </h1>
          </div>
          <h2 className="font-[300] text-sm">
            당신 근처의 경기를 지금 찾아보세요.{" "}
          </h2>
        </div>
      </header>
      <section className="page-padding bg-secondary-black min-h-screen sm:px-[0.81rem] md:px-0  ">
        <div className=" page-layer sm:px-[0.5rem] md:px-0 h-full sm:space-y-[1.75rem] md:space-y-[2.62rem]">
          {/* top */}

          <div className="flex items-center justify-between">
            <div className="space-y-5 sm:text-left md:text-left text-[#fff]">
              <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
                MITI 경기 목록
              </h1>
              <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
                당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
              </p>
            </div>
            <Link to="/games" className="sm:hidden md:block">
              <button
                type="button"
                className="text-sm font-[600] text-[#fff] flex"
              >
                <span> 지도로 보기</span>
                <img src={right_arrow} alt="right" />
              </button>
            </Link>
          </div>

          {/* // * search filter */}
          <aside className="flex md:gap-5 sm:gap-2 items-center justify-between w-full h-12   ">
            <div className="w-full md:h-full sm:h-[28px] md:rounded-lg sm:rounded-[100px] bg-light-dark  md:py-3 md:pr-3 md:pl-5 sm:py-1 sm:px-4 text-white flex items-center gap-[5px]">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="경기 제목을 입력해주세요."
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                style={{
                  outlineStyle: "none",
                }}
                className="sm:h-[28px] md:h-full bg-light-dark  w-full md:text-base sm:text-xs"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="md:block sm:hidden"
              >
                <img src={seaarch} alt="search" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleDisplayFilterContainer}
              className="md:w-[122px] sm:w-[77px] md:h-full sm:h-[28px]  flex items-center justify-between bg-light-dark sm:py-1 sm:pr-1 sm:pl-4 md:py-3 md:pr-3 md:pl-5 md:rounded-lg sm:rounded-[100px]   "
            >
              <span className="md:font-medium sm:font-[300] text-white md:text-base sm:text-xs ">
                {regionValue}
              </span>
              <img
                src={dropdown}
                alt="dropdown"
                className="md:block sm:hidden"
              />
              <img
                src={mobile_dropdown}
                alt="dropdown"
                className="md:hidden sm:block"
              />
            </button>
          </aside>

          <div className="space-y-[5px]">
            <Link
              to="/games"
              className=" md:hidden sm:flex justify-end w-full "
            >
              <button
                type="button"
                className="md:text-sm sm:text-xs font-[600] text-[#fff] flex"
              >
                <span> 지도로 보기</span>
                <img src={right_arrow} alt="right" />
              </button>
            </Link>
            {/*  // ! game list container */}
            <div className=" sm:p-2 sm:px-4 md:p-4 h-[768px] overflow-y-auto w-full bg-light-dark rounded-lg flex flex-col gap-2.5 custom-scrollbar">
              {/* game card */}
              <>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, index) => (
                    <GameCardSkeleton key={index} />
                  ))
                ) : gamesListData?.pages.length ? (
                  gamesListData.pages.map((page) =>
                    page?.data.page_content.length > 0 ? (
                      page.data.page_content.map((game: GameField) => (
                        <GameListCard game={game} />
                      ))
                    ) : (
                      <div className="space-y-4 flex flex-col items-center justify-center w-full h-full text-white">
                        <h1 className="font-bold text-xl">
                          검색된 경기가 없습니다.
                        </h1>
                        <h2 className="text-sm">
                          필터를 변경하여 다른 경기를 찾아보세요!
                        </h2>
                      </div>
                    )
                  )
                ) : (
                  <div className="space-y-4 flex flex-col items-center justify-center w-full h-full text-white">
                    <h1 className="font-bold text-xl">
                      검색된 경기가 없습니다.
                    </h1>
                    <h2 className="text-sm">
                      필터를 변경하여 다른 경기를 찾아보세요!
                    </h2>
                  </div>
                )}
              </>
              {hasNextPage && (
                <div ref={ref} className="h-1 w-full opacity-0" />
              )}{" "}
            </div>
          </div>

          <MoveToAppBanner />
        </div>
      </section>
      <Footer />
    </>
  );
};
