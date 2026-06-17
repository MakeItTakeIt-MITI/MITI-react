import { lazy, Suspense, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface DesktopHeroProps {
  handleVideoOpen: () => void;
}

const DesktopHero = ({ handleVideoOpen }: DesktopHeroProps) => {
  const splineRef = useRef<any>(null);
  const { ref: containerRef, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (!splineRef.current) return;
    inView ? splineRef.current.play() : splineRef.current.stop();
  }, [inView]);

  return (
    <div id="spline-container" className="w-full h-full relative">
      {/* 3D 배경화면 영역 (100% 전체 너비) */}
      <div ref={containerRef} className="relative h-[80vh] overflow-hidden w-full">
        <div className="absolute inset-0 spline-wrapper pointer-events-auto z-1">
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <Spline
              onLoad={(app) => {
                splineRef.current = app;
              }}
              scene="https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode"
              aria-label="3D 농구 애니메이션 인터랙티브 장면"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                right: "-200px",
                background: "transparent",
                zIndex: 1,
              }}
            />
          </Suspense>
        </div>

        {/* BOTTOM SHADOW OVERLAY */}
        <div
          className="absolute bottom-0 left-0 w-full h-[240px] z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 0.15) 80%, rgba(0, 0, 0, 0) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* 텍스트 & 버튼 콘텐츠 영역 (최대 1200px) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center">
        <div className="w-full max-w-[1200px] h-full mx-auto px-6 md:px-10 relative">
          <div
            id="landing-text"
            className="absolute bottom-[15%] left-6 md:left-10 flex flex-col gap-[28px] text-white pointer-events-auto"
          >
            <div className="flex flex-col gap-[36px]">
              <div className="font-bold leading-[1.1]">
                <h1 data-testid="desktop-hero-main-heading" className="text-[60px]">
                  오늘 퇴근하고
                </h1>
                <h1 data-testid="desktop-hero-sub-heading" className="text-[80px]">
                  <span className="text-miti-brand">농구</span> 어떠세요?
                </h1>
              </div>
              <p className="text-[18px] text-[#ebebeb] font-[500]">
                번거로움은 그만, 농구만 즐기세요! <br />
                농구를 즐기는데 필요한 모든 일은 미티가 대신하겠습니다.
              </p>
            </div>

            <div className="flex gap-[28px] text-[18px] font-bold">
              <Link
                to="/games"
                aria-label="오늘의 경기 보러가기"
                className="w-[196px] h-[52px] inline-flex items-center justify-center text-white bg-miti-brand rounded-full font-bold duration-200 ease-out hover:shadow-xl hover:-translate-y-1 hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-miti-brandLight/30"
              >
                오늘의 경기 보러가기
              </Link>

              <button
                aria-label="게스트 모집 가이드"
                onClick={handleVideoOpen}
                className="w-[196px] h-[52px] inline-flex items-center justify-center bg-transparent text-white rounded-full border border-miti-brand font-bold duration-200 hover:bg-miti-brand/10 hover:border-miti-brand hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-miti-brandLight/20"
              >
                게스트 모집 가이드
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
