import { useSelectedStore } from "../../../store/NaverMap/useSelectedStore.tsx";
import { GameField } from "../interface/games.ts";

interface UseGameDataProcessingProps {
  mapData: any;
  gamesData: any;
}

interface UseGameDataProcessingReturn {
  gamesMapData: GameField[];
  gamesListData: GameField[];
  displayedGames: GameField[];
  isSelected: boolean;
  selectedAddress: string | null;
}

export const useGameDataProcessing = ({ 
  mapData, 
  gamesData 
}: UseGameDataProcessingProps): UseGameDataProcessingReturn => {
   // Gets map selection state from Zustand store
  const { isSelected, selectedAddress } = useSelectedStore();

  // Transform API data (raw) from BE into usable format
  const gamesMapData = mapData?.data || [];
  const gamesListData: GameField[] =
    gamesData?.pages.flatMap((page: any) => page.data.page_content) ?? [];

  // Filter games based on map selection
  const displayedGames = isSelected
    ? gamesMapData.filter((game: GameField) => game.court.address === selectedAddress)
    : gamesMapData;

  return {
    gamesMapData,
    gamesListData,
    displayedGames,
    isSelected,
    selectedAddress,
  };
};