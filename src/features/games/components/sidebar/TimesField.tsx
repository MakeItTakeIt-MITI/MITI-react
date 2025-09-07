import { useRef } from "react";
import { useTimeField } from "../../../../store/Sidebar/useTimeFieldStore";

// interface TimeFiledProps {
//   handleSetTime: (arg1: string, arg2: string) => void;
// }

export default function TimesField() {
  const { hour, minutes, setHour, setMinutes } = useTimeField();

  const handleSetHourClick = (selected: number) => {
    setHour(selected);
  };

  const handleSetMinuteClick = (selected: number) => {
    setMinutes(selected);
  };

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // const SCROLL_STEP = 1;

  // const handleHourWheel = (e: React.WheelEvent<HTMLUListElement>) => {
  //   // e.preventDefault();
  //   // e.stopPropagation();

  //   if (scrollTimeout.current) return;

  //   setHour((prev) => {
  //     if (e.deltaY > 0) {
  //       // SCROLL DOWN and changes to next hour
  //       return (prev + SCROLL_STEP) % 24;
  //     } else if (e.deltaY < 0) {
  //       // Scrolls up if 0, goes to 23
  //       return (prev - SCROLL_STEP + 24) % 24;
  //     }
  //     return prev;
  //   });

  //   // timeout  function  changes the scroll speed
  //   scrollTimeout.current = setTimeout(() => {
  //     scrollTimeout.current = null;
  //   }, 50);
  // };

  // const formatTime = (num: number) => num.toString().padStart(2, "0");

  // useEffect(() => {
  //   handleSetTime(formatTime(hour), formatTime(minutes));
  // }, [hour, minutes, handleSetTime]);

  // const handleSetHourClick = (selected: number) => {
  //   setHour(selected);
  // };

  // const handleSetMinuteClick = (selected: number) => {
  //   let newMinute = selected;
  //   if (newMinute < 0) newMinute = 50;
  //   if (newMinute > 50) newMinute = 0;
  //   setMinutes(newMinute);
  // };

  // const MINUTE_SCROLL_STEP = 10;

  // const handleMinuteWheel = (e: React.WheelEvent<HTMLUListElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   if (scrollTimeout.current) return;

  //   setMinutes((prev) => {
  //     if (e.deltaY > 0) {
  //       // SCROLL DOWN and changes to next hour
  //       return (prev + MINUTE_SCROLL_STEP) % 60;
  //     } else if (e.deltaY < 0) {
  //       // Scrolls up if 0, goes to 23
  //       return (prev - MINUTE_SCROLL_STEP + 60) % 60;
  //     }
  //     return prev;
  //   });

  //   scrollTimeout.current = setTimeout(() => {
  //     scrollTimeout.current = null;
  //   }, 50);
  // };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          {/* hour */}
          <ul
            style={{
              scrollbarWidth: "none",
            }}
            // onWheelCapture={handleHourWheel}
            className="flex flex-col items-center justify-center h-[90px] overflow-y-scroll"
          >
            {hour === 0 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetHourClick(23)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  {23}
                </button>
              </li>
            )}
            {hour !== 0 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetHourClick(hour - 1)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  {hour - 1}
                </button>
              </li>
            )}
            <li>
              <button
                type="button"
                onClick={() => handleSetHourClick(hour)}
                className="w-[66px] h-[30px] text-sm rounded-lg bg-[#5C5C5C] text-[#1ADCDF] "
              >
                {hour}
              </button>
            </li>
            {hour < 23 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetHourClick(hour + 1)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  {hour + 1}
                </button>
              </li>
            )}

            {hour === 23 && (
              <li>
                <button
                  onClick={() => handleSetHourClick(0)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  0
                </button>
              </li>
            )}
          </ul>
          {/* minute */}
          <ul
            style={{
              scrollbarWidth: "none",
            }}
            // onWheelCapture={handleMinuteWheel}
            className="flex flex-col items-center justify-center h-[90px] overflow-y-scroll"
          >
            {minutes !== 0 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetMinuteClick(minutes - 10)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  {minutes - 10}
                </button>
              </li>
            )}
            {minutes === 0 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetMinuteClick(50)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  50
                </button>
              </li>
            )}
            <li>
              <button
                type="button"
                className="w-[66px] h-[30px] text-sm rounded-lg bg-[#5C5C5C] text-[#1ADCDF] "
              >
                {minutes}
              </button>
            </li>
            {minutes < 50 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetMinuteClick(minutes + 10)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  {minutes + 10}
                </button>
              </li>
            )}
            {minutes === 50 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetMinuteClick(0)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  0
                </button>
              </li>
            )}
          </ul>
        </div>
        <p className="flex items-center justify-center  text-xs text-white ">
          이후 경기
        </p>
      </div>
    </div>
  );
}
