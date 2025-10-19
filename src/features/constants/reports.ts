import {
    ReportCategoryEnum,
    ReportStatusEnum,
    ReportInvestigationResultTypeEnum,
    PenaltyTypeEnum,
} from "../enum/reports.ts";

export const ReportCategoryLabel: Record<ReportCategoryEnum, string> = {
    [ReportCategoryEnum.HOST_REPORT]: "호스트 신고",
    [ReportCategoryEnum.GUEST_REPORT]: "게스트 신고",
    [ReportCategoryEnum.POST_REPORT]: "게시글 신고",
    [ReportCategoryEnum.USER_REPORT]: "유저 신고",
    [ReportCategoryEnum.ETC]: "기타 신고",
};

export const ReportStatusLabel: Record<ReportStatusEnum, string> = {
    [ReportStatusEnum.WAITING]: "대기중",
    [ReportStatusEnum.EVIDENCE_REQUESTED]: "자료 요청",
    [ReportStatusEnum.INVESTIGATION_IN_PROGRESS]: "조사진행중",
    [ReportStatusEnum.CONCLUDED]: "처리완료",
};

export const ReportInvestigationResultTypeLabel: Record<ReportInvestigationResultTypeEnum, string> = {
    [ReportInvestigationResultTypeEnum.DISMISSED]: "신고 기각",
    [ReportInvestigationResultTypeEnum.PENALIZED]: "신고 인정",
};

export const PenaltyTypeLabel: Record<PenaltyTypeEnum, string> = {
    [PenaltyTypeEnum.SUSPENSION]: "이용 정지",
    [PenaltyTypeEnum.WARNING]: "서비스 경고",
};
