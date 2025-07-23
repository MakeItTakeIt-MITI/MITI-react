import time from "../../../assets/v11/time.svg";
// import participants from "../../assets/v11/participants.svg";
import { Link } from "react-router-dom";
import { CourtField } from "../../../interfaces/courts.ts";
import { GameStatus } from "../../common/components(renewal)/chips/GameStatus.tsx";
// import { Fee } from "../../features/games/components/Fee.tsx";

interface CourtDetailCard {
  game: CourtField;
}

const CourtDetailCard = ({ game }: CourtDetailCard) => {
  return (
    <Link
      to={`/games/${game.id}`}
      className="flex flex-col justify-center space-y-[22px] w-full   py-2.5"
    >
      <div className="space-y-2">
        <GameStatus status={game.game_status} />

        <h1 className="font-bold  text-[#E5E5E5] w-[280px] truncate">
          {game.title}
        </h1>
      </div>

      <div className="flex justify-between w-full text-[#E5E5E5] text-xs">
        <div className="flex items-center gap-1 ">
          <img src={time} alt="time" />
          <span className="text-xs">
            {game.starttime.slice(0, 5)} ~ {game.endtime.slice(0, 5)}
          </span>
        </div>
      </div>
    </Link>
  );
};
{
  /* <h4 className="text-primary-teal font-bold text-base">{game.fee} 원</h4> */
}

export default CourtDetailCard;
