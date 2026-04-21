import { useEffect } from "react";
import marker from "../../../assets/v11/detail-marker.svg";
const { naver } = window;

interface GameDetailMapProp {
  latitude: string;
  longitude: string;
}

const GameDetailMap = ({ latitude, longitude }: GameDetailMapProp) => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 16,
      pinchZoom: true,
      scrollWheel: true,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: map,
      icon: {
        content: `<img src=${marker} alt="marker" />`,
      },
    });
  }, [latitude, longitude]);
  return (
    <div
      id="map"
      className=" w-full sm:h-[14.5rem] md:h-[31.25rem] md:rounded-[1.25rem]"
    ></div>
  );
};

export default GameDetailMap;
