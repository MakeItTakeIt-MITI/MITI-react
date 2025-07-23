import { AccountStatusEnum, AccountTypeEnum, BankEnum, BankTransferStatusEnum, SettlementStatusEnum, SettlementTypeEnum } from "../enum/bank_accounts.ts";


export const AccountStatusLabel: Record<AccountStatusEnum, string> = {
    [AccountStatusEnum.ACTIVE]: "활성화",
    [AccountStatusEnum.DISABLED]: "비활성화",
};

export const AccountTypeLabel: Record<AccountTypeEnum, string> = {
    [AccountTypeEnum.PERSONAL]: "개인 잔고",
};

export const BankLabel: Record<BankEnum, string> = {
    [BankEnum.KOOKMIN]: "KB국민",
    [BankEnum.SHINHAN]: "신한",
    [BankEnum.WOORI]: "우리",
    [BankEnum.SHINHYEOP]: "신협",
    [BankEnum.IBK]: "IBK기업",
    [BankEnum.SAEMAUL]: "새마을금고",
    [BankEnum.NONGHYEOP]: "NH농협",
    [BankEnum.SC]: "SC제일",
    [BankEnum.KYONGNAMBANK]: "경남",
    [BankEnum.DAEGUBANK]: "대구",
    [BankEnum.GWANGJUBANK]: "광주",
    [BankEnum.BUSANBANK]: "부산",
    [BankEnum.CITI]: "씨티",
    [BankEnum.SUHYEOP]: "수협",
    [BankEnum.KDBBANK]: "KDB산업",
    [BankEnum.JEONBUKBANK]: "전북",
    [BankEnum.JEJUBANK]: "제주",
    [BankEnum.POST]: "우체국",
    [BankEnum.HANA]: "하나",
    [BankEnum.KBANK]: "케이뱅크",
    [BankEnum.TOSSBANK]: "토스뱅크",
    [BankEnum.KAKAOBANK]: "카카오뱅크",
    [BankEnum.SANLIM]: "산림조합",
    [BankEnum.KOREA_INVESTMENT_AND_SECURITIES]: "한국투자증권",
    [BankEnum.KB_SECURITIES]: "KB증권",
    [BankEnum.NH_INVESTMENT_AND_SECURITIES]: "NH투자증권",
};

export const SettlementTypeLabel: Record<SettlementTypeEnum, string> = {
    [SettlementTypeEnum.HOSTING]: "경기 운영 정산금",
};

export const SettlementStatusLabel: Record<SettlementStatusEnum, string> = {
    [SettlementStatusEnum.WAITING]: "대기중",
    [SettlementStatusEnum.PARTIALLY_COMPLETED]: "부분 정산",
    [SettlementStatusEnum.COMPLETED]: "정산완료",
    [SettlementStatusEnum.SUSPENDED]: "정산정지",
    [SettlementStatusEnum.CANCELED]: "정산취소",
};

export const BankTransferStatusLabel: Record<BankTransferStatusEnum, string> = {
    [BankTransferStatusEnum.COMPLETED]: "이체 완료",
    [BankTransferStatusEnum.WAITING]: "대기중",
    [BankTransferStatusEnum.DECLINED]: "이체거절",
};
