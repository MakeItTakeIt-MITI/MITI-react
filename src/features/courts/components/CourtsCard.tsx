// import { useState } from "react";
import location_pin from "../../../assets/v1.3/icon/location-pin.svg";
import { Link } from "react-router-dom";

const CourtsCard = () => {
  //   const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      //   style={{
      //     boxShadow: isHovered ? "0 4px 24px 0 #1ADCDF, 0 0 0 4px #141414" : "",
      //   }}
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
      className="w-full h-[72px] flex flex-col  justify-between py-3"
    >
      <Link to="1">
        <h2 className="text-white font-bold text-[18px]">
          COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1
        </h2>
        <div className="flex items-center justify-between">
          <div className="space-x-2.5 font-[400] text-[#c2c2c2] text-xs">
            <span>COUT ADDRESS</span>
            <span>COUT ADDRESS DETAIL</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={location_pin} alt="location_pin" />
            <div className="font-[400] text-[#c2c2c2] text-xs space-x-[2px]">
              <span>00.00</span>
              <span>km</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CourtsCard;
