import MapGameOverlapBadge from "./MapGameOverlapBadge";

interface MapIconProps {
  fee: number;
  starttime: string;
  overlapped: boolean;
  number_of_games?: string[];
}

const MapIcon = ({
  fee,
  starttime,
  overlapped,
  number_of_games,
}: MapIconProps) => {
  return (
    <>
      {overlapped ? (
        <button
          type="button"
          style={{
            backgroundColor: "#EBEBEB",
          }}
          className="relative text-[10px] font-bold border border-[#d4d4d4]   w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center"
        >
          <span>{fee === 0 ? "무료" : fee.toLocaleString("kr")}</span>
          <span className="font-[300] text-[10px] text-[#737373]">
            / {starttime}
          </span>
          <MapGameOverlapBadge
            overlapped={overlapped}
            number_of_games={number_of_games}
          />
        </button>
      ) : (
        <button
          type="button"
          style={{
            backgroundColor: "#EBEBEB",
          }}
          className="relative text-[10px] font-bold border border-[#d4d4d4]   w-[120px] h-[32px] rounded-[20px] py-[10px] px-[14px] flex items-center gap-1 justify-center"
        >
          <span>{fee === 0 ? "무료" : fee.toLocaleString("kr")}</span>
          <span className="font-[300] text-[10px] text-[#737373]">
            / {starttime}
          </span>
        </button>
      )}
    </>
  );
};

export default MapIcon;
