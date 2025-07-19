import DatesField from "./DatesField.tsx";
import GameStatusField from "./GameStatusField.tsx";
import RegionField from "./RegionField.tsx";
import ResetStatusField from "./ResetStatusField.tsx";
import TimesField from "./TimesField.tsx";

export default function Sidebar() {
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
      <TimesField />
      {/* game status */}
      <GameStatusField />
      {/* region select */}
      <RegionField />
    </aside>
  );
}
