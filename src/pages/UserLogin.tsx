import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import mitiLogo from "../assets/MITI_logo.svg";
import backArrow from "../assets/Chevron_Left.png";

export const UserLogin = () => {
  return (
    <div className=" ">
      <div className="p-4">
        <img src={backArrow} alt="back arrow" />
      </div>
      <hr className="w-full" />
      <div className="flex items-center flex-col px-[16px]  py-[24px]">
        <div className="mb-[36px] flex flex-col gap-2">
          <img src={mitiLogo} alt="miti logo" />
          <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
        </div>
        <LoginForm />
        <div className="flex gap-4 text-[#585858] text-[14px]">
          <p className="">아직 회원이 아니신가요? </p>
          <Link to="/signup" className="text-[#4065F6]">
            회원가입하기
          </Link>
        </div>
        <div className="flex gap-4 justify-center text-[#8c8c8c] text-[13px]">
          <p>고객센터</p>
          <p>|</p>
          <p>ID / PW를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
};
