import CheckItem from "../../../common/components(renewal)/chips/CheckItem.tsx";
import { useSearchParams } from "react-router-dom";

interface RegionFieldProps {
  handleSelectRegion: (arg: string) => void;
}

export default function RegionField({ handleSelectRegion }: RegionFieldProps) {
  const [searchParams] = useSearchParams();

  const currentRegion = searchParams.get("region");

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
          <li className="py-[6px]" key={region}>
            <CheckItem
              key={region}
              content={region}
              isSelected={currentRegion === region}
              onClick={() => handleSelectRegion(region)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
