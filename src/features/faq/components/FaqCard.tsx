import { useState } from "react";
import drop_arrow from "../../../assets/v1.3/icon/drop_arrow.svg";
import up_arrow from "../../../assets/v1.3/icon/drop_up.svg";

const FaqCard = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleFaq = () => {
    setToggle(!toggle);
  };
  return (
    <li
      style={{
        height: toggle ? "" : "48px",
      }}
      className="py-3 w-full space-y-3"
    >
      <button
        type="button"
        onClick={handleToggleFaq}
        className="w-full flex items-center justify-between"
      >
        <h1 className="text-[18px] font-[400] text-white">
          FAQ TITLE LINE TRUNCATE: TRUE MAX LINE : 1
        </h1>
        <img src={toggle ? up_arrow : drop_arrow} alt="toggle button" />
      </button>
      {toggle && (
        <p className="text-sm text-[#e8e8e8] font-400 whitespace-pre-line">
          {`
            MITI는 농구 경기를 중심으로 한 스포츠 매칭 플랫폼으로, 경기를 생성하고 참여할 수 있는 공간을 제공합니다. 호스트(주최자)는 원하는 경기 정보를 설정하고 참가자를 모집할 수 있으며, 게스트(참가자)는 자신에게 적합한 경기를 찾아 쉽게 참여할 수 있습니다.

호스트 제공 기능
1. 경기 자동 관리 : 경기 최소 모집 인원을 기반으로 경기의 진행 여부를 판단하여 게스트를 자동으로 관리합니다.
2. 경기 참가비 정산 : 경기에 참가자들이 결제한 참가비를 정산하여 호스트의 계좌로 정산해드립니다. 번거로운 정산은 MITI에게 맞기고 쉽게 경기를 관리하세요!
3. 경기 알림 기능 : 경기에 관련된 변동사항이 발생하였을 경우, 게스트들에게 푸시 알림을 전송합니다.

게스트 제공 기능
1. 경기 참가비 결제 : 경기 참가비 결제를 위한 전자 결제 기능을 제공해드립니다. 결제가 완료되면 자동으로 참여가 확정되니 빠른 참여가 가능합니다.
2. 경기 참가비 자동 환불 : 경기가 취소되는 경우 자동으로 경기 참가비를 환불해드려요.
3. 리뷰 기능 : 같이 플레이한 호스트, 게스트들에게 리뷰를 작성할 수 있어요.
MITI는 농구인들의 건전한 게스트 문화를 위해 다양한 의견을 수렴중입니다. 서비스가 개선해야할 부분이 있다면 [문의하기]를 통해 의견을 전달해주세요!
        `}
        </p>
      )}
    </li>
  );
};

export default FaqCard;
