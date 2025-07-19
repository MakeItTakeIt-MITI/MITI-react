import { useRef, useState } from "react";

export default function TimesField() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const SCROLL_STEP = 1;

  const handleHourWheel = (e: React.WheelEvent<HTMLUListElement>) => {
    e.preventDefault();

    if (scrollTimeout.current) return;

    if (e.deltaY > 0) {
      setHour((prev) => Math.min(23, prev + SCROLL_STEP));
    } else if (e.deltaY < 0) {
      setHour((prev) => Math.max(0, prev - SCROLL_STEP));
    }
  };

  const handleSetHourClick = (selected: number) => {
    setHour((prev) => (prev !== selected ? selected : prev));
  };

  const MINUTE_SCROLL_STEP = 10;

  const handleMinuteWheel = (e: React.WheelEvent<HTMLUListElement>) => {
    e.preventDefault();

    if (scrollTimeout.current) return;

    if (e.deltaY > 0) {
      setMinutes((prev) => Math.min(50, prev + MINUTE_SCROLL_STEP));
    } else if (e.deltaY < 0) {
      setMinutes((prev) => Math.max(0, prev - MINUTE_SCROLL_STEP));
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
      <div className="flex gap-3">
        <div className="flex gap-2 items-center">
          {/* hour */}
          <ul
            style={{
              scrollbarWidth: "none",
            }}
            onWheel={handleHourWheel}
            className="flex flex-col justify-center h-[90px] overflow-y-auto"
          >
            {hour === 0 && (
              <li>
                <button
                  type="button"
                  disabled
                  onClick={() => handleSetHourClick(hour)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {null}
                </button>
              </li>
            )}
            {hour !== 0 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetHourClick(hour - 1)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {hour - 1}
                </button>
              </li>
            )}
            <li>
              <button
                type="button"
                onClick={() => handleSetHourClick(hour)}
                className="w-[84px] h-[32px] rounded-lg bg-[#5C5C5C] text-[#1ADCDF] "
              >
                {hour}
              </button>
            </li>
            {hour < 23 && (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetHourClick(hour + 1)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {hour + 1}
                </button>
              </li>
            )}

            {hour === 23 && (
              <li>
                <button
                  type="button"
                  disabled
                  onClick={() => handleSetHourClick(hour)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {null}
                </button>
              </li>
            )}
          </ul>
          {/* minute */}
          <ul
            style={{
              scrollbarWidth: "none",
            }}
            onWheel={handleMinuteWheel}
            className="flex flex-col justify-center h-[90px] overflow-y-auto"
          >
            {minutes !== 0 && (
              <li>
                <button
                  type="button"
                  // onClick={() => set(hour)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {minutes - 10}
                </button>
              </li>
            )}
            {minutes === 0 && (
              <li>
                <button
                  type="button"
                  // onClick={() => set(hour)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {null}
                </button>
              </li>
            )}
            <li>
              <button
                type="button"
                // onClick={() => set(hour)}
                className="w-[84px] h-[32px] rounded-lg bg-[#5C5C5C] text-[#1ADCDF] "
              >
                {minutes}
              </button>
            </li>
            {minutes === 0 && (
              <li>
                <button
                  type="button"
                  // onClick={() => set(hour)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {minutes + 10}
                </button>
              </li>
            )}
            {minutes === 50 && (
              <li>
                <button
                  type="button"
                  // onClick={() => set(hour)}
                  className="w-[84px] h-[32px] text-[#5C5C5C]"
                >
                  {null}
                </button>
              </li>
            )}
          </ul>
        </div>
        <p className="flex items-center justify-center text-xs text-white">
          이후 경기
        </p>
      </div>
    </div>
  );
}
