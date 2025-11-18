import { useCallback, useState } from "react";
import { PrivateInquiryField } from "../../../../interfaces/support";
import { usePrivateInquiryHook } from "../../hooks/usePrivateInquiryHook";
import { SubmitHandler, useForm } from "react-hook-form";

import erase_input from "../../../../assets/v1.3/icon/erase_input.svg";
import FormTitleInput from "./FormTitleInput";
import FormContentInput from "./FormContentInput";
import FormNicknameInput from "./FormNicknameInput";
import FormPasswordInput from "./FormPasswordInput";
import NewInquiryNotice from "./NewInquiryNotice";
import FormSubmitButton from "./FormSubmitButton";

const InquiryForm = () => {
  const [displayPassword, setDisplayPassword] = useState(false);

  const { register, handleSubmit, watch, reset, setValue } =
    useForm<PrivateInquiryField>();
  const { mutate } = usePrivateInquiryHook(reset);

  const onSubmit: SubmitHandler<PrivateInquiryField> = (data) => {
    mutate(data);
  };

  const title = watch("title");
  const password = watch("password");
  const content = watch("content");
  const nickname = watch("nickname");

  // const passwordRegex = /^[0-9]{4}$/;

  // validations per spec
  const passwordRegex = /^.{4,20}$/;
  const nicknameRegex = /^[A-Za-z0-9가-힣]{2,15}$/; // 2~15 chars: Korean/English/numbers

  const titleTrim = (title ?? "").trim();
  const contentTrim = (content ?? "").trim();
  const nicknameTrim = (nickname ?? "").trim();
  const passwordStr = password ?? "";

  const titleOk = titleTrim.length > 0 && titleTrim.length <= 32;
  const contentOk = contentTrim.length > 0; // no max length, just required
  const passwordOk = passwordRegex.test(passwordStr);
  const nicknameOk = nicknameRegex.test(nicknameTrim);

  const isFormFilled = titleOk && contentOk && passwordOk && nicknameOk;

  const handleTogglePassword = useCallback(() => {
    setDisplayPassword((prev) => !prev);
  }, [setDisplayPassword]);

  const handleClear = (value: "title" | "nickname") => setValue(value, "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <FormTitleInput
        register={register}
        erase_input={erase_input}
        title={title}
        handleClear={handleClear}
      />

      <FormContentInput register={register} />
      <div className="flex md:flex-row sm:flex-col items-center justify-center md:gap-[32px] sm:gap-5 w-full ">
        <FormNicknameInput
          register={register}
          erase_input={erase_input}
          nickname={nickname}
          handleClear={handleClear}
        />
        <FormPasswordInput
          register={register}
          displayPassword={displayPassword}
          handleTogglePassword={handleTogglePassword}
        />
      </div>
      <hr className="text-[#525252] w-full" />
      {/* 안내사항 */}
      <NewInquiryNotice />
      <FormSubmitButton isFormFilled={isFormFilled} />
    </form>
  );
};

export default InquiryForm;
