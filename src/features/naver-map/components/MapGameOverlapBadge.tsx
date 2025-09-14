interface MapGameOverlapBadgeProps {
  overlapped: boolean;
  number_of_games?: number;
}

const MapGameOverlapBadge = ({
  overlapped,
  number_of_games,
}: MapGameOverlapBadgeProps) => {
  return (
    <>
      {overlapped && (
        <div
          className="absolute -top-2.5 -right-2.5 rounded-full size-[1.25rem] 
                     text-[#5C5C5C] border border-[#999] flex items-center 
                     justify-center text-[10px] font-bold bg-[#EBEBEB]"
        >
          {number_of_games}
        </div>
      )}
    </>
  );
};

export default MapGameOverlapBadge;
