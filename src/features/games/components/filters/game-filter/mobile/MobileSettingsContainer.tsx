import { Link } from "react-router-dom";
import { useTimeField } from "../../../../../../store/Sidebar/useTimeFieldStore.ts";
import useGameStatusStore from "../../../../store/useGameStatusStore.ts";
import { useMemo } from "react";
import { getTodaysGamesQuery } from "../../../../../../utils/dates/date.ts";
import { useDateStore } from "../../../sidebar/store/useDateStore.ts";
import close_icon from "../../../../../../assets/v1.3/games/filter_close_icon.svg";

interface MobileSettingsContainerProps {
  handleToggleMobileFilterBox: () => void;
  selectedProvince: string[];
}

const MobileSettingsContainer = ({
  handleToggleMobileFilterBox,
  selectedProvince,
}: MobileSettingsContainerProps) => {
  const { selectedDay, selectedMonth } = useDateStore();
  const { hour, minutes } = useTimeField();
  const { gameStatusArray } = useGameStatusStore();

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
      .filter((status) => status.isSelected)
      .map((status) => ({
        id: status.status,
        name: status.tag,
      }));
  }, [gameStatusArray]);

  //   const startdate = `${month}.${day}`;

  return (
    <div className="md:hidden w-full overflow-x-auto">
      <ul className="flex items-center gap-1.5 min-w-max">
        <li className="text-[#474747] text-xs font-[500] border border-[#474747] rounded-[50px] py-2 px-3">
          <Link to={`/${getTodaysGamesQuery()}`}> 초기화</Link>
        </li>
        <li>
          <button
            type="button"
            onClick={handleToggleMobileFilterBox}
            className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3 flex items-center gap-1"
          >
            <span> {`${selectedMonth}.${selectedDay}일`}</span>

            <img src={close_icon} alt="Close" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleToggleMobileFilterBox}
            className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3 flex items-center gap-1"
          >
            <span> {timeFormat}</span>
            <img src={close_icon} alt="Close" />
          </button>
        </li>{" "}
        <li>
          <button
            type="button"
            onClick={handleToggleMobileFilterBox}
            className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3 flex items-center gap-1"
          >
            {selectedGameStatuses.length > 0
              ? selectedGameStatuses.map((status, idx) => (
                  <span key={status.id}>
                    {status.name}
                    {idx < selectedGameStatuses.length - 1 && ", "}
                  </span>
                ))
              : "경기 상태"}
            <img src={close_icon} alt="Close" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleToggleMobileFilterBox}
            className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3 flex items-center gap-1"
          >
            {selectedProvince.length > 0
              ? selectedProvince.map((province, idx) => (
                  <span key={idx}>
                    {province}
                    {idx < selectedProvince.length - 1 && ", "}
                  </span>
                ))
              : "전체 지역"}
            <img src={close_icon} alt="Close" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileSettingsContainer;
