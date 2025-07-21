export default function DatesField() {
  const INITIAL_DATES = DATES();
  const TODAY = INITIAL_DATES[0];

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-white">날짜</p>
      <div
        style={{
          scrollbarWidth: "none",
        }}
        className="px-4 flex gap-4 overflow-x-auto"
      >
        <p className="text-[#7FEEF0] flex  items-center justify-center font-bold text-sm w-[37px]">
          <span>{TODAY.month}</span>
          <span>월</span>
        </p>
        <ul className="flex gap-4 text-[#707070] text-xs font-bold">
          {INITIAL_DATES.map((date) => (
            <li
              // key={date["day"]}
              className="flex flex-col items-center justify-center gap-2 w-[32px]"
            >
              <span
                style={{
                  color: date.dayKorean === "일" ? "#E83E3B" : "",
                }}
              >
                {date.dayKorean}
              </span>
              <span>{date.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Display dates for 2 weeks. Base date is today.

export const DATES = () => {
  const availableDates = [];

  for (let i = 0; i < 30; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }

  const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];

  return availableDates.map((date) => ({
    year: date.getFullYear(), // get the year
    month: date.getMonth() + 1, // getMonth() is zero-based, so we add 1
    formattedMonth: (date.getMonth() + 1).toString().padStart(2, "0"), // getMonth() is zero-based, so we add 1
    day: date.getDay(), // getDay() returns the day of the week (0-6)
    date: date.getDate(), // getDate() returns the day of the month (1-31)
    formattedDate: date.getDate().toString().padStart(2, "0"),
    dayKorean: koreanDays[date.getDay()], // Map the day to its Korean equivalent
  }));
};
