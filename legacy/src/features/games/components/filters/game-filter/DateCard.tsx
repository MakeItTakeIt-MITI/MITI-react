import useCurrentMonthStore from "../../../../../store/useCurrentMonthStore";
import useDateSelectionStore from "../../../../../store/useDateSelectionStore";

type DateCard = {
  dayOfWeek: string;
  date: number;
  month: number;
  year: number;
  formattedDate: string;
  formattedMonth: string;
};

const DateCard = ({
  dayOfWeek,
  date,
  month,
  year,
  formattedDate,
  formattedMonth,
}: DateCard) => {
  const { dateField, setDateField, setYearMonthDay } = useDateSelectionStore();
  const { setCurrentMonth } = useCurrentMonthStore();

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const displayDate = `${month}.${date} (${dayOfWeek})`;

  const handleFilterDate = (
    inputDate: string,
    inputYear: number,
    inputMonth: string,
    date: string
  ) => {
    const yearMonthDayFormat = `${inputYear}-${inputMonth}-${date}`;

    setDateField(inputDate);
    setYearMonthDay(yearMonthDayFormat);
  };

  const isSelected = dateField === displayDate;

  return (
    <div
      onClick={() => {
        handleFilterDate(displayDate, year, formattedMonth, formattedDate);
        setCurrentMonth(month);
      }}
      className="flex items-center gap-[0.5rem] cursor-pointer"
    >
      {" "}
      {currentMonth !== month && date === 1 && (
        <div className="flex flex-col justify-center items-center gap-[5px] mx-4 px-1 text-primary-teal font-bold text-sm  ">
          {currentYear !== year && <span>{year}</span>}
          <span className="">{month}월</span>
        </div>
      )}
      <div className="flex flex-col items-center gap-[0.5rem]">
        <h2
          style={{
            color:
              dayOfWeek === "일" ? "#FF4079" : isSelected ? "#fff" : "#525252",
          }}
          className={`text-[12px] font-[300] 
        ${
          dayOfWeek !== "일" && !isSelected
            ? "text-[#525252]"
            : "text-[#171717]"
        }
      `}
        >
          {dayOfWeek}
        </h2>

        <div
          style={{
            backgroundColor: isSelected ? "#7FEEF0" : "#262626",
            color: isSelected ? "#171717" : "#525252",
            borderRadius: isSelected ? "100px" : "0px",
          }}
          className={`size-[2rem] flex items-center justify-center font-bold text-sm `}
        >
          {date}
        </div>
      </div>
    </div>
  );
};

export default DateCard;