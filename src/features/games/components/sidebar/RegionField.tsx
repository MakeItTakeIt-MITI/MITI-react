import { useState } from "react";
import CheckItem from "../../../common/components(renewal)/chips/CheckItem.tsx";

export default function RegionField() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region === selectedRegion ? null : region);
  };

  const REGIONS = [
    "서울",
    "경기",
    "인천",
    "부산",
    "대구",
    "광주",
    "대전",
    "울산",
    "세종",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">지역</p>
      <ul className=" ">
        {REGIONS.map((region) => (
          <li className="py-[6px]">
            <CheckItem
              key={region}
              content={region}
              isSelected={selectedRegion === region}
              onClick={() => handleSelectRegion(region)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
