import "./spline.css";
import "../../features/landing/style/landing.css";
import VideoPlaylistContainer from "@/features/landing/components/VideoPlaylistContainer";

import MobileHero from "@/features/landing/components/MobileHero";
import HostGuideVideoModal from "@/features/landing/components/HostGuideVideoModal";
import { useLandingPage } from "@/features/landing/hooks/useLandingPage";
import React, { Suspense } from "react";

const DesktopHero = React.lazy(
  () => import("@/features/landing/components/DesktopHero")
);

const Landing = () => {
  const { youtTubeData, openVideo, handleVideoOpen, handleVideoClose } =
    useLandingPage();

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
        <Suspense
          fallback={
            <div className="flex h-[80vh] items-center justify-center">
              <div
                className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-white border-t-transparent"
                role="status"
                aria-label="로딩 중"
              ></div>
            </div>
          }
        >
          <DesktopHero handleVideoOpen={handleVideoOpen} />
        </Suspense>
        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </main>
    </>
  );
};

export default Landing;
