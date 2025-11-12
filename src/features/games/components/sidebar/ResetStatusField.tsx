import { useTimeField } from "../../../../store/Sidebar/useTimeFieldStore";
import useGameStatusStore from "../../store/useGameStatusStore";
import { useDateStore } from "./store/useDateStore";

export default function ResetStatusField() {
  const { resetTime } = useTimeField();
  const { resetAllStatuses } = useGameStatusStore();
  const { resetToToday } = useDateStore();

  const handleResetSidebarSettings = () => {
    resetTime();
    resetAllStatuses();
    resetToToday();
  };
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-white">필터</p>
      <button
        type="button"
        onClick={handleResetSidebarSettings}
        className="text-xs text-[#999]"
      >
        초기화
      </button>
    </div>
  );
}
