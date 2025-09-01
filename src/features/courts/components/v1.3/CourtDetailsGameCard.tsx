import { Link } from "react-router-dom";
import GameFee from "../../../common/components(renewal)/chips/GameFee.tsx";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants.tsx";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";
import GameTime from "../../../common/components(renewal)/chips/GameTime.tsx";
import { GameStatusEnum } from "../../../enum/games.ts";

interface CourtDetailsGameCardProps {
  courtDetailData: {
    year: number;
    month: number;
    day: number;
    day_type: string;
    title: string;
    starttime: string;
    endtime: string;
    min_participants: string;
    max_participants: string;
    fee: number;
  };
}

const CourtDetailsGameCard = ({
  courtDetailData,
}: CourtDetailsGameCardProps) => {
  return (
    <li className=" w-full ">
      <Link className="flex flex-col gap-2.5" to="/games/1">
        <div className="space-y-2">
          <GameStatus status={GameStatusEnum.COMPLETED} />
          <h2 className="text-white text-sm font-bold">
            {" "}
            {/* {courtDetailData?.title} */}
          </h2>
        </div>
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <GameTime
              starttime={courtDetailData?.starttime}
              endtime={courtDetailData?.endtime}
            />
            <GameParticipants
              min_participants={courtDetailData?.min_participants}
              max_participants={courtDetailData?.max_participants}
            />
          </div>
          <GameFee fee={courtDetailData?.fee} size="md" />
        </div>
      </Link>
    </li>
  );
};

export default CourtDetailsGameCard;
