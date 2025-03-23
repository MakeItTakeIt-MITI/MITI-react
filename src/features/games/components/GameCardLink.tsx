import { Link } from "react-router-dom";
import { Fee } from "./Fee.tsx";
import { GameStatus } from "./GameStatus.tsx";
import participants from "../../../assets/v11/participants.svg";
import time from "../../../assets/v11/time.svg";
import { GameField } from "../interface/games.ts";

interface GameListCardProp {
  game: GameField;
  handleSetCoords: (arg1: string, arg2: string, arg3: number) => void;
}
export const GameCardLink = ({ game, handleSetCoords }: GameListCardProp) => {
  return (
    <Link
      to={`/games/${game.id}`}
      onClick={() =>
        handleSetCoords(game.court.latitude, game.court.longitude, game.id)
      }
      className="   bg-[#343434] sm:hidden cursor-pointer md:flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] "
      // className="cssanimation sequence fadeInBottom  sm:hidden cursor-pointer md:flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] bg-dark-card border border-[#525252] rounded-xl p-4"
    >
      {/* Status and  */}
      <div className="space-y-2">
        <GameStatus status={game.game_status} />
        <h1
          className={`font-bold  text-[#E5E5E5] ${game.title.length > 64 && "truncate"} text-lg`}
        >
          {game.title}
        </h1>
      </div>
      {/* Game Information */}
      <div className="flex justify-between items-end">
        {/* TIME  & PLAYERS*/}
        <div className="space-y-[6px] text-[#E5E5E5] text-xs font-[600]">
          <div className="flex items-center gap-1">
            <img src={time} alt="time" />
            <span>
              {game.starttime.slice(0, 5)} ~ {game.endtime.slice(0, 5)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <img src={participants} alt="participants" />
            <span>
              {game.num_of_participations} / {game.max_invitation}
            </span>
          </div>
        </div>
        {/* FEE */}
        <Fee fee={game.fee} />
      </div>
    </Link>
  );
};
