import { AllGamesProps } from "../../interfaces/games.ts";
import "./scrollbar.css";
import MobileGameListCard from "./MobileGameListCard.tsx";

const MobileGameListContainer = ({ allGamesData }: AllGamesProps) => {
  return (
    <div className="sm:block md:hidden custom-scrollbar bg-light-dark sm:w-full md:w-[381px] sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      {allGamesData?.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center text-white font-[500] text-md">
          <h1>진행중인 경기가 없습니다.</h1>
        </div>
      ) : (
        allGamesData?.map((game) => (
          <MobileGameListCard game={game} key={game.id} />
        ))
      )}
    </div>
  );
};

export default MobileGameListContainer;
