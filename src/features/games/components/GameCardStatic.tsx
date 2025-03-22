import { Game } from "../../../interfaces/games.ts";
import { GameStatus } from "./GameStatus.tsx";
import time from "../../../assets/v11/time.svg";
import participants from "../../../assets/v11/participants.svg";
import { Fee } from "./Fee.tsx";

interface GameListCardProp {
  game: Game;
  handleSetCoords: (arg1: string, arg2: string, arg3: number) => void;
  isClicked?: (arg: boolean) => void | undefined;
}

export const GameCardStatic = ({
  game,
  handleSetCoords,
  isClicked,
}: GameListCardProp) => {
  return (
    <div
      onClick={() => {
        handleSetCoords(game.court.latitude, game.court.longitude, game.id);
        if (isClicked) {
          isClicked(true);
        }
      }}
      className=" sm:hidden cursor-pointer md:flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px]rounded-xl p-4"
      // className="cssanimation sequence fadeInBottom  sm:hidden cursor-pointer md:flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] bg-dark-card border border-[#525252] rounded-xl p-4"
    >
      {/* Status and title */}
      <div className="space-y-2">
        <GameStatus status={game.game_status} />
        <h1 className="font-bold  text-[#E5E5E5]  w-[300px] truncate">
          {game.title}
        </h1>
      </div>
      {/* Game Information */}
      <div className="flex justify-between items-end">
        {/* TIME  & PLAYERS*/}
        <div className="space-y-[4.5px] text-[#E5E5E5] text-[12px]">
          <div className="flex gap-1">
            <img src={time} alt="time" />
            <span>
              {game.starttime.slice(0, 5)} ~ {game.endtime.slice(0, 5)}
            </span>
          </div>

          <div className="flex gap-1">
            <img src={participants} alt="participants" />
            <span>
              {game.num_of_participations} / {game.max_invitation}
            </span>
          </div>
        </div>
        {/* FEE */}
        <Fee fee={game.fee} />
      </div>
    </div>
  );
};
