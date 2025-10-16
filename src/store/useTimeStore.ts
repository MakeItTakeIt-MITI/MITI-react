import { create } from 'zustand';

interface TimeField {
    selectedDayStatus: string;
    selectedHour: string;
    selectedMinute: string;
    formattedFullTime: string;
    setSelectedDayStatus: (dayStatus: string) => void;
    setSelectedHour: (hour: string) => void;
    setSelectedMinute: (minute: string) => void;
    setFormattedFullTime: (minute: string) => void;
    resetTimeField: () => void;


}

const DEFAULT_DAY_STATUS = '오전'
// const DEFAULT_DAY_STATUS = DAYSTATUS();
const DEFAULT_HOUR = "00";
const DEFAULT_MINUTE = "00";
const FORMATTED_TIME = "00:00"

const useTimeFieldStore = create<TimeField>((set) => ({
    selectedDayStatus: DEFAULT_DAY_STATUS,
    selectedHour: DEFAULT_HOUR,
    selectedMinute: DEFAULT_MINUTE,
    formattedFullTime: FORMATTED_TIME,
    setSelectedDayStatus: (dayStatus) => set({ selectedDayStatus: dayStatus }),
    setSelectedHour: (hour) => set({ selectedHour: hour }),
    setSelectedMinute: (minute) => set({ selectedMinute: minute }),
    setFormattedFullTime: (time) => set({ formattedFullTime: time }),
    resetTimeField: () => set({
        selectedDayStatus: DEFAULT_DAY_STATUS,
        selectedHour: DEFAULT_HOUR,
        selectedMinute: DEFAULT_MINUTE,
    })
}));

export default useTimeFieldStore;
