import { useSearchParams } from "react-router-dom";
import DatesField from "./DatesField.tsx";
import GameStatusField from "./GameStatusField.tsx";
import RegionField from "./RegionField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";
import { useCallback } from "react";
import { InitialDateField } from "../../interface/games.ts";

interface SidebarProps {
  handleSetTime: (arg1: string, arg2: string) => void;
  handleSelectRegion: (arg: string) => void;
}
export default function Sidebar({
  handleSetTime,
  handleSelectRegion,
}: SidebarProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * Date click handler
   * - Memoized with useCallback to prevent unnecessary re-renders
   * - Updates the URL search params with selected year, month, and day
   * - Changing search params will automatically update rendered games
   */

  const handleDateClick = useCallback(
    (date: InitialDateField) => {
      const params = Object.fromEntries(searchParams.entries());
      setSearchParams({
        ...params,
        year: date.year.toString(),
        month: date.formattedMonth,
        day: date.formattedDate,
      });
    },
    [searchParams, setSearchParams] // dependencies
  );

  // Extract current date params from the URL
  const yearParam = searchParams.get("year");
  const monthParam = searchParams.get("month");
  const dayParam = searchParams.get("day");

  /**
   * Generates 30 consecutive dates
   * - Starts from a given date (default = today) = URL params or today
   * - Each date object includes formatted values and Korean day labels
   */
  const DATES = (startDate: Date = new Date()) => {
    const availableDates = [];
    for (let i = 0; i < 30; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      availableDates.push(newDate);
    }

    const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];

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

  /**
   * Determine the initial date range
   * - If year/month/day are present in the URL, use that as the start date
   * - Otherwise, fall back to today
   */
  const initialDate =
    yearParam && monthParam && dayParam
      ? new Date(`${yearParam}-${monthParam}-${dayParam}`)
      : new Date();

  // Generate the list of 30 available dates starting from initialDate
  const INITIAL_DATES = DATES(initialDate);

  return (
    <aside
      style={{
        width: "238px",
        height: "",
      }}
      className="p-4 flex flex-col gap-5 "
    >
      {/* reset all filters */}
      <ResetStatusField />

      {/* date selector (updates year, month, day in URL) */}
      <DatesField
        INITIAL_DATES={INITIAL_DATES}
        yearParam={yearParam}
        monthParam={monthParam}
        dayParam={dayParam}
        handleDateClick={handleDateClick}
      />

      {/* time selector */}
      <TimesField handleSetTime={handleSetTime} />

      {/* game status filter */}
      <GameStatusField />

      {/* region filter */}
      <RegionField handleSelectRegion={handleSelectRegion} />
    </aside>
  );
}
