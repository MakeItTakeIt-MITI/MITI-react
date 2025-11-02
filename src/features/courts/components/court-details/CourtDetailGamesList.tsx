import { useEffect } from "react";
import CourtDetailsGameCard from "./CourtDetailsGameCard.tsx";
import { useInView } from "react-intersection-observer";
import { CourtGamesDetailsField } from "../../interface/courts.ts";

interface CourtDetailGamesListProps {
  courtsGamesPageContent: CourtGamesDetailsField[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

const CourtDetailGamesList = ({
  courtsGamesPageContent,
  fetchNextPage,
  hasNextPage,
}: CourtDetailGamesListProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="custom-scrollbar flex flex-col gap-3 w-full overflow-y-auto max-h-[540px]">
      <h2 className="text-sm font-bold text-white">경기장 정보</h2>

      {courtsGamesPageContent?.length === 0 && (
        <div className="space-y-4 flex flex-col items-center justify-center w-full h-[400px] text-white">
          <h1 className="font-bold text-xl">등록된 경기가 없습니다.</h1>
          <h2 className="text-sm">다른 경기장을 확인해보세요!</h2>
        </div>
      )}
      <>
        <ul
          style={{
            scrollbarWidth: "none",
          }}
          className="space-y-6 "
        >
          {courtsGamesPageContent?.map((game: CourtGamesDetailsField) => (
            <div>
              <h3 className="text-[#999] text-sm font-[400]">
                {game.startdate.slice(0, 4)}년 {game.startdate.slice(5, 7)}월{" "}
                {game.startdate.slice(8, 10)}일
              </h3>
              <CourtDetailsGameCard game={game} />
              {hasNextPage && (
                <div ref={ref} className="h-1 w-full opacity-0" />
              )}
            </div>
          ))}
        </ul>
      </>
    </div>
  );
};

export default CourtDetailGamesList;
