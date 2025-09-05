import { useSearchParams } from "react-router-dom";

interface TabProps {
  isSelected?: boolean;
  content: string;
  onClick: () => void;
  tab: string;
}

export default function Tab({ content, onClick, tab }: TabProps) {
  const contentToTab: Record<string, string> = {
    지도: "map",
    리스트: "list",
    전체: "all",
    참가: "participation",
    경기: "game",
    정산: "settlement",
    리뷰: "review",
    신고: "report",
    기타: "etc",
  };

  const isActive = tab === contentToTab[content];

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        color: isActive ? "#1ADCDF" : "#999",
        borderColor: isActive ? "#1ADCDF" : "#999",
        width: "60px",
        height: "26px",
      }}
      className=" border-b text-sm font-bold"
    >
      {content}
    </button>
  );
}
