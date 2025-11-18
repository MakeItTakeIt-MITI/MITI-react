import { UseFormRegister } from "react-hook-form";
import { PrivateInquiryField } from "../../../../interfaces/support";

interface FormContentInputProps {
  register: UseFormRegister<PrivateInquiryField>;
}

const FormContentInput = ({ register }: FormContentInputProps) => {
  return (
    <div className="space-y-1">
      <h4 className="text-sm text-[#fff]"> 문의 내용</h4>
      <textarea
        {...register("content")}
        style={{
          resize: "none",
        }}
        placeholder="문의 내용을 입력해주세요."
        className="bg-[#141414] w-full h-[220px]  border border-[#737373] focus:outline-none  p-2.5 sm:text-sm md:text-base font-[400] rounded-[10px]  text-primary-white"
      />
    </div>
  );
};

export default FormContentInput;
