import inquiry_button from "../../../assets/v1.3/icon/inquiry_button.svg";

interface SubmitInquiryButtonProps {
  handleSubmitInquiry: () => void;
}

const SubmitInquiryButton = ({
  handleSubmitInquiry,
}: SubmitInquiryButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleSubmitInquiry}
      style={{
        lineHeight: "24px",
      }}
      className=" w-[134px] h-[48px] p-3 flex items-center justify-center gap-2 rounded-[50px]  bg-[#1ADCDF] "
    >
      <img src={inquiry_button} alt="inquiry_button" />
      <span className=" font-bold">문의하기</span>
    </button>
  );
};

export default SubmitInquiryButton;
