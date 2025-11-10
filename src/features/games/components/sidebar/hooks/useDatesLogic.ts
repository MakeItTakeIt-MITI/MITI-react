import { getTodaysDateKorea } from "@/utils/dates/date";
import { useCallback, useMemo, useState } from "react";


export const useDatesLogic = () => {

  const DATES = () => {
    const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];
    const availableDates: Date[] = [];

    // Get today's date in KST
    const { year, month, day } = getTodaysDateKorea();
    const todayKST = new Date(`${year}-${month}-${day}`);

    // Generate 30 days from today
    for (let i = 0; i < 30; i++) {
      const newDate = new Date(todayKST);
      newDate.setDate(todayKST.getDate() + i);
      availableDates.push(newDate);
    }

    // Map to your expected structure
    return availableDates.map((date) => ({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      formattedMonth: (date.getMonth() + 1).toString().padStart(2, "0"),
      day: date.getDay(),
      date: date.getDate(),
      formattedDate: date.getDate().toString().padStart(2, "0"),
      dayKorean: koreanDays[date.getDay()],
    }));
  };


  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1; // Months are zero-indexed
  const todayDay = new Date().getDate();

  const [selectedYear, setSelectedYear] = useState<number>(todayYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(todayMonth);
  const [selectedDay, setSelectedDay] = useState<number>(todayDay);


  const handleSetYearMonthDay = useCallback(
    (year: number, month: number, day: number) => {
      setSelectedYear(year);
      setSelectedMonth(month);
      setSelectedDay(day);
    },
    []
  );

  const dateFormat = useMemo(
    () => `${selectedYear}-${selectedMonth.toString().padStart(2, "0")}-${selectedDay.toString().padStart(2, "0")}`,
    [selectedYear, selectedMonth, selectedDay]
  );

  const INITIAL_DATES = useMemo(() => DATES(), []);

  return { dateFormat, INITIAL_DATES, todayYear, todayMonth, todayDay, handleSetYearMonthDay };
};
