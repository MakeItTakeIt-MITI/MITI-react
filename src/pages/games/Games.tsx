import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import { useSearchParams } from "react-router-dom";
import GameMapListContainer from "../../features/games/components/game-list/GameMapListContainer.tsx";
import { useCallback } from "react";
import { useMapGamesList } from "../../features/games/hooks/query/useMapGamesList.tsx";

export const Games = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // function passed as a prop, useCallBack to prevent re-render
  const handleToggleTab = useCallback(
    (selected: string) => {
      const params = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...params, tab: selected });

      // ! Following function is an issue -
      // ! it only keeps tab paramater and does not include other suchs as game status, time, date, region
      //   setSearchParams({ tab: selected });
    },
    [searchParams, setSearchParams]
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
  console.log(gamesMapData);
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
          />
        </article>
      </section>
      {/* <Footer /> */}
    </>
  );
};
