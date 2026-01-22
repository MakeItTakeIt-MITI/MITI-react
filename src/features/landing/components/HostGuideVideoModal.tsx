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
      videoRef.current.volume = 0.3; // 50%
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
        className="flex flex-col items-end relative md:w-[1200px] md:h-[725px] sm:w-full sm:h-full max-w-[95%] max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          className="w-full h-full object-cover bg-black"
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
          className="z-50 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default HostGuideVideoModal;
