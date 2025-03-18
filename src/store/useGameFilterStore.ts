import { create } from 'zustand';
import { DATES } from '../constants/calender.ts';

interface GameFilterState {
    selectedDate: string;
    selectedTimeDate: string;
    selectedStatus: string;
    setSelectedDate: (date: string) => void;
    setSelectedTimeDate: (timeDate: string) => void;
    setSelectedStatus: (status: string) => void;
    resetFilterHeader: () => void
    resetSelectedDate: () => void
    resetSelectedTimeDate: () => void
    resetSelectedStatus: () => void
}



const displayDate = `${DATES()[0].month}.${DATES()[0].date} (${DATES()[0].dayKorean})`;
const today = `${DATES()[0].month}.${DATES()[0].date} (${DATES()[0].dayKorean})`;
const displayTime = `경기 시작 시간`
const displayStatus = '경기 상태'

const useGameFilterStore = create<GameFilterState>((set) => ({

    // selectedDate: displayDate,
    selectedDate: "날짜",
    // selectedTimeDate: "경기 시작 시간",
    selectedTimeDate: displayTime,
    selectedStatus: displayStatus,
    setSelectedDate: (date) => set({ selectedDate: date }),
    setSelectedTimeDate: (timeDate) => set({ selectedTimeDate: timeDate }),
    setSelectedStatus: (status) => set({ selectedStatus: status }),
    resetFilterHeader: () => set({
        selectedDate: displayDate,
        // selectedDate: "날짜",
        // selectedTimeDate: "경기 시작 시간",
        selectedTimeDate: displayTime,
        selectedStatus: displayStatus,
        // selectedStatus: "경기 상태",
    }),
    resetSelectedDate: () => set({
        // selectedDate: "날짜",
        selectedDate: today,
    }),
    resetSelectedTimeDate: () => set({
        // selectedTimeDate: "경기 시작 시간",
        selectedTimeDate: displayTime,
    }),
    resetSelectedStatus: () => set({
        selectedStatus: displayStatus,
        // selectedStatus: "경기 상태",
    }),
}));

export default useGameFilterStore;
