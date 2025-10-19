// import { GameStatus } from "./GameStatus.tsx";
import time from "../../../assets/v11.2/time.svg";
import participants from "../../../assets/v11.2/participants.svg";
import { Link } from "react-router-dom";
import { GameField } from "../interface/games.ts";
import { GameStatus } from "../../common/components(renewal)/chips/GameStatus.tsx";
import { Fee } from "./ui/Fee.tsx";

interface GameListCardProps {
  game: GameField;
}

export const GameListCard = ({ game }: GameListCardProps) => {
  return (
    <Link to={`/games/${game.id}`}>
      <div className="flex items-center gap-5 md:pt-2.5 pt-4 pb-4 border-b border-[#525252] ">
        {/* date */}
        <div className="bg-[#404040] text-[#fff] py-1 px-2 rounded-[4px] w-[36px]  sm:hidden md:flex flex-col items-center justify-center">
          <div className="text-[10px] flex justify-center gap-[2px]">
            {" "}
            <span>{game.startdate.slice(5, 7)}</span>
            <span>월</span>
          </div>
          <p className="font-bold text-sm">{game.startdate.slice(8, 10)}</p>
        </div>

        <div className="space-y-2.5 w-full">
          <div className="flex items-start justify-between gap-[10px]">
            <div className="space-y-2">
              <GameStatus status={game.game_status} />

              <h2
                className={`text-white sm:text-base md:text-lg font-bold md:${
                  game.title.length > 64 && "truncate"
                }  sm:${game.title.length > 64 && "flex flex-wrap"} `}
              >
                {game.title}
              </h2>
            </div>

            <div className="bg-[#404040] text-[#fff] py-1 px-2 rounded-[4px] w-[36px]  md:hidden sm:flex flex-col items-center justify-center">
              <div className="text-[10px] flex justify-center gap-[2px]">
                {" "}
                <span>{game.startdate.slice(5, 7)}</span>
                <span>월</span>
              </div>
              <p className="font-bold text-sm">{game.startdate.slice(8, 10)}</p>
            </div>
          </div>

          <div className="flex md:items-start sm:items-end justify-between">
            <div className="space-y-2 text-[#D4D4D4] sm:text-[12px] md:text-[10px] font-semibold">
              <div className="flex items-center gap-1">
                <img src={time} alt="time" />
                <span>
                  {" "}
                  {game.starttime.slice(0, 5)} ~ {game.endtime.slice(0, 5)}{" "}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <img src={participants} alt="participants" />
                <span>
                  {game.num_of_participations}/ {game.max_invitation}
                </span>
              </div>
            </div>

            <Fee fee={game.fee} />
          </div>
        </div>
      </div>
    </Link>
  );
};
