import { useParams } from "react-router-dom";
import ShareFeatureFooter from "../../components/common/ShareFeatureFooter.tsx";
import DetailMap from "../../components/courts/DetailMap.tsx";
import MobileDetailMap from "../../components/courts/MobileDetailMap.tsx";
import { useCourtDetailData } from "../../hooks/useCourtDetailData.tsx";
import CourtDetailCard from "../../components/courts/CourtDetailCard.tsx";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CourtsList } from "../../interfaces/courts.ts";
import { useCourtGamesInfiniteData } from "../../hooks/useCourtGamesInfiniteData.tsx";
import { GameCardSkeleton } from "../../features/games/components/GameCardSkeleton.tsx";

import copy from "../../assets/v11.2/copy.svg";
import { GameField } from "../../features/games/interface/games.ts";
// import right_arrow from "../../assets/v11.2/right_arrow.svg";

const CourtGamesList = () => {
  const { id } = useParams();
  const courtId = Number(id);
  const {
    data: selectedCourtsData,
    fetchNextPage,
    hasNextPage,
  } = useCourtGamesInfiniteData(courtId);
  const { data, isLoading } = useCourtDetailData({ courtId: courtId });
  const courtDetail = data?.data;

  console.log(courtDetail);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatDate = (date: any) => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <section className="  flex items-center justify-center   sm:pt-0 md:pt-[3.75rem] sm:pb-[5.875rem] md:pb-[9.375rem] bg-[#262626]  ">
      <div className="relative w-[43.25rem] sm:space-y-1 md:space-y-5  h-full">
        <MobileDetailMap />
        <DetailMap />
        <div className="w-full md:h-[1000px] sm:rounded-none md:rounded-[20px] sm:space-y-5 md:space-y-[1.25rem] bg-[#343434] sm:p-5 md:p-6 sm:border-none md:border border-[#525252]">
          <div className="space-y-[0.5rem]">
            <h1 className="text-primary-white font-bold text-[18px]">
              {courtDetail?.name}
            </h1>
            <div className="text-sm font-[500] text-[#A3A3A3] flex items-center gap-[5px]">
              <span>
                {courtDetail?.address} {courtDetail?.address_detail}
              </span>
              <button type="button">
                <img src={copy} alt="copy" />
              </button>
            </div>
          </div>
          <p className="text-primary-white text-sm font-[400]">
            {courtDetail?.info}
          </p>

          <hr className="border-t border-[#404040]" />

          <div className="w-full flex items-center justify-between  text-white">
            <h4 className="font-bold text-lg">경기 목록</h4>
            {/* <Link to="/games/list" className="flex items-center ">
              <span className=" text-sm font-semibold">전체 경기</span>
              <img src={right_arrow} alt="right_arrow" />
            </Link> */}
          </div>

          <div className="h-[80%] overflow-y-auto custom-scrollbar">
            {isLoading ? (
              <div className="space-y-[0.75rem]">
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
              </div>
            ) : (
              selectedCourtsData?.pages.map((page) => {
                return page.data.page_content.length > 0 ? (
                  page.data.page_content.map((court: CourtsList) => (
                    <div className="space-y-[15px] pt-[20px]">
                      <h1 className="font-bold text-primary-white ">
                        {formatDate(new Date(court.startdate))}
                      </h1>
                      {courtDetail.soonest_games.map((game: GameField) => (
                        <CourtDetailCard key={game.id} game={game} />
                      ))}
                      <hr className="border-t border-[#404040]" />
                    </div>
                  ))
                ) : (
                  <div className="w-full h-full flex  flex-col gap-2 items-center justify-center text-sm font-normal text-[#999] ">
                    <h1 className=" ">경기가 없습니다.</h1>
                    <h2>직접 경기를 호스팅해보세요!</h2>
                  </div>
                );
              })
            )}
            {hasNextPage && (
              <div ref={ref} className="h-1 w-full opacity-0" />
            )}{" "}
          </div>
        </div>

        {/* <div className=" sm:space-x-0  md:space-x-5  flex sm:justify-center  ">
          <div className="sm:py-[1.5rem] sm:px-[1.31rem] md:p-[1rem] md:bg-secondary-black sm:w-full md:w-[23.8125rem] h-[618px]  space-y-[1.25rem] overflow-y-scroll custom-scrollbar rounded-[20px]">
            {isLoading ? (
              <div className="space-y-[0.75rem]">
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
                <GameCardSkeleton />
              </div>
            ) : (
              selectedCourtsData?.pages.map((page) => {
                return page.data.page_content.length > 0 ? (
                  page.data.page_content.map((court: CourtsList) => (
                    <div className="space-y-[0.75rem]">
                      <h1 className="font-bold text-primary-white">
                        {court.startdate}
                      </h1>
                      {court.games.map((game) => (
                        <CourtDetailCard key={game.id} game={game} />
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="w-full h-full flex  flex-col gap-2 items-center justify-center text-sm font-normal text-[#999] ">
                    <h1 className=" ">경기가 없습니다.</h1>
                    <h2>직접 경기를 호스팅해보세요!</h2>
                  </div>
                );
              })
            )}
            {hasNextPage && (
              <div ref={ref} className="h-1 w-full opacity-0" />
            )}{" "}
          </div>
        </div> */}
      </div>
      <ShareFeatureFooter />
    </section>
  );
};

export default CourtGamesList;
