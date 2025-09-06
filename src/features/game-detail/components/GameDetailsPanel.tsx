import Avatar from "../../common/components(renewal)/avatar/Avatar";
import Button from "../../common/components(renewal)/buttons/Button";
import { GameDetail } from "../interface/game-detail";
import five_stars from "../../../assets/v1.3/reviews/five-star.svg";
import GameDetailMap from "./GameDetailMap";

interface PanelProps {
  gameDetailData: GameDetail;
}

const GameDetailsPanel = ({ gameDetailData }: PanelProps) => {
  return (
    <div className="flex flex-col gap-[30px] ">
      <GameDetailMap
        lat={gameDetailData?.court.latitude}
        long={gameDetailData?.court.longitude}
      />
      <div className="space-y-4">
        <h2 className="font-bold text-white">호스트 소개</h2>
        <div className="flex items-center gap-3">
          <Avatar size="xs" />
          <div className="flex flex-col gap-1 text-sm ">
            <div className="space-x-[2px] font-bold text-white">
              <span>{gameDetailData?.host.nickname}</span>
              <span>님</span>
            </div>
            <div className="space-x-2 font-[400] text-white flex items-center ">
              <img src={five_stars} alt="five_stars" />
              <span>{gameDetailData?.host.host_rating.num_of_reviews}</span>
              <span>리뷰</span>
            </div>
          </div>
        </div>
      </div>
      <Button type="button" size="lg" content="참가하기" />
    </div>
  );
};

export default GameDetailsPanel;
