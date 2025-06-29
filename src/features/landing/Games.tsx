import { useInView } from "react-intersection-observer";
import games from "../../assets/v11/landing-games.png";
import "./landing.css";
import { Link } from "react-router-dom";

const Games = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: contextRef, inView: contextInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div className="sm:hidden md:flex  justify-center gap-[78px] w-full  h-[800px] bg-dark-card  ">
      <div className={`flex items-end h-full  `}>
        <img
          ref={imgRef}
          src={games}
          alt="games mobile page"
          className={` opacity-0  ${imgInView ? "slide-from-left" : ""} h-[650px]`}
        />
      </div>
      <div
        ref={contextRef}
        className={`flex  items-center justify-start opacity-0 ${contextInView ? "toast" : ""} `}
      >
        <div className="space-y-9 text-left">
          <div className="space-y-3">
            <h1 className="text-primary-teal font-bold text-[18px]">
              경기 조회
            </h1>
            <h2 className="text-white  text-[52px] font-bold">
              간편하게 경기를 조회하고 <br />
              바로 참여해보세요.
            </h2>
          </div>
          <p className="text-[#E5E5E5]  text-xl font-[400]">
            지도를 통해 내 주변의 경기를 빠르게 찾아보고 클릭 몇번으로 <br />
            간편하게 경기에 참여해보세요!
          </p>

          <button className="w-[180px] h-[54px] bg-[#D4D4D4] text-[#262626] font-bold rounded-[14.286px]">
            <Link
              to="/games"
              className=" w-full h-full text-center flex items-center justify-center"
            >
              경기 보러 가기
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
