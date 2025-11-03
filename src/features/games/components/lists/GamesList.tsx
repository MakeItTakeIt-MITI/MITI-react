import { GameField } from "../../interface/games.ts";
import GamesListCard from "../card/GamesListCard.tsx";
import SkeletonCard from "../card/SkeletonCard.tsx";

import "../styles/scrollbar.css";

interface GamesListProps {
  allGames: GameField[];
  isGamesListLoading: boolean;
  inViewGameListRef: React.Ref<HTMLDivElement>;
}

export default function GamesList({
  allGames,
  isGamesListLoading,
  inViewGameListRef,
}: GamesListProps) {
  return (
    <ul className="overflow-y-auto w-full flex flex-col  sm:gap-4 md:gap-[31px] h-[720px]  custom-scrollbar p-2">
      {isGamesListLoading ? (
        <>
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />{" "}
          <SkeletonCard /> <SkeletonCard />
        </>
      ) : (
        allGames?.map((game: GameField) => (
          <GamesListCard key={game.id} game={game} />
        ))
      )}
      <div ref={inViewGameListRef} style={{ height: "1px" }} />
    </ul>
  );
}
