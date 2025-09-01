import marker_medium from "../../../../assets/v1.3/icon/location-pin-md.svg";
import { useCalculateDistance } from "../../hooks/useCalculateDistance";

interface CourtDataField {
  name: string;
  address: string;
  address_detail: string;
  distance: number;
  info: string;
  latitude: string;
  longitude: string;
}

interface CourtDetailsCardProps {
  courtDetailData: CourtDataField;

  geoLatitude: string | number | null | undefined;
  geoLongitude: string | number | null | undefined;
}

export const CourtDetailsCard = ({
  courtDetailData,
  geoLatitude,
  geoLongitude,
}: CourtDetailsCardProps) => {
  return (
    <div className="flex flex-col gap-3 min-h-[196px] w-full">
      <h1 className="text-white font-bold text-sm">경기장 정보</h1>
      <div className="flex justify-between items-end gap-[45px]">
        <div className="space-y-2">
          <h2 className="text-white text-[18px] font-bold">
            {courtDetailData?.name}
          </h2>
          <span className="text-xs text-[#c2c2c2] font-[400]">
            {courtDetailData?.address} {courtDetailData?.address_detail}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#c2c2c2] font-[400]">
          <img src={marker_medium} alt="marker_medium" />
          <span>
            {" "}
            {!isNaN(
              useCalculateDistance(
                geoLatitude != null ? String(geoLatitude) : "",
                geoLongitude != null ? String(geoLongitude) : "",
                courtDetailData?.latitude,
                courtDetailData?.longitude
              )
            )
              ? useCalculateDistance(
                  geoLatitude != null ? String(geoLatitude) : "",
                  geoLongitude != null ? String(geoLongitude) : "",
                  courtDetailData?.latitude,
                  courtDetailData?.longitude
                ).toFixed(1)
              : ""}{" "}
            km
          </span>
        </div>
      </div>
      <p className="text-xs font-[500] text-[#EBEBEB]">
        {courtDetailData?.info}
      </p>
    </div>
  );
};
