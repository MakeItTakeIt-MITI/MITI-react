import CourtDetailGamesList from "./CourtDetailGamesList.tsx";
import { CourtDetailsCard } from "./CourtDetailsCard.tsx";

interface CourtInfoContainerProps {
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
    address: string;
    address_detail: string;
    info: string;
  };
}

const CourtInfoContainer = ({ courtDetailData }: CourtInfoContainerProps) => {
  return (
    <div className="flex flex-col gap-[32px] w-[410px]">
      {/* court detail info */}
      <CourtDetailsCard
        title="더모스트 바스켓볼 동탄오산점"
        address={courtDetailData?.address}
        address_detail={courtDetailData?.address_detail}
        distance={800.0}
        info={courtDetailData?.info}
      />
      {/* games list */}
      {/* <CourtDetailGamesList
        year={year}
        month={month}
        day={day}
        day_type={day_type}
        title={title}
        starttime={starttime}
        endtime={endtime}
        min_participants={min_participants}
        max_participants={max_participants}
        fee={fee}
      /> */}
    </div>
  );
};

export default CourtInfoContainer;
