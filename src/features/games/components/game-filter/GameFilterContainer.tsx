import FilterTimeField from "./FilterTimeField.tsx";
import FilterButtonsField from "./FilterButtonsField.tsx";
import FilterHeader from "./FilterHeader.tsx";
import FilterStatusField from "./FilterStatusField.tsx";
import DateCard from "./DateCard.tsx";
import { DATES } from "../../../../constants/calender.ts";

interface GameFilterProps {
  handleToggleFilterBox: () => void;
  handleResetFilters: () => void;
  handleApplyFilters: () => void;
  currentMonth: number;
}

const GameFilterContainer = ({
  handleToggleFilterBox,
  handleResetFilters,
  handleApplyFilters,
  currentMonth,
}: GameFilterProps) => {
  const datesList = DATES();

  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.64)",
      }}
      className=" overflow-hidden fixed top-0 right-0 bottom-0 left-0 h-full  z-[999] "
    >
      <div className="rounded-tl-[20px] rounded-tr-[20px] absolute right-0 bottom-0 left-0 mx-auto sm:w-full md:w-[48rem]   bg-secondary-black">
        <FilterHeader
          handleToggleFilterBox={handleToggleFilterBox}
          handleResetFilters={handleResetFilters}
        />
        <hr className="border-[#404040] " />
        {/* <FilterCalenderField /> */}
        <div className="md:py-[2rem] md:px-[2.5rem] sm:py-[1.25rem] sm:px-[1.31rem] space-y-[0.75rem]">
          <div className="flex items-center gap-[0.75rem]">
            <h1 className="sm:font-[600] md:font-bold sm:text-sm md:text-base text-secondary-white">
              날짜
            </h1>
            <span className="font-[400] text-[12px] text-[#D4D4D4]">
              {currentMonth}월
            </span>
          </div>

          <div className="flex items-center gap-[0.5rem] overflow-x-auto custom-dates-scrollbar">
            {datesList.map((date, index) => (
              <DateCard
                key={index}
                dayOfWeek={date.dayKorean}
                date={date.date}
                month={date.month}
                year={date.year}
                formattedDate={date.formattedDate}
                formattedMonth={date.formattedMonth}
              />
            ))}
          </div>
        </div>

        <hr className="border-[#404040] " />
        <FilterTimeField />
        <hr className="border-[#404040] " />
        <FilterStatusField />

        <hr className="border-[#404040] " />
        <FilterButtonsField
          handleResetFilters={handleResetFilters}
          handleApplyFilters={handleApplyFilters}
        />
      </div>
    </section>
  );
};

export default GameFilterContainer;
