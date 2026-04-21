/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from "react";
// import { useMapGamesList } from "../../games/hooks/useMapGamesList.tsx";

declare global {
  interface Window {
    naver: any;
  }
}

if (!window.naver) {
  console.error("Error in loading Naver Maps");
}

const { naver } = window;

// ! {{DOMAIN}}/games?startdate=2024-05-03&starttime=17:00&game_status=closed&game_status=open&game_status=canceled&game_status=completed
export const GamesMap = () => {
  // const { data: mapData } = useMapGamesList("", "", "");

  // console.log(mapData);
  useEffect(() => {
    new naver.maps.Map("games-map", {
      center: new naver.maps.LatLng(37.554722, 126.972778),
      zoom: 14,
      scrollWheel: true,
      disableKineticPan: false,
    });
  }, []);

  return (
    <div
      id="games-map"
      className="sm:hidden md:block w-full h-[494px] rounded-[20px]"
    ></div>
  );
};
