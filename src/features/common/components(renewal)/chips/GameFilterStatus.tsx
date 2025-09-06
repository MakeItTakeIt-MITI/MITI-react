interface StatusProps {
  status: string;
  isSelected?: boolean;
  onClick?: () => void;
  gameStatusArray?: string[];
}

export default function GameFilterStatus({
  status,
  onClick,
  gameStatusArray = [],
}: StatusProps) {
  const statusMap: { [key: string]: string } = {
    "모집 중": "open",
    "모집 마감": "closed",
    "경기 취소": "canceled",
    "경기 완료": "completed",
  };

  const highlightStatuses = ["open", "closed", "canceled", "completed"];
  const englishStatus = statusMap[status];
  const shouldHighlight =
    englishStatus &&
    gameStatusArray.includes(englishStatus) &&
    highlightStatuses.includes(englishStatus);

  return (
    <span
      style={{
        backgroundColor: shouldHighlight ? "#1ADCDF" : "",
        color: shouldHighlight ? "#000" : "#999",
        borderColor: shouldHighlight ? "#1ADCDF" : "#707070",
        fontWeight: shouldHighlight ? "bold" : "normal",
      }}
      className="py-2.5 px-3  text-sm rounded-[50px] border"
    >
      <button onClick={onClick} type="button">
        {status}
      </button>
    </span>
  );
}
