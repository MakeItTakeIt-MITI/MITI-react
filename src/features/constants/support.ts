import {
    AdvertisementStatusEnum,
    FaqCategoryEnum,
    UserGuideCategoryEnum,
} from "../enum/support.ts";

export const AdvertisementStatusLabel: Record<AdvertisementStatusEnum, string> = {
    [AdvertisementStatusEnum.ACTIVE]: "활성화 상태",
    [AdvertisementStatusEnum.EXPIRED]: "광고 만료 상태",
};

export const FaqCategoryLabel: Record<FaqCategoryEnum, string> = {
    [FaqCategoryEnum.GAME]: "경기",
    [FaqCategoryEnum.PARTICIPATION]: "참가",
    [FaqCategoryEnum.SETTLEMENT]: "정산",
    [FaqCategoryEnum.REVIEW]: "리뷰",
    [FaqCategoryEnum.REPORT]: "신고",
    [FaqCategoryEnum.ETC]: "기타",
};

export const UserGuideCategoryLabel: Record<UserGuideCategoryEnum, string> = {
    [UserGuideCategoryEnum.GAME]: "경기",
    [UserGuideCategoryEnum.PARTICIPATION]: "참여",
    [UserGuideCategoryEnum.SETTLEMENT]: "정산",
    [UserGuideCategoryEnum.TRANSFER]: "이체",
    [UserGuideCategoryEnum.REVIEW]: "리뷰",
    [UserGuideCategoryEnum.REPORT]: "신고",
    [UserGuideCategoryEnum.ETC]: "기타",
};
