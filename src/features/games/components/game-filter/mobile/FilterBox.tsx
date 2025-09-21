import { Link, useSearchParams } from "react-router-dom";
import { useTimeField } from "../../../../../store/Sidebar/useTimeFieldStore";
import DatesField from "../../sidebar/DatesField";
import GameStatusField from "../../sidebar/GameStatusField";
import { useCallback } from "react";
import { InitialDateField } from "../../../interface/games";
import {
  getTodaysDateKorea,
  getTodaysGamesQuery,
} from "../../../../../utils/dates/date";
import TimesFieldMobile from "./TimesFieldMobile";

interface FilterBoxProps {
  handleToggleMobileFilterBox: () => void;
}

const FilterBox = ({ handleToggleMobileFilterBox }: FilterBoxProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const month = searchParams.get("month");
  const day = searchParams.get("day");
  const year = searchParams.get("year");

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  // imported from useTimeField Store
  const { hour, minutes, resetTime } = useTimeField();
  const getKoreanTimeFormat = (
    hour: string | number,
    minutes: string | number
  ) => {
    const h = Number(hour);
    const m = Number(minutes);
    const period = h < 12 ? "오전" : "오후";
    const displayHour = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${period} ${displayHour}시 ${m}분`;
  };

  const timeFormat = getKoreanTimeFormat(hour, minutes);

  //   const startdate = `${month}.${day}`;

  const startdate =
    month && day
      ? `${month}.${day}(${
          days[new Date(Number(year), Number(month) - 1, Number(day)).getDay()]
        })`
      : "";
  const game_status = searchParams.getAll("game_status");

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

  const handleResetFilters = () => {
    resetTime();
    handleToggleMobileFilterBox();
  };

  const handleApplyFilters = () => {
    handleToggleMobileFilterBox();
  };

  return (
    <div className="fixed w-full h-full top-0 right-0 bottom-0 left-0 px-4 py-6 bg-[#141414] z-[99999] overflow-y-hidden">
      <div className="flex flex-col justify-between h-full">
        {/* status field */}
        <div className="flex flex-col  gap-5">
          <div className="md:hidden w-full overflow-x-auto">
            <ul className="flex items-center gap-1.5 min-w-max">
              {/* ...other list items... */}
              <li className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3">
                {startdate}
              </li>
              <li className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3">
                {timeFormat}
              </li>{" "}
              <li className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3">
                {game_status.length > 0
                  ? game_status.map((status, idx) => (
                      <span key={status}>
                        {status === "open" && "모집 중"}
                        {status === "closed" && "모집 마감"}
                        {status === "canceled" && "경기 취소"}
                        {status === "completed" && "경기 완료"}
                        {idx < game_status.length - 1 && ", "}
                      </span>
                    ))
                  : "경기 상태"}
              </li>
              {/* repeat as needed */}
            </ul>
          </div>
          {/* set datesfield */}
          <DatesField
            INITIAL_DATES={INITIAL_DATES}
            yearParam={yearParam}
            monthParam={monthParam}
            dayParam={dayParam}
            handleDateClick={handleDateClick}
          />

          {/*set  time field */}
          <TimesFieldMobile />
          {/* set status field */}
          {/* <GameStatusFieldMobile
            handleToggleGameStatus={handleToggleGameStatus}
            gameStatusArray={gameStatusArray}
          /> */}
          <GameStatusField
            handleToggleGameStatus={handleToggleGameStatus}
            gameStatusArray={gameStatusArray}
          />

          {/* set region field */}
          {/* <RegionField /> */}
        </div>

        {/* buttons */}
        <div className="flex items-center gap-[22px]">
          <button
            type="button"
            onClick={handleResetFilters}
            className="w-[96px] h-[44px] bg-[#999] text-white font-bold rounded-lg"
          >
            <Link to={`/${getTodaysGamesQuery()}`}> 초기화</Link>
          </button>
          <button
            type="button"
            onClick={handleApplyFilters}
            className="w-full h-[44px] bg-[#1ADCDF] text-black font-bold rounded-lg"
          >
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
