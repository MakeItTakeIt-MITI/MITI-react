import { useEffect, useState } from "react";
// import MainContent from "../../components/games/MainContent.tsx";
import GameFilterContainer from "../../components/game-filter/GameFilterContainer.tsx";
import Footer from "../../components/common/Footer.tsx";
// import { useGamesDataHook } from "../../hooks/useGamesDataHook.tsx";
// import useDateSelectionStore from "../../store/useDateSelectionStore.ts";
// import useTimeFieldStore from "../../store/useTimeStore.ts";
import useStatusSelectionStore from "../../store/useStatusSelectionStore.ts";

import useCurrentMonthStore from "../../store/useCurrentMonthStore.ts";

import { useFilterBox } from "../../features/games/hooks/useFilterBox.tsx";
import { useFilterBoxSettings } from "../../features/games/hooks/useFilterBoxSettings.tsx";
import MoveToAppBanner from "../../components/common/MoveToAppBanner.tsx";

import filter from "../../assets/v11/filter.svg";
// import { GameCardSkeleton } from "../../features/games/components/GameCardSkeleton.tsx";

import { GamesMap } from "../../features/games/components/GamesMap.tsx";

import right_arrow from "../../assets/v11.2/right_arrow.svg";
import { Link } from "react-router-dom";
// import { useMapGamesList } from "../../features/map/hooks/useMapGamesList.tsx";

export const Games = () => {
  const [displayFilterBox, setDisplayFilterBox] = useState<boolean>(false);

  // react custom hooks
  const { handleToggleFilterBox } = useFilterBox(
    displayFilterBox,
    setDisplayFilterBox
  );
  const { handleResetFilters, handleApplyFilters } =
    useFilterBoxSettings(setDisplayFilterBox);

  //zustand store
  // const { yearMonthDay } = useDateSelectionStore();
  // const { formattedFullTime } = useTimeFieldStore();
  const { selectedStatuses } = useStatusSelectionStore();
  const { currentMonth } = useCurrentMonthStore();

  // const { status, setStatus } = useStatusStore();

  // ! fetch game list API v11.1 [OLD]
  // const {
  //   data: allGamesData,
  //   refetch,
  //   isLoading,
  // } = useGamesDataHook({
  //   startdate: yearMonthDay,
  //   starttime: formattedFullTime,
  //   status: selectedStatuses,
  // });

  // ! fetch game list API v11.2

  // const {
  //   data: gamesListData,
  //   isLoading,
  //   fetchNextPage,
  //   hasNextPage,
  // } = useGamesList(yearMonthDay, formattedFullTime);

  // const { data: mapData, isLoading } = useMapGamesList(
  //   yearMonthDay,
  //   formattedFullTime,
  //   ""
  // );

  // console.log(mapData);

  useEffect(() => {}, [selectedStatuses, displayFilterBox]);

  return (
    <>
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

      {/* main content */}

      <section className="page-padding bg-secondary-black min-h-screen sm:px-[0.81rem] md:px-0  ">
        <div className=" page-layer sm:px-[0.5rem] md:px-0 h-full sm:space-y-[1.75rem] md:space-y-[2.62rem]">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="space-y-5 sm:text-center md:text-left text-[#fff]">
              <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
                MITI 경기 목록
              </h1>
              <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
                당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
              </p>
            </div>
            <Link to="list">
              <button
                type="button"
                className="text-sm font-[600] text-[#fff] flex"
              >
                <span> 전체 경기</span>
                <img src={right_arrow} alt="right" />
              </button>
            </Link>
          </div>
          {/* Bottom */}
          <div className="sm:space-y-[1.25rem] md:space-y-5">
            {/* Game list and map container */}
            <div className="flex flex-col gap-[30px] h-full ">
              {/* // * 지도  */}
              <GamesMap />

              <section className="space-y-[10px]">
                <>
                  {/* Filter Row  & non-mobile */}
                  <div className="flex items-center justify-between w-full ">
                    <div className=" flex  items-center justify-start gap-3    md:px-0  sm:overflow-x-scroll sm:overflow-y-hidden md:overflow-hidden  ">
                      {/* <FilteredStatus
                        handleDisplayFilterBox={handleToggleFilterBox}
                        content={selectedDate}
                      />
                      <FilteredStatus
                        content={selectedTimeDate}
                        handleDisplayFilterBox={handleToggleFilterBox}
                      />
                      <FilteredStatus
                        content={selectedStatus}
                        handleDisplayFilterBox={handleToggleFilterBox}
                      /> */}
                    </div>
                    <button
                      className="sm:hidden md:block"
                      type="button"
                      onClick={handleToggleFilterBox}
                    >
                      <img src={filter} alt="filter" />
                    </button>
                  </div>
                </>

                {/*   // * 경기 목록 컨테이너  */}
                <div className=" custom-scrollbar bg-light-dark full h-[494px] p-4 rounded-[20px] space-y-3 overflow-y-scroll">
                  <>
                    {/* {isLoading ? (
                      Array.from({ length: 5 }).map((_, index) => (
                        <GameCardSkeleton key={index} />
                      ))
                    ) : mapData?.data?.length > 0 ? (
                      mapData.data.map(() => (
                        // <GameCardLink key={game.id} game={game} />
                        <div className="space-y-4 flex flex-col items-center justify-center w-full h-full text-white">
                          <h1 className="font-bold text-xl">
                            검색된 경기가 없습니다.
                          </h1>
                          <h2 className="text-sm">
                            필터를 변경하여 다른 경기를 찾아보세요!
                          </h2>
                        </div>
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
                    )} */}
                  </>
                </div>
              </section>
              {/* 
              {isAddressSelected ? (
              <FilteredGameListContainer
                allGamesData={allGamesData}
                selectedAddress={selectedAddress}
              />
            ) : (
              <GameListContainer
                allGamesData={allGamesData}
                handleSetCoords={handleSetCoords}
                isLoading={isLoading}
                gameId={gameId}
              />
              <


            )} */}
              {/* <MobileGameListContainer allGamesData={allGamesData} /> */}
            </div>
          </div>
          <MoveToAppBanner />
        </div>
      </section>

      {/* <MainContent
        handleToggleFilterBox={handleToggleFilterBox}
        allGamesData={allGamesData?.data}
        isLoading={isLoading}
      /> */}
      {displayFilterBox && (
        <GameFilterContainer
          handleToggleFilterBox={handleToggleFilterBox}
          handleResetFilters={handleResetFilters}
          handleApplyFilters={handleApplyFilters}
          currentMonth={currentMonth}
        />
      )}
      <Footer />
    </>
  );
};
