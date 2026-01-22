import Spline from "@splinetool/react-spline";
import "./spline.css";
import { Link } from "react-router-dom";
import "../../features/landing/style/landing.css";
import { useYoutuBePlaylist } from "@/features/landing/hooks/useYoutubePlaylist";
import VideoPlaylistContainer from "@/features/landing/components/VideoPlaylistContainer";
import { useEffect, useState } from "react";
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
      <div
        style={{
          zIndex: 1,
          backgroundColor: "#000",
        }}
        className="sm:block md:hidden min-h-screen w-full "
      >
        {/* SPLINE container */}
        <div
          style={{
            zIndex: 1,
          }}
          className=" w-full  h-screen"
        >
          <Spline
            style={{
              width: "100%",
              height: "100%",
              clipPath: "inset(0 0 8% 0)",
              background: "transparent",
            }}
            scene="https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode"
          />

          {/* Buttons */}
          <div
            style={{ zIndex: 10 }}
            className="px-4 absolute bottom-[128px] left-0 right-0 flex flex-col gap-[42px]  justify-center"
          >
            <div className="text-white flex flex-col gap-3">
              <h2 className="w-[116px] h-[32px] text-sm bg-[#11AADD33]  text-[#A3F1F2] border border-[#A3F1F2] py-1.5 px-2 flex items-center justify-center rounded-full">
                지금 시작하세요!
              </h2>
              <div className="font-bold ">
                <h1 className="text-[30px]">오늘 퇴근하고</h1>
                <h1 className="text-[40px]">
                  <span className="text-miti-brand">농구</span> 어떠세요?
                </h1>
              </div>
              <p className="text-[14px] text-[#ADADAD] font-[500]">
                번거로움은 그만, 농구만 즐기세요! <br />
                농구를 즐기는데 필요한 모든 일은 미티가 대신하겠습니다.
              </p>
            </div>
            <Link
              to="/games"
              aria-label="오늘 참여 가능한 경기"
              className=" mx-auto
    w-[155px] h-[44px] rounded-full bg-miti-brand text-white font-bold text-sm inline-flex items-center justify-center  
  "
            >
              오늘 참여 가능한 경기
            </Link>
          </div>
        </div>

        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </div>

      {/* Destktop */}
      <main
        style={{
          backgroundColor: "#000",
        }}
        className=" relative sm:hidden md:block space-y-20"
      >
        <div id="spline-container" className="w-full h-full mx-auto relative ">
          <div
            id="landing-text"
            style={{ zIndex: 9999 }}
            className="absolute bottom-[15%] left-[370px] flex flex-col gap-[28px] z-[8888px] text-white"
          >
            <div className="flex flex-col gap-[36px]">
              <p className=" w-[154px] h-[46px] rounded-full text-base text-[#A3F1F2]  border border-[#1ADCDF] bg-[#11AADD33] flex items-center justify-center ">
                지금 시작하세요!
              </p>
              <div className="font-bold  leading-[1.1] ">
                <h1 className="text-[60px]">오늘 퇴근하고</h1>
                <h1 className="text-[80px]">
                  <span className="text-miti-brand">농구</span> 어떠세요?
                </h1>
              </div>
              <p className="text-[18px] text-[#ADADAD] font-[500]">
                번거로움은 그만, 농구만 즐기세요! <br />
                농구를 즐기는데 필요한 모든 일은 미티가 대신하겠습니다.
              </p>
            </div>

            <div className="flex gap-[28px] text-[18px] font-bold">
              <Link
                to="/games"
                aria-label="오늘의 경기 보러가기"
                className="
      w-[196px] h-[52px] inline-flex items-center justify-center text-white bg-miti-brand rounded-full font-bold
       duration-200 ease-out
      hover:shadow-xl hover:-translate-y-1 hover:opacity-95
      focus:outline-none focus:ring-4 focus:ring-miti-brandLight/30
    "
              >
                오늘의 경기 보러가기
              </Link>

              <button
                aria-label="게스트 모집 가이드"
                onClick={handleVideoOpen}
                className="
      w-[196px] h-[52px] inline-flex items-center justify-center bg-transparent text-white rounded-full border border-miti-brand font-bold
       duration-200
      hover:bg-miti-brand/10 hover:border-miti-brand hover:shadow-sm hover:-translate-y-0.5
      focus:outline-none focus:ring-4 focus:ring-miti-brandLight/20
    "
              >
                게스트 모집 가이드
              </button>
            </div>
          </div>{" "}
          <div className="relative h-[80vh] overflow-hidden">
            <div className="absolute inset-0 spline-wrapper pointer-events-auto z-1">
              <Spline
                scene="https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  right: "-200px",
                  background: "transparent",
                  zIndex: 1,
                }}
              />
            </div>

            {/* BOTTOM SHADOW OVERLAY */}
            <div
              className="absolute bottom-0 left-0 w-full h-[80px] z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.953), rgba(0,0,0,0.25), rgba(0,0,0,0))",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Video Playlist */}
        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </main>
    </>
  );
};

export default Landing;
