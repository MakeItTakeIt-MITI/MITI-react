import DatesField from "./DatesField.tsx";
import GameStatusField from "./GameStatusField.tsx";
import RegionField from "./RegionField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";

interface SidebarProps {
  handleSetTime: (arg1: string, arg2: string) => void;
  handleSelectRegion: (arg: string) => void;
}
export default function Sidebar({
  handleSetTime,
  handleSelectRegion,
}: SidebarProps) {
  return (
    <aside
      style={{
        width: "238px",
        height: "100vh",
      }}
      className="p-4 flex flex-col gap-5 "
    >
      {/* filter */}
      <ResetStatusField />
      {/* date */}
      <DatesField />
      {/* time */}
      <TimesField handleSetTime={handleSetTime} />
      {/* game status */}
      <GameStatusField />
      {/* region select */}
      <RegionField handleSelectRegion={handleSelectRegion} />
    </aside>
  );
}
