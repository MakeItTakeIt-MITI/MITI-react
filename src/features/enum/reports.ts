export enum ReportCategoryEnum {
    HOST_REPORT = "host_report",
    GUEST_REPORT = "guest_report",
    POST_REPORT = "post_report",
    USER_REPORT = "user_report",
    ETC = "etc",
}

export enum ReportStatusEnum {
    WAITING = "waiting",
    EVIDENCE_REQUESTED = "evidence_requested",
    INVESTIGATION_IN_PROGRESS = "investigation_in_progress",
    CONCLUDED = "concluded",
}

export enum ReportInvestigationResultTypeEnum {
    DISMISSED = "dismissed",
    PENALIZED = "penalized",
}

export enum PenaltyTypeEnum {
    SUSPENSION = "suspension",
    WARNING = "warning",
}
