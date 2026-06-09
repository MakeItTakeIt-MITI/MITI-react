import React from "react";
import { useNavigate } from "react-router-dom";
import { TeamDetailData, TeamMemberListItem } from "../../../interfaces/team.ts";
import { TeamDetailHero } from "./TeamDetailHero.tsx";
import { TeamIntroduction } from "./TeamIntroduction.tsx";
import { TeamMemberList } from "./TeamMemberList.tsx";
import { JoinTeamBottomSheet } from "./JoinTeamBottomSheet.tsx";
import { FiArrowLeft } from "react-icons/fi";

import eliteSvg from "../../../assets/images/level=elite.svg";
import division3Svg from "../../../assets/images/level=division 3.svg";
import division4Svg from "../../../assets/images/level=division 4.svg";
import division5Svg from "../../../assets/images/level=division 5.svg";
import division6Svg from "../../../assets/images/level=division 6.svg";
import rookieSvg from "../../../assets/images/level=rookie.svg";

const LEVEL_SVGS: Record<string, string> = {
  rookie: rookieSvg,
  division6: division6Svg,
  division5: division5Svg,
  division4: division4Svg,
  division3: division3Svg,
  elite: eliteSvg,
};

interface TeamDetailMobileProps {
  team: TeamDetailData;
  members: TeamMemberListItem[];
  isMembersLoading: boolean;
}

export const TeamDetailMobile: React.FC<TeamDetailMobileProps> = ({
  team,
  members,
  isMembersLoading,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col bg-[#141414] relative pb-24">
      {/* Mobile Back Button Overlay */}
      <div className="absolute top-5 left-4 z-20">
        <button
          onClick={() => navigate("/teams")}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-md border border-white/10 shadow-lg"
          aria-label="뒤로 가기"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* 1. Team Image Area (Slider only, with bottom gradient transition) */}
      <div className="w-full relative">
        <TeamDetailHero team={team} hideTextOverlay={true} />
      </div>

      {/* 2. Team Info Area (Positioned relative overlaying the bottom gradient) */}
      <div className="w-full px-5 pb-6 -mt-10 relative z-20 flex flex-col gap-3">
        {/* Badges Row */}
        <div className="flex flex-wrap gap-2 items-center">
          {/* Level SVG Badge */}
          <img
            src={LEVEL_SVGS[team.level] || rookieSvg}
            alt={team.level}
            className="h-5.5 object-contain"
          />

          {/* Region Badge */}
          <span className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full border border-white/10 text-white bg-white/5 backdrop-blur-md shadow-sm flex items-center gap-1.5">
            📍 {team.city.name.toUpperCase()}
          </span>
        </div>

        {/* Team Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight pr-4 drop-shadow-md">
          {team.name}
        </h1>
      </div>

      {/* 3. Stacked Details Content Sections */}
      <div className="w-full px-4 flex flex-col gap-6">
        {/* Team Introduction Card */}
        <TeamIntroduction team={team} noBackground={true} hideEmoji={true} hideStats={true} />

        {/* Team Members Grid Card Section */}
        <TeamMemberList members={members} isLoading={isMembersLoading} noBackground={true} />
      </div>

      {/* 4. Fixed Bottom Sheet */}
      <JoinTeamBottomSheet teamName={team.name} />
    </div>
  );
};
