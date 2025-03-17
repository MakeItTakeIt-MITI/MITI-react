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
import React, { useEffect, useState } from "react";
import { GameCardSkeleton } from "../../features/games/components/GameCardSkeleton.tsx";
import { GameField } from "../../features/games/interface/games.ts";

export const List = () => {
  //   const [currentPage, setCurrentPage] = useState(1);

  const {
    data: gamesListData,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGamesList("", "");

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const startPage = gamesListData?.pages[0]?.data.start_index ?? 1;
  const currentPage = gamesListData?.pageParams.length;
  const pageLength = gamesListData?.pages[0]?.data.end_index ?? 1;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
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
      <section className="page-padding bg-secondary-black min-h-screen sm:px-[0.81rem] md:px-0  ">
        <div className=" page-layer sm:px-[0.5rem] md:px-0 h-full sm:space-y-[1.75rem] md:space-y-[2.62rem]">
          {/* top */}

          <div className="flex items-center justify-between">
            <div className="space-y-5 sm:text-center md:text-left text-[#fff]">
              <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
                MITI 경기 목록
              </h1>
              <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
                당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
              </p>
            </div>
            <Link to="/games">
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
          <aside className="flex gap-5 items-center justify-between w-full h-12 ">
            <div className="w-full h-full rounded-lg bg-light-dark  py-3 pr-3 pl-5 text-white flex items-center gap-[5px]">
              <input
                type="text"
                placeholder="경기 제목을 입력해주세요."
                style={{
                  outlineStyle: "none",
                }}
                className="h-full bg-light-dark  w-full"
              />
              <button type="button">
                <img src={seaarch} alt="search" />
              </button>
            </div>
            <button
              type="button"
              className="w-[122px] h-full flex items-center justify-between bg-light-dark  py-3 pr-3 pl-5 rounded-lg"
            >
              <span className="font-medium text-white">전체</span>
              <img src={dropdown} alt="dropdown" />
            </button>
          </aside>

          {/*  // ! game list container */}
          <div className="p-4 h-[768px] overflow-y-auto w-full bg-light-dark rounded-lg flex flex-col gap-2.5 custom-scrollbar">
            {/* game card */}

            <>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <GameCardSkeleton key={index} />
                ))
              ) : gamesListData?.pages.length ? (
                gamesListData.pages.map((page) =>
                  page?.data.page_content.length > 0
                    ? page.data.page_content.map((game: GameField) => (
                        <GameListCard game={game} />
                      ))
                    : null
                )
              ) : (
                <div className="space-y-4 flex flex-col items-center justify-center w-full h-full text-white">
                  <h1 className="font-bold text-xl">검색된 경기가 없습니다.</h1>
                  <h2 className="text-sm">
                    필터를 변경하여 다른 경기를 찾아보세요!
                  </h2>
                </div>
              )}
            </>
            <ul className="flex items-center gap-4 justify-center text-white text-sm">
              {/* {Array.from(
                { length: pageLength - startPage + 1 },
                (_, i) => startPage + i
              ).map((pageNum) => (
                <li
                  key={pageNum}
                  className={`cursor-pointer  ${pageNum === currentPage ? "text-[#7FEEF0]" : ""}`}
                  onClick={() => {
                    fetchNextPage();
                  }}
                >
                  {pageNum}
                </li>
              ))} */}
            </ul>
          </div>

          <MoveToAppBanner />
        </div>
      </section>
      <Footer />
    </>
  );
};
