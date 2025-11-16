import { UseFormRegister } from "react-hook-form";
import { PrivateInquiryField } from "../../../../interfaces/support";

interface FormTitleInputProps {
  register: UseFormRegister<PrivateInquiryField>;
  erase_input: string;
  title: string;
  handleClear: (value: "title") => void;
}

const FormTitleInput = ({
  register,
  erase_input,
  title,
  handleClear,
}: FormTitleInputProps) => {
  return (
    <div className="space-y-1">
      <h4 className="text-sm text-[#fff]"> 문의 제목</h4>
      <div className="flex h-[44px] gap-3 items-center w-full p-2.5 border border-[#737373]  rounded-[10px] ">
        <input
          {...register("title")}
          autoComplete="off"
          placeholder="제목을 입력해주세요."
          type="text"
          className="w-full bg-[#141414] border-none outline-none text-white"
        />

        {title?.length >= 1 && (
          <button onClick={() => handleClear("title")} type="button">
            <img src={erase_input} alt="erase_input" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormTitleInput;
