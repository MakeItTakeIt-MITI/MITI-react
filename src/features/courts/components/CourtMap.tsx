import { useEffect } from "react";
import marker from "../../../assets/v11/detail-marker.svg";
import { CourtsField } from "../interface/courts.ts";

const { naver } = window;

interface CourtsMapProps {
  courtsList: CourtsField[];
}

const CourtMap = ({ courtsList }: CourtsMapProps) => {
  useEffect(() => {
    if (!naver) return;

    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 15,
        pinchZoom: true,
        scrollWheel: true,
      });

      for (let index = 0; index < courtsList?.length; index++) {
        const latitude = courtsList[index].latitude;
        const longitude = courtsList[index].longitude;

        new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map: map,
          icon: {
            content: `
           <a href="courts/${courtsList[index].id}" class="cursor-pointer">
        <img src="${marker}" alt="marker" />
      </a>
            `,
            anchor: new naver.maps.Point(16, 40),
            offset: new naver.maps.Point(0, 0),
          },
        });
      }

      //
      map.setCenter(new naver.maps.LatLng(37.554722, 126.972778));
      // map.setCenter(markerLocation.getPosition());
    };

    initMap();
  }, [courtsList]);
  return (
    <div
      id="map"
      data-testid="courts-map"
      className="sm:hidden md:block w-full h-[496px] rounded-lg"
    ></div>
  );
};

export default CourtMap;
