/* eslint-disable no-irregular-whitespace */
import { useInView } from "react-intersection-observer";
import payment from "../../assets/v11/landing-payment.png";
import "./landing.css";

const Payments = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: contextRef, inView: contextInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div className="sm:hidden md:flex  justify-center  w-full  h-[800px] bg-dark-card  ">
      <div className={`flex items-end h-full  `}>
        <img
          ref={imgRef}
          src={payment}
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
              경기 정산
            </h1>
            <h2 className="text-white  text-[52px] font-bold">
              번거로운 정산은 MITI가, <br />
              농구만 즐기세요!
            </h2>
          </div>
          <p className="text-[#E5E5E5]  text-xl font-[400]">
            수많은 게스트의 참가비 일일이 관리하기 힘드시죠? <br />
            참가비는 MITI가 자동으로 정산해 드리니 농구만 즐기세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
