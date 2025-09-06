import { GameField } from "../../interface/games.ts";
import GamesListCard from "../card/GamesListCard.tsx";
import "./scrollbar.css";
interface GamesListProps {
  gamesListData: GameField[];
}

export default function GamesList({ gamesListData }: GamesListProps) {
  return (
    <ul className="w-full flex flex-col gap-[31px] h-[700px] overflow-y-auto custom-scrollbar p-1">
      {/* {gamesListData.length === 0 && <div>no games</div>} */}
      {gamesListData?.map((game: GameField) => (
        <GamesListCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
