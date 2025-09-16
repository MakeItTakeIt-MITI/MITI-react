import { useEffect, useRef } from "react";
import map_marker from "../../../../assets/v1.3/map/map_maker_m.svg";

// Add global type for naver maps
declare global {
  interface Window {
    naver: any;
  }
}

interface MapProps {
  lat: string;
  long: string;
}

export default function Map({ lat, long }: MapProps) {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  // Create the map once
  useEffect(() => {
    if (!window.naver) return;
    if (!mapRef.current) {
      mapRef.current = new window.naver.maps.Map("courts-details", {
        center: new window.naver.maps.LatLng(parseFloat(lat), parseFloat(long)),
        zoom: 16,
        scrollWheel: true,
        disableKineticPan: false,
      });
    }
  }, []);

  // Update center & marker whenever lat/long change
  useEffect(() => {
    if (!window.naver || !mapRef.current) return;

    const position = new window.naver.maps.LatLng(
      parseFloat(lat),
      parseFloat(long)
    );

    // move map center
    mapRef.current.setCenter(position);

    // if marker exists, just move it
    if (markerRef.current) {
      markerRef.current.setPosition(position);
    } else {
      // otherwise create a new marker
      markerRef.current = new window.naver.maps.Marker({
        position,
        map: mapRef.current,
        icon: {
          content: `<img src="${map_marker}" alt="marker" style="width:32px;height:40px;" />`,
          size: new window.naver.maps.Size(32, 40),
          anchor: new window.naver.maps.Point(16, 40),
        },
      });
    }
  }, [lat, long]);

  return <div id="courts-details" className="size-[360px] rounded-[20px]" />;
}
