import "./spline.css";
import "../../features/landing/style/landing.css";
import MobileHero from "@/features/landing/components/MobileHero";
import HostGuideVideoModal from "@/features/landing/components/HostGuideVideoModal";
import SplashLoader from "@/features/landing/components/SplashLoader";
import { useLandingPage } from "@/features/landing/hooks/useLandingPage";
import React, { Suspense } from "react";

const DesktopHero = React.lazy(
  () => import("@/features/landing/components/DesktopHero")
);

const VideoPlaylistContainer = React.lazy(
  () => import("@/features/landing/components/VideoPlaylistContainer")
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
        <Suspense fallback={<SplashLoader />}>
          <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
        </Suspense>
      </main>

      <main
        style={{
          backgroundColor: "#000",
        }}
        className=" relative sm:hidden md:block space-y-20"
      >
        <Suspense fallback={<SplashLoader />}>
          <DesktopHero handleVideoOpen={handleVideoOpen} />
        </Suspense>
        <Suspense fallback={<SplashLoader />}>
          <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
        </Suspense>
      </main>
    </>
  );
};

export default Landing;
