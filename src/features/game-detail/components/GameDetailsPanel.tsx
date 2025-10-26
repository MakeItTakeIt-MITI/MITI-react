import { GameDetail } from "../interface/game-detail";
import GameDetailMap from "./GameDetailMap";
import HostDetails from "./HostDetails";
import JoinGameButton from "./JoinGameButton";

interface PanelProps {
  gameDetailData: GameDetail;
  isLoading?: boolean;
}

const GameDetailMapSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 w-full bg-[#2A2A2A] rounded-lg" />
  </div>
);

const HostDetailsSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-6 w-24 bg-[#2A2A2A] rounded" />
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-[#2A2A2A] rounded-full" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-32 bg-[#2A2A2A] rounded" />
        <div className="flex items-center space-x-2">
          <div className="h-3 w-20 bg-[#2A2A2A] rounded" />
          <div className="h-3 w-8 bg-[#2A2A2A] rounded" />
          <div className="h-3 w-8 bg-[#2A2A2A] rounded" />
        </div>
      </div>
    </div>
  </div>
);

const GameDetailsPanelSkeleton = () => (
  <div className="flex md:flex-col gap-[30px]">
    <GameDetailMapSkeleton />
    <HostDetailsSkeleton />
  </div>
);

const GameDetailsPanel = ({
  gameDetailData,
  isLoading = false,
}: PanelProps) => {
  if (isLoading) {
    return <GameDetailsPanelSkeleton />;
  }

  return (
    <div className="flex md:flex-col gap-[30px] ">
      <GameDetailMap
        lat={gameDetailData?.court.latitude}
        long={gameDetailData?.court.longitude}
      />
      <HostDetails gameDetailData={gameDetailData} />

      <JoinGameButton gameTitle={gameDetailData?.title} />
    </div>
  );
};

export default GameDetailsPanel;
