import SearchBar from "../../../common/components(renewal)/search/SearchBar.tsx";
import { GameField } from "../../interface/games.ts";
import GamesList from "../lists/GamesList.tsx";
import GameHeader from "../ui/GameHeader.tsx";

interface ListViewProps {
  allGames: GameField[];
  isGamesListLoading: boolean;
  inViewGameListRef: React.Ref<HTMLDivElement>;
  handleToggleMobileFilterBox: () => void;
  selectedProvince: string[];
}

export default function ListView({
  allGames,
  isGamesListLoading,
  inViewGameListRef,
  handleToggleMobileFilterBox,
  selectedProvince,
}: ListViewProps) {
  return (
    <div className="flex flex-col gap-5 w-full md:px-0 sm:px-4">
      <SearchBar paramKey="search" title="경기" />
      <GameHeader
        gameCount={allGames.length}
        handleToggleMobileFilterBox={handleToggleMobileFilterBox}
        selectedProvince={selectedProvince}
      />
      <GamesList
        allGames={allGames}
        isGamesListLoading={isGamesListLoading}
        inViewGameListRef={inViewGameListRef}
      />
    </div>
  );
}
