import time_icon from "../../../../assets/images/clock.svg";

interface GameTimeProps {
  starttime: string;
  endtime: string;
}

export default function GameTime({ starttime, endtime }: GameTimeProps) {
  const formatTime = (timeStr: string) => {
    if (!timeStr) return "";
    return timeStr.slice(0, 5);
  };

  return (
    <div className="flex items-center gap-1 sm:text-[10px] md:text-xs font-[400] text-[#D6D6D6]">
      <img src={time_icon} className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" alt="time_icon" />
      <span>
        {formatTime(starttime)} ~ {formatTime(endtime)}
      </span>
    </div>
  );
}
