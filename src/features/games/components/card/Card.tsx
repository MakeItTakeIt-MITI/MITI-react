import GameAddress from "../../../common/components(renewal)/chips/GameAddress.tsx";
import GameTime from "../../../common/components(renewal)/chips/GameTime.tsx";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants.tsx";
import GameTitle from "../../../common/components(renewal)/chips/GameTitle.tsx";
import GameFee from "../../../common/components(renewal)/chips/GameFee.tsx";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";
import { GameField } from "../../interface/games.ts";
import { Link } from "react-router-dom";
import "./card.css";

interface CardProps {
  game: GameField;
  animationIndex?: number;
}

export default function Card({ game, animationIndex = 0 }: CardProps) {
  const detailPath = game.game_type === "team_game" 
    ? `/team-games/${game.source_id}` 
    : `/games/${game.source_id}`;

  return (
    <li
      className="court-card-appear cursor-pointer relative w-full flex flex-col gap-2.5 justify-center p-3 rounded-lg text-white court-card-border transition-all duration-300 md:hover:z-10 md:hover:-translate-y-1 active:scale-[0.98]"
      style={{ animationDelay: `${animationIndex * 40}ms` }}
    >
      <Link to={detailPath} className="flex flex-col gap-2.5">
        <div className="space-y-2">
          <GameStatus status={game.status} />
          <GameTitle title={game.title} />
        </div>

        <div className="space-y-1 ">
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
            <GameFee fee={game.fee} size="xl" />
          </div>
        </div>
      </Link>
    </li>
  );
}
