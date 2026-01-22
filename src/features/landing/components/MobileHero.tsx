import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const MobileHero = () => {
  return (
    <div
      style={{
        zIndex: 1,
      }}
      className=" w-full  h-screen"
    >
      <Spline
        style={{
          width: "100%",
          height: "100%",
          clipPath: "inset(0 0 8% 0)",
          background: "transparent",
        }}
        scene="https://prod.spline.design/Inkh7fCyycdIyOfT/scene.splinecode"
      />

      {/* Buttons */}
      <div
        style={{ zIndex: 10 }}
        className="px-4 absolute bottom-[128px] left-0 right-0 flex flex-col gap-[42px]  justify-center"
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
        <Link
          to="/games"
          aria-label="오늘 참여 가능한 경기"
          className=" mx-auto
    w-[155px] h-[44px] rounded-full bg-miti-brand text-white font-bold text-sm inline-flex items-center justify-center  
  "
        >
          오늘 참여 가능한 경기
        </Link>
      </div>
    </div>
  );
};

export default MobileHero;
