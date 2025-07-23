import unchecked from "../../../../assets/v1.3/icon/unchecked.svg";
import checked from "../../../../assets/v1.3/icon/checked.svg";
import { DistrictEnum } from "../../../enum/courts.ts";
import { DistrictLabel } from "../../../constants/courts.ts";

interface CheckItemProps {
  isSelected: boolean;
  content: DistrictEnum;
  onClick?: () => void;
}

function RegionCheck({ isSelected, content, onClick }: CheckItemProps) {
  const label = DistrictLabel[content];
  return (
    <button onClick={onClick} type="button" className="flex items-center gap-3">
      <img src={isSelected ? checked : unchecked} alt="status icon" />
      <span
        className="text-xs font-[500]"
        style={{ color: isSelected ? "#1ADCDF" : "#999" }}
      >
        {label}
      </span>
    </button>
  );
}

export default RegionCheck;
