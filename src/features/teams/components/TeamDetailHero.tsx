import React, { useState } from "react";
import { TeamDetailData } from "../../../interfaces/team.ts";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import eliteSvg from "../../../assets/images/level=elite.svg";
import division3Svg from "../../../assets/images/level=division 3.svg";
import division4Svg from "../../../assets/images/level=division 4.svg";
import division5Svg from "../../../assets/images/level=division 5.svg";
import division6Svg from "../../../assets/images/level=division 6.svg";
import rookieSvg from "../../../assets/images/level=rookie.svg";

const LEVEL_SVGS: Record<string, string> = {
  rookie: rookieSvg,
  division6: division6Svg,
  division5: division5Svg,
  division4: division4Svg,
  division3: division3Svg,
  elite: eliteSvg,
};

interface TeamDetailHeroProps {
  team: TeamDetailData;
  hideTextOverlay?: boolean;
}

export const TeamDetailHero: React.FC<TeamDetailHeroProps> = ({ team, hideTextOverlay = false }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const images = team.images && team.images.length > 0 ? team.images : [];
  const defaultImage = "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80";
  const activeImage = images[activeImageIdx] || defaultImage;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening full screen lightbox
    setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening full screen lightbox
    setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full px-0 md:pt-6">
      {/* Immersive Rounded Hero Box (Clickable to view image) */}
      <div 
        onClick={() => setIsModalOpen(true)}
        style={{ 
          transform: "translate3d(0, 0, 0)",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)"
        }} // Fix: Force GPU layer and WebKit masking to preserve border-radius mask on child scale zoom
        className={`w-full h-[280px] sm:h-[340px] md:h-[400px] relative overflow-hidden rounded-none md:rounded-2xl border border-white/5 md:border-white/10 shadow-2xl flex flex-col justify-end p-6 md:p-10 cursor-pointer group isolate ${
          hideTextOverlay ? "border-b-0" : "border-b-4 border-b-[#00E5FF]"
        }`}
      >
        {/* Background Image with hover zoom effect */}
        <img
          src={activeImage}
          alt={`${team.name} 대표 이미지`}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105 ${
            hideTextOverlay ? "brightness-90" : "brightness-[0.40]"
          }`}
        />

        {/* Bottom gradient overlay to blend into #141414 */}
        {hideTextOverlay && (
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent z-10 pointer-events-none" />
        )}

        {/* Carousel Slide Left Navigation Arrow */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 text-white/80 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/5 shadow-md"
            aria-label="이전 사진 보기"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Carousel Slide Right Navigation Arrow */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 text-white/80 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/5 shadow-md"
            aria-label="다음 사진 보기"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Numeric Carousel Page Indicator */}
        {images.length > 1 && (
          <div className="absolute right-6 top-6 z-20 text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/55 text-white/95 border border-white/5 backdrop-blur-sm pointer-events-none select-none">
            {activeImageIdx + 1} / {images.length}
          </div>
        )}

        {/* Content Overlay */}
        {!hideTextOverlay && (
          <div className="relative z-10 flex flex-col gap-4 max-w-full pointer-events-none">
            {/* Top Badges Row */}
            <div className="flex flex-wrap gap-2.5 items-center">
              {/* Level SVG Badge */}
              <img
                src={LEVEL_SVGS[team.level] || rookieSvg}
                alt={team.level}
                className="h-6 object-contain"
              />

              {/* Region Badge */}
              <span className="text-[10px] md:text-xs font-bold tracking-wider px-3 py-1.5 rounded-full border border-white/15 text-white bg-white/5 backdrop-blur-md shadow-md flex items-center gap-1.5">
                📍 {team.city.name.toUpperCase()}
              </span>
            </div>

            {/* Team Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight truncate drop-shadow-lg pr-4">
              {team.name}
            </h1>
          </div>
        )}
      </div>

      {/* Lightbox Image Modal */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          {/* Relative container wrapping the image and its close button */}
          <div 
            className="relative max-w-full max-h-[90vh] flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image or container
          >
            <img
              src={activeImage}
              alt={`${team.name} 대표 이미지 원본`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            
            {/* Close button positioned at the top-right corner inside the image wrapper */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl font-bold transition-all z-50 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/15 shadow-lg active:scale-95"
              aria-label="모달 닫기"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
