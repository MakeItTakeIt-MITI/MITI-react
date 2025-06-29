import { Link } from "react-router-dom";
import courts from "../../assets/v11/landing-courts.png";
import { useInView } from "react-intersection-observer";
import "./landing.css";

const Courts = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: contextRef, inView: contextInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div className="sm:hidden md:flex justify-center h-[800px] bg-secondary-black   ">
      <div className="flex items-center ">
        <div
          ref={contextRef}
          className={`${
            contextInView ? "toast" : ""
          } opacity-0 flex  items-center justify-start `}
        >
          <div className="space-y-9 text-left">
            <div className="space-y-3">
              <h1 className="text-primary-teal font-bold text-[18px]">
                경기장 조회
              </h1>
              <h2 className="text-white  text-[52px] font-bold">
                우리 동네 농구 핫플레이스 <br />
                지금 찾아보세요!
              </h2>
            </div>
            <p className="text-[#E5E5E5]  text-xl font-[400]">
              우리 동네의 숨겨진 농구 경기장과 게스트를 모집 중인 경기를 <br />
              한 번에 조회하실 수 있습니다
            </p>

            <button className="w-[180px] h-[54px] bg-[#D4D4D4] text-[#262626] font-bold rounded-[14.286px]">
              <Link
                to="/courts"
                className=" w-full h-full text-center flex items-center justify-center"
              >
                경기장 보러 가기
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={`flex items-end h-full  `}>
        <img
          ref={imgRef}
          src={courts}
          alt="games mobile page"
          className={`${
            imgInView ? "slide-from-right" : ""
          }  opacity-0  h-[650px]`}
        />
      </div>
    </div>
  );
};

export default Courts;
