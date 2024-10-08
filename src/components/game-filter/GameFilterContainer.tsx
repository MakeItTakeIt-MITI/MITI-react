import FilterTimeField from "./FilterTimeField";
import FilterButtonsField from "./FilterButtonsField";
import FilterCalenderField from "./FilterCalenderField";
import FilterHeader from "./FilterHeader";
import FilterStatusField from "./FilterStatusField";
import useGameFilterStore from "../../store/useGameFilterStore";
import useTimeFieldStore from "../../store/useTimeStore";
import useStatusSelectionStore from "../../store/useStatusSelectionStore";
import useDateSelectionStore from "../../store/useDateSelectionStore";

interface GameFilterProps {
  handleCloseFilterBox: () => void;
  handleResetFilters: () => void;
}

const GameFilterContainer = ({
  handleCloseFilterBox,
  handleResetFilters,
}: GameFilterProps) => {
  // stage management store
  const { setSelectedStatus, setSelectedDate, setSelectedTimeDate } =
    useGameFilterStore();

  const { selectedDayStatus, selectedHour, selectedMinute } =
    useTimeFieldStore();
  const { selectedStatuses } = useStatusSelectionStore();
  const { dateField } = useDateSelectionStore();

  const timeFormat = `${selectedDayStatus} ${selectedHour}:${selectedMinute}`;

  const handleApplyFilters = () => {
    if (dateField.length > 1) {
      setSelectedDate(dateField);
    }
    setSelectedTimeDate(timeFormat);

    if (selectedStatuses.length >= 1 && selectedStatuses.length < 2) {
      setSelectedStatus(`${selectedStatuses}`);
    } else if (selectedStatuses.length > 1 && selectedStatuses.length <= 4) {
      const statusSpacing = `${selectedStatuses} `;
      setSelectedStatus(statusSpacing);
    }

    handleCloseFilterBox();
  };

  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.64)",
      }}
      className=" overflow-hidden fixed top-0 right-0 bottom-0 left-0 h-full  z-[999] "
    >
      <div className="rounded-tl-[20px] rounded-tr-[20px] absolute right-0 bottom-0 left-0 mx-auto sm:w-full md:w-[48rem]   bg-secondary-black">
        <FilterHeader handleCloseFilterBox={handleCloseFilterBox} />
        <hr className="border-[#404040] " />
        <FilterCalenderField />
        <hr className="border-[#404040] " />
        <FilterTimeField />
        <hr className="border-[#404040] " />
        <FilterStatusField />

        <hr className="border-[#404040] " />
        <FilterButtonsField
          handleResetField={handleResetFilters}
          handleApplyFilters={handleApplyFilters}
        />
      </div>
    </section>
  );
};

export default GameFilterContainer;
