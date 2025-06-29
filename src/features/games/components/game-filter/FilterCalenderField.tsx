import { DATES } from "../../../../constants/calender.ts";
import useCurrentMonthStore from "../../../../store/useCurrentMonthStore.ts";
import DateCard from "./DateCard.tsx";

const FilterCalenderField = () => {
  const datesList = DATES();

  const { currentMonth } = useCurrentMonthStore();

  return (
    <div className="md:py-[2rem] md:px-[2.5rem] sm:py-[1.25rem] sm:px-[1.31rem] space-y-[0.75rem]">
      <div className="flex items-center gap-[0.75rem]">
        <h1 className="sm:font-[600] md:font-bold sm:text-sm md:text-base text-secondary-white">
          날짜
        </h1>
        <span className="font-[400] text-[12px] text-[#D4D4D4]">
          {currentMonth}월
        </span>
      </div>

      <div className="flex items-center gap-[0.5rem] overflow-x-auto ">
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
  );
};

export default FilterCalenderField;
