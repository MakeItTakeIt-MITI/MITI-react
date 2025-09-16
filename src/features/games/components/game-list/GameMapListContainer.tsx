import Tab from "../../../common/components(renewal)/chips/Tab.tsx";
import GamesList from "./GamesList.tsx";
import Card from "../card/Card.tsx";
import SearchBar from "../../../common/components(renewal)/search/SearchBar.tsx";
import LargeMap from "../../../naver_map/components/LargeMap.tsx";
import { GameField } from "../../interface/games.ts";
import "../../../../index.css";

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
  gamesMapData: GameField[];
  gamesListData: GameField[];
  isLoading: boolean;
  tab: string;
}

export default function GameMapListContainer({
  handleToggleTab,
  tab,
  gamesMapData,
  gamesListData,
}: GameMapListContainerProps) {
  return (
    <div className=" md:w-[700px] w-full min-h-[1px] flex flex-col gap-[20px]">
      {/* TAB  */}
      <div className="flex">
        <Tab
          content="지도"
          tab={tab}
          isSelected={tab === "map" ? true : false}
          onClick={() => handleToggleTab("map")}
        />
        <Tab
          content="리스트"
          tab={tab}
          isSelected={tab === "list" ? true : false}
          onClick={() => handleToggleTab("list")}
        />
      </div>
      {/* Games MAP/LIST */}
      {tab === "map" ? (
        <div className="flex flex-col gap-5  w-full   ">
          {/* <LargeMap id="games-list" gamesMapData={gamesMapData} /> */}
          {/* </Suspense> */}
          <div className="flex flex-col gap-4 sm:h-[328px] md:h-[528px] overflow-y-auto overflow-x-hidden custom-scrollbar sm:px-0 md:px-4 ">
            <span className="text-xs font-[400] text-white">
              총 {gamesMapData?.length}개의 경기
            </span>
            <ul className="flex flex-col gap-2.5 h-[500px] overlflow-y-auto">
              {gamesMapData?.length === 0 && (
                <div className="  w-full flex flex-col gap-4 items-center justify-center">
                  <h3 className="text-lg text-white">
                    검색된 경기가 없습니다.
                  </h3>{" "}
                  <p className="text-sm text-[#999]">
                    필터를 변경하여 다른 경기를 찾아보세요!
                  </p>
                </div>
              )}
              {gamesMapData?.map((game) => (
                <Card key={game.id} game={game} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        // ALL GAMES RENDERING CONTAINER
        <div className="flex flex-col gap-5 w-full ">
          <SearchBar paramKey="search" title="경기" />
          <GamesList gamesListData={gamesListData} />
        </div>
      )}
    </div>
  );
}
