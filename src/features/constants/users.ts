import { PlayerPositionEnum, PlayerRoleEnum, SignupMethodEnum } from "../enum/users.ts";




export const PlayerlPositionLabel: Record<PlayerPositionEnum, string> = {
    [PlayerPositionEnum.PG]: "포인트 가드",
    [PlayerPositionEnum.SG]: "슈팅 가드",
    [PlayerPositionEnum.SF]: "스몰 포워드",
    [PlayerPositionEnum.PF]: "파워 포워드",
    [PlayerPositionEnum.C]: "센터",
};

export const PlayerRoleLabel: Record<PlayerRoleEnum, string> = {
    [PlayerRoleEnum.SWINGMAN]: "스윙맨",
    [PlayerRoleEnum.BALL_HANDLER]: "볼핸들러",
    [PlayerRoleEnum.BIGMAN]: "빅맨",
    [PlayerRoleEnum.STRETCH_BIGMAN]: "스트레치빅맨",
    [PlayerRoleEnum.CONTROL_TOWER]: "컨트롤타워",
    [PlayerRoleEnum.POINT_FORWARD]: "포인트포워드",
    [PlayerRoleEnum.ALLROUNDER]: "올라운더",
    [PlayerRoleEnum.TWEENER]: "트위너",
    [PlayerRoleEnum.DUAL_GUARD]: "듀얼가드",
    [PlayerRoleEnum.SLASHER]: "슬래셔",
    [PlayerRoleEnum.SHOOTER]: "슈터",
    [PlayerRoleEnum.THREE_AND_D]: "3&D",
    [PlayerRoleEnum.BLUE_WORKER]: "블루워커",
};

export const SignupMethodLabel: Record<SignupMethodEnum, string> = {
    [SignupMethodEnum.EMAIL]: "이메일",
    [SignupMethodEnum.KAKAO]: "카카오",
    [SignupMethodEnum.APPLE]: "애플ID",
};