import location_pin from "../../../../assets/v1.3/icon/location-pin.svg";
import { Link } from "react-router-dom";
import { useCalculateDistance } from "../../hooks/useCalculateDistance";

interface CourtsCardProps {
  id: number;
  title: string;
  address: string;
  address_detail: string;
  latitude: string;
  longitude: string;
  geoLatitude: string | number | null | undefined;
  geoLongitude: string | number | null | undefined;
}

const CourtsCard = ({
  id,
  title,
  address,
  address_detail,
  latitude,
  longitude,
  geoLatitude,
  geoLongitude,
}: CourtsCardProps) => {
  return (
    <li className=" w-full h-[72px]  py-3 flex ">
      <Link to={id?.toString()} className="flex justify-between  w-full">
        <div className="space-y-2 max-w-[667px]">
          <h2 className="text-white font-bold text-[18px] truncate">{title}</h2>
          <div className="space-x-2.5 font-[400] text-[#c2c2c2] text-xs">
            <span>{address}</span>
            <span>{address_detail}</span>
          </div>
        </div>
        {/* --- */}
        <div className="flex items-end gap-2">
          <img src={location_pin} alt="location_pin" />
          <div className="font-[400] text-[#c2c2c2] text-xs space-x-[2px]">
            <span>
              {!isNaN(
                useCalculateDistance(
                  geoLatitude != null ? String(geoLatitude) : "",
                  geoLongitude != null ? String(geoLongitude) : "",
                  latitude,
                  longitude
                )
              )
                ? useCalculateDistance(
                    geoLatitude != null ? String(geoLatitude) : "",
                    geoLongitude != null ? String(geoLongitude) : "",
                    latitude,
                    longitude
                  ).toFixed(1)
                : ""}{" "}
              km
            </span>
            <span>km</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CourtsCard;
