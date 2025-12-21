import share_icon from "../../../assets/v1.3/game-detail/share_icon.svg";

import { PLAYSTORE, APPLE_STORE } from "../../../utils/app.ts";

interface JoinGameButtonProps {
  gameTitle: string;
}

const JoinGameButton = ({ gameTitle }: JoinGameButtonProps) => {
  const userAgent = navigator.userAgent;
  const isAppleDevice = /iPhone|iPad|iPod|iOS|Macintosh|Mac/i.test(userAgent);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShareClick = () => {
    navigator.share({
      title: document.title,
      text: gameTitle,
      url: currentUrl,
    });
  };

  return (
    <>
      <a
        href={isAppleDevice ? APPLE_STORE : PLAYSTORE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`앱에서 경기 참여하기 ${
          isAppleDevice ? "(앱스토어로 이동)" : "(플레이스토어로 이동)"
        }`}
        className="
       md:flex
       items-center justify-center
        sm:hidden
        font-bold
        h-[44px]
        w-full
        rounded-lg
        bg-[#1ADCDF]
      "
      >
        참가하기
      </a>

      <div
        className="md:hidden sm:fixed bottom-0 left-0 right-0 h-[60px] w-full bg-[#000] flex items-center justify-center gap-[46px] py-3"
        role="region"
        aria-labelledby="join-game-cta-title"
      >
        <h2 id="join-game-cta-title" className="text-white text-sm font-bold">
          경기에 참여하고 싶다면?
        </h2>
        <div
          className="flex items-center gap-5 h-full"
          role="group"
          aria-label="앱 다운로드 및 공유"
        >
          <a
            href={isAppleDevice ? APPLE_STORE : PLAYSTORE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`앱 다운로드 ${
              isAppleDevice ? "(앱스토어로 이동)" : "(플레이스토어로 이동)"
            }`}
            className="w-[112px] flex items-center justify-center text-sm font-bold h-full rounded-[100px] bg-[#47E3E5] text-[#262626]"
          >
            앱 다운로드
          </a>
          <button
            type="button"
            onClick={handleShareClick}
            aria-label={`현재 경기 공유: ${gameTitle}`}
          >
            <img src={share_icon} alt="공유 아이콘" />
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinGameButton;
