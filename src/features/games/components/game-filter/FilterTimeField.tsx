import {
  GAMEDAYTYPE,
  GAMEHOUR,
  GAMEMINUTE,
} from "../../../../constants/time.ts";
import useTimeFieldStore from "../../../../store/useTimeStore.ts";
import Dropdown from "./Dropdown.tsx";
import { useEffect } from "react";

const FilterTimeField = () => {
  const {
    selectedDayStatus,
    setSelectedDayStatus,
    setSelectedHour,
    setSelectedMinute,
    selectedHour,
    selectedMinute,
    setFormattedFullTime,
  } = useTimeFieldStore();

  useEffect(() => {
    const formatTime = (dayType: string, hour: string, minute: string) => {
      let formattedHour = parseInt(hour, 10);

      if (dayType === "오후" && formattedHour !== 12) {
        formattedHour += 12;
      } else if (dayType === "오전" && formattedHour === 12) {
        formattedHour = 0;
      }

      const hourString = formattedHour.toString().padStart(2, "0");
      return `${hourString}:${minute}`;
    };

    if (selectedDayStatus && selectedHour && selectedMinute) {
      const time = formatTime(selectedDayStatus, selectedHour, selectedMinute);
      setFormattedFullTime(time);
    }
  }, [selectedDayStatus, selectedHour, selectedMinute, setFormattedFullTime]);

  return (
    <div className=" md:py-[2rem] md:px-[2.5rem] sm:py-[1.25rem] sm:px-[1.31rem]  space-y-[1.25rem]">
      <h1 className="sm:font-[600] md:font-bold sm:text-sm md:text-base text-secondary-white">
        시간
      </h1>
      <div className="flex items-center gap-[2.5rem]">
        <div className="sm:gap-[0.62rem] md:gap-[1.25rem] flex md:justify-start sm:justify-center items-center w-full">
          {/* 오전 /오후 */}
          <div className="space-x-[0.5rem] flex items-center justify-center">
            <Dropdown
              label="오전 / 오후"
              options={GAMEDAYTYPE}
              selectedOption={selectedDayStatus}
              onSelect={setSelectedDayStatus}
            />
          </div>

          {/* HOURS */}
          <div className="space-x-[0.5rem] flex items-center justify-center">
            <Dropdown
              label="시"
              options={GAMEHOUR}
              selectedOption={selectedHour}
              onSelect={setSelectedHour}
            />
            <span className="font-[300] text-[#A3A3A3]">시</span>
          </div>

          {/* Minutes */}
          <div className="space-x-[0.5rem] flex items-center justify-center">
            <Dropdown
              label="분"
              options={GAMEMINUTE}
              selectedOption={selectedMinute}
              onSelect={setSelectedMinute}
            />
            <span className="font-[300] text-[#A3A3A3]">분</span>
          </div>

          <h2 className="text-primary-white font-bold text-sm sm:hidden md:block">
            이후 경기
          </h2>
        </div>
      </div>
      <h2 className="text-primary-white font-[400] text-sm sm:block md:hidden text-right">
        이후 경기
      </h2>
    </div>
  );
};

export default FilterTimeField;
