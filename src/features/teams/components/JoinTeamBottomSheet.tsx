import share_icon from "../../../assets/v1.3/game-detail/share_icon.svg";
import { PLAYSTORE, APPLE_STORE } from "../../../utils/app.ts";

interface JoinTeamBottomSheetProps {
  teamName: string;
}

export const JoinTeamBottomSheet = ({ teamName }: JoinTeamBottomSheetProps) => {
  const userAgent = navigator.userAgent;
  const isAppleDevice = /iPhone|iPad|iPod|iOS|Macintosh|Mac/i.test(userAgent);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: `${teamName} - MITI`,
        text: `MITI에서 '${teamName}' 농구 팀 정보를 확인해 보세요!`,
        url: currentUrl,
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(currentUrl);
      alert("링크가 클립보드에 복사되었습니다.");
    }
  };

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 h-[60px] w-full border-t border-white/5 flex items-center justify-center gap-8 py-3 z-40 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
      style={{ backgroundColor: "#000000" }}
      role="region"
      aria-labelledby="join-team-cta-title"
    >
      <h2 id="join-team-cta-title" className="text-white text-xs sm:text-sm font-bold truncate">
        팀에 가입하고 싶다면?
      </h2>
      <div
        className="flex items-center gap-4 h-full shrink-0"
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
          className="w-[100px] sm:w-[112px] flex items-center justify-center text-xs sm:text-sm font-bold h-full rounded-[100px] bg-[#47E3E5] text-[#262626] active:bg-[#3cd0d2] transition-colors"
        >
          앱 다운로드
        </a>
        <button
          type="button"
          onClick={handleShareClick}
          aria-label={`현재 팀 공유: ${teamName}`}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 active:bg-white/10 transition-colors"
        >
          <img src={share_icon} alt="공유 아이콘" className="w-5 h-5 object-contain" />
        </button>
      </div>
    </div>
  );
};
