import { create } from 'zustand';
// eslint-disable-next-line import/extensions
import { persist } from 'zustand/middleware';

interface GamesField {
    selectedGamesList: string[]
    setSelectedGamesList: (games: string[]) => void;
    clearSelectedGamesList: (games: string[]) => void;
}

const useSelectedGamesStore = create(
    persist<GamesField>(
        (set) => ({
            selectedGamesList: [],
            setSelectedGamesList: (games) => {
                set((state) => ({ selectedGamesList: [...state.selectedGamesList, ...games] }));
            },
            clearSelectedGamesList: () => {
                set({ selectedGamesList: [] })
            }
        }),
        {
            name: 'filtered games',
        }
    )
);

export default useSelectedGamesStore;
