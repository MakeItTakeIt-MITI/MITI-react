import RegionChipMobile from "@/features/courts/components/v1.3/RegionChipMobile";
import { useProvinceLogic } from "../../../sidebar/hooks/useProvinceLogic";

const MobileProvinceField = () => {
  const { REGIONS } = useProvinceLogic();
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-white">지역</p>
      <ul className="grid grid-cols-7 gap-2">
        {REGIONS.map((region) => (
          <RegionChipMobile
            key={region}
            region={region}
            isSelected={false}
            toggleProvince={() => {}}
          />
        ))}
      </ul>
    </div>
  );
};

export default MobileProvinceField;
