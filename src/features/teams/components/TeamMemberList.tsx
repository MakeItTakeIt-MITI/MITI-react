import React from "react";
import { TeamMemberListItem } from "../../../interfaces/team.ts";
import defaultProfileImg from "../../../assets/images/default_profile_image.svg";

interface TeamMemberListProps {
  members: TeamMemberListItem[];
  isLoading: boolean;
  noBackground?: boolean;
}

export const TeamMemberList: React.FC<TeamMemberListProps> = ({ members, isLoading, noBackground = false }) => {
  const getPositionStyle = (pos: string) => {
    const p = pos.toLowerCase();
    if (p.includes("guard") || p === "g") {
      return "bg-sky-500/10 text-sky-400 border-sky-500/20";
    }
    if (p.includes("forward") || p === "f") {
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    }
    if (p.includes("center") || p === "c") {
      return "bg-rose-500/10 text-rose-400 border-rose-500/20";
    }
    return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  const getPositionLabel = (pos: string) => {
    const p = pos.toLowerCase();
    if (p.includes("guard") || p === "g") return "가드 (G)";
    if (p.includes("forward") || p === "f") return "포워드 (F)";
    if (p.includes("center") || p === "c") return "센터 (C)";
    return pos || "미정";
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "owner":
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1 shadow-sm">
            👑 구단주
          </span>
        );
      case "manager":
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1 shadow-sm">
            🛡️ 매니저
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1">
            🏃 멤버
          </span>
        );
    }
  };

  const getMemberSpecs = (profile: any) => {
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

  if (isLoading) {
    return (
      <div className={`${
        noBackground
          ? "bg-transparent border-0 p-0 shadow-none"
          : "bg-[#1e1e1e] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 shadow-lg"
      } flex flex-col gap-6 animate-pulse`}>
        <div className="h-6 w-32 bg-[#2a2a2a] rounded"></div>
        {noBackground ? (
          <div className="flex flex-col gap-4 py-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] shrink-0" />
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="h-4 w-24 bg-[#2a2a2a] rounded" />
                  <div className="h-3 w-40 bg-[#2a2a2a] rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-28 bg-[#141414] rounded-xl border border-[#2A2A2A]" />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${
      noBackground
        ? "bg-transparent border-0 p-0 shadow-none hover:border-transparent"
        : "bg-[#1e1e1e] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:border-[#3a3a3a]"
    } flex flex-col gap-6`}>
      {/* Title */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          {!noBackground && <span>👥</span>} 팀 멤버
        </h2>
        <div className="w-8 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
      </div>

      {/* Grid of Members (PC) or Vertical List (Mobile) */}
      {members && members.length > 0 ? (
        noBackground ? (
          <div className="flex flex-col divide-y divide-white/5">
            {members.map((member) => {
              const user = member.user;
              const profile = user.player_profile || {};

              return (
                <div key={member.id} className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0 min-w-0">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 shrink-0 border border-white/5">
                    <img
                      src={user.profile_image_url || defaultProfileImg}
                      alt={user.nickname}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = defaultProfileImg;
                      }}
                    />
                  </div>

                  {/* Member Info */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white truncate">
                      {user.nickname} 님
                    </span>
                    {getMemberSpecs(profile) && (
                      <span className="text-xs text-gray-400 font-light mt-0.5 truncate">
                        {getMemberSpecs(profile)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {members.map((member) => {
              const user = member.user;
              const profile = user.player_profile || {};
              const pos = profile.position || "";

              return (
                <div
                  key={member.id}
                  className="flex flex-col items-center gap-2.5 p-4 bg-[#141414]/60 hover:bg-[#141414] rounded-xl border border-[#2A2A2A]/40 hover:border-[#3a3a3a]/80 transition-all duration-300 shadow-sm relative group overflow-hidden"
                >
                  {/* Crown Accent for Owner */}
                  {member.role === "owner" && (
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-tr-xl flex items-start justify-end p-1 pointer-events-none" />
                  )}

                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#2A2A2A] group-hover:border-purple-500/50 transition-colors duration-300">
                    {user.profile_image_url ? (
                      <img
                        src={user.profile_image_url}
                        alt={user.nickname}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#1e1e1e] text-2xl select-none">
                        👤
                      </div>
                    )}
                  </div>

                  {/* Name & Nickname */}
                  <div className="flex flex-col items-center gap-1 text-center w-full">
                    <span className="text-sm font-semibold text-white truncate max-w-full">
                      {user.nickname}
                    </span>
                    {user.name && (
                      <span className="text-[11px] text-gray-500">
                        ({user.name})
                      </span>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-col gap-1.5 items-center w-full mt-1">
                    {getRoleBadge(member.role)}
                    {pos && (
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getPositionStyle(
                          pos
                        )}`}
                      >
                        {getPositionLabel(pos)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : (
        <div className="text-center py-8 bg-[#141414]/50 border border-dashed border-[#2A2A2A] rounded-xl">
          <p className="text-gray-500 text-sm">등록된 팀원이 없습니다.</p>
        </div>
      )}
    </div>
  );
};
