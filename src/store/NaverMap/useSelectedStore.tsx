import { create } from "zustand";

interface SelectedState {
  isSelected: boolean;
  selectedAddress: string | null;
  setSelectedAddress: (value: string) => void;
  setSelected: (value: boolean) => void;
  toggleSelected: () => void;
}

export const useSelectedStore = create<SelectedState>((set) => ({
  isSelected: false,
  selectedAddress: null,
  setSelectedAddress: (address) => set({ selectedAddress: address }),
  setSelected: (value) => set({ isSelected: value }),
  toggleSelected: (address?: string) =>
    set((state) => {
      if (state.selectedAddress === address) {
        return { isSelected: false, selectedAddress: null };
      }
      return { isSelected: true, selectedAddress: address || null };
    }),
}));
