import { UseFormRegister } from "react-hook-form";
import { PrivateInquiryField } from "../../../../interfaces/support";

interface FormNicknameInputProps {
  register: UseFormRegister<PrivateInquiryField>;
  erase_input: string;
  nickname: string;
  handleClear: (value: "nickname") => void;
}
const FormNicknameInput = ({
  register,
  erase_input,
  nickname,
  handleClear,
}: FormNicknameInputProps) => {
  return (
    <div className="space-y-1 w-full">
      <h4 className="text-sm text-[#fff]">닉네임</h4>
      <div className="flex h-[44px] gap-3 items-center w-full p-3 border border-[#737373]  rounded-[10px] ">
        <input
          {...register("nickname")}
          autoComplete="new-nickname"
          placeholder="닉네임을 입력해주세요."
          type="text"
          className="w-full bg-[#141414] border-none outline-none text-white"
        />
        {nickname?.length >= 1 && (
          <button onClick={() => handleClear("nickname")} type="button">
            <img src={erase_input} alt="erase_input" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormNicknameInput;
