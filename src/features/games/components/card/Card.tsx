// import time from "../../../../assets/v1.3/time.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import GameAddress from "../../../common/components(renewal)/chips/GameAddress.tsx";
import GameTime from "../../../common/components(renewal)/chips/GameTime.tsx";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants.tsx";
import GameTitle from "../../../common/components(renewal)/chips/GameTitle.tsx";
import GameFee from "../../../common/components(renewal)/chips/GameFee.tsx";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";

interface Court {
  id: number;
  name: string;
  address: string;
  address_detail: string;
  latitude: string;
  longitude: string;
}

export type GameStatus = "open" | "closed" | "canceled" | "finished";

interface CardProps {
  game: {
    game_status: GameStatus;
    title: string;
    startdate: string; // e.g. "2025-09-03"
    starttime: string; // e.g. "21:00:00"
    enddate: string; // e.g. "2025-09-04"
    endtime: string; // e.g. "00:00:00"
    min_invitation: string;
    max_invitation: string;
    num_of_participations: number;
    fee: number; // KRW
    info: string;
    court: Court;
  };
}

export default function Card({ game }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      style={{
        boxShadow: isHovered ? "0 4px 24px 0 #1ADCDF, 0 0 0 4px #141414" : "",
      }}
      className="w-full h-[136px] flex flex-col gap-2.5 justify-center p-3 rounded-lg text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/games/2" className="flex flex-col gap-2.5">
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
              min_participants={game.min_invitation}
              max_participants={game.max_invitation}
            />
            <GameFee fee={game.fee} size="md" />
          </div>
        </div>
      </Link>
    </li>
  );
}
