import { useSearchParams } from "react-router-dom";
import DatesField from "./DatesField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";
import { useCallback } from "react";
import { InitialDateField } from "../../interface/games.ts";
import { getTodaysDateKorea } from "../../../../utils/dates/date.ts";
import GameStatusContainer from "./GameStatusContainer.tsx";
export default function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();


  /**
   * Date click handler
   * - Memoized with useCallback to prevent unnecessary re-renders
   * - Updates the URL search params with selected year, month, and day
   * - Changing search params will automatically update rendered games
   */

  const handleDateClick = useCallback(
    (date: InitialDateField) => {
      const params = new URLSearchParams(searchParams);

      // Update date params
      params.set("year", date.year.toString());
      params.set("month", date.formattedMonth);
      params.set("day", date.formattedDate);

      setSearchParams(params);
    },
    [searchParams, setSearchParams]
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

  /**
   * Determine the initial date range
   * - If year/month/day are present in the URL, use that as the start date
   * - Otherwise, fall back to today
   */

  // Generate the list of 30 available dates starting from initialDate
  const INITIAL_DATES = DATES();


  // !       {/* TEMPORARILY DISABLED UNDER FURTHER UPDATE */}
  // callback function to filter by region
  // const handleSelectRegion = useCallback(
  //   (region: string) => {
  //     const params = Object.fromEntries(searchParams.entries());

  //     // Keep all the current game_status values
  //     const gameStatuses = searchParams.getAll("game_status");

  //     // Toggle region
  //     let updatedParams: Record<string, string | string[]> = {
  //       ...params,
  //       region,
  //     };

  //     if (searchParams.get("region") === region) {
  //       // remove region if toggled off
  //       const { region: _, ...rest } = params;
  //       updatedParams = { ...rest };
  //     }

  //     // Ensure game_status values persist
  //     setSearchParams(() => {
  //       const newParams = new URLSearchParams(updatedParams as any);
  //       gameStatuses.forEach((status) => {
  //         newParams.append("game_status", status);
  //       });
  //       return newParams;
  //     });
  //   },
  //   [setSearchParams, searchParams]
  // );



  

  return (
    <aside
      style={{
        width: "238px",
        height: "",
      }}
      className="p-4 sm:hidden md:flex flex-col gap-5 "
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
      <TimesField/>

<GameStatusContainer />

      
   
      {/* region filter */}
      {/* TEMPORARILY DISABLED UNDER FURTHER UPDATE */}
      {/* <RegionField handleSelectRegion={handleSelectRegion} /> */}
    </aside>
  );
}
