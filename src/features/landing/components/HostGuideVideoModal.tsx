import { useEffect, useRef } from "react";

interface HostGuideVideoModalProps {
  handleVideoClose: () => void;
}

const HostGuideVideoModal = ({
  handleVideoClose,
}: HostGuideVideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }
  }, []);
  return (
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
        className="flex flex-col relative md:w-[1200px] md:h-[675px] w-full max-w-[95vw] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          className="w-full h-full object-contain bg-black"
          ref={videoRef}
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
          className="absolute top-4 right-4 z-50 py-1.5 px-3 rounded-full bg-black/60 text-white hover:bg-black/80 text-sm font-semibold border border-white/20 transition-colors"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default HostGuideVideoModal;
