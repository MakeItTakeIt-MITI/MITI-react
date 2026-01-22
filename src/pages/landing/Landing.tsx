import Spline from "@splinetool/react-spline";
import "./spline.css";
import { Link } from "react-router-dom";
import "../../features/landing/style/landing.css";
import { useYoutuBePlaylist } from "@/features/landing/hooks/useYoutubePlaylist";
import VideoPlaylistContainer from "@/features/landing/components/VideoPlaylistContainer";
import { useEffect, useState } from "react";
import DesktopHero from "@/features/landing/components/DesktopHero";
import MobileHero from "@/features/landing/components/MobileHero";
// import { useState } from "react";

const PLAYLIST_ID = "PLOU4W5XbHwpIYTlUMNQfviDnG6_OdVE0n";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const Landing = () => {
  const { data: youtTubeData } = useYoutuBePlaylist(PLAYLIST_ID, API_KEY);

  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    if (!openVideo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") setOpenVideo(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openVideo]);

  const handleVideoOpen = () => {
    setOpenVideo(true);
  };

  const handleVideoClose = () => {
    setOpenVideo(false);
  };

  if (openVideo) {
    return (
      <>
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player dialog"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-[#000] bg-opacity-70 "
            onClick={handleVideoClose}
            aria-hidden="true"
          />

          {/* player box */}
          <div
            className="flex flex-col items-end relative md:w-[1200px] md:h-[725px] sm:w-full sm:h-full max-w-[95%] max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-cover bg-black"
              controls
              playsInline
              autoPlay
              preload="metadata"
              aria-label="MITI 호스트 가이드 비디오"
              src="https://image.makeittakeit.kr/video/host-guide.mp4"
            />
            <button
              type="button"
              onClick={handleVideoClose}
              aria-label="닫기"
              className="z-50 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              닫기
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {/* Mobile */}
      <main
        style={{
          zIndex: 1,
          backgroundColor: "#000",
        }}
        className="sm:block md:hidden min-h-screen w-full "
      >
        {/* SPLINE container */}
        <MobileHero />

        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </main>

      {/* Destktop */}
      <main
        style={{
          backgroundColor: "#000",
        }}
        className=" relative sm:hidden md:block space-y-20"
      >
        <DesktopHero handleVideoOpen={handleVideoOpen} />

        {/* Video Playlist */}
        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </main>
    </>
  );
};

export default Landing;
