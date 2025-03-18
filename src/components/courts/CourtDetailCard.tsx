import time from "../../assets/v11/time.svg";
import participants from "../../assets/v11/participants.svg";
import { Link } from "react-router-dom";
import { CourtField } from "../../interfaces/courts.ts";
import { GameStatus } from "../../features/games/components/GameStatus.tsx";

interface CourtDetailCard {
  game: CourtField;
}

const CourtDetailCard = ({ game }: CourtDetailCard) => {
  return (
    <Link
      to={`/games/${game.id}`}
      className="flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] bg-dark-card border border-[#525252] rounded-xl p-4"
    >
      <div className="space-y-2">
        <GameStatus status={game.game_status} />

        <h1 className="font-bold  text-[#E5E5E5] w-[280px] truncate">
          {game.title}
        </h1>
      </div>
      <div className="flex justify-between items-end">
        <div className="space-y-[4.5px] text-[#E5E5E5] text-xs">
          <div className="flex gap-1">
            <img src={time} alt="time" />
            <span>
              {game.starttime.slice(0, 5)} ~ {game.endtime.slice(0, 5)}
            </span>
          </div>

          {/* <div className="flex gap-1">
            <img src={participants} alt="participants" />
            <span>
              {game.num_of_participations}/{game.max_invitation}
            </span>
          </div> */}
        </div>

        <h2 className="text-primary-teal font-bold">
          {/* {game?.fee === 0
            ? "무료"
            : game?.fee.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })} */}
        </h2>
      </div>
    </Link>
  );
};

export default CourtDetailCard;
