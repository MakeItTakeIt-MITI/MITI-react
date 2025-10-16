import {
    ReviewTypeEnum,
    PlayerReviewTagEnum,
    RatingTypeEnum,
} from "../enum/reviews.ts";

export const ReviewTypeLabel: Record<ReviewTypeEnum, string> = {
    [ReviewTypeEnum.HOST_REVIEW]: "호스트 리뷰",
    [ReviewTypeEnum.GUEST_REVIEW]: "게스트 리뷰",
};

export const PlayerReviewTagLabel: Record<PlayerReviewTagEnum, string> = {
    [PlayerReviewTagEnum.SCORING_ABILITY]: "득점능력",
    [PlayerReviewTagEnum.BALL_HANDLING]: "볼핸들링",
    [PlayerReviewTagEnum.DEFENSIVE_AGGRESSIVENESS]: "수비적극성",
    [PlayerReviewTagEnum.PASSING]: "패스",
    [PlayerReviewTagEnum.SHOOTING_ACCURACY]: "슛정확도",
    [PlayerReviewTagEnum.SPACE_CREATION]: "공간창출",
    [PlayerReviewTagEnum.SHOOT_BLOCKING]: "블로킹",
    [PlayerReviewTagEnum.MAN_TO_MAN_DEFENCE]: "1:1수비",
    [PlayerReviewTagEnum.SPORTSMANSHIP]: "스포츠맨쉽",
    [PlayerReviewTagEnum.MANNERS]: "매너",
    [PlayerReviewTagEnum.POLITENESS]: "인사성",
    [PlayerReviewTagEnum.LEADERSHIP]: "리더쉽",
    [PlayerReviewTagEnum.TEAMWORK]: "팀워크",
};

export const RatingTypeLabel: Record<RatingTypeEnum, string> = {
    [RatingTypeEnum.HOST_RATING]: "호스트 평점",
    [RatingTypeEnum.GUEST_RATING]: "게스트 평점",
};
