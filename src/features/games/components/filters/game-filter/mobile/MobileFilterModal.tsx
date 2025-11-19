import { useTimeField } from "../../../../../../store/Sidebar/useTimeFieldStore";
import DatesField from "../../../sidebar/DatesField";
import GameStatusField from "../../../sidebar/GameStatusField";
import { useCallback, useEffect, useMemo } from "react";
import TimesFieldMobile from "./TimesFieldMobile";
import useGameStatusStore from "../../../../store/useGameStatusStore";
import { useGamesPage } from "@/features/games/hooks/useGamesPage";
import { useDatesLogic } from "../../../sidebar/hooks/useDatesLogic";
import MobileProvinceField from "./MobileProvinceField";
import close_icon from "../../../../../../assets/v1.3/games/filter_close_icon.svg";
import { useDateStore } from "../../../sidebar/store/useDateStore";

interface MobileFilterModalProps {
  handleToggleMobileFilterBox: () => void;
  selectedProvince: string[];
  handleResetProvince: () => void;
  handleSetProvinceState: (province: string) => void;
  tab: string;
}

const MobileFilterModal = ({
  handleToggleMobileFilterBox,
  selectedProvince,
  handleResetProvince,
  handleSetProvinceState,
  tab,
}: MobileFilterModalProps) => {
  const {} = useGamesPage();
  const { INITIAL_DATES, handleSetYearMonthDay, dateFormat } = useDatesLogic();

  const { selectedDay, selectedMonth, resetToToday } = useDateStore();

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

  const game_status = selectedGameStatuses.map((status) => status.id);

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
    resetToToday();
    resetTime();
    resetAllStatuses();
    handleResetProvince();
    handleToggleMobileFilterBox();
  };

  const handleApplyFilters = () => {
    handleToggleMobileFilterBox();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <div
      style={{
        scrollbarWidth: "none",
      }}
      className="fixed w-full h-full top-0 right-0 bottom-0 left-0 px-4 py-6 bg-[#141414] z-[99999] overflow-hidden"
    >
      <div className="flex flex-col justify-between h-full">
        {/* status field */}
        <div className="flex flex-col  gap-5">
          <div className="md:hidden w-full overflow-x-auto">
            <ul className="flex items-center gap-1.5 min-w-max">
              {tab === "map" && (
                <>
                  <li className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3 flex items-center gap-1">
                    <span>
                      {selectedMonth}.{selectedDay}일
                    </span>
                    <img src={close_icon} alt="close icon" />
                  </li>
                  <li className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3  flex items-center gap-1">
                    <span> {timeFormat}</span>
                    <img src={close_icon} alt="close icon" />
                  </li>{" "}
                </>
              )}
              <li className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3  flex items-center gap-1">
                {selectedGameStatuses.length > 0
                  ? selectedGameStatuses.map((status, idx) => (
                      <span key={status.id}>
                        {status.name}
                        {idx < selectedGameStatuses.length - 1 && ", "}
                      </span>
                    ))
                  : "경기 상태"}

                <img src={close_icon} alt="close icon" />
              </li>
              <li className="text-[#1ADCDF] text-xs font-[500] border border-[#292929] rounded-[50px] py-2 px-3  flex items-center gap-1">
                {selectedProvince.length > 0
                  ? selectedProvince.map((province, idx) => (
                      <span key={idx}>
                        {province}
                        {idx < selectedProvince.length - 1 && ", "}
                      </span>
                    ))
                  : "전체 지역"}
                <img src={close_icon} alt="close icon" />
              </li>
            </ul>
          </div>

          {tab === "map" && (
            <>
              <DatesField
                INITIAL_DATES={INITIAL_DATES}
                handleSetYearMonthDay={handleSetYearMonthDay}
                dateFormat={dateFormat}
                todayMonth={selectedMonth}
              />

              <TimesFieldMobile />
            </>
          )}

          <GameStatusField
            gameStatusArray={game_status}
            handleToggleGameStatus={handleToggleGameStatus}
          />
          <MobileProvinceField
            selectedProvince={selectedProvince}
            handleSetProvinceState={handleSetProvinceState}
          />
        </div>

        {/* filter buttons */}
        <div className="flex items-center gap-[22px]">
          <button
            type="button"
            onClick={handleResetFilters}
            className="w-[96px] h-[44px] bg-[#999] text-white font-bold rounded-lg"
          >
            초기화
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

export default MobileFilterModal;
