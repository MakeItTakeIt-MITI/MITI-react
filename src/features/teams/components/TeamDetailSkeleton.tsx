import React from "react";

export const TeamDetailSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-6 animate-pulse">
      {/* Hero Skeleton */}
      <div className="w-full h-[320px] bg-[#1e1e1e] rounded-2xl relative overflow-hidden border border-[#2A2A2A]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 to-transparent flex flex-col justify-end p-6 gap-3">
          <div className="h-6 w-32 bg-[#2a2a2a] rounded"></div>
          <div className="h-10 w-64 bg-[#2a2a2a] rounded"></div>
          <div className="flex gap-2">
            <div className="h-5 w-20 bg-[#2a2a2a] rounded-full"></div>
            <div className="h-5 w-16 bg-[#2a2a2a] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column (Introduction) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-[#1e1e1e] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col gap-4">
            <div className="h-6 w-24 bg-[#2a2a2a] rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-[#2a2a2a] rounded"></div>
              <div className="h-4 w-[90%] bg-[#2a2a2a] rounded"></div>
              <div className="h-4 w-[95%] bg-[#2a2a2a] rounded"></div>
              <div className="h-4 w-[60%] bg-[#2a2a2a] rounded"></div>
            </div>
          </div>
        </div>

        {/* Right column (Summary/Info) */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#1e1e1e] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col gap-4">
            <div className="h-6 w-24 bg-[#2a2a2a] rounded"></div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 w-12 bg-[#2a2a2a] rounded"></div>
                <div className="h-4 w-16 bg-[#2a2a2a] rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-12 bg-[#2a2a2a] rounded"></div>
                <div className="h-4 w-16 bg-[#2a2a2a] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Members Skeleton */}
      <div className="bg-[#1e1e1e] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col gap-4">
        <div className="h-6 w-32 bg-[#2a2a2a] rounded"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 bg-[#141414] rounded-xl border border-[#2A2A2A]/50">
              <div className="w-16 h-16 rounded-full bg-[#2a2a2a]"></div>
              <div className="h-4 w-16 bg-[#2a2a2a] rounded"></div>
              <div className="h-3 w-12 bg-[#2a2a2a] rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
