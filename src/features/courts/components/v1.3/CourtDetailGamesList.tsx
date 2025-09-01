import CourtDetailsGameCard from "./CourtDetailsGameCard.tsx";

interface CourtDetailGamesListProps {
  courtDetailData: {
    year: number;
    month: number;
    day: number;
    day_type: string;
    title: string;
    starttime: string;
    endtime: string;
    min_participants: string;
    max_participants: string;
    fee: number;
  };
}

const CourtDetailGamesList = ({
  courtDetailData,
}: CourtDetailGamesListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-bold text-white">경기장 정보</h2>
      <h3 className="text-[#999] text-sm font-[400]">
        {`${2}년 ${5}월 ${2}일 ${2}요일`}
      </h3>
      <ul
        style={{
          scrollbarWidth: "none",
        }}
        className="space-y-3 h-[540px] overflow-y-auto"
      >
        {/* <CourtDetailsGameCard courtDetailData={courtDetailData} /> */}
      </ul>
    </div>
  );
};

export default CourtDetailGamesList;
