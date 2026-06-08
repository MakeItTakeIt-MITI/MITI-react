import React from 'react';
import { TeamListItem } from '../../../interfaces/team';
import { TeamCard } from './TeamCard';
import { TeamCardSkeleton } from './TeamCardSkeleton';

interface TeamListContainerProps {
  teams: TeamListItem[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  inViewRef: (node?: Element | null) => void;
}

export const TeamListContainer: React.FC<TeamListContainerProps> = ({
  teams,
  isLoading,
  isFetchingNextPage,
  inViewRef,
}) => {
  if (isLoading && teams.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {Array.from({ length: 6 }).map((_, idx) => (
          <TeamCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (teams.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-2xl bg-[#1a1a1a] border border-white/5 w-full">
        <span className="text-4xl md:text-5xl mb-4">🏀</span>
        <h3 className="text-base md:text-lg font-bold text-white mb-2">등록된 팀이 없습니다</h3>
        <p className="text-xs md:text-sm text-neutral-400 mb-6 max-w-md">
          조건에 부합하는 팀이 조회되지 않았습니다.<br />
          아래 버튼을 눌러 먼저 새로운 팀을 생성해 보세요!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 shadow-[0_4px_14px_rgba(249,115,22,0.4)]">
          새 팀 만들기
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* 팀 리스트 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>

      {/* 무한 스크롤 트리거 요소 및 로딩 스피너 */}
      <div ref={inViewRef} className="w-full py-6 flex justify-center min-h-[50px]">
        {isFetchingNextPage && (
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
            불러오는 중...
          </div>
        )}
      </div>
    </div>
  );
};
