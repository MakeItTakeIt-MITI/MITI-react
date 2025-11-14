import DatesField from "./DatesField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";
import GameStatusContainer from "./GameStatusContainer.tsx";
import ProvinceField from "./ProvinceField.tsx";
import { InitialDateField } from "../../interface/games.ts";

interface SidebarProps {
  INITIAL_DATES: InitialDateField[];
  handleSetYearMonthDay: (year: number, month: number, day: number) => void;
  dateFormat: string;
  todayMonth: number;
  tab: string;
  selectedProvince: string[];
  handleSetProvinceState: (province: string) => void;
}

export default function Sidebar({
  INITIAL_DATES,
  handleSetYearMonthDay,
  dateFormat,
  todayMonth,
  tab,
  selectedProvince,
  handleSetProvinceState,
}: SidebarProps) {
  const isMap = tab === "map";

  return (
    <aside
      style={{ width: "238px", height: "" }}
      className="p-4 sm:hidden md:flex flex-col gap-5 "
    >
      <ResetStatusField />

      {isMap && (
        <>
          <DatesField
            INITIAL_DATES={INITIAL_DATES}
            handleSetYearMonthDay={handleSetYearMonthDay}
            dateFormat={dateFormat}
            todayMonth={todayMonth}
          />
          <TimesField />
        </>
      )}

      <GameStatusContainer />
      <ProvinceField
        selectedProvince={selectedProvince}
        toggleProvince={handleSetProvinceState}
      />
    </aside>
  );
}
