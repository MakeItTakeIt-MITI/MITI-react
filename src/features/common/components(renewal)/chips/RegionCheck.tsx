import unchecked from "../../../../assets/v1.3/icon/unchecked.svg";
import checked from "../../../../assets/v1.3/icon/checked.svg";

interface CheckItemProps {
  isSelected: boolean;
  content: string;
  onClick?: () => void;
}

function RegionCheck({ isSelected, content, onClick }: CheckItemProps) {
  return (
    <button onClick={onClick} type="button" className="flex items-center gap-3">
      <img src={isSelected ? checked : unchecked} alt="status icon" />
      <span
        className="text-xs font-[500]"
        style={{ color: isSelected ? "#1ADCDF" : "#999" }}
      >
        {content}
      </span>
    </button>
  );
}

export default RegionCheck;
