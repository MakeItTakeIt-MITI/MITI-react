import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

interface MobileHeroProps {
  handleVideoOpen: () => void;
}

const MobileHero = ({ handleVideoOpen }: MobileHeroProps) => {
  return (
    <div
      style={{
        zIndex: 1,
      }}
      className=" w-full  h-[80vh] relative "
    >
      <div
        className="absolute left-0 bottom-0 right-0 w-full h-[160px] z-10 "
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.953), rgba(0,0,0,0.25), rgba(0,0,0,0))",
        }}
        aria-hidden="true"
      />

      <Spline
        style={{
          width: "100%",
          height: "100%",
          clipPath: "inset(0 0 9% 0)",
          background: "transparent",
        }}
        scene="https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode"
      />

      {/* Buttons */}
      <div
        style={{ zIndex: 10 }}
        className="  px-4 absolute bottom-[178px] left-0 right-0 flex flex-col gap-[42px]  justify-center"
      >
        <div className="text-white flex flex-col gap-3">
          <h2 className="w-[116px] h-[32px] text-sm bg-[#11AADD33]  text-[#A3F1F2] border border-[#A3F1F2] py-1.5 px-2 flex items-center justify-center rounded-full">
            지금 시작하세요!
          </h2>
          <div className="font-bold ">
            <h1 className="text-[30px]">오늘 퇴근하고</h1>
            <h1 className="text-[40px]">
              <span className="text-miti-brand">농구</span> 어떠세요?
            </h1>
          </div>
          <p className="text-[14px] text-[#ADADAD] font-[500]">
            번거로움은 그만, 농구만 즐기세요! <br />
            농구를 즐기는데 필요한 모든 일은 미티가 대신하겠습니다.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link
            to="/games"
            aria-label="오늘 참여 가능한 경기"
            className=" 
    w-[144px] h-[36px] rounded-full bg-miti-brand text-white  font-medium text-sm inline-flex items-center justify-center  
  "
          >
            오늘 참여 가능한 경기
          </Link>

          <button
            aria-label="게스트 모집 가이드 영상"
            onClick={handleVideoOpen}
            className=" 
    w-[144px] h-[36px] inline-flex items-center justify-center backdrop-blur-md text-white rounded-full border border-miti-brand  font-medium
       duration-200
      hover:bg-miti-brand/10 hover:border-miti-brand hover:shadow-sm hover:-translate-y-0.5
      focus:outline-none focus:ring-4 focus:ring-miti-brandLight/20 
  "
          >
            게스트 모집 가이드
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
