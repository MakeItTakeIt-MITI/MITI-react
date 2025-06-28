import location from "../../../../assets/v1.3/location.svg";
import users from "../../../../assets/v1.3/users.svg";
import time from "../../../../assets/v1.3/time.svg";

export default function Card() {
  return (
    <div className="w-[724px]  h-[136px] flex flex-col gap-2.5 justify-center p-3 rounded-lg text-white  bg-[#141414] shadow-lg shadow-['#1ADCDF']  ">
      <div className="space-y-2">
        <span className="p-1 bg-[#1ADCDF] text-[10px]">모집</span>
        <h1 className={`font-bold text-base `}>
          GAME TITLE MAX LENGHT 64 MAX LINE 2{" "}
        </h1>
      </div>

      <div className="space-y-1 text-xs font-[400] text-[#D6D6D6]">
        <div className="flex items-center  gap-1">
          <img src={location} alt="" />
          <span>address</span>
          <span>details</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={users} alt="" />
          <span>hh:mm</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img src={time} alt="" />
            <span>4/10</span>
          </div>
          <span className="font-bold text-[#7FEEF0] text-base">10,000</span>
        </div>{" "}
      </div>
    </div>
  );
}
