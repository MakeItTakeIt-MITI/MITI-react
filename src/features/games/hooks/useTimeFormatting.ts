import { useTimeField } from "../../../store/Sidebar/useTimeFieldStore.ts";

interface UseTimeFormattingReturn {
  hour: number;
  minutes: number;
  timeFormat: string;
  koreanTimeFormat: string;
  resetTime: () => void;
}

export const useTimeFormatting = (): UseTimeFormattingReturn => {
  const { hour, minutes, resetTime } = useTimeField();

  // API time format (HH:MM)
  const timeFormat = `${hour.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  // Korean readable format (오전/오후 H시 M분)
  const getKoreanTimeFormat = () => {
    const h = Number(hour);
    const m = Number(minutes);
    const period = h < 12 ? "오전" : "오후";
    const displayHour = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${period} ${displayHour}시 ${m}분`;
  };

  const koreanTimeFormat = getKoreanTimeFormat();

  return {
    hour,
    minutes,
    timeFormat,
    koreanTimeFormat,
    resetTime,
  };
};