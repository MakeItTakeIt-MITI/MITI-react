import { useState } from "react";
import GameStatus from "../../../common/components(renewal)/chips/GameStatus.tsx";

export default function GameStatusField() {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectStatus = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5">
          <GameStatus
            status="모집 중"
            isSelected={isSelected}
            onClick={handleSelectStatus}
          />
          <GameStatus
            status="모집 마감"
            isSelected={isSelected}
            onClick={handleSelectStatus}
          />
        </div>
        <div className="flex gap-2.5">
          <GameStatus
            status="경기 완료"
            isSelected={isSelected}
            onClick={handleSelectStatus}
          />
          <GameStatus
            status="경기 취소"
            isSelected={isSelected}
            onClick={handleSelectStatus}
          />
        </div>
      </div>
    </div>
  );
}
