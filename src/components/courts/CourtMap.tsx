import { useEffect } from "react";
import marker from "../../assets/v11/detail-marker.svg";

const { naver } = window;

const CourtMap = ({ courtsData }) => {
  useEffect(() => {
    if (!naver) return;

    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 15,
        pinchZoom: true,
        scrollWheel: true,
      });

      const markerLocation = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.3595704, 127.105399),
        map: map,
        icon: {
          content: `<img src=${marker} alt="marker" />`,
          anchor: new naver.maps.Point(16, 40),
          offset: new naver.maps.Point(0, 0),
        },
      });
      map.setCenter(markerLocation.getPosition());
    };

    initMap();
  }, []);
  return (
    <div
      id="map"
      data-testid="courts-map"
      className="sm:hidden md:block w-full h-[496px] rounded-lg"
    ></div>
  );
};

export default CourtMap;
