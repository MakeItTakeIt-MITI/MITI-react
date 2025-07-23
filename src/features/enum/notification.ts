export enum NotificationStatusEnum {
    WAITING = "waiting",
    FAILED = "failed",
    SUCCESS = "success",
    IGNORED = "ignored",
}

export enum PushNotificationTopicEnum {
    GENERAL = "general",
    GAME_STATUS_CHANGED = "game_status_changed",
    NEW_PARTICIPATION = "new_participation",
    GAME_FEE_CHANGED = "game_fee_changed",
    HOST_REPORT_REPORTEE = "host_report_reportee",
    HOST_REPORT_REPORTER = "host_report_reporter",
    HOST_REPORT_DISMISSED = "host_report_dismissed",
    HOST_USER_PENALIZED = "host_user_penalized",
    GUEST_REPORT_REPORTEE = "guest_report_reportee",
    GUEST_REPORT_REPORTER = "guest_report_reporter",
    GUEST_REPORT_DISMISSED = "guest_report_dismissed",
    GUEST_USER_PENALIZED = "guest_user_penalized",
}
