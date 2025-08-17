const FormSubmitButton = ({
  isFormFilled,
}: {
  isFormFilled: boolean | string;
}) => {
  return (
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
  );
};

export default FormSubmitButton;
