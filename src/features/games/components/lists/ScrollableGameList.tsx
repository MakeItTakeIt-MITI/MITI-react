import EmptyGameState from "../ui/EmptyGameState.tsx";
import { GameField } from "../../interface/games.ts";
import MapGameListCardSkeleton from "../card/MapGameListCardSkeleton.tsx";
import Card from "../card/Card.tsx";

interface ScrollableGameListProps {
  displayedGames: GameField[];
  isLoading: boolean;
}

export default function ScrollableGameList({ 
  displayedGames, 
  isLoading 
}: ScrollableGameListProps) {
  if (isLoading) {
    return (
      <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] overflow-y-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <MapGameListCardSkeleton key={`map-skel-${i}`} />
        ))}
      </ul>
    );
  }

  if (displayedGames?.length === 0) {
    return (
      <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] overflow-y-auto">
        <EmptyGameState />
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] p-2 overflow-y-auto overflow-x-hidden">
      {displayedGames.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </ul>
  );
}