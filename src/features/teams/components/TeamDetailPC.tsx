import React from "react";
import { TeamDetailData, TeamMemberListItem, PlayerProfile } from "../../../interfaces/team.ts";
import { TeamDetailHero } from "./TeamDetailHero.tsx";
import { TeamIntroduction } from "./TeamIntroduction.tsx";
import defaultProfileImg from "../../../assets/images/default_profile_image.svg";

interface TeamDetailPCProps {
  team: TeamDetailData;
  members: TeamMemberListItem[];
  isMembersLoading: boolean;
}

export const TeamDetailPC: React.FC<TeamDetailPCProps> = ({
  team,
  members,
  isMembersLoading,
}) => {
  const getMemberSpecs = (profile: Partial<PlayerProfile>) => {
    const specs: string[] = [];

    if (profile.gender) {
      if (profile.gender === "male") specs.push("남성");
      else if (profile.gender === "female") specs.push("여성");
      else if (profile.gender === "mixed") specs.push("혼성");
      else specs.push(profile.gender);
    }

    if (profile.height) {
      specs.push(`${profile.height}cm`);
    }

    if (profile.weight) {
      specs.push(`${profile.weight}kg`);
    }

    if (profile.position) {
      const p = profile.position.toLowerCase();
      if (p.includes("guard") || p === "g") specs.push("가드 (G)");
      else if (p.includes("forward") || p === "f") specs.push("포워드 (F)");
      else if (p.includes("center") || p === "c") specs.push("센터 (C)");
      else specs.push(profile.position);
    }

    return specs.join(" · ");
  };

  return (
    <div className="w-full max-w-[960px] flex flex-col bg-[#141414] relative py-8 px-4 md:px-0">
      {/* Hero section */}
      <div className="w-full mb-8">
        <TeamDetailHero team={team} />
      </div>

      {/* Main Content Grid */}
      <div className="w-full grid grid-cols-10 gap-8">
        {/* Left Side: Introduction */}
        <div className="col-span-7 flex flex-col gap-6">
          <TeamIntroduction team={team} noBackground={true} hideEmoji={true} hideStats={true} />
        </div>

        {/* Right Side: Members list */}
        <div className="col-span-3">
          <div className="bg-transparent border-0 p-0 flex flex-col gap-5 shadow-none">
            {/* Sidebar Title */}
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                팀멤버 ({members.length}명)
              </h2>
              <div className="w-8 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
            </div>

            {/* Members List */}
            {isMembersLoading ? (
              <div className="flex flex-col gap-4 py-2 animate-pulse">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-gray-800 shrink-0" />
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="h-3.5 w-16 bg-gray-800 rounded" />
                      <div className="h-3 w-28 bg-gray-800 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            ) : members.length > 0 ? (
              <div className="flex flex-col gap-3 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
                {members.map((member) => {
                  const user = member.user;
                  const profile = user.player_profile || {};

                  return (
                    <div
                      key={member.id}
                      className="flex items-center justify-between gap-3 py-1 min-w-0 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 shrink-0 border border-white/5 group-hover:border-purple-500/40 transition-colors duration-300">
                          <img
                            src={user.profile_image_url || defaultProfileImg}
                            alt={user.nickname}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = defaultProfileImg;
                            }}
                          />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-xs font-bold text-white truncate">
                            {user.nickname}
                          </span>
                          <span className="text-[10px] text-gray-400 truncate">
                            {getMemberSpecs(profile)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 bg-[#141414]/50 border border-dashed border-[#2A2A2A] rounded-xl">
                <p className="text-gray-500 text-xs">등록된 팀원이 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
