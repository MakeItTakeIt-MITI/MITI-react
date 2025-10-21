import {  useSearchParams } from "react-router-dom";
import { useTimeField } from "../../../../../../store/Sidebar/useTimeFieldStore";
import useGameStatusStore from "../../../../store/useGameStatusStore";
import { useMemo } from "react";

const SettingsContainer = () => {
  const [searchParams] = useSearchParams();

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

  //   const startdate = `${month}.${day}`;

  const startdate =
    month && day
      ? `${month}.${day}(${
          days[new Date(Number(year), Number(month) - 1, Number(day)).getDay()]
        })`
      : "";

  // const regionParam = searchParams.get("region") || "";
  // const searchParam = searchParams.get("search") || "";

  const handleResetSidebarSettings = () => {
    resetTime();
    resetAllStatuses();
  };

  return (
    <div className="md:hidden w-full overflow-x-auto">
      <ul className="flex items-center gap-1.5 min-w-max">
        <li className="text-[#474747] text-xs font-[500] border border-[#474747] rounded-[50px] py-2 px-3">
          <button onClick={handleResetSidebarSettings} type="button">
            초기화
          </button>
        </li>
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
  );
};

export default SettingsContainer;