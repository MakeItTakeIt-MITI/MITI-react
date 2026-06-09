import GameDetailMap from "../../game-detail/components/GameDetailMap.tsx";
import JoinGameButton from "../../game-detail/components/JoinGameButton.tsx";
import { TeamGameDetailResponse } from "../interface/team-game-detail.ts";

import eliteSvg from "../../../assets/images/level=elite.svg";
import division3Svg from "../../../assets/images/level=division 3.svg";
import division4Svg from "../../../assets/images/level=division 4.svg";
import division5Svg from "../../../assets/images/level=division 5.svg";
import division6Svg from "../../../assets/images/level=division 6.svg";
import rookieSvg from "../../../assets/images/level=rookie.svg";

const getLevelSvg = (level: string) => {
  switch (level?.toLowerCase().replace(/\s+/g, '')) {
    case 'elite': return eliteSvg;
    case 'division3': return division3Svg;
    case 'division4': return division4Svg;
    case 'division5': return division5Svg;
    case 'division6': return division6Svg;
    case 'rookie': return rookieSvg;
    default: return rookieSvg;
  }
};

interface PanelProps {
  gameDetailData: TeamGameDetailResponse;
  isLoading?: boolean;
}

const GameDetailMapSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 w-full bg-[#2A2A2A] rounded-lg" />
  </div>
);

const TeamDetailsSkeleton = () => (
  <div className="animate-pulse space-y-4 mt-4">
    <div className="h-6 w-24 bg-[#2A2A2A] rounded" />
    <div className="h-20 w-full bg-[#2A2A2A] rounded" />
    <div className="h-16 w-full bg-[#2A2A2A] rounded" />
  </div>
);

const TeamGameDetailsPanelSkeleton = () => (
  <div className="flex md:flex-col gap-[30px]">
    <GameDetailMapSkeleton />
    <TeamDetailsSkeleton />
  </div>
);

const TeamGameDetailsPanel = ({
  gameDetailData,
  isLoading = false,
}: PanelProps) => {
  if (isLoading) {
    return <TeamGameDetailsPanelSkeleton />;
  }

  return (
    <div className="flex md:flex-col gap-[30px] ">
      {gameDetailData.court && (
        <GameDetailMap
          lat={gameDetailData.court.latitude}
          long={gameDetailData.court.longitude}
        />
      )}
      
      <section className="space-y-4 hidden md:block md:w-[360px]">
        <h2 className="font-bold text-white">팀 소개</h2>
        <div className="flex flex-col gap-3 w-full">
          {gameDetailData.team.images?.[0] ? (
            <img src={gameDetailData.team.images[0]} alt="팀 엠블럼" className="w-full aspect-square object-cover rounded-lg" />
          ) : (
            <div className="w-full aspect-square bg-gray-600 flex justify-center items-center text-white font-bold text-5xl rounded-lg">
              {gameDetailData.team.name.charAt(0)}
            </div>
          )}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <img src={getLevelSvg(gameDetailData.team.level)} alt={gameDetailData.team.level} className="h-6 object-contain" style={{ maxWidth: 'fit-content' }} />
              <div className="flex items-center gap-2 mt-1">
                <div className="font-bold text-lg text-white">{gameDetailData.team.name}</div>
                <div className="text-white text-sm">
                  {gameDetailData.team.city.name}
                </div>
              </div>
            </div>
            {gameDetailData.team.introduction && (
              <p className="text-sm text-[#ebebeb] line-clamp-3 whitespace-pre-line">
                {gameDetailData.team.introduction}
              </p>
            )}
          </div>
        </div>
      </section>

      <JoinGameButton gameTitle={gameDetailData.title} />
    </div>
  );
};

export default TeamGameDetailsPanel;
