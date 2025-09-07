import { Link } from "react-router-dom";
import { getTodaysGamesQuery } from "../../../../utils/dates/date";

export default function ResetStatusField() {
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-white">필터</p>
      <Link
        to={`/${getTodaysGamesQuery()}`}
        type="button"
        className="text-xs text-[#999]"
      >
        초기화
      </Link>
    </div>
  );
}
