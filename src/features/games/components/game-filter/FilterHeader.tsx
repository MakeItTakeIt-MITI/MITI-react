import useGameFilterStore from "../../../../store/useGameFilterStore.ts";
import close from "../../../../assets/v11/close.svg";
import FilteredStatus from "./FilteredStatus.tsx";

type FilterHeaderProps = {
  handleToggleFilterBox: () => void;
  handleResetFilters: () => void;
};

const FilterHeader = ({
  handleToggleFilterBox,
  handleResetFilters,
}: FilterHeaderProps) => {
  const { selectedStatus, selectedDate, selectedTimeDate } =
    useGameFilterStore();

  return (
    <div className="sm:py-[1rem] sm:px-[0.81rem] md:p-[1.25rem] w-full flex items-center justify-between ">
      <div className="flex space-x-[0.5rem] md:overflow-hidden sm:overflow-x-scroll mr-2  ">
        <FilteredStatus content={selectedDate} />
        <FilteredStatus content={selectedTimeDate} />
        <FilteredStatus content={selectedStatus} />
      </div>
      <button
        onClick={() => {
          handleResetFilters();
          handleToggleFilterBox();
        }}
      >
        <img src={close} alt="close" />
      </button>
    </div>
  );
};

export default FilterHeader;
