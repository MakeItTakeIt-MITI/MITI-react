import { useCallback, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { PrivateInquiryField } from "../../interfaces/support.ts";
import { usePrivateInquiryHook } from "../../features/inquiries/hooks/usePrivateInquiryHook.tsx";
import InquiryFormHeader from "../../features/inquiries/components/new-inquiry/InquiryFormHeader.tsx";
import InquiryForm from "../../features/inquiries/components/new-inquiry/InquiryForm.tsx";

const NewInquiry = () => {
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
    <section className="sm:w-full  md:w-[800px]  mx-auto  md:py-[30px] flex flex-col gap-6">
      <InquiryFormHeader />
      <InquiryForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        displayPassword={displayPassword}
        handleTogglePassword={handleTogglePassword}
        password={password}
        isFormFilled={isFormFilled}
        passwordRegex={passwordRegex}
      />
    </section>
  );
};

export default NewInquiry;
