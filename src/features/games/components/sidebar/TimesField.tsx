import { useRef, useState, useEffect } from "react";
import { useTimeField } from "../../../../store/Sidebar/useTimeFieldStore";



export default function TimesField() {
  const { hour, minutes, setHour, setMinutes } = useTimeField();
  const [isHourScrolling, setIsHourScrolling] = useState(false);
  const [isMinuteScrolling, setIsMinuteScrolling] = useState(false);

  const handleSetHourClick = (selected: number) => {
    setHour(selected);
  };

  const handleSetMinuteClick = (selected: number) => {
    setMinutes(selected);
  };

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const hourScrollRef = useRef<HTMLUListElement>(null);
  const minuteScrollRef = useRef<HTMLUListElement>(null);

  const SCROLL_STEP = 1;

  const MINUTE_SCROLL_STEP = 10;

  // Add event listeners with passive: false to ensure preventDefault works
  useEffect(() => {
    const hourElement = hourScrollRef.current;
    const minuteElement = minuteScrollRef.current;

    const hourWheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      
      if (scrollTimeout.current) return;
      
      setIsHourScrolling(true);
      
      if (e.deltaY > 0) {
        setHour((hour + SCROLL_STEP) % 24);
      } else if (e.deltaY < 0) {
        setHour((hour - SCROLL_STEP + 24) % 24);
      }
      
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
        setIsHourScrolling(false);
      }, 150);
    };

    const minuteWheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      
      if (scrollTimeout.current) return;
      
      setIsMinuteScrolling(true);
      
      if (e.deltaY > 0) {
        const newMinutes = (minutes + MINUTE_SCROLL_STEP) % 60;
        setMinutes(newMinutes);
      } else if (e.deltaY < 0) {
        const newMinutes = (minutes - MINUTE_SCROLL_STEP + 60) % 60;
        setMinutes(newMinutes);
      }
      
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
        setIsMinuteScrolling(false);
      }, 150);
    };

    if (hourElement) {
      hourElement.addEventListener('wheel', hourWheelHandler, { passive: false });
    }
    
    if (minuteElement) {
      minuteElement.addEventListener('wheel', minuteWheelHandler, { passive: false });
    }

    return () => {
      if (hourElement) {
        hourElement.removeEventListener('wheel', hourWheelHandler);
      }
      if (minuteElement) {
        minuteElement.removeEventListener('wheel', minuteWheelHandler);
      }
    };
  }, [hour, minutes, setHour, setMinutes]);

  return (
    <div className="flex flex-col gap-4">
        <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
     
      <div className="flex gap-3 items-center">
        <div 
          className="flex gap-2 items-center relative"
          style={{ isolation: "isolate" }}
        >
          {/* hour */}
          <ul
            ref={hourScrollRef}
            style={{
              scrollbarWidth: "none",
              touchAction: "none", // Prevent touch scrolling on mobile
            }}
            className={`flex flex-col items-center justify-center h-[90px] overflow-hidden relative cursor-pointer transition-all duration-150 ${
              isHourScrolling ? "bg-gray-800 bg-opacity-20 rounded-lg" : ""
            }`}
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
            ref={minuteScrollRef}
            style={{
              scrollbarWidth: "none",
              touchAction: "none", // Prevent touch scrolling on mobile
            }}
            className={`flex flex-col items-center justify-center h-[90px] overflow-hidden relative cursor-pointer transition-all duration-150 ${
              isMinuteScrolling ? "bg-gray-800 bg-opacity-20 rounded-lg" : ""
            }`}
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
