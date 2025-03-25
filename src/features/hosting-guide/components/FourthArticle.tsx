import fourth_mobile from "../../../assets/v11.2/host-guide/mobile-fourth.png";
import fourth_web from "../../../assets/v11.2/host-guide/web-fourth.png";
import { APPLE_STORE, PLAYSTORE } from "../../../utils/app.ts";

import googlePlay from "../../../assets/v11/google-play-teal.svg";
import appleStore from "../../../assets/v11/apple-store-teal.svg";
import { useInView } from "react-intersection-observer";

const FourthArticle = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <article className="w-full md:h-[800px] sm:h-[750px] md:bg-[#343434] sm:bg-[#404040] flex items-center justify-center">
      <div className="md:w-[1331px] md:h-[600px] sm:w-[313px] sm:h-[660px]  flex md:flex-row sm:flex-col items-center  justify-center md:gap-[150px] sm:gap-[40px]">
        {/* left */}

        <div className="h-[600px]">
          <img
            src={fourth_web}
            alt=""
            className="sm:hidden md:block w-full h-full"
          />
          <img
            src={fourth_mobile}
            alt=""
            className="sm:block md:hidden w-full h-full"
          />
        </div>

        {/* right */}
        <div className="md:space-y-[60px] sm:space-y-5 sm:px-[21px] md:px-0">
          <h1 className="text-[#9EEFF0] font-bold md:text-[32px] sm:text-xl">
            자, 이제 경기 준비는 완료되었습니다!
          </h1>
          <div className="space-y-5 text-[#fff] md:text-[20px] sm:text-sm font-[400] ">
            <p className="leading-[1.5]">
              그동안 번거로웠던 게스트 모집, MITI에게 맡기시고 편하게 경기만
              즐겨주세요.
            </p>

            <p className="leading-[1.5]">
              앞으로 모든 농구인들이 쉽고 간편하고 즐겁게 농구를 즐길 수 있도록
              MITI가 함께하겠습니다!
            </p>
          </div>
          {/* button */}
          <div
            ref={ref}
            className={`${inView && "shake"} flex items-center sm:justify-center md:justify-start sm:gap-3 md:gap-4 text-[#BFF9FA] sm:px-[17.5px] md:px-0  `}
          >
            <a href={PLAYSTORE} target="_blank">
              <button
                type="button"
                className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#69696980]  sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
              >
                <img src={googlePlay} alt="Google store" />
                <p>Google Play</p>
              </button>
            </a>
            <a href={APPLE_STORE} target="_blank">
              <button
                type="button"
                className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#69696980] sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
              >
                <img src={appleStore} alt="Apple Store" />
                <p>App Store</p>
              </button>
            </a>
          </div>{" "}
        </div>
      </div>
    </article>
  );
};

export default FourthArticle;
