import CourtDetailsGameCard from "./CourtDetailsGameCard.tsx";

interface CourtDetailGamesListProps {
  year?: number;
  month?: number;
  day?: number;
  day_type?: string;
}

const CourtDetailGamesList = ({
  year,
  month,
  day,
  day_type,
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
          title="GAME TITLE MAX LENGHT 64 MAX LINE 2 ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          starttime="10:00"
          endtime="12:00"
          min_participants="2"
          max_participants="10"
          fee={10000}
        />
        <CourtDetailsGameCard
          title="GAME TITLE MAX LENGHT 64 MAX LINE 2 ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          starttime="12:30"
          endtime="14:30"
          min_participants="2"
          max_participants="10"
          fee={12000}
        />
        <CourtDetailsGameCard
          title="GAME TITLE MAX LENGHT 64 MAX LINE 2 ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          starttime="15:00"
          endtime="17:00"
          min_participants="2"
          max_participants="10"
          fee={15000}
        />
        <CourtDetailsGameCard
          title="GAME TITLE MAX LENGHT 64 MAX LINE 2 ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          starttime="17:30"
          endtime="19:30"
          min_participants="2"
          max_participants="10"
          fee={18000}
        />
        <CourtDetailsGameCard
          title="GAME TITLE MAX LENGHT 64 MAX LINE 2 ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          starttime="20:00"
          endtime="22:00"
          min_participants="2"
          max_participants="10"
          fee={20000}
        />
        <CourtDetailsGameCard
          title="GAME TITLE MAX LENGHT 64 MAX LINE 2 ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          starttime="22:30"
          endtime="00:30"
          min_participants="2"
          max_participants="10"
          fee={22000}
        />
      </ul>
    </div>
  );
};

export default CourtDetailGamesList;
