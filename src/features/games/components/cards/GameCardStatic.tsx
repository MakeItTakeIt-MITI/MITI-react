import { Game } from "../../../../interfaces/games.ts";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";
import time from "../../../../assets/v11/time.svg";
import participants from "../../../../assets/v11/participants.svg";
import { Fee } from "../ui/Fee.tsx";

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
      className="bg-[#343434] sm:hidden cursor-pointer md:flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] "
    >
      {/* Status and title */}
      <div className="space-y-2">
        <GameStatus status={game.game_status} />
        <h1
          className={`font-bold  text-[#E5E5E5] ${
            game.title.length > 64 && "truncate"
          } text-lg`}
        >
          {game.title}
        </h1>
      </div>
      {/* Game Information */}
      <div className="flex justify-between items-end">
        {/* TIME  & PLAYERS*/}
        <div className="space-y-[6px] text-[#E5E5E5] text-xs font-[600]">
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
        <Fee fee={game.fee} />
      </div>
    </div>
  );
};