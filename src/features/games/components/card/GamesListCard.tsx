import { Link } from "react-router-dom";
import { useState } from "react";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus";
import GameAddress from "../../../common/components(renewal)/chips/GameAddress";
import GameTime from "../../../common/components(renewal)/chips/GameTime";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants";
import GameFee from "../../../common/components(renewal)/chips/GameFee";

interface GamesListCardProps {
  month: string;
}

export default function GamesListCard({ month, status, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      style={{
        boxShadow: isHovered ? "0 4px 24px 0 #1ADCDF, 0 0 0 4px #141414" : "",
      }}
      className="w-full  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link className="flex items-center   gap-5" to="/games/detail?&id=1">
        {/* DATE */}
        <div className="w-[34px] h-full text-white flex flex-col items-center justify-center">
          <span className="text-[10px] font-[500]">{month}월</span>
          <span className="text-sm font-bold">DD</span>
        </div>
        {/* GAME INFO */}
        <div className="w-full flex flex-col gap-2.5">
          {/* Game status  / title */}
          <div className="space-y-2">
            <GameStatus status={"open"} />
            <h1
              className={`font-bold text-base text-white ${
                title > 65 ? "truncate" : ""
              }`}
            >
              GAME TITLE MAX LENGHT 64 MAX LINE 2
            </h1>
          </div>
          {/* Court Info / time / participants */}
          <div className="space-y-1">
            <GameAddress address="address" address_detail="safgsag" />
            <GameTime starttime="00" endtime="00" />

            <div className="flex justify-between">
              <GameParticipants num_of_participations={0} max_invitation="10" />
              <GameFee size="md" fee={0} />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
