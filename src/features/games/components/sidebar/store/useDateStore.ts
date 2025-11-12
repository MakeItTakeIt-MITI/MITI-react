import { create } from 'zustand';

interface DateStore {
    selectedYear: number;
    selectedMonth: number;
    selectedDay: number;
    setDate: (year: number, month: number, day: number) => void;
    resetToToday: () => void;

}

const seoulTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
});

const today = new Date(seoulTime);

const getTodayKST = () => {
    const kst = new Date(
        new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
    );
    return {
        year: kst.getFullYear(),
        month: kst.getMonth() + 1,
        day: kst.getDate(),
    };
};

export const useDateStore = create<DateStore>((set) => ({
    selectedYear: today.getFullYear(),
    selectedMonth: today.getMonth() + 1,
    selectedDay: today.getDate(),
    setDate: (year, month, day) =>
        set({ selectedYear: year, selectedMonth: month, selectedDay: day }),
    resetToToday: () => {
        const t = getTodayKST();
        set({ selectedYear: t.year, selectedMonth: t.month, selectedDay: t.day });
    },
}));
