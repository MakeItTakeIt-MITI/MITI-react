import instagram from "../../assets/v11/instagram.svg";
import miti_logo from "../../assets/v11/footer-logo.svg";
import playstore from "../../assets/v11/google-play.svg";
import applestore from "../../assets/v11/apple-store.svg";
import { Link } from "react-router-dom";
import { APPLE_STORE, PLAYSTORE } from "../../utils/app.ts";

const Footer = () => {
  return (
    <>
      {/* NON MOBILE */}
      <footer className="sm:hidden md:block h-[17.5rem] w-full bg-primary-black   pt-[3.75rem] pb-[5rem]">
        <div className="flex items-center justify-between w-[768px] mx-auto ">
          {/* LEFT Container */}
          <div className="space-y-[2rem]">
            {/* top text */}
            <div className="space-y-[1.25rem]">
              {/* 이용약관 / 개인정보 / 위치기반 이용약관 */}
              <div className="space-x-[1.25rem] text-[#E5E5E5] text-[12px] font-bold">
                <Link to="/policies">서비스 약관</Link>
              </div>

              {/* contact */}
              <div className="space-y-[0.75rem] font-[400] text-[12px] text-[#D4D4D4]">
                <div className="space-x-[1.25rem] ">
                  <span>대표 : 전재완</span>
                  <span>사업자번호 : 547-03-03467</span>
                  <span>전화 : 010-8238-2165</span>
                </div>
                <div className="space-x-[1.25rem] ">
                  <span>주소 : 인천광역시 동구 화도진로 16</span>
                  <span>메일 : miti.makeittakeit@makeittakeit.kr</span>
                </div>
              </div>
            </div>
            {/* icon */}
            <div>
              <a
                href="https://www.instagram.com/miti_makeittakeit_official/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
          {/* RIGHT container */}
          <div className="flex flex-col items-center w-[16.5rem] h-[8rem] space-y-[2.88rem]">
            <div className="">
              <img src={miti_logo} alt="logo" className="h-[42px]" />
            </div>

            <div className="flex gap-[0.75rem]">
              <a href={PLAYSTORE} target="_blank">
                <button className="flex items-center justify-center  rounded-[10px] text-[#fff] bg-dark-card space-x-[8px] py-2 px-4 ">
                  <img src={playstore} alt="google playstore" />
                  <span className="text-[12px] font-bold">Google Play</span>
                </button>
              </a>
              <a href={APPLE_STORE} target="_blank">
                <button className="flex items-center justify-center  rounded-[10px] text-[#fff]  bg-dark-card space-x-[8px]  py-2 px-4">
                  <img src={applestore} alt="app store" />
                  <span className="text-[12px] font-bold">App Store</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE */}
      <footer className=" sm:flex items-center justify-center h-[26rem] px-[0.81rem] py-[3.75rem] md:hidden bg-primary-black">
        <div className="space-y-[2.5rem]">
          <div className="flex justify-center">
            <img
              src={miti_logo}
              alt="miti logo"
              className=" w-[82px] h-[42px]"
            />
          </div>

          <div className="space-y-[1.25rem]">
            <div className="flex items-center gap-[1.25rem] text-[#E5E5E5] font-bold text-[12px]">
              <Link to="/policies">서비스 약관</Link>
              <p>|</p>
              <Link to="/inquiries">고객센터</Link>
            </div>
            <div className="space-y-[0.75rem] text-[#d4d4d4] font-[400] text-[12px]">
              <div className="flex items-center gap-[1.25rem]">
                <span>대표 : 전재완</span>
                <span>사업자번호 : 547-03-03467</span>
              </div>

              <div className="flex items-center gap-[1.25rem]">
                <span>전화 : 010-8238-2165</span>
                <span>메일 : miti.makeittakeit@makeittakeit.kr</span>
              </div>
              <div>
                <span>주소 : 인천광역시 동구 화도진로 16</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://www.instagram.com/miti_makeittakeit_official/"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <h2 className="text-center text-[10px] text-[#C8C8C8] font-[300]">
            Copyright MITI All Rights Reserved.
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
