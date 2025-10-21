import { Link, useSearchParams } from "react-router-dom";
import { useTimeField } from "../../../../../../store/Sidebar/useTimeFieldStore";
import DatesField from "../../../sidebar/DatesField";
import GameStatusField from "../../../sidebar/_GameStatusField";
import { useCallback, useMemo } from "react";
import { InitialDateField } from "../../../../interface/games";
import {
  getTodaysDateKorea,
  getTodaysGamesQuery,
} from "../../../../../../utils/dates/date";
import TimesFieldMobile from "./TimesFieldMobile";
import useGameStatusStore from "../../../../store/useGameStatusStore";

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
  const { gameStatusArray, resetAllStatuses } = useGameStatusStore();
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

  // Get selected game statuses from store
  const selectedGameStatuses = useMemo(() => {
    return gameStatusArray
      .flat()
      .filter(status => status.isSelected)
      .map(status => ({
        id: status.status,
        name: status.tag
      }));
  }, [gameStatusArray]);

  const game_status = selectedGameStatuses.map(status => status.id);

  const { toggleStatusSelection } = useGameStatusStore();

  const handleToggleGameStatus = useCallback(
    (statusToToggle: "open" | "closed" | "canceled" | "completed") => {
      // Find the row and cell indices for the status to toggle
      let rowIndex = -1;
      let cellIndex = -1;

      gameStatusArray.forEach((row, rIdx) => {
        row.forEach((status, cIdx) => {
          if (status.status === statusToToggle) {
            rowIndex = rIdx;
            cellIndex = cIdx;
          }
        });
      });

      if (rowIndex !== -1 && cellIndex !== -1) {
        toggleStatusSelection(rowIndex, cellIndex);
      }
    },
    [gameStatusArray, toggleStatusSelection]
  );

  const handleResetFilters = () => {
    resetTime();
    resetAllStatuses();
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
                {selectedGameStatuses.length > 0
                  ? selectedGameStatuses.map((status, idx) => (
                      <span key={status.id}>
                        {status.name}
                        {idx < selectedGameStatuses.length - 1 && ", "}
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
            handleDateClick={handleDateClick}
            yearParam={yearParam}
            monthParam={monthParam}
            dayParam={dayParam}
          />

          {/* time field mobile */}
          <TimesFieldMobile />

          {/* game status field */}
          <GameStatusField
            gameStatusArray={game_status}
            handleToggleGameStatus={handleToggleGameStatus}
          />

          {/* <GameStatusFieldMobile
            gameStatusArray={gameStatusArray}
            handleToggleGameStatus={handleToggleGameStatus}
          /> */}
        </div>

        {/* filter buttons */}
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