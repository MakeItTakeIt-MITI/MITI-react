import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TeamListItem } from '../../../interfaces/team';

import eliteSvg from "../../../assets/images/level=elite.svg";
import division3Svg from "../../../assets/images/level=division 3.svg";
import division4Svg from "../../../assets/images/level=division 4.svg";
import division5Svg from "../../../assets/images/level=division 5.svg";
import division6Svg from "../../../assets/images/level=division 6.svg";
import rookieSvg from "../../../assets/images/level=rookie.svg";
import peopleSvg from "../../../assets/images/people.svg";

interface TeamCardProps {
  team: TeamListItem;
}

const LEVEL_SVGS: Record<string, string> = {
  rookie: rookieSvg,
  division6: division6Svg,
  division5: division5Svg,
  division4: division4Svg,
  division3: division3Svg,
  elite: eliteSvg,
};

export const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const navigate = useNavigate();
  const levelSvg = LEVEL_SVGS[team.level] || rookieSvg;
  const defaultImage = "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=60";

  return (
    <div
      onClick={() => navigate(`/teams/${team.id}`)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_10px_20px_rgba(249,115,22,0.15)] cursor-pointer"
    >
      
      {/* 썸네일 이미지 및 배지 */}
      <div className="relative w-full aspect-square overflow-hidden flex-shrink-0">
        <img
          src={team.image || defaultImage}
          alt={team.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <img
          src={levelSvg}
          alt={team.level}
          className="absolute right-2 top-2 md:right-3 md:top-3 h-5 md:h-6 object-contain"
          style={{ maxWidth: 'fit-content' }}
        />
      </div>

      {/* 카드 정보 영역 */}
      <div className="flex flex-1 flex-col p-3 md:p-5 min-w-0 justify-between">
        <div>
          <div className="flex items-center justify-between gap-1 mb-1">
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-orange-500 transition-colors duration-200 truncate">
              {team.name}
            </h3>
            <span className="text-[10px] md:text-xs text-[#ebebeb] shrink-0">
              {team.city_name}
            </span>
          </div>

          <p className="line-clamp-2 text-[10px] md:text-xs text-[#ebebeb] leading-relaxed pr-1">
            {team.introduction || "소개글이 등록되지 않은 팀입니다."}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 mt-2 pt-2 md:pt-3 text-[10px] md:text-xs text-[#ebebeb]">
          <span className="flex items-center gap-1">
            <img src={peopleSvg} alt="members" className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0 opacity-80" />
            멤버 <strong className="text-white">{team.num_of_members}명</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
