
import { create } from 'zustand';
import { DATES } from '../constants/calender.ts';

type DatesSelectionStore = {
    selectedStatuses: string;
    dateField: string;
    yearMonthDay: string;
    setDateField: (dateField: string) => void;
    setYearMonthDay: (yearMonthDay: string) => void;
    resetDateField: () => void;
};

const INITIAL_DATES = DATES()

const FIRST_DATE = INITIAL_DATES[0]
const initialDateField = `${FIRST_DATE.month}.${FIRST_DATE.date} (${FIRST_DATE.dayKorean})`;
const yearMonthDay = `${FIRST_DATE.year}-${FIRST_DATE.formattedMonth}-${FIRST_DATE.formattedDate}`


const useDateSelectionStore = create<DatesSelectionStore>((set) => ({
    selectedStatuses: "",
    yearMonthDay: yearMonthDay,
    dateField: initialDateField,
    setDateField: (dateField: string) => set({ dateField }),
    setYearMonthDay: (yearMonthDay: string) => set({ yearMonthDay }),
    resetDateField: () => set({ dateField: initialDateField }),
}));
export default useDateSelectionStore;
