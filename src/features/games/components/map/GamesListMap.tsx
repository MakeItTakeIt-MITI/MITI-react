/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

if (!window.naver) {
  console.error("Error in loading Naver Maps");
}
const { naver } = window;

export default function GamesListMap() {
  useEffect(() => {
    new naver.maps.Map("games-list-map", {
      center: new naver.maps.LatLng(37.554722, 126.972778),
      zoom: 14,
      scrollWheel: true,
      disableKineticPan: false,
      // tileDuration: 700,
    });
  }, []);
  return (
    <div id="games-list-map" className="w-full h-[500px] rounded-lg"></div>
  );
}
