
import { create } from 'zustand';
import { GAMESTATUS } from '../constants/status.ts';



type StatusSelectionStore = {
    selectedStatuses: string[];
    toggleStatus: (status: string) => void;
    resetStatuses: () => void;
};

const INITIAL_STATUSES = GAMESTATUS

const useStatusSelectionStore = create<StatusSelectionStore>((set) => ({
    selectedStatuses: INITIAL_STATUSES,
    toggleStatus: (status: string) => set((state) => {
        const isSelected = state.selectedStatuses.includes(status);
        return {
            selectedStatuses: isSelected
                ? state.selectedStatuses.filter((s) => s !== status)
                : [...state.selectedStatuses, status],
        };

    }),
    resetStatuses: () => set({ selectedStatuses: INITIAL_STATUSES })
}));

export default useStatusSelectionStore;
