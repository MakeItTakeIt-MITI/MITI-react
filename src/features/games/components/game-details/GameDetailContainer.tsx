import GameAddress from "../../../common/components(renewal)/chips/GameAddress.tsx";
import GameFee from "../../../common/components(renewal)/chips/GameFee.tsx";
import GameParticipants from "../../../common/components(renewal)/chips/GameParticipants.tsx";
import { GameStatus } from "../../../common/components(renewal)/chips/GameStatus.tsx";
import GameTime from "../../../common/components(renewal)/chips/GameTime.tsx";
import GameTitle from "../../../common/components(renewal)/chips/GameTitle.tsx";
import { GameStatusEnum } from "../../../enum/games.ts";

const GameDetailContainer = () => {
  return (
    <div className="space-y-[30px] w-[578px]">
      {/* game details container */}
      <ul className="space-y-3 text-white">
        <li>
          <GameStatus status={GameStatusEnum.OPEN} />
        </li>
        <li>
          <GameTitle title="GAME TITLE MAX LENGHT 64 LINE TRUNCATE : FALSE " />
        </li>
        <li className="text-xs font-[500] text-[#D6D6D6] space-y-1">
          <div className="space-x-[2px]">
            <span>2025년</span>
            <span>8월</span>
            <span>15일</span>
          </div>
          <div className="space-x-[2px]">
            <span>120분</span>
            <span>경기</span>
          </div>
        </li>

        <li>
          <GameAddress
            address="경기 김포시 감정로 86"
            address_detail="삼성리틀썬더스"
          />
        </li>
        <li>
          <GameTime starttime="14:00" endtime="16:00" />
        </li>
        <li>
          <GameParticipants min_participants="5" max_participants="10" />
        </li>
        <li className="flex gap-1">
          <span className="text-[#7FEEF0] font-bold text-lg">참가비</span>
          <GameFee fee={100000} size="lg" />
        </li>
      </ul>

      {/* info container */}
      <p className="text-base font-[500] text-[#F1F1F1]">
        픽업게임 촬영이 진행되며 영상은 참가자들에게 유튜브 채널을 통해
        공유해드립니다.유튜브 채널: https://www.youtube.com/@MITI_MakeItTakeIt
        개인 준비물 개인음료, 흰/검 상의, 실내운동화 경기 진행 알림 경기 시작
        2시간 전까지 최소 인원 참여시 경기 진행이 확정됩니다. 최소 인원이
        모집되지 않은 경우 해당 경기의 상태가 “경기 취소”로 표시되며, 지불하신
        참가비는 순차적으로 자동 전액 환불됩니다. 경기 진행 방식 최소 12명 최대
        18명으로 2-3파전 진행 쿼터당 8분, 2경기(총 8 쿼터) 진행합니다. 경기장
        이용 관련 주차장: 체육관 입장후, 우측 키오스크에서 주차권
        등록부탁드립니다.(최대3시간) 샤워실: 샤워실 이용 불가. 흡연: 1층
        흡연구역 이용. 기타: 코트 입장 시 반드시 실내운동화 착용 필수. 앞타임
        수업이 있습니다. 정각에 체육관 및 코트 입장 부탁드립니다. 기타 안내
        체육관에서 발생하는 개인 부상 및 소지품 분실에 대한 책임은 지지
        않습니다. 참가 및 기타 문의는 010-8238-2165로 연락 주세요.
      </p>
    </div>
  );
};

export default GameDetailContainer;
