import { useCallback, useState } from "react";
import GameStatus from "../../../common/components(renewal)/chips/GameFilterStatus.tsx";
import { useSearchParams } from "react-router-dom";

export default function GameStatusField() {
  const [searchParams] = useSearchParams();

  const statuses = searchParams.getAll("game_status");

  const handleSelectStatus = useCallback(
    (status: string) => {
      const newStatuses = [...statuses];
      if (newStatuses.includes(status)) {
        // Remove if already selected
        return newStatuses.filter((s) => s !== status);
      } else if (newStatuses.length < 4) {
        // Add if not selected and less than 4 selected
        return [...newStatuses, status];
      }
      // If already 4 selected, do nothing
      return newStatuses;
    },
    [statuses]
  );
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5">
          <GameStatus
            status="모집 중"
            isSelected={statuses.includes("open")}
            onClick={() => handleSelectStatus("모집 중")}
          />
          <GameStatus
            status="모집 마감"
            isSelected={statuses.includes("closed")}
            onClick={() => handleSelectStatus("모집 마감")}
          />
        </div>
        <div className="flex gap-2.5">
          <GameStatus
            status="경기 완료"
            isSelected={statuses.includes("completed")}
            onClick={() => handleSelectStatus("경기 완료")}
          />
          <GameStatus
            status="경기 취소"
            isSelected={statuses.includes("canceled")}
            onClick={() => handleSelectStatus("경기 취소")}
          />
        </div>
      </div>
    </div>
  );
}
