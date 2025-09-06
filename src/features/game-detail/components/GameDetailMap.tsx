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

export default function GameDetailMap({ lat, long }) {
  useEffect(() => {
    const map = new naver.maps.Map("game-details-map", {
      center: new naver.maps.LatLng(lat, long),
      zoom: 14,
      scrollWheel: true,
      disableKineticPan: false,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, long),
      zoom: 12,
      map: map,

      // gameId: game.id,
      // markerHTML: markerHTML,
      // overlappedMarkerHTML: overlappedMarkerHTML,
      // selectedMarkerHTML: selectedMarkerHTML,
      //   zIndex: gameId === game.id ? 100 : 1,
    });
  }, []);

  return (
    <div id="game-details-map" className="size-[360px] rounded-[20px]">
      MediumMap
    </div>
  );
}
