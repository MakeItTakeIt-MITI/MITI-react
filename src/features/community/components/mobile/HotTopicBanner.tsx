import React from "react";

const HotTopicBanner = () => {
  return (
    <div className="w-full h-[28px] bg-[#8B2523] rounded-lg text-[10px] text-white  whitespace-nowrap flex gap-3 items-center justify-center px-3">
      <span>🔥</span>
      <span className="w-[90%] truncate">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempore
      </span>
    </div>
  );
};

export default HotTopicBanner;
