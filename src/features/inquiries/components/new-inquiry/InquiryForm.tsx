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

  const passwordRegex = /^[0-9]{4}$/;

  const isFormFilled =
    title && password && content && nickname && passwordRegex.test(password);

  const handleTogglePassword = useCallback(() => {
    setDisplayPassword((prev) => !prev);
  }, [setDisplayPassword]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <FormTitleInput register={register} erase_input={erase_input} />

      <FormContentInput register={register} />
      <div className="flex items-center justify-center gap-[32px] w-full ">
        <FormNicknameInput register={register} erase_input={erase_input} />
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
