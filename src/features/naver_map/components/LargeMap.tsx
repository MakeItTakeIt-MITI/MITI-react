import { useEffect } from "react";
import { renderToString } from "react-dom/server";
import MapIcon from "../../naver-map/components/MapIcon.tsx";

export default function LargeMap({ id, gamesMapData }) {
  useEffect(() => {
    if (!window.naver) return;

    const map = new window.naver.maps.Map(id, {
      center: new window.naver.maps.LatLng(37.554722, 126.972778),
      zoom: 14,
      scrollWheel: true,
      disableKineticPan: false,
    });

    gamesMapData?.forEach((element) => {
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          element.court.latitude,
          element.court.longitude
        ),
        map: map,
        title: element.title,
      });

      // Use renderToString for React component icons
      marker.setIcon({
        content: renderToString(
          <MapIcon
            fee={element.fee}
            starttime={element.starttime}
            overlapped={false}
          />
        ),
      });
    });
  }, [id, gamesMapData]);

  return <div id={id} className="w-[700px] h-[450px] rounded-[20px]" />;
}
