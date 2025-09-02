import { useSearchParams } from "react-router-dom";
import Tab from "../../common/components(renewal)/chips/Tab.tsx";
import GamesList from "./game-list/GamesList.tsx";
import Card from "./card/Card.tsx";
import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import LargeMap from "../../naver_map/components/LargeMap.tsx";
import { useState } from "react";
import CardSkeleton from "./card/CardSkeleton.tsx";

interface Court {
  id: number;
  name: string;
  address: string;
  address_detail: string | null;
  latitude: string;
  longitude: string;
}

export type GameStatus =
  | "open"
  | "closed"
  | "canceled"
  | "finished"
  | (string & {});

interface GameMapListContainerProps {
  handleToggleTab: (arg: string) => void;
  targetRef: React.Ref<HTMLDivElement>;
  gamesMapData: {
    id: number;
    game_status: GameStatus;
    title: string;
    startdate: string; // e.g. "2025-09-03"
    starttime: string; // e.g. "21:00:00"
    enddate: string; // e.g. "2025-09-04"
    endtime: string; // e.g. "00:00:00"
    min_invitation: number;
    max_invitation: number;
    num_of_participations: number;
    fee: number; // KRW
    info: string;
    court: Court;
  }[];
  isLoading: boolean;
}

export default function GameMapListContainer({
  handleToggleTab,
  targetRef,
  gamesMapData,
  isLoading,
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
        <div className="flex flex-col gap-5">
          <LargeMap id="games-list" />
          {/* </Suspense> */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-[400] text-white">
              총 {gamesMapData?.length}개의 경기
            </span>
            <ul className="flex flex-col gap-2.5">
              {gamesMapData?.map((game) => (
                <>
                  {isLoading ? (
                    <CardSkeleton key={game.id} />
                  ) : (
                    <Card key={game.id} game={game} />
                  )}
                </>
              ))}
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
