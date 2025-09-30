import instagram_icon from "../../../assets/v1.3/footer/instagram-link.svg";
import youtube_icon from "../../../assets/v1.3/footer/youtube.svg";
import miti_logo from "../../../assets/v1.3/footer/miti_logo.svg";
import miti_logo_sm from "../../../assets/v1.3/footer/miti_logo_sm.svg";
import playstore from "../../../assets/v1.3/footer/google-play.svg";
import applestore from "../../../assets/v1.3/footer/Apple Store.svg";
import { Link } from "react-router-dom";
import { APPLE_STORE, PLAYSTORE } from "../../../utils/app.ts";

const Footer = () => {
  return (
    <>
      <footer className="w-full md:h-[246px] sm:h-[300px] bg-[#141414]  sm:px-4 md:px-0 py-[30px] flex flex-col items-center justify-center gap-5">
        <div className="md:w-[668px] sm:w-full h-full flex sm:flex-col-reverse md:flex-row justify-between sm:gap-5 md:gap-0 py-[20px]">
          {/* LEFT */}
          <div className="flex flex-col gap-5">
            {/* 서비스 약관 및 고객센타 */}
            <ul className="flex items-center gap-4 text-white font-fold text-xs">
              <li>
                {" "}
                <Link to="/policies" className="font-bold">
                  서비스 약관
                </Link>
              </li>
              <li className="w-[1px] h-[10px] bg-white "></li>
              <li>
                <Link to="/inquiries" className="font-bold">
                  고객센터
                </Link>
              </li>
            </ul>
            {/* 미티 및 대표 정보 */}
            <ul className="text-[#999] text-xs font-[400] space-y-2">
              <li className="flex items-center gap-3">
                <span>대표 </span> <span>전재완</span>
              </li>
              <li className="flex items-center gap-3">
                <span>전화 </span> <span>010-8039-2165</span>
              </li>
              <li className="flex items-center gap-3">
                <span>메일</span> <span>makeittakeit.official@gmail.com </span>
              </li>
              <li className="flex items-center gap-3">
                <span>주소</span> <span>인천광역시 동구 화도진로 16</span>
              </li>
              <li className="flex items-center gap-3">
                <span>사업자 번호</span> <span>547-03-03467 </span>
              </li>
            </ul>
            {/* SNS 바로가기 */}
            <div className="flex items-center gap-5">
              <div>
                <a
                  href="https://www.instagram.com/miti_makeittakeit_official/"
                  target="_blank"
                >
                  <img src={instagram_icon} alt="instagram_icon" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@MITI_MakeItTakeIt/"
                  target="_blank"
                >
                  <img src={youtube_icon} alt="youtube_icon" />
                </a>
              </div>
            </div>
            <span className="text-[#707070] font-[500] text-[10px] sm:block md:hidden text-center">
              Copyright MITI All Rights Reserved.
            </span>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col items-center justify-center gap-[38px] ">
            {/* LOGO */}
            <img
              src={miti_logo}
              alt="make it take it logo"
              className="sm:hidden md:block"
            />
            <img
              src={miti_logo_sm}
              alt="make it take it logo"
              className="md:hidden sm:block"
            />
            {/*  STORsE */}
            <div className="sm:hidden md:flex gap-[0.75rem]">
              <a href={PLAYSTORE} target="_blank">
                <button className="flex items-center justify-center  rounded-lg text-[#999]  bg-transparent border border-[#999] space-x-[8px] py-2 px-4 ">
                  <img src={playstore} alt="google playstore" />
                  <span className="text-xs font-bold">Google Play</span>
                </button>
              </a>
              <a href={APPLE_STORE} target="_blank">
                <button className="flex items-center justify-center  rounded-lg text-[#999]  bg-transparent border border-[#999]  space-x-[8px]  py-2 px-4">
                  <img src={applestore} alt="app store" />
                  <span className="text-xs font-bold">App Store</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <span className="text-[#707070] font-[500] text-[10px] sm:hidden md:block">
          Copyright MITI All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
