import SearchBar from "../../../common/components(renewal)/search/SearchBar.tsx";
import { GameField } from "../../interface/games.ts";
import GamesList from "../lists/GamesList.tsx";

interface ListViewProps {
  gamesListData: GameField[];
  isGamesListLoading: boolean;
}

export default function ListView({
  gamesListData,
  isGamesListLoading,
}: ListViewProps) {
  return (
    <div className="flex flex-col gap-5 w-full md:px-0 sm:px-4">
      <SearchBar paramKey="search" title="경기" />
      <GamesList
        gamesListData={gamesListData}
        isGamesListLoading={isGamesListLoading}
      />
    </div>
  );
}