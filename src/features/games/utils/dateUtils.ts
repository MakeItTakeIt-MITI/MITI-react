/**
 * Utility functions for date formatting in games
 */

interface DateParams {
  year: string | null;
  month: string | null;
  day: string | null;
}

/**
 * DATA Format to call API yyyy-mm-dd format
 */
export const formatDateForAPI = ({ year, month, day }: DateParams): string => {
  return `${year}-${month}-${day}`;
};

/**
 * Format to display date in Korean format (MM.DD(요일))
 */
export const formatDateForDisplay = ({ year, month, day }: DateParams): string => {
  if (!month || !day) return "";
  
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
  const dayOfWeek = days[dateObj.getDay()];
  
  return `${month}.${day}(${dayOfWeek})`;
};

/**
 * Validates if date parameters are present
 */
export const isValidDateParams = ({ year, month, day }: DateParams): boolean => {
  return Boolean(year && month && day);
};

/**
 * Gets today's date in KST (Korean Standard Time) Format: yyyy or mm or dd
 */
export const getTodayKST = () => {
  const now = new Date();
  const kstOffset = 9 * 60; // KST is UTC+9
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const kstTime = new Date(utc + (kstOffset * 60000));
  
  return {
    year: kstTime.getFullYear().toString(),
    month: (kstTime.getMonth() + 1).toString().padStart(2, '0'),
    day: kstTime.getDate().toString().padStart(2, '0'),
  };
};