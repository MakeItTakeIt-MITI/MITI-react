import { lazy, Suspense, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface MobileHeroProps {
  handleVideoOpen: () => void;
}

const MobileHero = ({ handleVideoOpen }: MobileHeroProps) => {
  const splineRef = useRef<any>(null);
  const { ref: containerRef, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (!splineRef.current) return;
    inView ? splineRef.current.play() : splineRef.current.stop();
  }, [inView]);

  return (
    <div
      ref={containerRef}
      style={{
        zIndex: 1,
      }}
      className="w-full h-screen relative"
    >
      <Suspense fallback={<div className="w-full h-full bg-black" />}>
        <Spline
          onLoad={(app) => {
            splineRef.current = app;
          }}
          style={{
            width: "100%",
            height: "100%",
            clipPath: "inset(0 0 8% 0)",
            background: "transparent",
          }}
          aria-label="3D 농구 애니메이션 인터랙티브 장면"
          scene="https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode"
        />
      </Suspense>

      {/* BOTTOM SHADOW OVERLAY */}
      <div
        className="absolute bottom-0 left-0 w-full h-[120px] z-[5]"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0))",
        }}
        aria-hidden="true"
      />

      {/* Buttons */}
      <div
        style={{ zIndex: 10 }}
        className="px-4 absolute bottom-[128px] left-0 right-0 flex flex-col gap-6  justify-center"
      >
        <div className="text-white flex flex-col gap-3">
          <div className="font-bold ">
            <h1 data-testid="mobile-hero-main-heading" className="text-[30px]">
              오늘 퇴근하고
            </h1>
            <h1 data-testid="mobile-hero-sub-heading" className="text-[40px]">
              <span className="text-miti-brand">농구</span> 어떠세요?
            </h1>
          </div>
          <p className="text-[14px] text-[#ebebeb] font-[500]">
            번거로움은 그만, 농구만 즐기세요! <br />
            농구를 즐기는데 필요한 모든 일은 미티가 대신하겠습니다.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-3 w-full">
          <Link
            to="/games"
            aria-label="오늘 참여 가능한 경기"
            className="w-[155px] h-[44px] rounded-full bg-miti-brand text-white font-bold text-xs inline-flex items-center justify-center"
          >
            오늘 참여 가능한 경기
          </Link>
          <button
            aria-label="게스트 모집 가이드"
            onClick={handleVideoOpen}
            className="w-[155px] h-[44px] rounded-full bg-transparent text-white border border-miti-brand font-bold text-xs inline-flex items-center justify-center"
          >
            게스트 모집 가이드
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
