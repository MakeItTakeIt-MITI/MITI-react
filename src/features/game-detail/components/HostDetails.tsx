import { GameDetail } from "../interface/game-detail";
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

interface HostDetailsProps {
  gameDetailData: GameDetail;
}

const HostDetails = ({ gameDetailData }: HostDetailsProps) => {
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

  const avg = gameDetailData?.host.host_rating.average_rating || 0;
  const reviews = gameDetailData?.host.host_rating.num_of_reviews || 0;

  return (
    <section
      className="space-y-4 hidden md:block"
      aria-labelledby="host-details-title"
    >
      <h2 id="host-details-title" className="font-bold text-white">
        호스트 소개
      </h2>

      <div
        className="flex items-center gap-3"
        role="group"
        aria-label="호스트 프로필 정보"
      >
        {/* 아바타 */}
        <img
          src={gameDetailData?.host.profile_image_url}
          alt={`호스트 아바타: ${
            gameDetailData?.host.nickname ?? "알 수 없음"
          }`}
          className="h-8 w-8 rounded-full"
        />

        {/* 닉네임 및 평점 */}
        <div className="flex flex-col gap-1 text-sm">
          <div
            className="space-x-[2px] font-bold text-white"
            aria-label={`호스트 닉네임: ${
              gameDetailData?.host.nickname ?? "알 수 없음"
            }`}
          >
            <span>{gameDetailData?.host.nickname}</span>
            <span>님</span>
          </div>

          <div
            className="space-x-2 font-[400] text-white flex items-center"
            aria-label={`호스트 평점: 평균 ${avg}점, 리뷰 ${reviews}개`}
          >
            <img
              src={getStarRating(avg)}
              alt={`평점 별 이미지: 평균 ${avg}점`}
            />
            <span aria-label={`리뷰 수: ${reviews}개`}>{reviews}</span>
            <span aria-hidden="true">리뷰</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostDetails;
