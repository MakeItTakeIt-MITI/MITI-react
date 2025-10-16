import { create } from 'zustand';

interface LatLongField {
    filteredGames: string[]
    setFilteredGames: (arg: string) => void
}


const useOverlappedAddressStore = create<LatLongField>((set) => ({
    filteredGames: [],
    setFilteredGames: (arg) => set((state) => ({
        filteredGames: [...state.filteredGames, arg],
    })),
}));

export default useOverlappedAddressStore;
