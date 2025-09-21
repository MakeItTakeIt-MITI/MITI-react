import { GameDetail } from "../interface/game-detail";
import GameDetailMap from "./GameDetailMap";
import HostDetails from "./HostDetails";

interface PanelProps {
  gameDetailData: GameDetail;
}

const GameDetailsPanel = ({ gameDetailData }: PanelProps) => {
  return (
    <div className="flex md:flex-col gap-[30px] ">
      <GameDetailMap
        lat={gameDetailData?.court.latitude}
        long={gameDetailData?.court.longitude}
      />
      <HostDetails gameDetailData={gameDetailData} />
      {/* <Button type="button" size="lg" content="참가하기" /> */}
    </div>
  );
};

export default GameDetailsPanel;
