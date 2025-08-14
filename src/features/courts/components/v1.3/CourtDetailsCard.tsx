import marker_medium from "../../../../assets/v1.3/icon/location-pin-md.svg";

interface CourtDetailsCardProps {
  title: string;
  address: string;
  address_detail: string;
  distance: number;
  info: string;
}

export const CourtDetailsCard = ({
  title,
  address,
  address_detail,
  distance,
  info,
}: CourtDetailsCardProps) => {
  return (
    <div className="flex flex-col gap-3 min-h-[196px] w-full">
      <h1 className="text-white font-bold text-sm">경기장 정보</h1>
      <div className="flex justify-between items-end gap-[45px]">
        <div className="space-y-2">
          <h2 className="text-white text-[18px] font-bold">{title} </h2>
          <span className="text-xs text-[#c2c2c2] font-[400]">
            {address} {address_detail}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#c2c2c2] font-[400]">
          <img src={marker_medium} alt="marker_medium" />
          <span>{distance} km</span>
        </div>
      </div>
      <p className="text-xs font-[500] text-[#EBEBEB]">{info}</p>
    </div>
  );
};
