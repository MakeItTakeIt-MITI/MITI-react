import { useCallback, useEffect, useState } from "react";
import { useYoutuBePlaylist } from "./useYoutubePlaylist";

const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const useLandingPage = () => {
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

  const handleVideoOpen = useCallback(() => {
    setOpenVideo(true);
  }, []);

  const handleVideoClose = useCallback(() => {
    setOpenVideo(false);
  }, []);

  return {
    youtTubeData,
    openVideo,
    handleVideoOpen,
    handleVideoClose,
  };
};
