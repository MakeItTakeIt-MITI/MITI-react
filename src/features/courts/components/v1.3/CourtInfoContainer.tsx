import CourtDetailGamesList from "./CourtDetailGamesList.tsx";
import { CourtDetailsCard } from "./CourtDetailsCard.tsx";

const CourtInfoContainer = () => {
  return (
    <div className="flex flex-col gap-[32px] w-[410px]">
      {/* court detail info */}
      <CourtDetailsCard
        title="더모스트 바스켓볼 동탄오산점"
        address="COUT ADDRESS"
        address_detail="COUT ADDRESS DETAIL"
        distance={800.0}
        info={`더모스트 바스켓볼 수지점입니다. 
평일 오전, 오후 유소년 및 아마추어 스킬트레이닝 수업이 진행되며, 학부모께서 훈련을 참관할  수 있는 관람석이 있습니다. 

흡연은 실외에서 부탁드리며, 실내에서는 준비된 실내화를 착용해주세요.`}
      />
      {/* games list */}
      <CourtDetailGamesList year={2023} month={3} day={15} day_type="수" />
    </div>
  );
};

export default CourtInfoContainer;
