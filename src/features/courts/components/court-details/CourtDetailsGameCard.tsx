import { Link } from "react-router-dom";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";
import GameTime from "../../../common/components(renewal)/chips/GameTime.tsx";
import { CourtGamesDetailsField } from "../../interface/courts.ts";

interface CourtDetailsGameCardProps {
  game: CourtGamesDetailsField;
}

const CourtDetailsGameCard = ({ game }: CourtDetailsGameCardProps) => {
  return (
    <li className=" w-full h-full">
      <Link className="flex flex-col gap-2.5" to={`/games/${game?.id}`}>
        <div className="space-y-2">
          <GameStatus status={game?.game_status} />
          <h2 className="text-white text-sm font-bold"> {game?.title}</h2>
        </div>
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <GameTime starttime={game?.starttime} endtime={game?.endtime} />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CourtDetailsGameCard;
