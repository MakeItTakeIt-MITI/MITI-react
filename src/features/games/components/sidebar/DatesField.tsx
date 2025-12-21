import { InitialDateField } from "../../interface/games";

import "./scrollbar-x-axis.css";

interface DatesFieldProps {
  INITIAL_DATES: InitialDateField[] | [];
  handleSetYearMonthDay: (year: number, month: number, day: number) => void;
  dateFormat: string;
  todayMonth: number;
}

export default function DatesField({
  INITIAL_DATES,
  handleSetYearMonthDay,
  dateFormat,
  todayMonth,
}: DatesFieldProps) {
  return (
    <div aria-labelledby="date-filter-title" className="flex flex-col gap-4">
      <p id="date-filter-title" className="font-bold text-white">
        날짜
      </p>
      <div>
        <ul
          role="listbox"
          aria-label="날짜 선택"
          aria-describedby="date-filter-title"
          className="pb-2 flex gap-2 text-[#707070] text-xs font-bold overflow-x-scroll scrollbar-x-wide"
        >
          {/* 첫 번째 월 표시 (시작 월) */}
          <li
            className="text-[#7FEEF0] font-bold text-sm w-[37px] flex-shrink-0 flex items-center justify-center"
            aria-label={`${Number(todayMonth)}월`}
          >
            {Number(todayMonth) <= 12 && Number(todayMonth) > 0
              ? `${Number(todayMonth)}월`
              : ""}
          </li>

          {INITIAL_DATES.map((date: InitialDateField, index: number) => {
            const dateString = `${date.year}-${String(date.month).padStart(
              2,
              "0"
            )}-${String(date.date).padStart(2, "0")}`;
            const isSelected = dateString.toString() === dateFormat.toString();

            const prevMonth =
              index > 0 ? INITIAL_DATES[index - 1].month : Number(todayMonth);
            const isNewMonth = date.month !== prevMonth;

            return (
              <>
                {isNewMonth && (
                  <li
                    className="text-[#7FEEF0] font-bold text-sm w-[37px] flex-shrink-0 flex items-center justify-center"
                    aria-label={`${date.month}월`}
                  >
                    {`${date.month}월`}
                  </li>
                )}

                <li
                  role="option"
                  aria-selected={isSelected}
                  aria-label={`${date.year}년 ${date.month}월 ${date.date}일 (${date.dayKorean})`}
                  tabIndex={0}
                  className="flex flex-col items-center justify-center gap-2 px-1 w-[32px] cursor-pointer"
                  onClick={() =>
                    handleSetYearMonthDay(date.year, date.month, date.date)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSetYearMonthDay(date.year, date.month, date.date);
                    }
                  }}
                >
                  <span
                    style={{ color: date.dayKorean === "일" ? "#E83E3B" : "" }}
                  >
                    {date.dayKorean}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 w-full flex items-center justify-center transition duration-500
                      ${
                        isSelected
                          ? "bg-[#1ADCDF] text-[#000]"
                          : "bg-transparent text-inherit"
                      }
                    `}
                  >
                    {date.date}
                  </span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
