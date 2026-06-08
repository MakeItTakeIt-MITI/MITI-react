import React from 'react';

export const TeamCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1a] animate-pulse">
      {/* 썸네일 스켈레톤 */}
      <div className="w-full aspect-square bg-neutral-800 flex-shrink-0" />

      {/* 정보 영역 스켈레톤 */}
      <div className="flex flex-1 flex-col p-3 md:p-5 justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="h-4 w-24 md:w-32 bg-neutral-800 rounded" />
            <div className="h-3 w-12 bg-neutral-800 rounded" />
          </div>
          <div className="space-y-1.5 mt-2">
            <div className="h-3 w-full bg-neutral-800 rounded" />
            <div className="h-3 w-5/6 bg-neutral-800 rounded" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 pt-2 md:pt-3">
          <div className="h-3 w-16 bg-neutral-800 rounded" />
          <div className="h-3 w-20 bg-neutral-800 rounded" />
        </div>
      </div>
    </div>
  );
};
