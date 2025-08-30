import { useSearchParams } from "react-router-dom";
import Tab from "../../common/components(renewal)/chips/Tab.tsx";
import GamesList from "./game-list/GamesList.tsx";
import Card from "./card/Card.tsx";
import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import LargeMap from "../../naver_map/components/LargeMap.tsx";
import { useState } from "react";

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
  targetRef: React.Ref<HTMLDivElement>;
}

export default function GameMapListContainer({
  handleToggleTab,
  targetRef,
}: GameMapListContainerProps) {
  const [serchParams] = useSearchParams();
  const tab = serchParams.get("tab");

  return (
    <div
      ref={targetRef}
      className=" w-[700px] min-h-[1px] flex flex-col gap-[20px]"
    >
      {/* TAB  */}
      <div className="flex">
        <Tab content="지도" isSelected onClick={() => handleToggleTab("map")} />
        <Tab
          content="리스트"
          isSelected={false}
          onClick={() => handleToggleTab("list")}
        />
      </div>
      {/* Games MAP/LIST */}
      {tab === "map" ? (
        // GAME MAP LIST RENDERING CONTAINER
        <div className="flex flex-col gap-5">
          {/* <Suspense fallback={<p>Loading..</p>}> */}
          {/* <GamesListMap /> */}
          <LargeMap id="games-list" />
          {/* </Suspense> */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-[400] text-white">
              총 NN개의 경기
            </span>
            <ul className="flex flex-col gap-2.5">
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
        </div>
      ) : (
        // ALL GAMES RENDERING CONTAINER
        <div className="flex flex-col gap-5">
          <SearchBar paramKey="search" title="경기" />
          <GamesList />
        </div>
      )}
      x
    </div>
  );
}
