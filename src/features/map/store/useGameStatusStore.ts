import { create } from 'zustand';

type StatusSelectionStore = {
    status: string;
    setStatus: (arg: string) => void;
};

const useGameStatusStore = create<StatusSelectionStore>((set) => ({
    status: "",
    setStatus: (newStatus) => set({ status: newStatus }),
}));

export default useGameStatusStore;
