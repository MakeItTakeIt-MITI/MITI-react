import location_marker from "../../../../assets/images/map_marker.svg";

interface GameAddressProps {
  court_address: string;
  court_name?: string;
}

export default function GameAddress({
  court_address,
  court_name,
}: GameAddressProps) {
  return (
    <div className="flex items-center gap-1 sm:text-[10px] md:text-xs font-[400] text-[#D6D6D6]">
      <img src={location_marker} className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" alt="location_marker" />
      <span>
        {court_address}
        {court_name ? ` ${court_name}` : ""}
      </span>
    </div>
  );
}
