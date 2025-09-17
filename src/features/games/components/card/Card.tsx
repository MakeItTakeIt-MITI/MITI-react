// import time from "../../../../assets/v1.3/time.svg";
import { useState } from "react";
import GameAddress from "../../../common/components(renewal)/chips/GameAddress.tsx";
import GameTime from "../../../common/components(renewal)/chips/GameTime.tsx";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants.tsx";
import GameTitle from "../../../common/components(renewal)/chips/GameTitle.tsx";
import GameFee from "../../../common/components(renewal)/chips/GameFee.tsx";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";
import { GameField } from "../../interface/games.ts";
import { useMapCoordinatesStore } from "../../../../store/NaverMap/useMapCoordinatesStore.tsx";
import { useSelectedStore } from "../../../../store/NaverMap/useSelectedStore.tsx";
import { Link } from "react-router-dom";

interface CardProps {
  game: GameField;
}

export default function Card({ game }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { setCoordinates } = useMapCoordinatesStore();
  const { isSelected } = useSelectedStore();

  return (
    <li
      style={{
        boxShadow: isHovered ? "0 4px 24px 0 #1ADCDF, 0 0 0 4px #141414" : "",
      }}
      className="cursor-pointer w-full sm:h-[112px] md:h-[136px] flex flex-col gap-2.5 justify-center p-3 rounded-lg text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setCoordinates(game.court.latitude, game.court.longitude)}
    >
      {isSelected ? (
        <Link to={`/games/${game.id}`} className="flex flex-col gap-2.5">
          <div className="space-y-2">
            <GameStatus status={game.game_status} />
            <GameTitle title={game.title} />
          </div>

          <div className="space-y-1 ">
            <GameAddress
              address={game.court.address}
              address_detail={game.court.address_detail}
            />
            <GameTime starttime={game.starttime} endtime={game.endtime} />

            <div className="flex items-center justify-between">
              <GameParticipants
                num_of_participations={game.num_of_participations}
                max_invitation={game.max_invitation}
              />
              <GameFee fee={game.fee} size="md" />
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex flex-col gap-2.5">
          <div className="space-y-2">
            <GameStatus status={game.game_status} />
            <GameTitle title={game.title} />
          </div>

          <div className="space-y-1 ">
            <GameAddress
              address={game.court.address}
              address_detail={game.court.address_detail}
            />
            <GameTime starttime={game.starttime} endtime={game.endtime} />

            <div className="flex items-center justify-between">
              <GameParticipants
                num_of_participations={game.num_of_participations}
                max_invitation={game.max_invitation}
              />
              <GameFee fee={game.fee} size="md" />
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
