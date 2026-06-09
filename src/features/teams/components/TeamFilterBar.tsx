import React from 'react';

interface TeamFilterBarProps {
  totalCount: number;
  isGeoSorted: boolean;
  onToggleGeoSort: () => void;
}

export const TeamFilterBar: React.FC<TeamFilterBarProps> = ({
  totalCount,
  isGeoSorted,
  onToggleGeoSort,
}) => {
  return (
    <div className="w-full flex items-center justify-between bg-[#1a1a1a] px-4 py-3 md:px-6 md:py-4 rounded-xl border border-white/5">
      {/* 검색 결과 개수 */}
      <div className="text-xs md:text-sm text-neutral-400">
        총 <strong className="text-orange-500 font-bold">{totalCount}개</strong>의 팀
      </div>

      {/* 정렬 토글 */}
      <button
        onClick={onToggleGeoSort}
        className={`flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
          isGeoSorted
            ? 'bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]'
            : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
        }`}
      >
        <span>📍</span>
        <span>{isGeoSorted ? '내 주변 순 정렬' : '전체 도시 정렬'}</span>
      </button>
    </div>
  );
};
