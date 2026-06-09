import React from "react";
import { TeamDetailData } from "../../../interfaces/team.ts";

interface TeamIntroductionProps {
  team: TeamDetailData;
  noBackground?: boolean;
  hideEmoji?: boolean;
  hideStats?: boolean;
}

export const TeamIntroduction: React.FC<TeamIntroductionProps> = ({
  team,
  noBackground = false,
  hideEmoji = false,
  hideStats = false,
}) => {
  return (
    <div className={`${
      noBackground
        ? "bg-transparent border-0 p-0 shadow-none hover:border-transparent"
        : "bg-[#1e1e1e] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:border-[#3a3a3a]"
    } flex flex-col gap-6`}>
      {/* Title */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          {!hideEmoji && <span>📝</span>} 팀 소개
        </h2>
        <div className="w-8 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
      </div>

      {/* Introduction text */}
      <div className="text-sm sm:text-base text-[#cccccc] leading-relaxed whitespace-pre-line font-light">
        {team.introduction ? (
          team.introduction
        ) : (
          <span className="text-gray-500 italic">등록된 팀 소개글이 없습니다.</span>
        )}
      </div>

      {/* Additional Stats Card */}
      {!hideStats && (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2A2A2A]/50">
          <div className="bg-[#141414]/50 p-4 rounded-xl border border-[#2A2A2A]/30">
            <p className="text-xs text-gray-400 mb-1">팀 상태</p>
            <span className="text-sm font-semibold text-white flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${team.status === 'active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              {team.status === 'active' ? '활동 중' : team.status}
            </span>
          </div>
          <div className="bg-[#141414]/50 p-4 rounded-xl border border-[#2A2A2A]/30">
            <p className="text-xs text-gray-400 mb-1">활동 지역</p>
            <span className="text-sm font-semibold text-white">
              {team.city.name}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
