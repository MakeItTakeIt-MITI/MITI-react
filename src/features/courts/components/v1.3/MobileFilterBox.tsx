import { useSearchParams } from "react-router-dom";
import filters from "../../../../assets/v1.3/games/settings_icon.png";
import { useCallback, useState } from "react";
import RegionChipMobile from "./RegionChipMobile";
import MobileFilterPopup from "./MobileFilterPopup";

const MobileFilterBox = ({}) => {
  const [showPopup, setShowPopup] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentRegion = searchParams.get("region");

  const REGIONS = [
    "전체",
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

  const handleSelectRegion = useCallback(
    (region: string) => {
      const params = Object.fromEntries(searchParams.entries());

      // "전체" sets region to ""
      if (region === "전체") {
        setSearchParams({ ...params, region: "" });
      } else {
        setSearchParams({ ...params, region });
      }
    },
    [setSearchParams, searchParams]
  );

  return (
    <aside className="md:hidden sm:flex items-center justify-between gap-4">
      <ul className="flex items-center gap-2 overflow-x-auto">
        {REGIONS.map((region) => {
          const isSelected =
            (currentRegion === "" && region === "전체") ||
            currentRegion === region;
          return (
            <RegionChipMobile
              key={region}
              region={region}
              isSelected={isSelected}
            />
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setShowPopup(true)}
        className="w-[20%]"
      >
        <img src={filters} className="size-4" alt="filters button" />
      </button>

      {showPopup && (
        <MobileFilterPopup
          handleSelectRegion={handleSelectRegion}
          onClick={() => setShowPopup(!showPopup)}
        />
      )}
    </aside>
  );
};

export default MobileFilterBox;
