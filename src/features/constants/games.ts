import { GameStatusEnum, ParticipationStatusEnum } from "../enum/games.ts";

export const GameStatusLabel: Record<GameStatusEnum, string> = {
    [GameStatusEnum.OPEN]: "모집중",
    [GameStatusEnum.CLOSED]: "모집완료(마감)",
    [GameStatusEnum.CANCELED]: "경기취소",
    [GameStatusEnum.COMPLETED]: "경기완료",
};

export const ParticipationStatusLabel: Record<ParticipationStatusEnum, string> = {
    [ParticipationStatusEnum.REQUESTED]: "참여 요청 완료",
    [ParticipationStatusEnum.CANCELED]: "경기 취소로 인한 참여 취소",
    [ParticipationStatusEnum.WITHDRAWN]: "참가자 변심으로 인한 참여 취소",
    [ParticipationStatusEnum.CONFIRMED]: "참여 승인 완료",
};