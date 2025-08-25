import React from "react";
import Card from "./Card";

function CardsContainer() {
  return (
    <div className="flex items-center gap-[36px]">
      <Card
        title="오늘 함께 플레이할 게스트가 필요하세요?"
        card_header="게스트 모집 가이드"
        button_text="게스트 모집 가이드 보러가기"
      />
      <Card
        title="오늘 퇴근하고 농구 한판 어떠신가요?"
        card_header="게스트 참여 가이드"
        button_text="게스트 참여 가이드 보러가기"
      />
    </div>
  );
}

export default CardsContainer;
