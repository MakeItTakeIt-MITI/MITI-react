import { useEffect, useState } from "react";
import RegionChipMobile from "./RegionChipMobile";
import close from "../../../../assets/v1.3/icon/popup_close.svg";

interface MobileFilterPopupProps {
  onClick: () => void; // close popup
  toggleProvince: (arg: string) => void; // toggle single province
  selectedProvince: string[]; // multiple selected provinces
}

const MobileFilterPopup = ({
  onClick,
  toggleProvince,
  selectedProvince,
}: MobileFilterPopupProps) => {
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

  // local draft; only commit on "적용하기"
  const [draft, setDraft] = useState<string[]>(selectedProvince);

  // sync when parent selection changes (e.g., reopening popup)
  useEffect(() => {
    setDraft(selectedProvince);
  }, [selectedProvince]);

  const handleRegionClick = (region: string) => {
    if (region === "전체") {
      setDraft([]); // reset draft
      return;
    }
    setDraft((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  const handleApply = () => {
    const toRemove = selectedProvince.filter((p) => !draft.includes(p));
    const toAdd = draft.filter((p) => !selectedProvince.includes(p));

    toRemove.forEach((p) => toggleProvince(p));
    toAdd.forEach((p) => toggleProvince(p));

    onClick(); // close
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#00000069] bg-opacity-40 flex items-end pointer-events-auto">
      <div className="flex flex-col gap-3 w-full px-4 py-6 bg-[#141414] rounded-t-[25px]">
        {/* regions */}
        <div className="flex flex-col gap-2.5 pb-4">
          {/* header */}
          <div className="flex items-center justify-between">
            <h1 className="text-white font-bold">지역</h1>
            <button type="button" onClick={onClick} aria-label="close">
              <img src={close} alt="close" />
            </button>
          </div>

          {/* list */}
          <ul className="grid grid-cols-7 gap-2">
            {REGIONS.map((region) => {
              const isSelected =
                region === "전체" ? draft.length === 0 : draft.includes(region);

              return (
                <RegionChipMobile
                  key={region}
                  region={region}
                  isSelected={isSelected}
                  toggleProvince={handleRegionClick}
                />
              );
            })}
          </ul>
        </div>

        {/* apply button commits draft */}
        <button
          className="h-11 w-full px-4 rounded-lg font-semibold"
          style={{ backgroundColor: "#1ADCDF", color: "#000000" }}
          type="button"
          onClick={handleApply}
        >
          적용하기
        </button>
      </div>
    </div>
  );
};

export default MobileFilterPopup;
