import { useSearchParams } from "react-router-dom";

interface TabProps {
  isSelected?: boolean;
  content: string;
  onClick: () => void;
}

export default function Tab({ content, onClick }: TabProps) {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const contentToTab: Record<string, string> = {
    지도: "map",
    리스트: "list",
    전체: "all",
    경기: "games",
    정산: "payments",
    리뷰: "reviews",
    신고: "reports",
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
