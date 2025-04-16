import logo from "../../assets/v11.2/auth/logo.svg";
import private_pass from "../../assets/v11.2/auth/private.svg";
import kakao_msg from "../../assets/v11.2/auth/kakao_msg.svg";
import Footer from "../../components/common/Footer.tsx";
import { useEmailLoginHook } from "../../features/auth/hooks/useEmailLoginHook.tsx";
import { useForm } from "react-hook-form";
import { EmailLoginField } from "../../features/auth/interface/auth.ts";
import { useState } from "react";

export const Auth = () => {
  const [status, setStatus] = useState(0);

  const { register, handleSubmit } = useForm<EmailLoginField>();

  const { mutate: mutateLogin } = useEmailLoginHook();

  const onSubmit = (data: EmailLoginField) => {
    mutateLogin(data, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        const statusCode = error.response.data.status_code;
        setStatus(statusCode);
      },
      onSuccess: (response) => {
        const statusCode = response?.status_code;
        setStatus(statusCode);
      },
    });
  };

  return (
    <>
      <section className="w-full sm:h-full sm:pb-[116px] md:h-[760px] flex items-center justify-center">
        <form
          className="flex flex-col gap-[42px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="h-[110px] w-full flex items-center justify-center">
            <img src={logo} alt="miti logo" />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm text-[#D4D4D4] font-[400]"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              style={{
                border: status === 401 ? "2px solid #FF4079" : "",
              }}
              placeholder="이메일을 입력해주세요."
              className="focus:outline-none focus:border-none w-[333px] h-[48px] px-5 py-4 text-base font-[500] rounded-lg bg-[#404040] text-[#F1F1F1]"
              {...register("email", { required: "이메일을 입력해주세요." })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm text-[#D4D4D4] font-[400]"
            >
              비밀번호
            </label>

            <div className="relative w-[333px] h-[48px] space-y-4">
              <input
                id="password"
                type="password"
                style={{
                  border: status === 401 ? "2px solid #FF4079" : "",
                }}
                placeholder="비밀번호를 입력해주세요."
                className="focus:outline-none focus:border-none w-full h-full pl-5 pr-[px] py-4 rounded-lg bg-[#404040] text-base font-[500] text-[#F1F1F1]"
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
              />

              <button
                type="button"
                className="absolute right-5 top-0 bottom-4 flex items-center"
              >
                <img src={private_pass} alt="hide password" />
              </button>

              {status === 401 && (
                <span className="text-[#FF4079] text-xs font-[500]">
                  이메일이나 비밀번호가 일치하지 않습니다.{" "}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-[333px] h-[48px] bg-[#737373] text-sm text-[#f1f1f1] font-[700] rounded-lg"
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
                className="w-full h-full font-[700] text-sm text-[#262626]"
              >
                카카오로 3초 만에 시작하기
              </button>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
    //
  );
};
