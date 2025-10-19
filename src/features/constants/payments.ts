import {
    PaymentMethodEnum,
    PaymentResultStatusEnum,
    ItemTypeEnum,
    PaymentCancelationReasonEnum,
} from "../enum/payments.ts";

export const PaymentMethodLabel: Record<PaymentMethodEnum, string> = {
    [PaymentMethodEnum.EMPTY_PAY]: "0원 결제 전용 결제수단",
    [PaymentMethodEnum.CARD]: "카드",
    [PaymentMethodEnum.KAKAO]: "카카오페이",
    [PaymentMethodEnum.NPAY]: "네이버 페이",
};

export const PaymentResultStatusLabel: Record<PaymentResultStatusEnum, string> = {
    [PaymentResultStatusEnum.CREATED]: "요청 생성",
    [PaymentResultStatusEnum.REQUESTED]: "PG 결제 요청 완료",
    [PaymentResultStatusEnum.APPROVED]: "PG 결제 승인 완료",
    [PaymentResultStatusEnum.FAILED]: "PG 결제 실패",
    [PaymentResultStatusEnum.CANCELED]: "PG 결제 취소",
};

export const ItemTypeLabel: Record<ItemTypeEnum, string> = {
    [ItemTypeEnum.PICKUP_GAME]: "픽업게임",
};

export const PaymentCancelationReasonLabel: Record<PaymentCancelationReasonEnum, string> = {
    [PaymentCancelationReasonEnum.SIMPLE_CANCELATION]: "단순 결제 취소",
    [PaymentCancelationReasonEnum.GAME_CANCELATION]: "경기 취소",
    [PaymentCancelationReasonEnum.CONVERTED_TO_FREE_GAME]: "무료 경기 전환",
    [PaymentCancelationReasonEnum.REPORT_RESULT]: "신고 처리 결과",
};
