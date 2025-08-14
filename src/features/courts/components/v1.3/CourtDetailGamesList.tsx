import CourtDetailsGameCard from "./CourtDetailsGameCard.tsx";

interface CourtDetailGamesListProps {
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
}

const CourtDetailGamesList = ({
  year,
  month,
  day,
  day_type,
  title,
  starttime,
  endtime,
  min_participants,
  max_participants,
  fee,
}: CourtDetailGamesListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-bold text-white">경기장 정보</h2>
      <h3 className="text-[#999] text-sm font-[400]">
        {`${year}년 ${month}월 ${day}일 ${day_type}요일`}
      </h3>
      <ul
        style={{
          scrollbarWidth: "none",
        }}
        className="space-y-3 h-[540px] overflow-y-auto"
      >
        <CourtDetailsGameCard
          title={title}
          starttime={starttime}
          endtime={endtime}
          min_participants={min_participants}
          max_participants={max_participants}
          fee={fee}
        />
      </ul>
    </div>
  );
};

export default CourtDetailGamesList;
