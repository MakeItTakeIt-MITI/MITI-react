/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from "react";
import map_marker from "../../../assets/v1.3/map/map_maker_m.svg";

declare global {
  interface Window {
    naver: any;
  }
}

if (!window.naver) {
  console.error("Error in loading Naver Maps");
}
const { naver } = window;

interface GameDetailMapProps {
  lat: string;
  long: string;
}

export default function GameDetailMap({ lat, long }: GameDetailMapProps) {
  useEffect(() => {
    const map = new naver.maps.Map("game-details-map", {
      center: new naver.maps.LatLng(lat, long),
      zoom: 17,
      scrollWheel: true,
      disableKineticPan: false,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, long),
      zoom: 12,
      map: map,
    });
    const img = document.createElement("img");
    img.src = map_marker;
    img.alt = "Game Location";
    img.style.width = "32px";
    img.style.height = "40px";
    marker.setIcon({ content: img });
  }, [lat, long]);

  return (
    <div
      id="game-details-map"
      className="w-full h-[241px]  md:size-[360px] md:rounded-[20px]"
    />
  );
}
