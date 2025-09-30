const MapGameListCardSkeleton = () => {
  return (
    <li className="cursor-pointer w-full sm:h-[128px] md:h-[136px] flex flex-col gap-2.5 justify-center md:p-3 rounded-lg bg-[#181818] animate-pulse">
      <div className="flex flex-col gap-2.5">
        {/* Status & Title */}
        <div className="space-y-2">
          <div className="w-16 h-4 bg-[#222] rounded" />
          <div className="w-3/4 h-5 bg-[#222] rounded" />
        </div>
        {/* Address, Time, Participants, Fee */}
        <div className="space-y-1">
          <div className="w-1/2 h-4 bg-[#222] rounded" />
          <div className="w-1/3 h-4 bg-[#222] rounded" />
          <div className="flex items-center justify-between">
            <div className="w-1/4 h-4 bg-[#222] rounded" />
            <div className="w-10 h-4 bg-[#222] rounded" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default MapGameListCardSkeleton;
