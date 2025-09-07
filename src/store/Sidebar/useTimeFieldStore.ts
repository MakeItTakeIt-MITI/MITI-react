import { create } from "zustand";

/**
 * Zustand global store for managing time (hour + minutes).
 * 
 * This store centralizes the time state so that multiple components
 * can read or update the selected time consistently on the Sidebar component.
 */
interface TimeState {
    hour: number; // current selected hour (0–23)
    minutes: number; // current selected minutes (0–59, usually step of 10)
    setHour: (hour: number) => void; // update only the hour
    setMinutes: (minutes: number) => void; // update only the minutes
    setTime: (hour: number, minutes: number) => void; // update both hour and minutes at once
    resetTime: () => void; // reset time back to default (00:00)
}

/**
 * useTimeStore
 *
 * A global state store for handling time selection.
 * Example usage:
 *
 * const { hour, minutes, setHour, setMinutes } = useTimeStore();
 */
export const useTimeField = create<TimeState>((set) => ({
    // Initial state
    hour: 0,
    minutes: 0,

    // Update hour only
    setHour: (hour) => set({ hour }),

    // Update minutes only
    setMinutes: (minutes) => set({ minutes }),

    // Update both hour and minutes
    setTime: (hour, minutes) => set({ hour, minutes }),

    // Reset to default 00:00
    resetTime: () => set({ hour: 0, minutes: 0 }),
}));
