import { create } from 'zustand';


type CurrentMonthStore = {
    currentMonth: number
    setCurrentMonth: (arg: number) => void
    resetCurrentMonth: () => void;
};


const date = new Date()
const INITIAL_MONTH = date.getMonth() + 1


const useCurrentMonthStore = create<CurrentMonthStore>((set) => ({
    currentMonth: INITIAL_MONTH,
    setCurrentMonth: (currentMonth: number) => set({ currentMonth }),
    resetCurrentMonth: () => set({ currentMonth: INITIAL_MONTH })


}));

export default useCurrentMonthStore