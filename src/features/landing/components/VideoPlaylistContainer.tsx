import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

interface VideoPlaylistContainerProps {
  youtubeData: {
    id: string;
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
  }[];
}

const VideoPlaylistContainer = ({
  youtubeData,
}: VideoPlaylistContainerProps) => {
  return (
    <section
      id="gallery"
      className="py-[100px] bg-black text-white"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1280px] mx-auto px-16 max-[600px]:px-6">
        {/* Section header */}
        <header className="mb-12">
          <p
            className="font-sans text-[14px] tracking-[0.2em] uppercase text-miti-brand mb-3"
            aria-hidden="true"
          >
            경기 영상
          </p>
          <h2
            id="gallery-heading"
            className="font-sans text-[clamp(2.25rem,5vw,4rem)] font-light text-white leading-[1.1] tracking-[-0.02em] m-0"
          >
            현장의 열기를 느껴보세요
          </h2>
        </header>

        <ul
          className="grid gap-4 grid-cols-1 grid-rows-none h-auto min-[600px]:grid-cols-[2fr_1fr_1fr] min-[600px]:grid-rows-[1fr_1fr] min-[600px]:h-[560px]"
          role="list"
        >
          {Array.isArray(youtubeData) &&
            youtubeData.slice(0, 5).map((video, idx) => (
              <li
                key={video.id}
                className={`list-none ${idx === 0 ? "min-[600px]:row-span-2" : ""
                  }`}
              >
                <VideoCard video={video} isLarge={idx === 0} />
              </li>
            ))}
        </ul>

        <div className="flex justify-center mt-12">
          <Link
            target="_blank"
            to="https://www.youtube.com/@MITI_MakeItTakeIt"
            className="underline text-[#999] hover:text-white transition-colors font-[400] text-[16px]"
          >
            모든 경기 영상 보러가기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaylistContainer;
