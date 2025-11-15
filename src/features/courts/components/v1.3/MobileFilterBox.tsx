import filters from "../../../../assets/v1.3/games/settings_icon.png";
import { useState } from "react";
import RegionChipMobile from "./RegionChipMobile";
import MobileFilterPopup from "./MobileFilterPopup";

interface MobileFilterBoxProps {
  toggleProvince: (region: string) => void;
  selectedProvince: string[];
}

const MobileFilterBox = ({
  toggleProvince,
  selectedProvince,
}: MobileFilterBoxProps) => {
  const [showPopup, setShowPopup] = useState(false);

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

  const handleRegionClick = (region: string) => {
    if (region === "전체") {
      if (selectedProvince.length) {
        selectedProvince.forEach((p) => toggleProvince(p));
      }
      return;
    }
    toggleProvince(region);
  };
  return (
    <aside className="md:hidden sm:flex items-center justify-between gap-4">
      <ul className="flex items-center gap-2 overflow-x-auto">
        {REGIONS.map((region) => {
          const isSelected =
            selectedProvince.includes(region) ||
            (region === "전체" && selectedProvince.length === 0);
          return (
            <RegionChipMobile
              key={region}
              region={region}
              isSelected={isSelected}
              handleSetProvinceState={handleRegionClick}
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
          toggleProvince={toggleProvince}
          selectedProvince={selectedProvince}
          onClick={() => setShowPopup(!showPopup)}
        />
      )}
    </aside>
  );
};

export default MobileFilterBox;
