import { useSearchParams } from "react-router-dom";
import DatesField from "./DatesField.tsx";
import GameStatusField from "./GameStatusField.tsx";
// import RegionField from "./RegionField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";
import { useCallback } from "react";
import { InitialDateField } from "../../interface/games.ts";
import { getTodaysDateKorea } from "../../../../utils/dates/date.ts";

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

  const gameStatusArray = searchParams.getAll("game_status");

  function buildParamsWithStatuses(
    searchParams: URLSearchParams,
    updatedStatuses: string[]
  ) {
    const entries: [string, string][] = [];

    // keep all non-game_status params
    searchParams.forEach((value, key) => {
      if (key !== "game_status") {
        entries.push([key, value]);
      }
    });

    // add updated statuses
    updatedStatuses.forEach((status) => {
      entries.push(["game_status", status]);
    });

    return entries;
  }

  const handleToggleGameStatus = useCallback(
    (statusToToggle: "open" | "closed" | "canceled" | "completed") => {
      const currentStatuses = searchParams.getAll("game_status");
      const params = new URLSearchParams(searchParams);

      let updatedStatuses;

      if (currentStatuses.includes(statusToToggle)) {
        updatedStatuses = currentStatuses.filter(
          (status) => status !== statusToToggle
        );
      } else {
        updatedStatuses = [...currentStatuses, statusToToggle];
      }

      params.delete("game_status");

      updatedStatuses.forEach((status) => {
        params.append("game_status", status);
      });
      setSearchParams(buildParamsWithStatuses(searchParams, updatedStatuses));

      // setSearchParams(params);
    },
    [searchParams]
  );
  // const targetRef = useRef<HTMLDivElement | null>(null);

  // const handleScroll = () => {
  //   targetRef.current?.scrollIntoView({ behavior: "smooth" });
  //   console.log("targetRef:", targetRef.current);
  // };

  // callback function to set game time
  // const handleSetTime = useCallback(
  //   (hour: string, minutes: string) => {
  //     const params = Object.fromEntries(searchParams.entries());
  //     setSearchParams({ ...params, time: `${hour}:${minutes}` });
  //   },
  //   // handleScroll()
  //   [searchParams, setSearchParams]
  // );

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

  // timer

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
      <TimesField

      // handleSetTime={handleSetTime}
      />

      {/* game status filter */}
      <GameStatusField
        handleToggleGameStatus={handleToggleGameStatus}
        gameStatusArray={gameStatusArray}
      />

      {/* region filter */}
      {/* TEMPORARILY DISABLED UNDER FURTHER UPDATE */}
      {/* <RegionField handleSelectRegion={handleSelectRegion} /> */}
    </aside>
  );
}
