import RegionCheck from "../../../common/components(renewal)/chips/RegionCheck.tsx";
import { useGamesPage } from "../../hooks/useGamesPage.ts";
import { useProvinceLogic } from "./hooks/useProvinceLogic.ts";

export default function ProvinceField() {
  const { handleSetProvinceState, selectedProvince } = useGamesPage();
  const { REGIONS } = useProvinceLogic();

  return (
    <div className="flex flex-col gap-4">
      <p className="md:block sm:hidden font-bold text-sm text-[#fff]">지역</p>
      <ul className=" ">
        {REGIONS.map((region) => (
          <li className="py-[6px]" key={region}>
            <RegionCheck
              key={region}
              content={region}
              isSelected={selectedProvince === region}
              onClick={() => handleSetProvinceState(region)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
