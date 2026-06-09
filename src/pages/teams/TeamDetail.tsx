import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTeamDetail } from "../../features/teams/hooks/query/useTeamDetail.ts";
import { useTeamMembers } from "../../features/teams/hooks/query/useTeamMembers.ts";
import { TeamDetailPC } from "../../features/teams/components/TeamDetailPC.tsx";
import { TeamDetailMobile } from "../../features/teams/components/TeamDetailMobile.tsx";
import { TeamDetailSkeleton } from "../../features/teams/components/TeamDetailSkeleton.tsx";

const TeamDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const teamId = Number(id);

  const { data: team, isLoading: isDetailLoading, error: detailError } = useTeamDetail(teamId);
  const { data: membersData, isLoading: isMembersLoading } = useTeamMembers(teamId);

  if (isDetailLoading) {
    return (
      <main
        style={{ backgroundColor: "#141414" }}
        className="mx-auto min-h-screen w-full flex flex-col items-center gap-6 px-4 pb-16 pt-6"
      >
        <TeamDetailSkeleton />
      </main>
    );
  }

  if (detailError || !team) {
    return (
      <main
        style={{ backgroundColor: "#141414" }}
        className="mx-auto min-h-screen w-full flex flex-col items-center justify-center gap-4 px-4 text-center"
      >
        <span className="text-6xl">⚠️</span>
        <h1 className="text-xl font-bold text-white">팀 정보를 찾을 수 없습니다.</h1>
        <p className="text-sm text-gray-400">잘못된 접근이거나 삭제된 팀 정보일 수 있습니다.</p>
        <button
          onClick={() => navigate("/teams")}
          className="mt-4 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-all shadow-md"
        >
          목록으로 돌아가기
        </button>
      </main>
    );
  }

  const members = membersData?.members || [];

  return (
    <main
      style={{ backgroundColor: "#141414", fontFamily: "Pretendard, -apple-system, sans-serif" }}
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white selection:bg-[#00E5FF]/30"
    >
      {/* PC version */}
      <div className="hidden md:block w-full max-w-[960px] mx-auto">
        <TeamDetailPC
          team={team}
          members={members}
          isMembersLoading={isMembersLoading}
        />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden w-full">
        <TeamDetailMobile
          team={team}
          members={members}
          isMembersLoading={isMembersLoading}
        />
      </div>
    </main>
  );
};

export default TeamDetail;

