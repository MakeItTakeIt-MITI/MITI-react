import { useState } from "react";
import { AllGamesProps } from "../../interfaces/games.ts";
import { GameCardSkeleton } from "../../features/games/components/GameCardSkeleton.tsx";

import "./scrollbar.css";
import { GameCardLink } from "../../features/games/components/GameCardLink.tsx";
import { GameCardStatic } from "./components/cards/GameCardStatic.tsx";

interface GameListProps extends AllGamesProps {
  handleSetCoords: (arg1: string, arg2: string, arg3: number) => void;
  isLoading: boolean;
  gameId: number;
}
const GameListContainer = ({
  allGamesData,
  handleSetCoords,
  isLoading,
  gameId,
}: GameListProps) => {
  const [clicked, isClicked] = useState(false);
  return (
    <article className="sm:hidden md:block custom-scrollbar bg-light-dark w-full  p-4 rounded-[4px] space-y-3 overflow-y-scroll h-[500px]">
      {isLoading && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        </>
      )}
      {allGamesData?.length === 0 ? (
        <div className="space-y-4 flex flex-col items-center justify-center w-full h-full text-white">
          <h1 className="font-bold text-xl">검색된 경기가 없습니다.</h1>
          <h2 className="text-sm">필터를 변경하여 다른 경기를 찾아보세요!</h2>
        </div>
      ) : (
        allGamesData?.map(
          (game) =>
            clicked && gameId === game.id ? (
              <>
                <GameCardLink
                  key={game.id}
                  game={game as any}
                  handleSetCoords={handleSetCoords}
                />
                <hr className="border-t border-[#525252]" />
              </>
            ) : (
              <>
                <GameCardStatic
                  key={game.id}
                  game={game as any}
                  handleSetCoords={handleSetCoords}
                  isClicked={isClicked}
                />
                <hr className="border-t border-[#525252]" />
              </>
            )

          // <GameListCard
          //   key={game.id}
          //   game={game}
          //   handleSetCoords={handleSetCoords}
          // />
        )
      )}
    </article>
  );
};

export default GameListContainer;
