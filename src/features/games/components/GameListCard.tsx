import { GameStatus } from "./GameStatus.tsx";
import time from "../../../assets/v11.2/time.svg";
import participants from "../../../assets/v11.2/participants.svg";
import { Fee } from "./Fee.tsx";
import { Link } from "react-router-dom";
import { GameField } from "../interface/games.ts";

interface GameListCardProps {
  game: GameField;
}

export const GameListCard = ({ game }: GameListCardProps) => {
  return (
    <Link to={`/games/${game.id}`}>
      <div className="flex items-center gap-5 pt-2.5 pb-4 border-b border-[#525252] ">
        {/* date */}
        <div className="bg-[#404040] text-[#fff] py-1 px-2 rounded-[4px] w-[36px] flex flex-col items-center justify-center">
          <div className="text-[10px] flex justify-center gap-[2px]">
            {" "}
            <span>{game.startdate.slice(5, 7)}</span>
            <span>월</span>
          </div>
          <p className="font-bold text-sm">{game.startdate.slice(8, 10)}</p>
        </div>

        <div className="space-y-2.5 w-full">
          <div className="space-y-2">
            <GameStatus status={game.game_status} />
            <h2
              className={`text-white text-lg font-bold ${game.title.length > 64 && "truncate"}`}
            >
              {game.title}
            </h2>
          </div>

          <div className="flex justify-between">
            <div className="space-y-2 text-[#D4D4D4] text-[10px] font-semibold">
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
