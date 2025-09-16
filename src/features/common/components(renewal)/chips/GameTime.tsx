import time_icon from "../../../../assets/v1.3/icon/time.svg";

interface GameTimeProps {
  starttime: string;
  endtime: string;
}

export default function GameTime({ starttime, endtime }: GameTimeProps) {
  return (
    <div className="flex items-center  gap-1 sm:text-[10px] md:text-xs font-[400] text-[#D6D6D6]">
      <img src={time_icon} alt="" />
      <p>
        {starttime} ~ {endtime}
      </p>
    </div>
  );
}
