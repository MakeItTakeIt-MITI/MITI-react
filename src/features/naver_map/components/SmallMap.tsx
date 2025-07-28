/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from "react";
import { NaverMapProps } from "../interface/naver_map.ts";

declare global {
  interface Window {
    naver: any;
  }
}

if (!window.naver) {
  console.error("Error in loading Naver Maps");
}

const { naver } = window;

export default function SmallMap({ id }: NaverMapProps) {
  useEffect(() => {
    new naver.maps.Map(id, {
      center: new naver.maps.LatLng(37.554722, 126.972778),
      zoom: 14,
      scrollWheel: true,
      disableKineticPan: false,
    });
  }, []);

  return (
    <div id={id} className="w-[375px] h-[241px] rounded-[20px]">
      SmallMap
    </div>
  );
}
