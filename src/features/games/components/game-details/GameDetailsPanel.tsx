import Avatar from "../../../common/components(renewal)/avatar/Avatar.tsx";
import Button from "../../../common/components(renewal)/buttons/Button.tsx";
import MediumMap from "../../../naver_map/components/MediumMap.tsx";

const GameDetailsPanel = () => {
  return (
    <div className="flex flex-col gap-[30px] ">
      <MediumMap id="game_details" />
      <div className="space-y-4">
        <h2 className="font-bold text-white">호스트 소개</h2>
        <div className="flex items-center gap-3">
          <Avatar size="xs" />
          <div className="flex flex-col gap-1 text-sm ">
            <div className="space-x-[2px] font-bold text-white">
              <span>NICKNAME</span>
              <span>님</span>
            </div>
            <div className="space-x-2 font-[400] text-white ">
              <span> * *****</span>
              <span>N.N</span>
              <span>리뷰</span>
            </div>
          </div>
        </div>
      </div>
      <Button type="button" size="lg" content="참가하기" />
    </div>
  );
};

export default GameDetailsPanel;
