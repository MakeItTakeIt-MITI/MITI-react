import MapGameOverlapBadge from "./MapGameOverlapBadge";
import { useSelectedStore } from "../../../store/NaverMap/useSelectedStore";

interface MapIconProps {
  fee: number;
  starttime: string;
  overlapped: boolean;
  number_of_games?: number;
  gameId?: number;
}

const MapIcon = ({
  fee,
  starttime,
  overlapped,
  number_of_games,
  gameId,
}: MapIconProps) => {
  const { toggleSelected, isSelected } = useSelectedStore();
  return (
    <>
      {overlapped ? (
        <button
          type="button"
          onClick={toggleSelected}
          style={{
            backgroundColor: isSelected ? "#A3F1F2" : "#EBEBEB",
          }}
          className="relative text-[10px] font-bold border border-[#d4d4d4]   w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center"
        >
          <span className="flex items-center gap-1">
            {fee !== 0 ? fee.toLocaleString("kr") + " 원" : "무료"}
          </span>
          <span className="font-[300] text-[10px] text-[#737373]">
            / {starttime.slice(0, 5)}
          </span>
          <MapGameOverlapBadge
            overlapped={overlapped}
            number_of_games={number_of_games}
          />
        </button>
      ) : (
        <a
          href={`/games/${gameId}`}
          style={{
            backgroundColor: "#EBEBEB",
          }}
          className="relative text-[10px] font-bold border border-[#d4d4d4]   w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center"
        >
          <span className="flex items-center gap-1">
            {fee !== 0 ? fee.toLocaleString("kr") + " 원" : "무료"}
          </span>
          <span className="font-[300] text-[10px] text-[#737373]">
            / {starttime.slice(0, 5)}
          </span>
        </a>
      )}
    </>
  );
};

export default MapIcon;
