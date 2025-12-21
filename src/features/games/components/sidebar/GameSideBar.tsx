import DatesField from "./DatesField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";
import GameStatusContainer from "./GameStatusContainer.tsx";
import ProvinceField from "./ProvinceField.tsx";
import { InitialDateField } from "../../interface/games.ts";

interface GameSideBarProps {
  INITIAL_DATES: InitialDateField[];
  handleSetYearMonthDay: (year: number, month: number, day: number) => void;
  dateFormat: string;
  todayMonth: number;
  selectedProvince: string[];
  handleSetProvinceState: (province: string) => void;
  handleResetSidebarSettings: () => void;
  tab: string;
}

export default function GameSideBar({
  INITIAL_DATES,
  handleSetYearMonthDay,
  dateFormat,
  todayMonth,
  selectedProvince,
  handleSetProvinceState,
  handleResetSidebarSettings,
  tab,
}: GameSideBarProps) {
  return (
    <aside
      style={{ width: "238px", height: "" }}
      className="p-4 sm:hidden md:flex flex-col gap-5 "
      aria-label="게임 필터 사이드바"
    >
      {/* 스크린 리더용 - 화면에 렌더링 되지 않습니다. */}
      <h2 id="games-sidebar-title" className="sr-only">
        게임 필터 사이드바
      </h2>

      <div role="group" aria-labelledby="reset-filters-title">
        <h3 id="reset-filters-title" className="sr-only">
          필터 초기화
        </h3>
        <ResetStatusField
          handleResetSidebarSettings={handleResetSidebarSettings}
          aria-label="필터 초기화 버튼"
        />
      </div>

      {tab === "map" && (
        <>
          <section role="group" aria-labelledby="date-time-filters-title">
            <h3 id="date-time-filters-title" className="sr-only">
              날짜 및 시간 필터
            </h3>

            <div role="group" aria-labelledby="date-filter-title">
              <h4 id="date-filter-title" className="sr-only">
                날짜 선택
              </h4>
              <DatesField
                INITIAL_DATES={INITIAL_DATES}
                handleSetYearMonthDay={handleSetYearMonthDay}
                dateFormat={dateFormat}
                todayMonth={todayMonth}
              />
            </div>

            <div role="group" aria-labelledby="time-filter-title">
              <h4 id="time-filter-title" className="sr-only">
                시간 선택
              </h4>
              <TimesField />
            </div>
          </section>
        </>
      )}

      <section role="group" aria-labelledby="status-filter-title">
        <h3 id="status-filter-title" className="sr-only">
          게임 상태 필터
        </h3>
        <GameStatusContainer />
      </section>

      <section role="group" aria-labelledby="province-filter-title">
        <h3 id="province-filter-title" className="sr-only">
          지역 선택 필터
        </h3>
        <ProvinceField
          selectedProvince={selectedProvince}
          toggleProvince={handleSetProvinceState}
        />
      </section>
    </aside>
  );
}
