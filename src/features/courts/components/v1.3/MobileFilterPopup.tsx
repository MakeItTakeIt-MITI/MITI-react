import { useSearchParams } from "react-router-dom";
import RegionChipMobile from "./RegionChipMobile";
import close from "../../../../assets/v1.3/icon/popup_close.svg";
import { useState } from "react";

interface MobileFilterPopupProps {
  onClick: () => void;
  handleSelectRegion: (arg: string) => void;
}

const MobileFilterPopup = ({
  onClick,
  handleSelectRegion,
}: MobileFilterPopupProps) => {
  const [searchParams] = useSearchParams();

  const currentRegion = searchParams.get("region");
  const [selectedRegion, setSelectedRegion] = useState(currentRegion);

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

  return (
    <div className="fixed inset-0 z-[99999] bg-[#00000069] bg-opacity-40 flex items-end pointer-events-auto  ">
      <div className="flex flex-col gap-3 w-full  px-4 py-6 bg-[#141414] rounded-t-[25px]">
        {/* regionsts */}
        <div className="flex flex-col gap-2.5 pb-4">
          {/* header */}
          <div className="flex items-center justify-between">
            <h1 className="text-white font-bold">지역</h1>
            <button type="button">
              <img src={close} alt="close" onClick={onClick} />
            </button>
          </div>
          {/* list */}
          <ul className="grid grid-cols-7 gap-2">
            {REGIONS.map((region) => {
              const isSelected =
                (selectedRegion === "" && region === "전체") ||
                selectedRegion === region;
              return (
                <RegionChipMobile
                  key={region}
                  region={region}
                  isSelected={isSelected}
                  onClick={() =>
                    setSelectedRegion(region === "전체" ? "" : region)
                  }
                />
              );
            })}
          </ul>
        </div>
        {/* button */}
        <button
          className="h-11 w-full  text-white px-4 rounded-lg "
          style={{
            backgroundColor:
              selectedRegion === currentRegion ? "#707070" : "#1ADCDF",
            color: selectedRegion === currentRegion ? "#FFFFFF" : "#000000",
          }}
          type="button"
          onClick={() => {
            handleSelectRegion(selectedRegion || "");
            onClick();
          }}
        >
          적용하기
        </button>
      </div>
    </div>
  );
};

export default MobileFilterPopup;
