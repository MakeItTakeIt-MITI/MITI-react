import { useCallback, useState } from "react";
import GameStatus from "../../../common/components(renewal)/chips/GameFilterStatus.tsx";

export default function GameStatusField() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([
    "모집 중",
    "모집 마감",
    "경기 완료",
    "경기 취소",
  ]);

  const handleSelectStatus = useCallback(
    (status: string) => {
      setSelectedStatuses((prev) => {
        if (prev.includes(status)) {
          // Remove if already selected
          return prev.filter((s) => s !== status);
        } else if (prev.length < 4) {
          // Add if not selected and less than 4 selected
          return [...prev, status];
        }
        // If already 4 selected, do nothing
        return prev;
      });
    },
    [setSelectedStatuses]
  );
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5">
          <GameStatus
            status="모집 중"
            isSelected={selectedStatuses.includes("모집 중")}
            onClick={() => handleSelectStatus("모집 중")}
          />
          <GameStatus
            status="모집 마감"
            isSelected={selectedStatuses.includes("모집 마감")}
            onClick={() => handleSelectStatus("모집 마감")}
          />
        </div>
        <div className="flex gap-2.5">
          <GameStatus
            status="경기 완료"
            isSelected={selectedStatuses.includes("경기 완료")}
            onClick={() => handleSelectStatus("경기 완료")}
          />
          <GameStatus
            status="경기 취소"
            isSelected={selectedStatuses.includes("경기 취소")}
            onClick={() => handleSelectStatus("경기 취소")}
          />
        </div>
      </div>
    </div>
  );
}
