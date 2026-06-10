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

  const detailPath = game.game_type === "team_game" 
    ? `/team-games/${game.source_id}` 
    : `/games/${game.source_id}`;

  return (
    <li
      className="court-card-appear relative w-full p-2 rounded-lg court-card-border transition-all duration-300 md:hover:z-10 md:hover:-translate-y-1 active:scale-[0.98]"
      style={{ animationDelay: `${animationIndex * 40}ms` }}
    >
      <Link className="flex items-center   gap-5" to={detailPath}>
        {/* DATE */}
        <div className="w-[40px] h-full text-white flex flex-col items-center justify-center gap-1 shrink-0">
          <span className="text-[14px] font-[500] leading-tight">
            {Number(game.startdate.slice(5, 7))}월
          </span>
          <span className="text-[20px] font-bold leading-none">
            {Number(game.startdate.slice(8, 10))}
          </span>
        </div>
        {/* GAME INFO */}
        <div className="w-full flex flex-col gap-2.5">
          {/* Game status  / title */}
          <div className="space-y-2">
            <GameStatus status={game.status} />
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
              court_address={game.court_address}
              court_name={game.court_name}
            />
            <GameTime starttime={game.starttime} endtime={game.endtime} />

            <div className="flex items-start justify-between">
              <GameParticipants
                num_of_participations={game.num_of_participations}
                max_invitation={game.max_invitation}
              />
              <GameFee size="xl" fee={game.fee} />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
