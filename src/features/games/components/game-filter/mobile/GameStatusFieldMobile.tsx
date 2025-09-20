import { GameStatus } from "../../../../common/components(renewal)/chips/GameStatus";

interface GameStatusFieldMobileProps {
  handleToggleGameStatus: (
    statusToToggle: "open" | "closed" | "canceled" | "completed"
  ) => void;
  gameStatusArray: string[];
}

const GameStatusFieldMobile = ({
  handleToggleGameStatus,
  gameStatusArray,
}: GameStatusFieldMobileProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5">
          <GameStatus
            status="모집 중"
            onClick={() => handleToggleGameStatus("open")}
            gameStatusArray={gameStatusArray}
          />
          <GameStatus
            status="모집 마감"
            onClick={() => handleToggleGameStatus("closed")}
            gameStatusArray={gameStatusArray}
          />

          <GameStatus
            status="경기 완료"
            onClick={() => handleToggleGameStatus("completed")}
            gameStatusArray={gameStatusArray}
          />
          <GameStatus
            status="경기 취소"
            onClick={() => handleToggleGameStatus("canceled")}
            gameStatusArray={gameStatusArray}
          />
        </div>
      </div>
    </div>
  );
};

export default GameStatusFieldMobile;
