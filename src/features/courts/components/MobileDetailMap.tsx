import { useEffect } from "react";
import marker from "../../../assets/v11/detail-marker.svg";
import { useParams } from "react-router-dom";
import { useCourtDetailData } from "../hooks/useCourtDetailData";
const { naver } = window;

const MobileDetailMap = () => {
  const { id } = useParams();
  const courtId = Number(id);

  const { data } = useCourtDetailData({ courtId: courtId });
  const courtDetail = data?.data;

  useEffect(() => {
    const map1 = new naver.maps.Map("map2", {
      center: new naver.maps.LatLng(
        courtDetail?.latitude,
        courtDetail?.longitude
      ),
      zoom: 13,
      pinchZoom: true,
      scrollWheel: true,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(
        courtDetail?.latitude,
        courtDetail?.longitude
      ),
      map: map1,
      icon: {
        content: `<img src=${marker} alt="marker" />`,
      },
    });
  }, [courtDetail]);
  return <div id="map2" className="md:hidden w-full h-[232px] "></div>;
};

export default MobileDetailMap;
