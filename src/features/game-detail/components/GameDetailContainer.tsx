import GameAddress from "../../common/components(renewal)/chips/GameAddress.tsx";
import GameFee from "../../common/components(renewal)/chips/GameFee.tsx";
import GameParticipants from "../../common/components(renewal)/chips/GameParticipants.tsx";
import { GameStatus } from "../../common/components(renewal)/chips/GameStatus.tsx";
import GameTime from "../../common/components(renewal)/chips/GameTime.tsx";
import GameTitle from "../../common/components(renewal)/chips/GameTitle.tsx";
import { GameDetail } from "../interface/game-detail.ts";

interface GameDetailContainerProps {
  gameDetailData: GameDetail;
}

const GameDetailContainer = ({ gameDetailData }: GameDetailContainerProps) => {
  function getGameDurationInMinutes(start: string, end: string): number {
    if (!start || !end) return 0;

    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    let startTotal = startHour * 60 + startMinute;
    let endTotal = endHour * 60 + endMinute;

    if (endTotal <= startTotal) {
      endTotal += 24 * 60;
    }

    return endTotal - startTotal;
  }

  const duration = getGameDurationInMinutes(
    gameDetailData?.starttime.slice(0, 5),
    gameDetailData?.endtime.slice(0, 5)
  );

  return (
    <div className="space-y-[30px] w-[578px]">
      {/* game details container */}
      <ul className="space-y-3 text-white">
        <li>
          <GameStatus status={gameDetailData?.game_status} />
        </li>
        <li>
          <GameTitle title={gameDetailData?.title} />
        </li>
        <li className="text-xs font-[500] text-[#D6D6D6] space-y-1">
          <div className="space-x-[2px]">
            <span>{gameDetailData?.startdate.slice(0, 4)}년</span>
            <span>{gameDetailData?.startdate.slice(5, 7)}월</span>
            <span>{gameDetailData?.startdate.slice(8, 10)}일</span>
          </div>
          <div className="space-x-[2px]">
            <span>{duration}분</span>
            <span>경기</span>
          </div>
        </li>

        <li>
          <GameAddress
            address="경기 김포시 감정로 86"
            address_detail="삼성리틀썬더스"
          />
        </li>
        <li>
          <GameTime
            starttime={gameDetailData?.starttime.slice(0, 5)}
            endtime={gameDetailData?.endtime.slice(0, 5)}
          />
        </li>
        <li>
          <GameParticipants
            num_of_participations={gameDetailData?.num_of_participations}
            max_invitation={gameDetailData?.max_invitation}
          />
        </li>
        <li className="flex gap-1">
          <span className="text-[#7FEEF0] font-bold text-lg">참가비</span>
          <GameFee fee={gameDetailData ? gameDetailData.fee : NaN} size="lg" />
        </li>
      </ul>

      <p
        style={{ whiteSpace: "pre-line" }}
        className="text-base font-[500] text-[#F1F1F1]"
      >
        {gameDetailData?.info}
      </p>
    </div>
  );
};

export default GameDetailContainer;
