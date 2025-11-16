import { UseFormRegister } from "react-hook-form";
import open from "../../../../assets/v11/display-password.svg";
import close from "../../../../assets/v11/hide-password.svg";
import { PrivateInquiryField } from "../../../../interfaces/support";

interface FormPasswordInputProps {
  register: UseFormRegister<PrivateInquiryField>;
  displayPassword: boolean;
  handleTogglePassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormPasswordInput = ({
  register,
  displayPassword,
  handleTogglePassword,
}: FormPasswordInputProps) => {
  return (
    <div className="space-y-1 w-full">
      <h4 className="text-sm text-[#fff]">비밀번호</h4>
      <div className="flex h-[44px] gap-3 items-center w-full p-3 border border-[#737373]  rounded-[10px] ">
        <input
          {...register("password")}
          autoComplete="new-password"
          placeholder="숫자 4자리 비밀번호를 입력해주세요."
          maxLength={4}
          type={displayPassword ? "text" : "password"}
          className="w-full bg-[#141414] border-none outline-none text-white"
        />
        <button type="button" onClick={handleTogglePassword}>
          <img
            src={displayPassword ? open : close}
            alt="show password"
            className=""
          />
        </button>
      </div>
    </div>
  );
};

export default FormPasswordInput;
