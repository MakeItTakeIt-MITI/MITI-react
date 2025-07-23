import time_icon from "../../../../assets/v1.3/icon/time.svg";

interface GameTimeProps {
  time: string;
}

export default function GameTime({ time }: GameTimeProps) {
  return (
    <div className="flex items-center  gap-1 text-xs font-[400] text-[#D6D6D6]">
      <img src={time_icon} alt="" />
      <span>{time}</span>
    </div>
  );
}
