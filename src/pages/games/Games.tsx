import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import { useSearchParams } from "react-router-dom";
import GameMapListContainer from "../../features/games/components/GameMapListContainer.tsx";
import { useCallback } from "react";

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

  const handleSetTime = useCallback(
    (hour: string, minutes: string) => {
      const params = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...params, time: `${hour}:${minutes}` });
    },
    [searchParams, setSearchParams]
  );

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
          <Sidebar handleSetTime={handleSetTime} />
          {/* Main display component between game map and game list components */}
          <GameMapListContainer handleToggleTab={handleToggleTab} />
        </article>
      </section>
      {/* <Footer /> */}
    </>
  );
};
