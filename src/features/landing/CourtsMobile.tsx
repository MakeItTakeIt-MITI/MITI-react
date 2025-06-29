import { Link } from "react-router-dom";
import landing from "../../assets/v11/landing-courts.png";
import { useInView } from "react-intersection-observer";
import "./landing.css";

const CourtsMobile = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: contextRef, inView: contextInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div className=" h-[750px] md:hidden sm:flex flex-col justify-end gap-[3.88rem] bg-secondary-black">
      <div
        ref={contextRef}
        className={`pt-[70px] opacity-0 ${contextInView ? "toast" : ""} flex flex-col items-start gap-[.94rem] text-left px-[1.5rem] py-[.75rem]`}
      >
        <div className="space-y-[.75rem]">
          <h1 className="text-primary-teal text-[18px] font-bold">
            경기장 조회
          </h1>
          <p className="text-white font-bold text-2xl">
            우리 동네 농구 핫플레이스 <br />
            지금 찾아보세요!
          </p>
        </div>
        <p className="text-[#e5e5e5] font-[400] text-sm">
          우리 동네의 숨겨진 농구 경기장과 게스트를 모집 중인 경기를 <br />한
          번에 조회하실 수 있습니다
        </p>
        <button className="flex justify-end bg-[#D4d4d4] rounded-xl w-[120px] h-[40px] ">
          <Link
            to="/courts"
            className="h-full w-full flex items-center justify-center text-sm font-semibold"
          >
            경기장 보러 가기
          </Link>
        </button>
      </div>
      <div ref={imgRef} className="flex items-end justify-center">
        <img
          src={landing}
          alt="landing"
          className={`${imgInView ? "toast" : ""} opacity-0 h-[397px] `}
        />
      </div>
    </div>
  );
};

export default CourtsMobile;
