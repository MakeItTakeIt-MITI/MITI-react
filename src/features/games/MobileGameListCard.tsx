import time from "../../assets/v11/time.svg";
import participants from "../../assets/v11/participants.svg";
import { Game } from "../../interfaces/games.ts";
import { Link } from "react-router-dom";
import { GameStatus } from "../common/components(renewal)/chips/GameStatus.tsx";
import { Fee } from "./components/ui/Fee.tsx";

interface MobileGameListCardProp {
  game: Game;
}

const MobileGameListCard = ({ game }: MobileGameListCardProp) => {
  return (
    <Link
      to={`/games/${game.id}`}
      className="md:hidden cursor-pointer sm:flex flex-col  justify-center space-y-3 w-full h-[7.5rem]  bg-dark-card border border-[#525252] rounded-xl p-4"
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

          <div className="flex gap-[5px]">
            <img src={participants} alt="participants" />
            <span>
              {game.num_of_participations} / {game.max_invitation}
            </span>
          </div>
        </div>

        <Fee fee={game.fee} />
      </div>
    </Link>
  );
};

export default MobileGameListCard;
