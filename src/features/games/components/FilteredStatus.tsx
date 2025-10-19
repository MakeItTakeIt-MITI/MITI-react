import closeIcon from "../../../assets/v1.3/chip/status_close.svg";

interface FilteredStatusProps {
  content: string;
  handleDisplayFilterBox: () => void;
}

const FilteredStatus = ({ content, handleDisplayFilterBox }: FilteredStatusProps) => {
  // Don't render if content is empty
  if (!content) {
    return null;
  }

  return (
    <span className="bg-[#292929] text-[#1ADCDF] text-sm font-[500] flex items-center gap-1 px-4 py-2 rounded-[50px] border border-[#292929] cursor-pointer whitespace-nowrap">
      <span>{content}</span>
      <button 
        onClick={handleDisplayFilterBox}
        type="button"
        className="ml-1 flex items-center"
      >
        <img src={closeIcon} alt="close filter" />
      </button>
    </span>
  );
};

export default FilteredStatus;