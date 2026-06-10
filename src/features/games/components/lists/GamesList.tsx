import { GameField } from "../../interface/games.ts";
import GamesListCard from "../card/GamesListCard.tsx";
import SkeletonCard from "../card/SkeletonCard.tsx";

import "../styles/scrollbar.css";
import EmptyGameState from "../ui/EmptyGameState.tsx";

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
  if (allGames?.length === 0) {
    return (
      <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] overflow-y-auto px-1 pt-2 pb-12">
        <EmptyGameState />
      </ul>
    );
  }

  return (
    <ul className="overflow-y-auto w-full flex flex-col gap-4 h-[850px]  no-scrollbar px-1 pt-2 pb-12">
      {isGamesListLoading
        ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        : allGames?.map((game: GameField, i: number) => (
            <GamesListCard key={game.id} game={game} animationIndex={i} />
          ))}
      <div ref={inViewGameListRef} style={{ height: "1px" }} />
    </ul>
  );
}
