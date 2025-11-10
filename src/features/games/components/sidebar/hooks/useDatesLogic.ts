import { getTodaysDateKorea } from "@/utils/dates/date";
import { useCallback, useMemo } from "react";
import { useDateStore } from "../store/useDateStore";

export const useDatesLogic = () => {
    // Define initial date
    const { selectedYear, selectedMonth, selectedDay, setDate } = useDateStore();


    const DATES = () => {
        const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];
        const availableDates: Date[] = [];

        // Get today's date in KST
        const { year, month, day } = getTodaysDateKorea();
        const todayKST = new Date(`${year}-${month}-${day}`);

        // Generate 30 days from today
        for (let i = 0; i < 30; i++) {
            const newDate = new Date(todayKST);
            newDate.setDate(todayKST.getDate() + i);
            availableDates.push(newDate);
        }

        // Map to your expected structure
        return availableDates.map((date) => ({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            formattedMonth: (date.getMonth() + 1).toString().padStart(2, "0"),
            day: date.getDay(),
            date: date.getDate(),
            formattedDate: date.getDate().toString().padStart(2, "0"),
            dayKorean: koreanDays[date.getDay()],
        }));
    };



    const handleSetYearMonthDay = useCallback(
        (year: number, month: number, day: number) => {
            setDate(year, month, day);

            console.log('Selected Date ->', `${year}-${month}-${day}`);
        },
        [setDate]
    );

    const dateFormat = useMemo(() => {
        return `${selectedYear}-${String(selectedMonth).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
    }, [selectedYear, selectedMonth, selectedDay]);

    const INITIAL_DATES = useMemo(() => DATES(), []);

    return {
        INITIAL_DATES,
        handleSetYearMonthDay,
        dateFormat,
        selectedMonth
    };
}