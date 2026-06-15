import { useState } from "react";
import defaultThumbnail from "../../../assets/v11/thumbnail_600x400.png";

interface VideoCardProps {
  video: {
    snippet: {
      publishedAt?: string;
      thumbnails: {
        standard?: {
          url: string;
        };
        medium?: {
          url: string;
        };
        high?: {
          url: string;
        };
        maxres?: {
          url: string;
        };
      };
      title: string;
      resourceId: {
        videoId: string;
      };
    };
  };
  isLarge?: boolean;
}

const VideoCard = ({ video, isLarge = false }: VideoCardProps) => {
  const [imageError, setImageError] = useState(false);

  const thumbnailMediumUrl =
    video?.snippet.thumbnails.maxres?.url ||
    video?.snippet.thumbnails.standard?.url ||
    video?.snippet.thumbnails.high?.url ||
    video?.snippet.thumbnails.medium?.url;

  const title = video?.snippet.title;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video?.snippet.resourceId.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} 재생`}
      className="relative rounded-2xl overflow-hidden bg-miti-bg border border-miti-grayDark h-full min-[600px]:aspect-auto max-[600px]:aspect-[16/10] group block"
    >
      {/* Thumbnail */}
      {thumbnailMediumUrl && !imageError ? (
        <img
          src={thumbnailMediumUrl}
          alt=""
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
        />
      ) : (
        <img
          src={defaultThumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* Play icon (decorative) */}
      <div
        aria-hidden="true"
        className="absolute top-[14px] right-[14px] w-10 h-10 rounded-full bg-white/10 backdrop-blur-[8px] border border-white/20 flex items-center justify-center text-white transition-all duration-200 group-hover:bg-miti-brand group-hover:border-miti-brand group-hover:text-[#042024]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="currentColor"
        >
          <path d="M3 2l9 5-9 5V2z" />
        </svg>
      </div>

      {/* Card info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p
          className={`font-sans font-normal text-white leading-[1.3] m-0 line-clamp-2 ${isLarge ? "text-[22px]" : "text-[14px]"
            }`}
        >
          {title}
        </p>
      </div>
    </a>
  );
};

export default VideoCard;
