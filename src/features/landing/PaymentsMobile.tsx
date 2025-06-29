import landing from "../../assets/v11/landing-payment-mobile.png";
import { useInView } from "react-intersection-observer";
import "./landing.css";

const PaymentsMobile = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: contextRef, inView: contextInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div className=" h-[750px] md:hidden sm:flex flex-col justify-end gap-[3.88rem] bg-dark-card">
      <div
        ref={contextRef}
        className={`pt-[70px] opacity-0 ${contextInView ? "toast" : ""} flex flex-col items-end gap-[.94rem] text-right px-[1.5rem] py-[.75rem]`}
      >
        <div className="space-y-[.75rem]">
          <h1 className="text-primary-teal text-[18px] font-bold">경기 정산</h1>
          <p className="text-white font-bold text-2xl">
            번거로운 정산은 MITI가, <br />
            농구만 즐기세요!
          </p>
        </div>
        <p className="text-[#e5e5e5] font-[400] text-sm">
          수많은 게스트의 참가비 일일이 관리하기 힘드시죠? <br />
          참가비는 MITI가 자동으로 정산해 드리니 농구만 즐기세요!
        </p>
      </div>
      <div ref={imgRef} className="flex items-end justify-center  ">
        <img
          src={landing}
          alt="landing"
          className={`${imgInView ? "toast" : ""} opacity-0 h-[384px] `}
        />
      </div>
    </div>
  );
};

export default PaymentsMobile;
