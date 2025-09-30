import { InitialDateField } from "../../interface/games";

interface DatesFieldProps {
  INITIAL_DATES: InitialDateField[];
  yearParam: string | null;
  monthParam: string | null;
  dayParam: string | null;
  handleDateClick: (date: InitialDateField) => void;
}

export default function DatesField({
  INITIAL_DATES,
  yearParam,
  monthParam,
  dayParam,
  handleDateClick,
}: DatesFieldProps) {
  const selectedDate = `${yearParam}-${monthParam
    ?.toString()
    .padStart(2, "0")}-${dayParam?.toString().padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-white">날짜</p>
      <div
        style={{
          scrollbarWidth: "none",
        }}
        className="px-4 flex gap-4 overflow-x-auto"
      >
        <p className="text-[#7FEEF0] font-bold text-sm w-[37px] flex-shrink-0 flex items-center justify-center">
          {Number(monthParam) <= 12 && Number(monthParam) > 0
            ? `${Number(monthParam)}월`
            : ""}
        </p>
        <ul className="flex gap-4 text-[#707070] text-xs font-bold">
          {INITIAL_DATES.map((date: InitialDateField) => {
            const dateString = `${date.year}-${date.formattedMonth}-${date.formattedDate}`;
            const isSelected = dateString === selectedDate;
            return (
              <li
                key={dateString}
                className={`flex flex-col items-center justify-center gap-2 px-1 w-[32px] cursor-pointer `}
                onClick={() => handleDateClick(date)}
              >
                <span
                  style={{
                    color: date.dayKorean === "일" ? "#E83E3B" : "",
                  }}
                >
                  {date.dayKorean}
                </span>
                <span
                  className={`rounded-full px-4 py-2 w-full flex items-center justify-center  transition duration-500
    ${isSelected ? "bg-[#1ADCDF] text-[#000]" : "bg-transparent text-inherit"}
  `}
                >
                  {date.date}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
