import { GAMESTATUS } from "../../constants/status.ts";
import useGameStatusStore from "../../features/map/store/useGameStatusStore.ts";
import useStatusSelectionStore from "../../store/useStatusSelectionStore.ts";

const FilterStatusField = () => {
  const { selectedStatuses, toggleStatus } = useStatusSelectionStore();
  const { status, setStatus } = useGameStatusStore();

  return (
    <div className="md:py-[2rem] md:px-[2.5rem] sm:py-[1.25rem] sm:px-[1.31rem] space-y-[1.25rem]">
      <h1 className="sm:font-[600] md:font-bold sm:text-sm md:text-base text-secondary-white">
        경기 상태
      </h1>
      <div className="sm:gap-[0.5rem] md:gap-[1rem] flex justify-center items-center">
        {GAMESTATUS.map((selectedStatus, index) => {
          // const isSelected = selectedStatus.includes(status); // Check if the current status is selected
          const isSelected = status === selectedStatus; // Check if the current status is selected
          return (
            <button
              key={index}
              type="button"
              onClick={() => setStatus(status)}
              style={{
                border: !isSelected ? "1px solid #A3A3A3" : "1px solid #7FEEF0",
                color: !isSelected ? "#A3A3A3" : "#7FEEF0",
              }}
              className="flex items-center justify-center sm:text-sm md:text-base sm:font-[400] md:font-[500] sm:w-[4.8125rem] sm:h-[2.25rem] md:w-[10rem] md:h-[2.25rem] sm:rounded-[0.5rem] md:rounded-[1.25rem]"
            >
              {selectedStatus}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterStatusField;
