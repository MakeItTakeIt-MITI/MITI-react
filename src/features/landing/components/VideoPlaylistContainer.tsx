import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

interface VideoPlaylistContainerProps {
  youtubeData: {
    id: string;
    snippet: {
      thumbnails: {
        standard: {
          url: string;
        };
        medium: {
          url: string;
        };
      };
      title: string;
      resourceId: {
        videoId: string;
      };
    };
  }[];
}

const VideoPlaylistContainer = ({
  youtubeData,
}: VideoPlaylistContainerProps) => {
  return (
    <>
      {/* desktop */}
      <div
        data-testid="video-playlist-desktop-container"
        className="sm:hidden md:flex flex-col items-center gap-12 text-white h-[800px] "
      >
        <div className="flex flex-col gap-[38px] items-center ">
          <h2 className="text-[48px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1ADCDF] via-[#FFFFFF] to-[#87E3E4] gradient-text">
            경기 영상 찾아보기
          </h2>{" "}
          <p className="text-[24px] font-medium">
            자신의 플레이를 확인해보세요!
          </p>
        </div>
        <div
          className="
          grid md:grid-cols-4 sm:grid-cols-2
          gap-10"
        >
          {Array.isArray(youtubeData) &&
            youtubeData.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
        </div>
        <Link
          target="_blank"
          to="https://www.youtube.com/@MITI_MakeItTakeIt"
          className="underline text-[#999] font-[400] text-[18px]"
        >
          모든 경기 영상 보러가기
        </Link>
      </div>

      {/* Mobile */}
      <div className=" md:hidden sm:min-h-[602px] sm:flex flex-col items-center gap-12 text-white sm:py-[60px] md:py-0 ">
        <div className="flex flex-col gap-[38px] items-center ">
          <h2 className="text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1ADCDF] via-[#FFFFFF] to-[#87E3E4] gradient-text">
            경기 영상 찾아보기
          </h2>
          <p className="text-[18px] font-medium">
            자신의 플레이를 확인해보세요!
          </p>
        </div>
        <div
          className="
          grid md:grid-cols-4 sm:grid-cols-2
          gap-[17px]"
        >
          {Array.isArray(youtubeData) &&
            youtubeData.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
        </div>
        <Link
          target="_blank"
          to="https://www.youtube.com/@MITI_MakeItTakeIt"
          className="underline text-[#999] font-[400] text-[14px]"
        >
          모든 경기 영상 보러가기
        </Link>
      </div>
    </>
  );
};

export default VideoPlaylistContainer;
