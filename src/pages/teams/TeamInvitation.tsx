import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTeamInvitationDetail } from "../../features/teams/hooks/query/useTeamInvitation.ts";
import { TeamInvitationPC } from "../../features/teams/components/TeamInvitationPC.tsx";
import { TeamInvitationMobile } from "../../features/teams/components/TeamInvitationMobile.tsx";

const TeamInvitation: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useTeamInvitationDetail(token || "");

  // 로딩 상태 (스켈레톤 대용 심플 인디케이터)
  if (isLoading) {
    return (
      <main className="w-full min-h-screen bg-[#0D1515] flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#23E2E2] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm text-[#A3A3A3]">초대장 정보를 불러오는 중...</span>
        </div>
      </main>
    );
  }

  // 에러 발생 및 잘못된 접근
  if (error || !data) {
    return (
      <main className="w-full min-h-screen bg-[#0D1515] flex flex-col items-center justify-center text-white px-4 text-center">
        <span className="text-6xl mb-4">⚠️</span>
        <h1 className="text-xl font-bold text-white mb-2">유효하지 않은 초대장입니다.</h1>
        <p className="text-sm text-[#A3A3A3] max-w-sm">
          만료되었거나 잘못된 경로입니다. 초대를 요청한 팀의 관리자에게 다시 문의해주세요.
        </p>
        <button
          onClick={() => navigate("/home")}
          className="mt-6 px-6 py-3 rounded-xl bg-[#23E2E2] text-black font-bold text-sm transition-transform active:scale-[0.98]"
        >
          메인으로 이동
        </button>
      </main>
    );
  }

  return (
    <main
      style={{ fontFamily: "Pretendard, -apple-system, sans-serif" }}
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white selection:bg-[#23E2E2]/30 bg-[#0D1515]"
    >
      {/* PC 버전 (md 이상) */}
      <div className="hidden md:block w-full">
        <TeamInvitationPC
          data={data}
        />
      </div>

      {/* 모바일 버전 (md 미만) */}
      <div className="block md:hidden w-full">
        <TeamInvitationMobile
          data={data}
        />
      </div>
    </main>
  );
};

export default TeamInvitation;
