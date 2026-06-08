import GameAddress from "../../common/components(renewal)/chips/GameAddress.tsx";
import GameFee from "../../common/components(renewal)/chips/GameFee.tsx";
import GameParticipants from "../../common/components(renewal)/chips/GameParticipants.tsx";
import { GameStatus } from "../../common/components(renewal)/chips/GameStatus.tsx";
import GameTime from "../../common/components(renewal)/chips/GameTime.tsx";
import GameTitle from "../../common/components(renewal)/chips/GameTitle.tsx";
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

const SkeletonGameStatus = () => (
  <div className="animate-pulse">
    <div className="h-6 w-20 bg-[#2A2A2A] rounded" />
  </div>
);

const SkeletonGameTitle = () => (
  <div className="animate-pulse">
    <div className="h-8 w-48 bg-[#2A2A2A] rounded" />
  </div>
);

const SkeletonGameDate = () => (
  <div className="animate-pulse space-y-1">
    <div className="flex space-x-2">
      <div className="h-4 w-12 bg-[#2A2A2A] rounded" />
      <div className="h-4 w-8 bg-[#2A2A2A] rounded" />
      <div className="h-4 w-8 bg-[#2A2A2A] rounded" />
    </div>
  </div>
);

const SkeletonGameAddress = () => (
  <div className="animate-pulse">
    <div className="h-5 w-64 bg-[#2A2A2A] rounded" />
  </div>
);

const SkeletonGameTime = () => (
  <div className="animate-pulse">
    <div className="h-5 w-32 bg-[#2A2A2A] rounded" />
  </div>
);

const SkeletonGameParticipants = () => (
  <div className="animate-pulse">
    <div className="h-5 w-24 bg-[#2A2A2A] rounded" />
  </div>
);

const SkeletonGameFee = () => (
  <div className="animate-pulse flex gap-1">
    <div className="h-6 w-12 bg-[#2A2A2A] rounded" />
    <div className="h-6 w-16 bg-[#2A2A2A] rounded" />
  </div>
);

const SkeletonTeamGameInfo = () => (
  <div className="animate-pulse space-y-2">
    <div className="h-4 w-full bg-[#2A2A2A] rounded" />
    <div className="h-4 w-5/6 bg-[#2A2A2A] rounded" />
    <div className="h-4 w-4/6 bg-[#2A2A2A] rounded" />
  </div>
);

const TeamGameDetailSkeleton = () => (
  <div className="space-y-[30px] sm:w-full md:w-[578px] md:min-h-screen md:py-0 sm:py-2 sm:px-4 md:px-0">
    <ul className="space-y-3">
      <li><SkeletonGameStatus /></li>
      <li><SkeletonGameTitle /></li>
      <li><SkeletonGameDate /></li>
      <li><SkeletonGameAddress /></li>
      <li><SkeletonGameTime /></li>
      <li><SkeletonGameParticipants /></li>
      <li><SkeletonGameFee /></li>
    </ul>
    <SkeletonTeamGameInfo />
  </div>
);

interface TeamGameDetailContainerProps {
  gameDetailData?: TeamGameDetailResponse;
  isLoading?: boolean;
}

const TeamGameDetailContainer = ({
  gameDetailData,
  isLoading = false,
}: TeamGameDetailContainerProps) => {
  if (isLoading || !gameDetailData) {
    return <TeamGameDetailSkeleton />;
  }

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
    gameDetailData.starttime.slice(0, 5),
    gameDetailData.endtime.slice(0, 5)
  );

  const displayTitle = gameDetailData.is_member ? gameDetailData.title : gameDetailData.external_title;
  const totalParticipations = gameDetailData.member_participations.length + gameDetailData.guest_participations.length;

  return (
    <article className="space-y-[30px] sm:w-full md:w-[578px] md:py-0 sm:py-2 sm:px-4 md:px-0">
      <ul className="space-y-3 text-white">
        <li>
          <GameStatus status={gameDetailData.status} />
        </li>
        <li>
          <GameTitle title={displayTitle} />
        </li>
        <li className="text-xs font-[500] text-[#D6D6D6] space-y-1">
          <div className="space-x-[2px]">
            <span>{gameDetailData.startdate.slice(0, 4)}년</span>
            <span>{Number(gameDetailData.startdate.slice(5, 7))}월</span>
            <span>{Number(gameDetailData.startdate.slice(8, 10))}일</span>
          </div>
          <div className="space-x-[2px]">
            <span>{duration}분</span>
            <span>{gameDetailData.schedule_type === 'event' ? '모임' : '경기'}</span>
          </div>
        </li>

        <li>
          {gameDetailData.court ? (
            <GameAddress
              court_address={`${gameDetailData.court.address} ${gameDetailData.court.name}`}
            />
          ) : (
            <span className="text-[#D6D6D6] text-sm">장소 미정</span>
          )}
        </li>
        <li>
          <GameTime
            starttime={gameDetailData.starttime.slice(0, 5)}
            endtime={gameDetailData.endtime.slice(0, 5)}
          />
        </li>
        <li>
          <GameParticipants
            num_of_participations={totalParticipations}
            max_invitation={gameDetailData.max_invitation}
          />
        </li>
        <li className="flex flex-col gap-2">
          {gameDetailData.is_member ? (
            <div className="flex gap-1 items-center">
              <span className="text-[#7FEEF0] font-bold text-sm md:text-lg">멤버 참가비</span>
              <GameFee fee={gameDetailData.member_fee} size="lg" />
            </div>
          ) : (
            <div className="flex gap-1 items-center">
              <span className="text-[#7FEEF0] font-bold text-sm md:text-lg">게스트 참가비</span>
              <GameFee fee={gameDetailData.fee ?? NaN} size="lg" />
            </div>
          )}
        </li>
      </ul>

      {/* 모바일 화면 전용 팀 소개 (담당자 제거) */}
      <div className="space-y-4 md:hidden sm:block">
        <h2 className="font-bold text-white">팀 소개</h2>
        <div className="flex flex-row items-start gap-4 w-full">
          {gameDetailData.team.images?.[0] ? (
            <img src={gameDetailData.team.images[0]} alt="팀 엠블럼" className="w-[120px] h-[120px] object-cover rounded-lg shrink-0" />
          ) : (
            <div className="w-[120px] h-[120px] bg-gray-600 flex justify-center items-center text-white font-bold text-4xl rounded-lg shrink-0">
              {gameDetailData.team.name.charAt(0)}
            </div>
          )}
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex flex-col gap-1">
              <img src={getLevelSvg(gameDetailData.team.level)} alt={gameDetailData.team.level} className="h-5 object-contain" style={{ maxWidth: 'fit-content' }} />
              <div className="flex items-center gap-2">
                <div className="font-bold text-base text-white">{gameDetailData.team.name}</div>
                <div className="text-white text-xs">
                  {gameDetailData.team.city.name}
                </div>
              </div>
            </div>
            {gameDetailData.team.introduction && (
              <p className="text-xs text-[#ebebeb] line-clamp-2 whitespace-pre-line">
                {gameDetailData.team.introduction}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4 border-t border-[#333] pt-4">
        <h2 className="font-bold text-white">상세 안내</h2>
        <p
          style={{ whiteSpace: "pre-line" }}
          className=" text-sm md:text-base font-[500] text-[#F1F1F1]"
        >
          {gameDetailData.info}
        </p>
      </div>
    </article>
  );
};

export default TeamGameDetailContainer;
