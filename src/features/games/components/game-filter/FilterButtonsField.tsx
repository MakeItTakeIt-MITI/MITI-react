interface FilterButtonProps {
  handleResetFilters: () => void;
  handleApplyFilters: () => void;
}
const FilterButtonsField = ({
  handleResetFilters,
  handleApplyFilters,
}: FilterButtonProps) => {
  return (
    <div className="md:py-[2rem] md:px-[2.5rem] sm:py-[1.25rem] sm:px-[1.31rem] flex items-center gap-[0.75rem]">
      <button
        type="button"
        onClick={handleResetFilters}
        className="w-[6.125rem] h-[3rem] py-[1rem] px-[1.25rem] flex items-center justify-center bg-[#737373] text-secondary-white font-[500] rounded-[0.5rem] "
      >
        초기화
      </button>

      <button
        type="button"
        onClick={handleApplyFilters}
        className="w-full h-full p-[0.62rem] flex items-center justify-center rounded-[0.5rem] bg-primary-teal text-secondary-black font-bold"
      >
        적용하기
      </button>
    </div>
  );
};

export default FilterButtonsField;
