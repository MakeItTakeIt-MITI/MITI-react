import React from "react";
import { TeamInvitationData } from "../../../interfaces/team";
import rookieIcon from "../../../assets/images/level=rookie.svg";
import division6Icon from "../../../assets/images/level=division 6.svg";
import division5Icon from "../../../assets/images/level=division 5.svg";
import division4Icon from "../../../assets/images/level=division 4.svg";
import division3Icon from "../../../assets/images/level=division 3.svg";
import eliteIcon from "../../../assets/images/level=elite.svg";
import clockBadgeRed from "../../../assets/images/clock_badge_red.svg";
import { PLAYSTORE, APPLE_STORE } from "../../../utils/app";


interface TeamInvitationMobileProps {
  data: TeamInvitationData;
}

export const TeamInvitationMobile: React.FC<TeamInvitationMobileProps> = ({
  data,
}) => {
  const { team, inviter, expires_at, has_membership, left_uses, is_active } = data;

  const userAgent = navigator.userAgent;
  const isAppleDevice = /iPhone|iPad|iPod|iOS|Macintosh|Mac/i.test(userAgent);
  const storeUrl = isAppleDevice ? APPLE_STORE : PLAYSTORE;

  // 레벨 아이콘 매핑
  const getLevelIcon = (level: string) => {
    switch (level.toLowerCase()) {
      case "rookie":
        return rookieIcon;
      case "division6":
        return division6Icon;
      case "division5":
        return division5Icon;
      case "division4":
        return division4Icon;
      case "division3":
        return division3Icon;
      case "elite":
        return eliteIcon;
      default:
        return rookieIcon;
    }
  };

  // 날짜 포맷팅 함수 (YYYY년 MM월 DD일 hh:mm)
  const formatExpirationDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");
      const hh = String(date.getHours()).padStart(2, "0");
      const min = String(date.getMinutes()).padStart(2, "0");
      return `${yyyy}년 ${mm}월 ${dd}일 ${hh}:${min}`;
    } catch (e) {
      return dateStr;
    }
  };

  // 가입 상태 및 초대장 만료 체크
  const isExpired = new Date() > new Date(expires_at);
  const isSoldOut = left_uses !== null && left_uses <= 0;
  const canAccept = !has_membership && is_active && !isExpired && !isSoldOut;

  // 버튼 텍스트 설정
  let buttonText = "수락하기";
  if (has_membership) {
    buttonText = "이미 가입된 팀입니다";
  } else if (!is_active || isExpired) {
    buttonText = "만료된 초대장입니다";
  } else if (isSoldOut) {
    buttonText = "초대 인원이 마감되었습니다";
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-between pb-8 pt-4 px-4 bg-[#0D1515] text-white">
      {/* 상단 네비게이션 및 헤더 */}
      <div className="flex flex-col gap-6">


        {/* 초대자 프로필 */}
        <div className="flex items-center gap-2">
          {inviter.profile_image_url ? (
            <img
              src={inviter.profile_image_url}
              alt={inviter.nickname}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs">
              {inviter.nickname.substring(0, 1)}
            </div>
          )}
          <span className="text-sm text-[#A3A3A3]">
            invited by <strong className="text-white font-semibold">{inviter.nickname}</strong> 님
          </span>
        </div>

        {/* 팀 기본 정보 */}
        <div className="flex flex-col gap-1 mt-2">
          <div className="self-start">
            <img
              src={getLevelIcon(team.level)}
              alt={team.level.toUpperCase()}
              className="h-6 object-contain"
            />
          </div>
          <h1 className="text-[36px] font-extrabold tracking-tight mt-1 leading-tight">
            {team.name}
          </h1>
          <span className="text-sm text-[#A3A3A3]">
            {team.city.name}
          </span>
        </div>

        {/* 팀 소개 */}
        <div className="flex flex-col gap-2 mt-6">
          <h2 className="text-lg font-bold text-white">팀 소개</h2>
          <p className="text-sm leading-relaxed text-[#D4D4D4] whitespace-pre-wrap">
            {team.introduction || "등록된 팀 소개가 없습니다."}
          </p>
        </div>

        {/* 유효 기간 박스 */}
        <div className="mt-8 flex items-center gap-3 p-4 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]">
          <img src={clockBadgeRed} alt="시계" className="w-[48px] h-[48px]" />
          <div className="flex flex-col">
            <span className="text-xs text-[#A3A3A3] font-medium">유효 기간</span>
            <span className="text-sm text-white font-bold mt-0.5">
              {formatExpirationDate(expires_at)}
            </span>
          </div>
        </div>
      </div>

      {/* 수락 버튼 */}
      <div className="mt-10">
        <a
          href={canAccept ? storeUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full h-14 rounded-xl font-bold text-base transition-all flex items-center justify-center ${
            canAccept
              ? "bg-[#23E2E2] text-black hover:bg-[#1CD8D8] active:scale-[0.98]"
              : "bg-[#404040] text-[#737373] cursor-not-allowed pointer-events-none"
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
