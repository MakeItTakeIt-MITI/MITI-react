const CardSkeleton = () => {
  return (
    <li className="w-full h-[136px] flex flex-col gap-2.5 justify-center p-3 rounded-lg text-white animate-pulse bg-[#1a1a1a]">
      <div className="flex flex-col gap-2.5">
        <div className="space-y-2">
          {/* GameStatus placeholder */}
          <div className="w-16 h-4 rounded bg-gray-700" />
          {/* GameTitle placeholder */}
          <div className="w-3/4 h-5 rounded bg-gray-600" />
        </div>

        <div className="space-y-1">
          {/* GameAddress placeholder */}
          <div className="w-2/3 h-4 rounded bg-gray-700" />
          {/* GameTime placeholder */}
          <div className="w-1/2 h-4 rounded bg-gray-700" />

          <div className="flex items-center justify-between">
            {/* GameParticipants placeholder */}
            <div className="w-20 h-4 rounded bg-gray-700" />
            {/* GameFee placeholder */}
            <div className="w-12 h-5 rounded bg-gray-600" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardSkeleton;
