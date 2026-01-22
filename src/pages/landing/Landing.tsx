import "./spline.css";
import "../../features/landing/style/landing.css";
import VideoPlaylistContainer from "@/features/landing/components/VideoPlaylistContainer";
import DesktopHero from "@/features/landing/components/DesktopHero";
import MobileHero from "@/features/landing/components/MobileHero";
import HostGuideVideoModal from "@/features/landing/components/HostGuideVideoModal";
import { useLandingPage } from "@/features/landing/hooks/useLandingPage";

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
        <DesktopHero handleVideoOpen={handleVideoOpen} />
        <VideoPlaylistContainer youtubeData={youtTubeData?.items} />
      </main>
    </>
  );
};

export default Landing;
