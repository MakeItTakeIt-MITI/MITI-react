import "../../../src/features/landing/landing.css";

import hero from "../../assets/v11/landing-hero-bg.png";
import googlePlay from "../../assets/v11/google-play-teal.svg";
import appleStore from "../../assets/v11/apple-store-teal.svg";
import mobile_top from "../../assets/v11/mobile-landing.png";
import { APPLE_STORE, PLAYSTORE } from "../../utils/app.ts";
import GamesMobile from "../../features/landing/GamesMobile.tsx";
import CourtsMobile from "../../features/landing/CourtsMobile.tsx";
import Payments from "../../features/landing/Payments.tsx";
import PaymentsMobile from "../../features/landing/PaymentsMobile.tsx";
import Footer from "../../features/common/components/Footer.tsx";
import Games from "../../features/landing/Games.tsx";
import Courts from "../../features/landing/Courts.tsx";

const Landing = () => {
  return (
    <div className=" w-full bg-[#000]">
      {/* desktop top */}
      <section
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative h-[800px] w-full sm:hidden md:block"
      >
        <div className="z-30  flex flex-col justify-end h-full  space-y-[2rem] sm:px-[1.5rem] md:pl-[22.5rem] md:pb-[8.44rem] sm:pb-[calc(5.87rem+0.75rem)] ">
          <p className=" toast md:text-[#9EEFF0]   md:text-[32px] sm:text-[#9EEFF0] sm:text-[24px] font-bold  ">
            MITI 서비스 런칭
          </p>
          <p className=" toast text-[#fff]  md:text-[52px] sm:text-[24px]  font-bold  ">
            농구 경기 더 쉽게, 더 즐겁게!
          </p>
          <p className=" toast text-[#fff]  sm:text-sm md:text-xl font-[400] ">
            번거로움은 빼고 농구에 재미를 더하세요! <br />
            지금 다운로드하고 오늘 퇴근 후에 농구 어떠세요?
          </p>
          <div
            className={`shake flex items-center sm:justify-center md:justify-start sm:gap-3 md:gap-4 text-primary-white sm:px-[17.5px] md:px-0  `}
          >
            <a href={PLAYSTORE} target="_blank">
              <button
                type="button"
                className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#363636]  sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
              >
                <img src={googlePlay} alt="Google store" />
                <p>Google Play</p>
              </button>
            </a>

            <a href={APPLE_STORE} target="_blank">
              <button
                type="button"
                className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#363636] sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
              >
                <img src={appleStore} alt="Apple Store" />
                <p>App Store</p>
              </button>
            </a>
          </div>{" "}
        </div>
      </section>

      {/* mobile top */}
      <section
        style={{
          backgroundImage: `url(${mobile_top})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[650px] w-full relative md:hidden"
      >
        <div className="z-30  flex flex-col justify-end h-full  space-y-[2rem] sm:px-[1.5rem] md:pl-[22.5rem] md:pb-[8.44rem] sm:pb-[calc(5.87rem+0.75rem)] ">
          <p className=" toast md:text-[#9EEFF0]   md:text-[32px] sm:text-[#9EEFF0] sm:text-[24px] font-bold  ">
            MITI 서비스 런칭
          </p>
          <p className=" toast text-[#fff]  md:text-[52px] sm:text-[24px]  font-bold  ">
            농구 경기 더 쉽게, 더 즐겁게!
          </p>
          <p className=" toast text-[#fff]  sm:text-sm md:text-xl font-[400] ">
            번거로움은 빼고 농구에 재미를 더하세요! <br />
            지금 다운로드하고 오늘 퇴근 후에 농구 어떠세요?
          </p>
          <div
            className={`shake flex items-center sm:justify-center md:justify-start sm:gap-3 md:gap-4 text-primary-white sm:px-[17.5px] md:px-0  `}
          >
            <a href={PLAYSTORE} target="_blank">
              <button
                type="button"
                className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#363636]  sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
              >
                <img src={googlePlay} alt="Google store" />
                <p>Google Play</p>
              </button>
            </a>
            <a href={APPLE_STORE} target="_blank">
              <button
                type="button"
                className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#363636] sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
              >
                <img src={appleStore} alt="Apple Store" />
                <p>App Store</p>
              </button>
            </a>
          </div>{" "}
        </div>
      </section>
      {/* <HeroMobile /> */}
      <Games />
      <GamesMobile />
      <Courts />
      <CourtsMobile />
      <Payments />
      <PaymentsMobile />

      <div className="h-[21.375rem] w-full pt-[3.75rem] pb-[5rem] bg-primary-black">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
