import React from "react";
import { useNavigate } from "react-router-dom";
import { TeamInvitationData } from "../../../interfaces/team";
import rookieIcon from "../../../assets/images/level=rookie.svg";
import division6Icon from "../../../assets/images/level=division 6.svg";
import division5Icon from "../../../assets/images/level=division 5.svg";
import division4Icon from "../../../assets/images/level=division 4.svg";
import division3Icon from "../../../assets/images/level=division 3.svg";
import eliteIcon from "../../../assets/images/level=elite.svg";
import clockBadgeRed from "../../../assets/images/clock_badge_red.svg";
import arrowLeft from "../../../assets/arrow_left.svg";
import { PLAYSTORE, APPLE_STORE } from "../../../utils/app";

interface TeamInvitationPCProps {
  data: TeamInvitationData;
}

export const TeamInvitationPC: React.FC<TeamInvitationPCProps> = ({
  data,
}) => {
  const navigate = useNavigate();
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

  // 대표 이미지 (없을 시 기본 배경 처리)
  const mainImage = team.images && team.images.length > 0 ? team.images[0] : null;

  return (
    <div className="w-full min-h-screen bg-[#0D1515] text-white flex flex-col items-center py-16 px-6">
      <div className="w-full max-w-[960px] flex flex-col gap-6">
        {/* 뒤로가기 버튼 */}
        <div className="flex items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors"
          >
            <img src={arrowLeft} alt="뒤로가기" className="w-5 h-5" />
            뒤로가기
          </button>
        </div>

        {/* 메인 2열 컨테이너 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-3xl p-8 backdrop-blur-md">
          {/* 좌측 영역: 비주얼 배너 */}
          <div className="relative rounded-2xl overflow-hidden min-h-[360px] bg-[#1a2323] flex items-center justify-center border border-[rgba(255,255,255,0.04)]">
            {mainImage ? (
              <>
                <img
                  src={mainImage}
                  alt={team.name}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* 하단으로 갈수록 어둡게 만드는 확실한 그라데이션 오버레이 (인라인 Style 적용) */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%)"
                  }}
                />
              </>
            ) : (
              <div className="flex flex-col items-center gap-3 text-center p-6">
                <div className="w-20 h-20 rounded-full bg-[#23E2E2]/10 border border-[#23E2E2]/30 flex items-center justify-center text-4xl">
                  🏀
                </div>
                <span className="text-sm text-[#A3A3A3]">MITI BASKETBALL TEAM</span>
              </div>
            )}
            {/* 이미지 위에 팀명 등을 살짝 올리는 시각적 효과 */}
            {mainImage && (
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="text-xs uppercase tracking-widest text-[#23E2E2] font-bold">
                  Team Invitation
                </span>
                <h2 className="text-2xl font-bold mt-1 text-white drop-shadow-md">
                  {team.name}
                </h2>
              </div>
            )}
          </div>

          {/* 우측 영역: 상세 정보 및 액션 */}
          <div className="flex flex-col justify-between py-2">
            <div className="flex flex-col gap-6">
              {/* 초대한 사람 정보 */}
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

              {/* 팀 헤더 정보 */}
              <div className="flex flex-col gap-1">
                <div className="self-start">
                  <img
                    src={getLevelIcon(team.level)}
                    alt={team.level.toUpperCase()}
                    className="h-6 object-contain"
                  />
                </div>
                <h1 className="text-[32px] font-extrabold tracking-tight mt-1 leading-tight text-white">
                  {team.name}
                </h1>
                <span className="text-sm text-[#A3A3A3]">
                  {team.city.name}
                </span>
              </div>

              {/* 팀 소개 */}
              <div className="flex flex-col gap-2 border-t border-[rgba(255,255,255,0.06)] pt-6">
                <h2 className="text-base font-bold text-white">팀 소개</h2>
                <p className="text-sm leading-relaxed text-[#D4D4D4] whitespace-pre-wrap max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                  {team.introduction || "등록된 팀 소개가 없습니다."}
                </p>
              </div>

              {/* 유효 기간 박스 */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] mt-4">
                <img src={clockBadgeRed} alt="시계" className="w-[44px] h-[44px]" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#A3A3A3] font-medium">유효 기간</span>
                  <span className="text-sm text-white font-bold mt-0.5">
                    {formatExpirationDate(expires_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* 수락 버튼 */}
            <div className="mt-8">
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
        </div>
      </div>
    </div>
  );
};
