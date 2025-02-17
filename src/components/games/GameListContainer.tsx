import { useState } from "react";
import { AllGamesProps } from "../../interfaces/games.ts";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
// import GameListCard from "./GameListCard.tsx";

import "./scrollbar.css";
import { GameCardStatic } from "../../features/games/components/GameCardStatic.tsx";
import { GameCardLink } from "../../features/games/components/GameCardLink.tsx";

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
    <div className=" sm:hidden md:block custom-scrollbar bg-light-dark sm:w-full md:w-[381px] sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      {isLoading && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        </>
      )}
      {allGamesData?.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center text-white font-[500] text-lg">
          <h1>진행중인 경기가 없습니다.</h1>
        </div>
      ) : (
        allGamesData?.map(
          (game) =>
            clicked && gameId === game.id ? (
              <GameCardLink
                key={game.id}
                game={game}
                handleSetCoords={handleSetCoords}
              />
            ) : (
              <GameCardStatic
                key={game.id}
                game={game}
                handleSetCoords={handleSetCoords}
                isClicked={isClicked}
              />
            )

          // <GameListCard
          //   key={game.id}
          //   game={game}
          //   handleSetCoords={handleSetCoords}
          // />
        )
      )}
    </div>
  );
};

export default GameListContainer;
