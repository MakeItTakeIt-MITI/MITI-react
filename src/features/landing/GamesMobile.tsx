import { Link } from "react-router-dom";
import landing from "../../assets/v11/landing-games.png";
import { useInView } from "react-intersection-observer";
import "./landing.css";

const GamesMobile = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: contextRef, inView: contextInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div className=" h-[750px] md:hidden sm:flex flex-col justify-end gap-[6.38rem] bg-dark-card ">
      <div
        ref={contextRef}
        className={`pt-[70px] opacity-0 ${contextInView ? "toast" : ""} flex flex-col items-end gap-[.94rem] text-right px-[1.5rem] py-[.75rem]`}
      >
        <div className="space-y-[.75rem]">
          <h1 className="text-primary-teal text-[18px] font-bold">경기 조회</h1>
          <p className="text-white font-bold text-2xl">
            간편하게 경기를 조회하고 <br /> 바로 참여해보세요.
          </p>
        </div>
        <p className="text-[#e5e5e5] font-[400] text-sm">
          지도를 통해 내 주변의 경기를 빠르게 찾아보고 <br />
          클릭 몇번으로 간편하게 경기에 참여해보세요!
        </p>
        <button className="flex justify-end bg-[#D4d4d4] rounded-xl w-[120px] h-[40px] ">
          <Link
            to="/games"
            className="h-full w-full flex items-center justify-center text-sm font-semibold"
          >
            경기 보러 가기
          </Link>
        </button>
      </div>
      <div ref={imgRef} className="flex items-end justify-center">
        <img
          src={landing}
          alt="landing"
          className={`${imgInView ? "toast" : ""} opacity-0 h-[347px]`}
        />
      </div>
    </div>
  );
};

export default GamesMobile;
