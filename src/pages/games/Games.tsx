import BannerMedium from "../../features/common/components(renewal)/banners/BannerMedium.tsx";
import Sidebar from "../../features/games/components/sidebar/Sidebar.tsx";
import { useSearchParams } from "react-router-dom";
import GameMapListContainer from "../../features/games/components/GameMapListContainer.tsx";
import { useCallback, useRef } from "react";

export const Games = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("targetRef:", targetRef.current);
  };

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

  // callback function to set game time
  const handleSetTime = useCallback(
    (hour: string, minutes: string) => {
      const params = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...params, time: `${hour}:${minutes}` });
    },
    [searchParams, setSearchParams]
  );

  // callback function to filter by region
  const handleSelectRegion = useCallback(
    (region: string) => {
      const params = Object.fromEntries(searchParams.entries());

      // toggle
      if (searchParams.get("region") === region) {
        const { ...rest } = params;
        setSearchParams({ ...rest, region: "" });
        handleScroll();
      } else {
        setSearchParams({ ...params, region });
        handleScroll();
      }
    },

    [setSearchParams, searchParams]
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
          <Sidebar
            handleSetTime={handleSetTime}
            handleSelectRegion={handleSelectRegion}
          />
          {/* Main display component between game map and game list components */}
          <GameMapListContainer
            handleToggleTab={handleToggleTab}
            targetRef={targetRef}
          />
        </article>
      </section>
      {/* <Footer /> */}
    </>
  );
};
