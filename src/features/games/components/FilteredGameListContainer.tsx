import { AllGamesProps } from "../../../interfaces/games.ts";
import FilteredGameCard from "./FilteredGameCard.tsx";
import "../scrollbar.css";

interface FilteredContainerProps extends AllGamesProps {
  selectedAddress: string;
}

const FilteredGameListContainer = ({
  allGamesData,
  selectedAddress,
}: FilteredContainerProps) => {
  const filteredAddress = allGamesData?.filter(
    (game) => selectedAddress === game.court.address
  );

  return (
    <div className=" sm:hidden md:block custom-scrollbar bg-light-dark w-full sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      {filteredAddress?.length === 0 ? (
        <div className="space-y-4 flex flex-col items-center justify-center w-full h-full text-white">
          <h1 className="font-bold text-xl">검색된 경기가 없습니다.</h1>
          <h2 className="text-sm">필터를 변경하여 다른 경기를 찾아보세요!</h2>
        </div>
      ) : (
        filteredAddress?.map((game) => (
          <>
            <FilteredGameCard key={game.id} game={game} />
            <hr className="border-t border-[#525252]" />
          </>
        ))
      )}
    </div>
  );
};

export default FilteredGameListContainer;
