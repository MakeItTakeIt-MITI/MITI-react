import { Link } from "react-router-dom";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus";
import GameAddress from "../../../common/components(renewal)/chips/GameAddress";
import GameTime from "../../../common/components(renewal)/chips/GameTime";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants";
import GameFee from "../../../common/components(renewal)/chips/GameFee";
import { GameField } from "../../interface/games";
import "./card.css";

interface GamesListCardProps {
  game: GameField;
  animationIndex?: number;
}

export default function GamesListCard({ game, animationIndex = 0 }: GamesListCardProps) {
  if (!game) return null;

  return (
    <li
      className="court-card-appear w-full p-1 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800/70 hover:shadow-[0_8px_32px_0_rgba(26,220,223,0.25)] active:scale-[0.97]"
      style={{ animationDelay: `${animationIndex * 40}ms` }}
    >
      <Link className="flex items-center   gap-5" to={`/games/${game.id}`}>
        {/* DATE */}
        <div className="w-[34px] h-full text-white flex flex-col items-center justify-center">
          <span className="text-[10px] font-[500]">
            {game.startdate.slice(5, 7)}월
          </span>
          <span className="text-sm font-bold">
            {game.startdate.slice(8, 10)}
          </span>
        </div>
        {/* GAME INFO */}
        <div className="w-full flex flex-col gap-2.5">
          {/* Game status  / title */}
          <div className="space-y-2">
            <GameStatus status={game.game_status} />
            <h1
              className={`font-bold sm:text-sm md:text-base text-white ${
                game.title.length > 65 ? "truncate" : ""
              }`}
            >
              {game.title}
            </h1>
          </div>
          {/* Court Info / time / participants */}
          <div className="space-y-1">
            <GameAddress
              address={game.address}
              address_detail={game.address_detail}
            />
            <GameTime starttime={game.starttime} endtime={game.endtime} />

            <div className="flex justify-between">
              <GameParticipants
                num_of_participations={game.num_of_participations}
                max_invitation={game.max_invitation}
              />
              <GameFee size="md" fee={game.fee} />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
