const SkeletonCard = () => {
  return (
    <li className="w-full p-1 animate-pulse">
      <div className="flex items-center gap-5">
        {/* DATE Skeleton */}
        <div className="w-[34px] h-[48px] flex flex-col items-center justify-center">
          <div className="w-6 h-3 bg-[#222] rounded mb-1" />
          <div className="w-8 h-5 bg-[#222] rounded" />
        </div>
        {/* GAME INFO Skeleton */}
        <div className="w-full flex flex-col gap-2.5">
          {/* Status / Title */}
          <div className="space-y-2">
            <div className="w-16 h-4 bg-[#222] rounded" />
            <div className="w-3/4 h-5 bg-[#222] rounded" />
          </div>
          {/* Court Info / time / participants */}
          <div className="space-y-1">
            <div className="w-1/2 h-4 bg-[#222] rounded" />
            <div className="w-1/3 h-4 bg-[#222] rounded" />
            <div className="flex justify-between items-center">
              <div className="w-1/4 h-4 bg-[#222] rounded" />
              <div className="w-10 h-4 bg-[#222] rounded" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SkeletonCard;
