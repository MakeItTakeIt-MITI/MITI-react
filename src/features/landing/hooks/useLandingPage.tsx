import { useCallback, useEffect, useState } from "react";
import { useYoutuBePlaylist } from "./useYoutubePlaylist";

const PLAYLIST_ID =
  import.meta.env.VITE_YOUTUBE_PLAYLIST_ID ||
  "UU86UWZcl8pirrc6z8xGKJjQ";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const DUMMY_YOUTUBE_DATA = [
  {
    id: "dummy-1",
    snippet: {
      publishedAt: "2026-06-11T00:00:00Z",
      title: "MITI 2026-6-6 (토) 동농거리 익투스 픽업게임",
      thumbnails: {
        medium: {
          url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200",
        },
      },
      resourceId: {
        videoId: "dQw4w9WgXcQ",
      },
    },
  },
  {
    id: "dummy-2",
    snippet: {
      publishedAt: "2026-05-20T00:00:00Z",
      title: "MITI 2026-5-19 (화) 동농거리 익투스 픽업게임",
      thumbnails: {
        medium: {
          url: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=600",
        },
      },
      resourceId: {
        videoId: "dQw4w9WgXcQ",
      },
    },
  },
  {
    id: "dummy-3",
    snippet: {
      publishedAt: "2026-05-20T00:00:00Z",
      title: "MITI 2026-5-16 (토) 동농거리 익투스 픽업게임",
      thumbnails: {
        medium: {
          url: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&q=80&w=600",
        },
      },
      resourceId: {
        videoId: "dQw4w9WgXcQ",
      },
    },
  },
  {
    id: "dummy-4",
    snippet: {
      publishedAt: "2026-05-06T00:00:00Z",
      title: "MITI 2026-5-2 (토) 동농거리 익투스 픽업게임",
      thumbnails: {
        medium: {
          url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600",
        },
      },
      resourceId: {
        videoId: "dQw4w9WgXcQ",
      },
    },
  },
  {
    id: "dummy-5",
    snippet: {
      publishedAt: "2026-05-06T00:00:00Z",
      title: "MITI 2026-5-4 (월) C&S 픽업게임",
      thumbnails: {
        medium: {
          url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600",
        },
      },
      resourceId: {
        videoId: "dQw4w9WgXcQ",
      },
    },
  },
];

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
    youtTubeData: youtTubeData?.items || DUMMY_YOUTUBE_DATA,
    openVideo,
    handleVideoOpen,
    handleVideoClose,
  };
};
