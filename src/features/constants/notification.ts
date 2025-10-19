import {
    NotificationStatusEnum,
    PushNotificationTopicEnum,
} from "../enum/notification.ts";

export const NotificationStatusLabel: Record<NotificationStatusEnum, string> = {
    [NotificationStatusEnum.WAITING]: "전송 대기중",
    [NotificationStatusEnum.FAILED]: "전송 실패",
    [NotificationStatusEnum.SUCCESS]: "전송 완료",
    [NotificationStatusEnum.IGNORED]: "사용자 무시 주제 알림",
};

export const PushNotificationTopicLabel: Record<PushNotificationTopicEnum, string> = {
    [PushNotificationTopicEnum.GENERAL]: "일반 알림",
    [PushNotificationTopicEnum.GAME_STATUS_CHANGED]: "경기 상태 변경 알림",
    [PushNotificationTopicEnum.NEW_PARTICIPATION]: "새로운 참가 알림",
    [PushNotificationTopicEnum.GAME_FEE_CHANGED]: "경기 참가비 변경 알림",
    [PushNotificationTopicEnum.HOST_REPORT_REPORTEE]: "호스트 신고 알림 to 피신고 사용자",
    [PushNotificationTopicEnum.HOST_REPORT_REPORTER]: "호스트 신고 알림 to 신고 사용자",
    [PushNotificationTopicEnum.HOST_REPORT_DISMISSED]: "호스트 신고 기각",
    [PushNotificationTopicEnum.HOST_USER_PENALIZED]: "호스트 신고 인정",
    [PushNotificationTopicEnum.GUEST_REPORT_REPORTEE]: "게스트 신고 알림 to 피신고 사용자",
    [PushNotificationTopicEnum.GUEST_REPORT_REPORTER]: "게스트 신고 알림 to 신고 사용자",
    [PushNotificationTopicEnum.GUEST_REPORT_DISMISSED]: "게스트 신고 기각",
    [PushNotificationTopicEnum.GUEST_USER_PENALIZED]: "게스트 신고 인정",
};
