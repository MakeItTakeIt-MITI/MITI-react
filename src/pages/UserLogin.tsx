import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import mitiLogo from "../assets/MITI_logo.svg";
import backArrow from "../assets/Chevron_Left.png";
import kakaoLogin from "../assets/kakao_login_medium_wide.png";

export const UserLogin = () => {
  const navigate = useNavigate();

  const navigatePrev = () => navigate(-1);

  return (
    <div className="mb-[4rem]">
      <button className="p-4" onClick={navigatePrev}>
        <img src={backArrow} alt="back arrow" />
      </button>
      <hr className="w-full" />
      <div className="flex items-center flex-col px-[16px]  py-[24px]">
        <div className="mb-[36px] flex flex-col gap-2">
          <img src={mitiLogo} alt="miti logo" />
          <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
        </div>
        <LoginForm />
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-center text-[#8C8C8C] text-[12px]">또는</p>
          <button className="">
            <img src={kakaoLogin} alt="kakao login" className="w-[343px]" />
          </button>
          <div className="flex justify-center  gap-4 text-[#585858] text-[14px]">
            <p className="">아직 회원이 아니신가요? </p>
            <Link to="/signup" className="text-[#4065F6]">
              회원가입하기
            </Link>
          </div>
          <div className="  flex  justify-center  gap-4 text-[#8c8c8c] text-[13px]">
            <p>고객센터</p>
            <p>|</p>
            <p>ID / PW를 잊으셨나요?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
