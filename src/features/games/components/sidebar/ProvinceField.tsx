import RegionCheck from "../../../common/components(renewal)/chips/RegionCheck.tsx";
import { useProvinceLogic } from "./hooks/useProvinceLogic.ts";

interface ProvinceFieldProps {
  toggleProvince: (arg: string) => void;
  selectedProvince: string[];
}

export default function ProvinceField({
  toggleProvince,
  selectedProvince,
}: ProvinceFieldProps) {
  const { REGIONS } = useProvinceLogic();
  return (
    <div role="listbox" aria-label="지역 선택" className="flex flex-col gap-4">
      <p className="md:block sm:hidden font-bold text-sm text-[#fff]">지역</p>
      <ul>
        {REGIONS.map((region) => (
          <li className="py-[6px]" key={region}>
            <RegionCheck
              content={region}
              isSelected={selectedProvince.includes(region)}
              onClick={() => toggleProvince(region)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
