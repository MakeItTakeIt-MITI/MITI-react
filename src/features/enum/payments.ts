export enum PaymentMethodEnum {
    EMPTY_PAY = "empty_pay",
    CARD = "card",
    KAKAO = "kakao",
    NPAY = "npay",
}

export enum PaymentResultStatusEnum {
    CREATED = "created",
    REQUESTED = "requested",
    APPROVED = "approved",
    FAILED = "failed",
    CANCELED = "canceled",
}

export enum ItemTypeEnum {
    PICKUP_GAME = "pickup_game",
}

export enum PaymentCancelationReasonEnum {
    SIMPLE_CANCELATION = "simple_cancelation",
    GAME_CANCELATION = "game_cancelation",
    CONVERTED_TO_FREE_GAME = "converted_to_free_game",
    REPORT_RESULT = "report_result",
}
