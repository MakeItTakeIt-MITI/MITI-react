import location_marker from "../../../../assets/v1.3/icon/location.svg";

interface GameAddressProps {
  court_address: string;
}

export default function GameAddress({
  court_address,
}: GameAddressProps) {
  return (
    <div className="flex items-center  gap-1 sm:text-[10px] md:text-xs font-[400] text-[#D6D6D6]">
      <img src={location_marker} alt="location_marker" />
      <span>{court_address}</span>
    </div>
  );
}
