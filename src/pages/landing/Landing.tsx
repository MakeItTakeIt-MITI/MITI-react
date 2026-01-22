import Spline from "@splinetool/react-spline";
import "./spline.css";
import { Link } from "react-router-dom";
import "../../features/landing/style/landing.css";
import { useYoutuBePlaylist } from "@/features/landing/hooks/useYoutubePlaylist";
import VideoPlaylistContainer from "@/features/landing/components/VideoPlaylistContainer";
import { useEffect, useState } from "react";
import DesktopHero from "@/features/landing/components/DesktopHero";
import MobileHero from "@/features/landing/components/MobileHero";
import HostGuideVideoModal from "@/features/landing/components/HostGuideVideoModal";
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
    return <HostGuideVideoModal handleVideoClose={handleVideoClose} />;
  }
  return (
    <>
      <main
        style={{
          zIndex: 1,
          backgroundColor: "#000",
        }}
        className="sm:block md:hidden min-h-screen w-full "
      >
        <MobileHero />
        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </main>

      <main
        style={{
          backgroundColor: "#000",
        }}
        className=" relative sm:hidden md:block space-y-20"
      >
        <DesktopHero handleVideoOpen={handleVideoOpen} />
        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </main>
    </>
  );
};

export default Landing;
