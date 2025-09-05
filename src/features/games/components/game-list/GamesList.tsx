import GamesListCard from "../card/GamesListCard.tsx";

export default function GamesList({ gamesListData }) {
  return (
    <ul className="flex flex-col gap-[31px]">
      {gamesListData.length === 0 && <div>no games</div>}
      {gamesListData?.map((game) => (
        <GamesListCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
