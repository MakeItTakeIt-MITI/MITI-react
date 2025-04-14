import logo from "../../assets/v11.2/auth/logo.svg";
import private_pass from "../../assets/v11.2/auth/private.svg";
import kakao_msg from "../../assets/v11.2/auth/kakao_msg.svg";
import Footer from "../../components/common/Footer.tsx";
import { useRef } from "react";
import { useEmailLoginHook } from "../../features/auth/hooks/useEmailLoginHook.tsx";

export const Auth = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: mutateLogin } = useEmailLoginHook();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    mutateLogin({
      email: email,
      password: password,
    });
  };

  return (
    <>
      <section className=" w-full sm:h-full sm:pb-[116px] md:h-[760px] flex items-center justify-center">
        {/* auth frame  */}
        <div className="md:w-[375px] sm:w-full  md:h-[600px] sm:h-full flex flex-col items-center gap-[42px] ">
          {/* logo */}
          <div className="h-[110px] w-full flex items-center justify-center ">
            <img src={logo} alt="miti logo" />
          </div>
          <form className="flex flex-col  space-y-[42px] ">
            {/* email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-[#D4D4D4] font-[400]"
              >
                이메일
              </label>
              <input
                type="text"
                ref={emailRef}
                id="email"
                placeholder="이메일을 입력해주세요."
                className="focus:outline-none  focus:border-none w-[333px] h-[48px] px-5 py-4 text-base font-[500] rounded-lg bg-[#404040] text-[#F1F1F1]"
              />
            </div>
            {/* password */}

            <div className=" flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm text-[#D4D4D4] font-[400]"
              >
                비밀번호
              </label>

              <div className="relative w-[333px] h-[48px] space-y-4 ">
                <input
                  type="password"
                  ref={passwordRef}
                  id="password"
                  placeholder="비밀번호를 입력해주세요."
                  className=" focus:outline-none  focus:border-none w-full h-full  pl-5 pr-[px] py-4  rounded-lg bg-[#404040] text-base font-[500]  text-[#F1F1F1]"
                />

                <button
                  type="button"
                  className="absolute right-5 top-0 bottom-4   flex items-center"
                >
                  <img src={private_pass} alt="hide password" />
                </button>

                {/* statuscode error display text */}
                {/* <span className="text-[#FF4079] text-xs font-[500]">
                  이메일이나 비밀번호가 일치하지 않습니다.
                </span> */}
              </div>
            </div>
            {/* login button + kakao login */}

            <div className="space-y-4">
              <button
                type="button"
                onClick={handleLogin}
                className=" w-[333px] h-[48px] bg-[#737373] text-sm text-[#f1f1f1] font-[700] rounded-lg"
              >
                로그인 하기
              </button>

              <p className="text-center text-xs text-[#EAEAEA]">또는</p>
              <div className="relative w-[333px] h-[48px] bg-[#FAE64D] rounded-lg">
                <img
                  src={kakao_msg}
                  alt="kakao"
                  className="absolute left-5 top-0 bottom-0 my-auto"
                />
                <button
                  type="button"
                  className="w-full h-full font-[700] text-sm text-[#262626] "
                >
                  {" "}
                  카카오로 3초 만에 시작하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
