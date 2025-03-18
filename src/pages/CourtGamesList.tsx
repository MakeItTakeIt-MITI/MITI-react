import { useParams } from "react-router-dom";
import ShareFeatureFooter from "../components/common/ShareFeatureFooter.tsx";
import DetailMap from "../components/courts/DetailMap.tsx";
import MobileDetailMap from "../components/courts/MobileDetailMap.tsx";
import { useCourtDetailData } from "../hooks/useCourtDetailData.tsx";
import CourtDetailCard from "../components/courts/CourtDetailCard.tsx";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CourtsList } from "../interfaces/courts.ts";
import { useCourtGamesInfiniteData } from "../hooks/useCourtGamesInfiniteData.tsx";
import { GameCardSkeleton } from "../features/games/components/GameCardSkeleton.tsx";

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

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <section className="  flex items-center justify-center   sm:pt-0 md:pt-[3.75rem] sm:pb-[5.875rem] md:pb-[9.375rem] bg-light-dark  ">
      <div className="relative w-[43.25rem] sm:space-y-1 md:space-y-5  h-full">
        <MobileDetailMap />

        <div className="w-full md:h-[12rem] sm:rounded-none md:rounded-[20px] sm:space-y-5 md:space-y-[1.25rem] bg-dark-card sm:p-5 md:p-6 sm:border-none md:border border-[#525252]">
          <div className="space-y-[0.5rem]">
            <h1 className="text-primary-white font-bold text-[18px]">
              {courtDetail?.name}
            </h1>
            <p className="text-sm font-[500] text-[#A3A3A3]">
              {courtDetail?.address} {courtDetail?.address_detail}
            </p>
          </div>
          <p className="text-primary-white text-sm font-[400]">
            {courtDetail?.info}
          </p>
        </div>

        <div className=" sm:space-x-0  md:space-x-5  flex sm:justify-center  ">
          <div className="sm:py-[1.5rem] sm:px-[1.31rem] md:p-[1rem] md:bg-secondary-black sm:w-full md:w-[23.8125rem] h-[618px]  space-y-[1.25rem] overflow-y-scroll custom-scrollbar rounded-[20px]">
            <p className="text-[18px] font-bold text-primary-white">
              이 경기장에 생성된 경기
            </p>
            {isLoading ? (
              <div className="space-y-[0.75rem]">
                <h1 className="w-[100px] h-[10px] rounded-xl bg-dark-card"></h1>
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
                  <div className="w-full h-full flex  flex-col gap-3 items-center justify-center ">
                    <h1 className="text-primary-white text-[24px] font-bold ">
                      조회 결과가 없습니다.
                    </h1>
                  </div>
                );
              })
            )}
            {hasNextPage && (
              <div ref={ref} className="h-1 w-full opacity-0" />
            )}{" "}
          </div>
          <DetailMap />
        </div>
      </div>
      <ShareFeatureFooter />
    </section>
  );
};

export default CourtGamesList;
