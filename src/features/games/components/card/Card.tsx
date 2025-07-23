// import time from "../../../../assets/v1.3/time.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import GameAddress from "../../../common/components(renewal)/chips/GameAddress.tsx";
import GameTime from "../../../common/components(renewal)/chips/GameTime.tsx";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants.tsx";
import GameTitle from "../../../common/components(renewal)/chips/GameTitle.tsx";
import GameFee from "../../../common/components(renewal)/chips/GameFee.tsx";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";

export default function Card() {
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
      <Link to="/games/detail?&id=1" className="flex flex-col gap-2.5">
        <div className="space-y-2">
          <GameStatus status="closed" />
          <GameTitle title="[김포 사우/감정] 삼성썬더스 목요일 픽업게임 게스트 모집	" />
        </div>

        <div className="space-y-1 ">
          <GameAddress
            address="경기 김포시 감정로 86"
            address_detail="삼성리틀썬더스"
          />
          <GameTime starttime="10:25" endtime="11:30" />

          <div className="flex items-center justify-between">
            <GameParticipants min_participants="5" max_participants="10" />
            <GameFee fee={0} size="md" />
          </div>
        </div>
      </Link>
    </li>
  );
}
