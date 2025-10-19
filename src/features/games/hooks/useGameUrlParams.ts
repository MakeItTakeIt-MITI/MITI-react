import { useSearchParams } from "react-router-dom";
import { formatDateForAPI, formatDateForDisplay, isValidDateParams } from "../utils/dateUtils.ts";

interface UseGameUrlParamsReturn {
  // Date parameters
  month: string | null;
  day: string | null;
  year: string | null;
  startdate: string;
  displayDate: string;
  isValidDate: boolean;
  
  // Filter parameters
  game_status: string[];
  regionParam: string;
  searchParam: string;
}

export const useGameUrlParams = (): UseGameUrlParamsReturn => {
  const [searchParams] = useSearchParams();

  // Extract date parameters
  const month = searchParams.get("month");
  const day = searchParams.get("day");
  const year = searchParams.get("year");
  
  // Extract filter parameters
  const game_status = searchParams.getAll("game_status");
  const regionParam = searchParams.get("region") || "";
  const searchParam = searchParams.get("search") || "";

  // Process date using utilities
  const dateParams = { year, month, day };
  const startdate = formatDateForAPI(dateParams);
  const displayDate = formatDateForDisplay(dateParams);
  const isValidDate = isValidDateParams(dateParams);

  return {
    month,
    day,
    year,
    startdate,
    displayDate,
    isValidDate,
    game_status,
    regionParam,
    searchParam,
  };
};