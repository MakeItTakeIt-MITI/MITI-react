import erase_input from "../../../../assets/v1.3/icon/erase_input.svg";

import InquiryFormSubmitButton from "./FormSubmitButton.tsx";
import NewInquiryNotice from "./NewInquiryNotice.tsx";
import FormTitleInput from "./FormTitleInput.tsx";
import FormContentInput from "./FormContentInput.tsx";
import FormNicknameInput from "./FormNicknameInput.tsx";
import FormPasswordInput from "./FormPasswordInput.tsx";

interface InquiryFormProps {
  handleSubmit: () => void;
  onSubmit: (arg: any) => void;
  register: any;
  displayPassword: boolean;
  handleTogglePassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
  password: string;
  isFormFilled: boolean | string;
  passwordRegex: RegExp;
}

const InquiryForm = ({
  handleSubmit,
  onSubmit,
  register,
  displayPassword,
  handleTogglePassword,
  password,
  isFormFilled,
  passwordRegex,
}: InquiryFormProps) => {
  return (
    <form className="space-y-5">
      {/* INQUIRY TITLE */}
      <FormTitleInput register={register} erase_input={erase_input} />

      {/*  CONTENT */}
      <FormContentInput register={register} />
      {/*  NICKNAME + PASSWORD */}
      <div className="flex items-center justify-center gap-[32px] w-full ">
        {/* NICKNAME */}
        <FormNicknameInput register={register} erase_input={erase_input} />
        {/* PASSWORD */}
        <FormPasswordInput
          register={register}
          displayPassword={displayPassword}
          handleTogglePassword={handleTogglePassword}
        />
      </div>

      <hr className="text-[#525252] w-full" />

      {/* 안내사항 */}
      <NewInquiryNotice />
      <InquiryFormSubmitButton isFormFilled={isFormFilled} />
    </form>
  );
};

export default InquiryForm;
