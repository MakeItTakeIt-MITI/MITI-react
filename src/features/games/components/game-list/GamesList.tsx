import { GameField } from "../../interface/games.ts";
import GamesListCard from "../card/GamesListCard.tsx";
import "./scrollbar.css";
interface GamesListProps {
  gamesListData: GameField[];
}

export default function GamesList({ gamesListData }: GamesListProps) {
  return (
    <ul className="w-full flex flex-col  sm:gap-4 md:gap-[31px] sm:h-[1024px] md:h-[700px] overflow-y-auto custom-scrollbar p-2">
      {/* {gamesListData.length === 0 && <div>no games</div>} */}
      {gamesListData?.map((game: GameField) => (
        <GamesListCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
