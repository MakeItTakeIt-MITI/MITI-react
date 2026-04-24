import court_card_thumbnail from "../../../../assets/v1.3/court/court_card_thumbnail.png";
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
  images: string[];
  animationIndex?: number;
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
  images,
  animationIndex = 0,
}: CourtsCardProps) => {
  const distance = useCalculateDistance(
    geoLatitude != null ? String(geoLatitude) : "",
    geoLongitude != null ? String(geoLongitude) : "",
    latitude,
    longitude,
  );

  return (
    <li
      className="court-card-appear transition-transform duration-150 active:scale-[0.96]"
      style={{ animationDelay: `${animationIndex * 40}ms` }}
    >
      <Link to={id?.toString()} className="flex flex-col md:gap-3 sm:gap-2">
        <img
          src={images.length === 0 ? court_card_thumbnail : images[0]}
          alt={title}
          className="md:size-[180px] sm:size-[165px] object-cover rounded-lg"
        />
        <div className="md:w-[180px] sm:w-[165px] flex flex-col md:gap-[4px] sm:gap-2">
          <h2 className="text-white font-bold md:text-base sm:text-sm truncate">
            {title}
          </h2>
          <p className="text-[#c2c2c2] text-xs truncate">
            {address} {address_detail}
          </p>
          <div className="flex align items-end gap-1 text-[#999]  text-[10px] justify-end ">
            <img src={location_pin} alt="location_pin" className="w-3 h-3" />
            <span>{!isNaN(distance) ? distance.toFixed(1) : ""} km</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CourtsCard;
