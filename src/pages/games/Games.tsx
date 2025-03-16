import { useEffect, useState } from "react";
import MainContent from "../../components/games/MainContent.tsx";
import GameFilterContainer from "../../components/game-filter/GameFilterContainer.tsx";
import Footer from "../../components/common/Footer.tsx";
import { useGamesDataHook } from "../../hooks/useGamesDataHook.tsx";
import useDateSelectionStore from "../../store/useDateSelectionStore.ts";
import useTimeFieldStore from "../../store/useTimeStore.ts";
import useStatusSelectionStore from "../../store/useStatusSelectionStore.ts";

import useCurrentMonthStore from "../../store/useCurrentMonthStore.ts";

import { useFilterBox } from "../../hooks/game-list-filters/useFilterBox.tsx";
import { useFilterBoxSettings } from "../../hooks/game-list-filters/useFilterBoxSettings.tsx";
import { useGamesList } from "../../features/games/hooks/useGamesList.tsx";
import MoveToAppBanner from "../../components/common/MoveToAppBanner.tsx";
import GameListContainer from "../../components/games/GameListContainer.tsx";
import FilteredGameListContainer from "../../components/games/FilteredGameListContainer.tsx";

import filter from "../../assets/v11/filter.svg";
import { GameCardSkeleton } from "../../features/games/components/GameCardSkeleton.tsx";
import GameListCard from "../../components/games/GameListCard.tsx";
import { GameCardLink } from "../../features/games/components/GameCardLink.tsx";
import { GameField } from "../../features/games/interface/games.ts";
import { useInView } from "react-intersection-observer";
import { GamesMap } from "../../features/map/components/GamesMap.tsx";

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
  const { yearMonthDay } = useDateSelectionStore();
  const { formattedFullTime } = useTimeFieldStore();
  const { selectedStatuses } = useStatusSelectionStore();
  const { currentMonth } = useCurrentMonthStore();

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

  const {
    data: gamesListData,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGamesList("", "");

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [selectedStatuses, displayFilterBox, fetchNextPage, inView]);

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
          <div className="space-y-5 sm:text-center md:text-left text-[#fff]">
            <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
              MITI 경기 목록
            </h1>
            <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
              당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
            </p>
          </div>
          {/* Bottom */}
          <div className="sm:space-y-[1.25rem] md:space-y-5">
            {/* Game list and map container */}
            <div className="flex flex-col gap-[30px] h-full ">
              {/* // * 지도  */}
              <GamesMap />

              <section className="space-y-[10px]">
                {/* // * 필터  */}
                {/* Filter Row  & non-mobile */}
                <div className="flex items-center justify-between w-full ">
                  <div className=" flex items-center  gap-4 ">
                    <button
                      className="p-[10px] text-sm rounded-[50px] font-[500] border border-[#F5F5F5] text-[#f5f5f5]"
                      type="button"
                    >
                      날짜
                    </button>
                    <button
                      className="p-[10px] text-sm rounded-[50px] font-[500] border border-[#F5F5F5 text-[#f5f5f5]"
                      type="button"
                    >
                      경기 시작 시간
                    </button>
                    <button
                      className="p-[10px] text-sm rounded-[50px] font-[500] border border-[#F5F5F5] text-[#f5f5f5]"
                      type="button"
                    >
                      경기 상태
                    </button>
                  </div>
                  <button
                    className="sm:hidden md:block"
                    type="button"
                    onClick={handleToggleFilterBox}
                  >
                    <img src={filter} alt="filter" />
                  </button>
                </div>

                {/*   // * 경기 목록 컨테이너  */}
                <div className=" custom-scrollbar bg-light-dark full h-[494px] p-4 rounded-[20px] space-y-3 overflow-y-scroll">
                  <>
                    {isLoading ? (
                      Array.from({ length: 5 }).map((_, index) => (
                        <GameCardSkeleton key={index} />
                      ))
                    ) : gamesListData?.pages.length ? (
                      gamesListData.pages.map((page) =>
                        page?.data.page_content.length > 0
                          ? page.data.page_content.map((game: GameField) => (
                              <GameCardLink key={game.id} game={game} />
                            ))
                          : null
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
                    {hasNextPage && (
                      <div ref={ref} className="h-1 w-full opacity-0" />
                    )}
                  </>
                </div>
              </section>

              {/* {isAddressSelected ? (
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
              {/* <NaverMap
              allGamesData={allGamesData}
              handleSetSelected={handleSetSelected}
              setSelectedAddress={setSelectedAddress}
              setIsAddressSelected={setIsAddressSelected}
              isAddressSelected={isAddressSelected}
              latitude={latitude}
              longitude={longitude}
              isGameCardSelected={isGameCardSelected}
              gameId={gameId}
            /> */}
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
