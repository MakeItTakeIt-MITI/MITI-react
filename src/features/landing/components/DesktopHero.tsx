import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

interface DesktopHeroProps {
  handleVideoOpen: () => void;
}

const DesktopHero = ({ handleVideoOpen }: DesktopHeroProps) => {
  return (
    <div id="spline-container" className="w-full h-full mx-auto relative ">
      <div
        id="landing-text"
        style={{ zIndex: 9999 }}
        className="absolute bottom-[15%] left-[370px] flex flex-col gap-[28px] z-[8888px] text-white"
      >
        <div className="flex flex-col gap-[36px]">
          <p className=" w-[154px] h-[46px] rounded-full text-base text-[#A3F1F2]  border border-[#1ADCDF] bg-[#11AADD33] flex items-center justify-center ">
            지금 시작하세요!
          </p>
          <div className="font-bold  leading-[1.1] ">
            <h1 className="text-[60px]">오늘 퇴근하고</h1>
            <h1 className="text-[80px]">
              <span className="text-miti-brand">농구</span> 어떠세요?
            </h1>
          </div>
          <p className="text-[18px] text-[#ADADAD] font-[500]">
            번거로움은 그만, 농구만 즐기세요! <br />
            농구를 즐기는데 필요한 모든 일은 미티가 대신하겠습니다.
          </p>
        </div>

        <div className="flex gap-[28px] text-[18px] font-bold">
          <Link
            data-testid="go-to-games-button"
            to="/games"
            aria-label="오늘의 경기 보러가기"
            className="
      w-[196px] h-[52px] inline-flex items-center justify-center text-white bg-miti-brand rounded-full font-bold
       duration-200 ease-out
      hover:shadow-xl hover:-translate-y-1 hover:opacity-95
      focus:outline-none focus:ring-4 focus:ring-miti-brandLight/30
    "
          >
            오늘의 경기 보러가기
          </Link>

          <button
            data-testid="open-host-guide-video-button"
            aria-label="게스트 모집 가이드"
            onClick={handleVideoOpen}
            className="
      w-[196px] h-[52px] inline-flex items-center justify-center bg-transparent text-white rounded-full border border-miti-brand font-bold
       duration-200
      hover:bg-miti-brand/10 hover:border-miti-brand hover:shadow-sm hover:-translate-y-0.5
      focus:outline-none focus:ring-4 focus:ring-miti-brandLight/20
    "
          >
            게스트 모집 가이드
          </button>
        </div>
      </div>{" "}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 spline-wrapper pointer-events-auto z-1">
          <Spline
            scene="https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              right: "-200px",
              background: "transparent",
              zIndex: 1,
            }}
          />
        </div>

        {/* BOTTOM SHADOW OVERLAY */}
        <div
          className="absolute bottom-0 left-0 w-full h-[80px] z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.953), rgba(0,0,0,0.25), rgba(0,0,0,0))",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default DesktopHero;
