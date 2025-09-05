import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import { useSearchParams } from "react-router-dom";
import GameMapListContainer from "../../features/games/components/game-list/GameMapListContainer.tsx";
import { useCallback, useState } from "react";
import { useMapGamesList } from "../../features/games/hooks/query/useMapGamesList.tsx";

export const Games = () => {
  const [tab, setTab] = useState("map");
  const [searchParams] = useSearchParams();

  // function passed as a prop, useCallBack to prevent re-render
  const handleToggleTab = useCallback(
    (selected: string) => {
      setTab(selected);
    },
    [tab]
  );

  const month = searchParams.get("month");
  const day = searchParams.get("day");
  const year = searchParams.get("year");

  const startdate = `${year}-${month}-${day}`;
  const starttime = searchParams.get("time") || "00:00";
  const game_status = searchParams.getAll("game_status");

  const { data: mapData, isLoading } = useMapGamesList(
    startdate,
    starttime,
    game_status
  );

  const gamesMapData = mapData?.data;

  return (
    <>
      <section
        style={{
          backgroundColor: "#141414",
        }}
        className="mx-auto  w-[968px] flex flex-col items-center gap-[30px] py-[30px]"
      >
        {/* BANNER Component */}
        <BannerMedium type="manners" />
        {/* Displays games filter sidebar and games list */}
        <article className="flex gap-[30px]">
          {/* Sidebar component to filter game rendering */}
          <Sidebar />
          {/* Main display component between game map and game list components */}
          <GameMapListContainer
            handleToggleTab={handleToggleTab}
            gamesMapData={gamesMapData}
            isLoading={isLoading}
            tab={tab}
          />
        </article>
      </section>
      {/* <Footer /> */}
    </>
  );
};
