import { useTimeField } from "../../../../../../store/Sidebar/useTimeFieldStore";

const TimesFieldMobile = () => {
  const { hour, minutes: minutesRaw, setHour, setMinutes } = useTimeField();

  // ensure minutes always align to 10-minute intervals and default to 0
  const minutesIndex =
    typeof minutesRaw === "number"
      ? ((Math.round(minutesRaw / 10) % 6) + 6) % 6
      : 0;
  const minutes = minutesIndex * 10;

  const handleSetHourClick = (selected: number) => {
    setHour(selected);
  };

  const handleSetMinuteClick = (selected: number) => {
    // ensure we always set a multiple of 10
    const normalized = ((Math.round(selected / 10) % 6) + 6) % 6;
    setMinutes(normalized * 10);
  };

  const prevMinute = (minutes + 60 - 10) % 60;
  const nextMinute = (minutes + 10) % 60;

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-sm text-[#fff]">경기 시작 시간</p>
      <div className="flex gap-3 justify-center items-center">
        <div className="flex gap-2 items-center ">
          {/* hour */}
          <ul
            style={{
              scrollbarWidth: "none",
            }}
            // onWheelCapture={handleHourWheel}
            className="flex flex-col items-center justify-center h-[90px] overflow-y-scroll"
          >
            {hour === 0 ? (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetHourClick(23)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  {23}
                </button>
              </li>
            ) : (
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
                className="w-[66px] h-[30px] text-sm rounded-lg bg-[#5C5C5C] text-[#1ADCDF] "
              >
                {hour}
              </button>
            </li>

            {hour === 23 ? (
              <li>
                <button
                  type="button"
                  onClick={() => handleSetHourClick(0)}
                  className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
                >
                  {0}
                </button>
              </li>
            ) : (
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
          </ul>

          <span className="text-[#fff] font-bold text-lg">:</span>

          {/* minutes (10-minute intervals) */}
          <ul
            style={{
              scrollbarWidth: "none",
            }}
            className="flex flex-col items-center justify-center h-[90px] overflow-y-scroll"
          >
            <li>
              <button
                type="button"
                onClick={() => handleSetMinuteClick(prevMinute)}
                className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
              >
                {prevMinute}
              </button>
            </li>

            <li>
              <button
                type="button"
                className="w-[66px] h-[30px] text-sm rounded-lg bg-[#5C5C5C] text-[#1ADCDF]"
              >
                {minutes}
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => handleSetMinuteClick(nextMinute)}
                className="w-[66px] h-[30px] text-sm text-[#5C5C5C]"
              >
                {nextMinute}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimesFieldMobile;
