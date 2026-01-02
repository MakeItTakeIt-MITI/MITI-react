import GameAddress from "../../common/components(renewal)/chips/GameAddress.tsx";
import GameFee from "../../common/components(renewal)/chips/GameFee.tsx";
import GameParticipants from "../../common/components(renewal)/chips/GameParticipants.tsx";
import { GameStatus } from "../../common/components(renewal)/chips/GameStatus.tsx";
import GameTime from "../../common/components(renewal)/chips/GameTime.tsx";
import GameTitle from "../../common/components(renewal)/chips/GameTitle.tsx";
import { GameDetail } from "../interface/game-detail.ts";

import five_stars from "../../../assets/v1.3/reviews/five-star.svg";
import four_half_stars from "../../../assets/v1.3/reviews/four-half-star.svg";
import four_stars from "../../../assets/v1.3/reviews/four-star.svg";
import three_half_stars from "../../../assets/v1.3/reviews/three-half-star.svg";
import three_stars from "../../../assets/v1.3/reviews/three-star.svg";
import two_half_stars from "../../../assets/v1.3/reviews/two-half-star.svg";
import two_stars from "../../../assets/v1.3/reviews/two-star.svg";
import one_half_stars from "../../../assets/v1.3/reviews/one-half-star.svg";
import one_star from "../../../assets/v1.3/reviews/one-star.svg";
import zero_star from "../../../assets/v1.3/reviews/zero-star.svg";

// Skeleton components for loading state
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
    <div className="flex space-x-2">
      <div className="h-4 w-12 bg-[#2A2A2A] rounded" />
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

const SkeletonHostIntro = () => (
  <div className="animate-pulse space-y-4 md:hidden sm:block">
    <div className="h-6 w-20 bg-[#2A2A2A] rounded" />
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#2A2A2A] rounded-full" />
      <div className="flex flex-col gap-1">
        <div className="h-4 w-24 bg-[#2A2A2A] rounded" />
        <div className="flex items-center space-x-2">
          <div className="h-3 w-16 bg-[#2A2A2A] rounded" />
          <div className="h-3 w-8 bg-[#2A2A2A] rounded" />
          <div className="h-3 w-8 bg-[#2A2A2A] rounded" />
        </div>
      </div>
    </div>
  </div>
);

const SkeletonGameInfo = () => (
  <div className="animate-pulse space-y-2">
    <div className="h-4 w-full bg-[#2A2A2A] rounded" />
    <div className="h-4 w-5/6 bg-[#2A2A2A] rounded" />
    <div className="h-4 w-4/6 bg-[#2A2A2A] rounded" />
    <div className="h-4 w-3/6 bg-[#2A2A2A] rounded" />
  </div>
);

const GameDetailSkeleton = () => (
  <div className="space-y-[30px] sm:w-full md:w-[578px] md:min-h-screen md:py-0 sm:py-2 sm:px-4 md:px-0">
    {/* game details skeleton */}
    <ul className="space-y-3">
      <li>
        <SkeletonGameStatus />
      </li>
      <li>
        <SkeletonGameTitle />
      </li>
      <li>
        <SkeletonGameDate />
      </li>
      <li>
        <SkeletonGameAddress />
      </li>
      <li>
        <SkeletonGameTime />
      </li>
      <li>
        <SkeletonGameParticipants />
      </li>
      <li>
        <SkeletonGameFee />
      </li>
    </ul>

    <SkeletonHostIntro />

    <SkeletonGameInfo />
  </div>
);

interface GameDetailContainerProps {
  gameDetailData?: GameDetail;
  isLoading?: boolean;
}

const GameDetailContainer = ({
  gameDetailData,
  isLoading = false,
}: GameDetailContainerProps) => {
  if (isLoading) {
    return <GameDetailSkeleton />;
  }

  // Return skeleton if no data is available
  if (!gameDetailData) {
    return <GameDetailSkeleton />;
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

  const getStarRating = (rating: number) => {
    if (rating >= 5) return five_stars;
    if (rating >= 4.5) return four_half_stars;
    if (rating >= 4) return four_stars;
    if (rating >= 3.5) return three_half_stars;
    if (rating >= 3) return three_stars;
    if (rating >= 2.5) return two_half_stars;
    if (rating >= 2) return two_stars;
    if (rating >= 1.5) return one_half_stars;
    if (rating >= 1) return one_star;
    return zero_star;
  };

  return (
    <article className="space-y-[30px] sm:w-full md:w-[578px] md:py-0 sm:py-2 sm:px-4 md:px-0">
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
            address={gameDetailData?.court.address}
            address_detail={gameDetailData?.court.address_detail || ""}
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

      <div className="space-y-4  md:hidden sm:block">
        <h2 className="font-bold text-white">호스트 소개</h2>
        <div className="flex items-center gap-3">
          <img
            src={gameDetailData?.host.profile_image_url}
            alt="host avatar"
            className="h-10 w-10 rounded-full"
          />{" "}
          <div className="flex flex-col gap-1 text-sm ">
            <div className="space-x-[2px] font-bold text-white">
              <span>{gameDetailData?.host.nickname}</span>
              <span>님</span>
            </div>
            <div className="space-x-2 font-[400] text-white flex items-center ">
              <img
                src={getStarRating(
                  gameDetailData?.host.host_rating.average_rating || 0
                )}
                alt="review ratings"
              />{" "}
              <span>{gameDetailData?.host.host_rating.num_of_reviews}</span>
              <span>리뷰</span>
            </div>
          </div>
        </div>
      </div>

      <p
        style={{ whiteSpace: "pre-line" }}
        className=" text-sm md:text-base font-[500] text-[#F1F1F1]"
      >
        {gameDetailData?.info}
      </p>
    </article>
  );
};

export default GameDetailContainer;
