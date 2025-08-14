import marker_medium from "../../../../assets/v1.3/icon/location-pin-md.svg";

const CourtGamesContainer = () => {
  return (
    <div className="flex flex-col gap-[32px] w-[410px]">
      {/* court detail info */}
      <div className="space-y-3">
        <h1 className="text-white font-bold text-sm">경기장 정보</h1>
        <div className="space-y-2 ">
          <h2 className="text-white text-[18px] font-bold">
            더모스트 바스켓볼 동탄오산점
          </h2>

          <div className="flex justify-between w-full  items-center text-xs text-[#c2c2c2]">
            <span>경기 오산시 동부대로 568번길 87-15</span>
            <div className="flex items-center gap-2">
              <img src={marker_medium} alt="marker_medium" />
              <span>53.7 km</span>
            </div>
          </div>

          <p className="text-xs font-[500] text-[#EBEBEB]">
            더모스트 바스켓볼 수지점입니다. 평일 오전, 오후 유소년 및 아마추어
            스킬트레이닝 수업이 진행되며, 학부모께서 훈련을 참관할 수 있는
            관람석이 있습니다. 흡연은 실외에서 부탁드리며, 실내에서는 준비된
            실내화를 착용해주세요.
          </p>
        </div>
      </div>
      {/* games list */}
    </div>
  );
};

export default CourtGamesContainer;
