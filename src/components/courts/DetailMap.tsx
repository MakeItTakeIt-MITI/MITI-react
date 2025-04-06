import { useEffect } from "react";
import marker from "../../assets/v11/detail-marker.svg";
import { useCourtDetailData } from "../../features/courts/hooks/useCourtDetailData.tsx";
import { useParams } from "react-router-dom";
const { naver } = window;

const DetailMap = () => {
  const { id } = useParams();
  const courtId = Number(id);

  const { data } = useCourtDetailData({ courtId: courtId });
  const courtDetail = data?.data;

  useEffect(() => {
    const map2 = new naver.maps.Map("map1", {
      center: new naver.maps.LatLng(
        courtDetail?.latitude,
        courtDetail?.longitude
      ),
      zoom: 16,
      pinchZoom: true,
      scrollWheel: true,
    });

    const markerLocation = new naver.maps.Marker({
      position: new naver.maps.LatLng(
        courtDetail?.latitude,
        courtDetail?.longitude
      ),
      map: map2,
      icon: {
        content: `<img src=${marker} alt="marker" />`,
        anchor: new naver.maps.Point(16, 20),
      },
    });

    map2.setCenter(markerLocation.getPosition());
  }, [courtDetail]);
  return (
    <div
      id="map1"
      className="sm:hidden md:block w-full h-[494px] rounded-lg"
    ></div>
  );
};

export default DetailMap;
