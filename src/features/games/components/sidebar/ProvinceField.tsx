import RegionCheck from "../../../common/components(renewal)/chips/RegionCheck.tsx";
import { useGamesPage } from "../../hooks/useGamesPage.ts";
import { useProvinceLogic } from "./hooks/useProvinceLogic.ts";
// import { useProvinceStore } from "./store/useProvincestore.ts";

export default function ProvinceField() {
  const { handleSetProvinceState, selectedProvince } = useGamesPage();
  const { REGIONS } = useProvinceLogic();
  // const { toggleProvince, toggleProvinceByName } = useProvinceStore();

  return (
    <div className="flex flex-col gap-4">
      <p className="md:block sm:hidden font-bold text-sm text-[#fff]">지역</p>
      <ul className=" ">
        {REGIONS.map((region) => (
          <li className="py-[6px]" key={region}>
            <RegionCheck
              key={region}
              content={region}
              isSelected={
                Array.isArray(selectedProvince)
                  ? selectedProvince.includes(region)
                  : selectedProvince === region
              }
              onClick={() => handleSetProvinceState(region)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
