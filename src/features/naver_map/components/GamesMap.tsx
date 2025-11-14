import { useEffect } from "react";

// Add global type for naver maps
declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

function GamesMap() {
  useEffect(() => {
    if (!naver || !naver.maps) return;

    const map = new naver.maps.Map("games-list", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 13,
      scrollWheel: true,
    });

    return () => {
      map.destroy();
    };
  }, []);

  return (
    <div
      id="games-list"
      className="w-full md:w-[700px] sm:h-[241px] md:h-[450px] md:rounded-[20px]"
    />
  );
}

export default GamesMap;
