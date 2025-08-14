import location_pin from "../../../../assets/v1.3/icon/location-pin.svg";
import { Link } from "react-router-dom";

interface CourtsCardProps {
  title: string;
  address: string;
  address_detail: string;
  distance: number;
}

const CourtsCard = ({
  title,
  address,
  address_detail,
  distance,
}: CourtsCardProps) => {
  return (
    <li className="w-full h-[72px]  py-3 flex ">
      <Link to="1" className="flex justify-between  w-full">
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
            <span>{distance}</span>
            <span>km</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CourtsCard;
