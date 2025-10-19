import { useEffect } from "react";
import CourtDetailsGameCard from "./CourtDetailsGameCard.tsx";
import { useInView } from "react-intersection-observer";
import {
  CourtGamesDetailsField,
  CourtsDetailGameListField,
} from "../../interface/courts.ts";

interface CourtDetailGamesListProps {
  courtsGamesPageContent: CourtsDetailGameListField[];
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

  // Fetch next page when the last sentinel div is in view
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="custom-scrollbar flex flex-col gap-3 w-full overflow-y-auto max-h-[540px]">
      <h2 className="text-sm font-bold text-white">경기장 정보</h2>

      {/* {page} */}
      {courtsGamesPageContent?.map((page: CourtsDetailGameListField) => (
        <>
          <h3 className="text-[#999] text-sm font-[400]">
            {/* {`${2}년 ${5}월 ${2}일 ${2}요일`} fix*/}
            {page.startdate.slice(0, 4)}년 {page.startdate.slice(5, 7)}월{" "}
            {page.startdate.slice(8, 10)}일
          </h3>

          <ul
            style={{
              scrollbarWidth: "none",
            }}
            className="space-y-6 "
          >
            {page.games.map((game: CourtGamesDetailsField) => (
              <div key={game.id}>
                <CourtDetailsGameCard game={game} />
                {/* Attach ref only to the last game of the last page for infinite scroll */}
                {hasNextPage && (
                  <div ref={ref} className="h-1 w-full opacity-0" />
                )}
              </div>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default CourtDetailGamesList;
