import { Link } from "react-router-dom";
import { getTodaysGamesQuery } from "../../../../utils/dates/date";
import { useTimeField } from "../../../../store/Sidebar/useTimeFieldStore";
import useGameStatusStore from "../../store/useGameStatusStore";

export default function ResetStatusField() {
  const { resetTime } = useTimeField();
  const { resetAllStatuses } = useGameStatusStore();

  const handleResetSidebarSettings = () => {
    resetTime();
    resetAllStatuses();
  };
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-white">필터</p>
      <button type="button" onClick={handleResetSidebarSettings}>
        <Link
          to={`/${getTodaysGamesQuery()}`}
          type="button"
          className="text-xs text-[#999]"
        >
          초기화
        </Link>
      </button>
    </div>
  );
}
