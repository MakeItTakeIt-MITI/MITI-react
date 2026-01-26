import { Link } from "react-router-dom";

interface VideoCardProps {
  video: {
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
  };
}

const VideoCard = ({ video }: VideoCardProps) => {
  const thumbnailMediumUrl = video?.snippet.thumbnails.medium.url;

  const title = video?.snippet.title;
  return (
    <Link
      target="_blank"
      to={`https://www.youtube.com/watch?v=${video?.snippet.resourceId.videoId}`}
      className="md:w-[300px] md:h-[278px] sm:w-[163px] sm:h-[161px] flex flex-col bg-black rounded-lg border border-[#333] bg-[#141414]"
    >
      <div
        style={{
          backgroundImage: `url(${thumbnailMediumUrl})`,
        }}
        className={`md:h-[185px] sm:h-[109px] w-full bg-contain  bg-full bg-no-repeat rounded-lg`}
      ></div>
      <div className="md:h-[76px] sm:h-[52px] p-3 ">
        <h1 className="text-white md:font-medium md:text-base sm:text-xs ">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default VideoCard;
