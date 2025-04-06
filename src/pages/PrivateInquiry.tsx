import { useState } from "react";
import open from "../assets/v11/display-password.svg";
import close from "../assets/v11/hide-password.svg";
import Footer from "../components/common/Footer.tsx";

// eslint-disable-next-line import/named
import { SubmitHandler, useForm } from "react-hook-form";
import { PrivateInquiryField } from "../interfaces/support.ts";
import { usePrivateInquiryHook } from "../features/inquiries/hooks/usePrivateInquiryHook.tsx";
import MoveToAppBanner from "../components/common/MoveToAppBanner.tsx";

const PrivateInquiry = () => {
  const [displayPassword, setDisplayPassword] = useState(false);

  const { register, handleSubmit, watch, reset } =
    useForm<PrivateInquiryField>();
  const { mutate } = usePrivateInquiryHook(reset);

  const onSubmit: SubmitHandler<PrivateInquiryField> = (data) => {
    mutate(data);
  };

  const title = watch("title");
  const password = watch("password");
  const content = watch("content");
  const nickname = watch("nickname");

  console.log(title?.length);

  const passwordRegex = /^[0-9]{4}$/;

  const isFormFilled =
    title && password && content && nickname && passwordRegex.test(password);

  const handleTogglePassword = () => setDisplayPassword(!displayPassword);
  return (
    <section className="bg-secondary-black  md:pt-[3.75rem]  md:space-y-[100px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[767px] sm:w-full sm:p-5 md:p-0 sm:space-y-[22px] md:space-y-[42px] mx-auto"
      >
        {/* title */}
        <div className="sm:space-y-4  md:space-y-5">
          <h1 className="text-white sm:text-[26px] md:text-[32px] font-semibold  ">
            문의하기
          </h1>
          <p className="text-white sm:text-sm md:text-xl font-normal  ">
            서비스 이용에 어려움이 있다면 문의를 작성해주세요!
          </p>
        </div>
        {/* description2 */}
        <div className="space-y-[20px]">
          <p className="md:h-[54px] text-white sm:text-[12px] md:text-sm font-normal leading-[21px]">
            계정과 관련된 문의라면 “계정 문의 (로그인, 인증, 제재, 탈퇴, 신고
            등)” 내용을 문의 내용에 작성해주세요. 자세히 작성 할수록 정확한
            답변이 가능합니다.
          </p>
          <div className="  sm:text-sm md:text-lg font-normal  text-primary-white">
            <input
              {...register("title")}
              autoComplete="off"
              placeholder="문의의 제목을 입력해주세요."
              maxLength={32}
              type="text"
              className="w-full p-5 border border-[#737373] focus:border-[#7FEEF6] focus:outline-none  bg-secondary-black rounded-[10px] sm:h-[60px] md:h-[64px]"
            />
          </div>
        </div>

        {/* inquiry */}
        <textarea
          {...register("content")}
          style={{
            resize: "none",
          }}
          placeholder="문의 내용을 입력해주세요."
          className="w-full h-[262px] border border-[#737373] focus:border-[#7FEEF6] focus:outline-none  p-5 sm:text-sm md:text-[18px] font-[400] rounded-[10px] bg-secondary-black text-primary-white"
        />

        <div className="flex md:flex-row sm:flex-col  sm:gap-[30px] md:gap-5  sm:text-sm md:text-lg font-normal leading-[18px] text-primary-white">
          <input
            {...register("nickname")}
            autoComplete="off"
            placeholder="닉네임"
            type="text"
            className="w-full p-5 border border-[#737373] focus:border-[#7FEEF6] focus:outline-none  bg-secondary-black rounded-[10px] sm:h-[60px] md:h-[64px]"
          />
          <div className="">
            <div className="relative  ">
              {" "}
              <input
                {...register("password")}
                autoComplete="new-password"
                placeholder="비밀번호"
                type={displayPassword ? "text" : "password"}
                inputMode="numeric"
                pattern="[0-9]*"
                className="  bg-secondary-black border border-[#737373] focus:border-[#7FEEF6] focus:outline-none  p-5  rounded-[10px] sm:w-full md:w-[250px] sm:h-[60px] md:h-[64px]"
              />
              <button onClick={handleTogglePassword}>
                <img
                  src={displayPassword ? open : close}
                  alt="show password"
                  className=" absolute right-5 top-0 bottom-0 my-auto sm:size-5 md:size-6"
                />
              </button>
            </div>
            {password && !passwordRegex.test(password) && (
              <p className="text-[#FF4079] text-xs p-2 ">
                비밀번호는 숫자 4자리만 입력할 수 있습니다.
              </p>
            )}
          </div>
        </div>

        <hr className="text-[#525252] w-full" />

        {/* 안내사항 */}
        <div className="space-y-[10px] text-primary-white ">
          <h2 className=" sm:text-base md:text-xl font-bold font-['Pretendard'] leading-tight">
            안내사항
          </h2>
          <ul className="list-disc pl-5 custom-dotted-list space-y-[5px] sm:text-sm md:text-base sm:font-[400] md:font-medium leading-none">
            <li>답변에는 시간이 소요됩니다. 조금만 기다려주세요!</li>
            <li>
              문의 내용을 상세히 작성해주시면 더욱 정확한 답변이 가능합니다.
            </li>
            <li>욕설이나 비방이 담긴 문의에는 답변이 작성되지 않습니다.</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isFormFilled ? false : true}
          style={{
            backgroundColor: isFormFilled ? "#7FEEF0" : "#737373",
            color: isFormFilled ? "#262626" : "#f4f4f4",
          }}
          className="w-full h-[48px] font-bold  rounded-lg"
        >
          작성하기
        </button>
        <MoveToAppBanner />
      </form>

      <Footer />
    </section>
  );
};

export default PrivateInquiry;
