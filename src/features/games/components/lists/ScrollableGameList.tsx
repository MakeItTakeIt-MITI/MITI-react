import EmptyGameState from "../ui/EmptyGameState.tsx";
import { GameField } from "../../interface/games.ts";
import MapGameListCardSkeleton from "../card/MapGameListCardSkeleton.tsx";
import Card from "../card/Card.tsx";

interface ScrollableGameListProps {
  mapDataList: GameField[];
  isLoading: boolean;
  selectedAddress: string | null;
  isSelected: boolean;
}

export default function ScrollableGameList({
  mapDataList,
  isLoading,
  selectedAddress,
  isSelected,
}: ScrollableGameListProps) {
  if (isLoading) {
    return (
      <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] px-1 pt-2 pb-12 overflow-y-auto no-scrollbar">
        {Array.from({ length: 6 }).map((_, i) => (
          <MapGameListCardSkeleton key={`map-skel-${i}`} />
        ))}
      </ul>
    );
  }

  if (mapDataList?.length === 0) {
    return (
      <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] px-1 pt-2 pb-12 overflow-y-auto no-scrollbar">
        <EmptyGameState />
      </ul>
    );
  }

  if (isSelected) {
    return (
      <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] px-1 pt-2 pb-12 overflow-y-auto overflow-x-hidden no-scrollbar">
        {mapDataList
          ?.filter((game) => game.court_address === selectedAddress)
          .map((game, i) => (
            <Card key={game.id} game={game} animationIndex={i} />
          ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-2.5 h-[500px] sm:h-[512px] px-1 pt-2 pb-12 overflow-y-auto overflow-x-hidden no-scrollbar">
      {mapDataList?.map((game, i) => (
        <Card key={game.id} game={game} animationIndex={i} />
      ))}
    </ul>
  );
}
