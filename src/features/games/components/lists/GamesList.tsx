import { GameField } from "../../interface/games.ts";
import GamesListCard from "../card/GamesListCard.tsx";
import SkeletonCard from "../card/SkeletonCard.tsx";

import "../styles/scrollbar.css";


interface GamesListProps {
  gamesListData: GameField[];
  isGamesListLoading: boolean;
}

export default function GamesList({
  gamesListData,
  isGamesListLoading,
}: GamesListProps) {
  return (
    <ul className="w-full flex flex-col  sm:gap-4 md:gap-[31px] h-full  overflow-y-auto custom-scrollbar p-2">
      {/* {gamesListData.length === 0 && <div>no games</div>} */}
      {isGamesListLoading ? (
        <>
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />{" "}
          <SkeletonCard /> <SkeletonCard />
        </>
      ) : (
        gamesListData?.map((game: GameField) => (
          <GamesListCard key={game.id} game={game} />
        ))
      )}
    </ul>
  );
}