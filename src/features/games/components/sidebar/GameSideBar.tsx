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
  tab: string;
  selectedProvince: string[];
  handleSetProvinceState: (province: string) => void;
  handleResetSidebarSettings: () => void;
}

export default function GameSideBar({
  INITIAL_DATES,
  handleSetYearMonthDay,
  dateFormat,
  todayMonth,
  tab,
  selectedProvince,
  handleSetProvinceState,
  handleResetSidebarSettings,
}: GameSideBarProps) {
  const isMap = tab === "map";

  return (
    <aside
      style={{ width: "238px", height: "" }}
      className="p-4 sm:hidden md:flex flex-col gap-5 "
    >
      <ResetStatusField
        handleResetSidebarSettings={handleResetSidebarSettings}
      />

      <DatesField
        INITIAL_DATES={INITIAL_DATES}
        handleSetYearMonthDay={handleSetYearMonthDay}
        dateFormat={dateFormat}
        todayMonth={todayMonth}
      />
      <TimesField />
      <GameStatusContainer />
      <ProvinceField
        selectedProvince={selectedProvince}
        toggleProvince={handleSetProvinceState}
      />
    </aside>
  );
}
