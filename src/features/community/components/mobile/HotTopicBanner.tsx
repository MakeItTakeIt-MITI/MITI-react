import React, { useEffect, useState } from "react";

type Topic = {
  title: string;
};

interface HotTopicBannerProps {
  popularTopicsData?: Topic[] | null;
}

const HotTopicBanner: React.FC<HotTopicBannerProps> = ({
  popularTopicsData,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Ensure topics is always an array
  const topics = Array.isArray(popularTopicsData) ? popularTopicsData : [];

  useEffect(() => {
    if (!topics.length) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % topics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topics.length]);

  if (!topics.length) return null;

  return (
    <div className="w-full h-[28px] bg-[#8B2523] rounded-lg text-[10px] text-white whitespace-nowrap md:hidden sm:flex gap-3 items-center justify-center px-3">
      <span>🔥</span>
      <span className={`w-[90%]`}>{topics[currentIdx].title}</span>
      <span>🔥</span>
    </div>
  );
};

export default HotTopicBanner;
