// Display dates for 2 weeks
export const DATES = () => {
    const availableDates = [];

    for (let i = 0; i < 30; i++) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        availableDates.push(newDate);
    }

    const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];

    return availableDates.map((date) => ({
        year: date.getFullYear(), // get the year
        month: date.getMonth() + 1, // getMonth() is zero-based, so we add 1
        formattedMonth: (date.getMonth() + 1).toString().padStart(2, '0'), // getMonth() is zero-based, so we add 1
        day: date.getDay(), // getDay() returns the day of the week (0-6)
        date: date.getDate(), // getDate() returns the day of the month (1-31)
        formattedDate: date.getDate().toString().padStart(2, '0'),
        dayKorean: koreanDays[date.getDay()], // Map the day to its Korean equivalent
    }));

}

// display morning or afternoon status 오전/오후
export const DAYSTATUS = () => {
    const getCurrentTimePeriodInKorean = (): string => {
        const date = new Date();
        const hour = date.getHours();

        return hour < 12 ? "오전" : "오후";
    };
    return getCurrentTimePeriodInKorean();

}



const INITIAL_DATES = DATES();
const FIRST_DATE = INITIAL_DATES[0];
export const initialDateField = `${FIRST_DATE.month}.${FIRST_DATE.date} (${FIRST_DATE.dayKorean})`;
export const yearMonthToDate = `${FIRST_DATE.year}-${FIRST_DATE.formattedMonth}-${FIRST_DATE.formattedDate}`;
