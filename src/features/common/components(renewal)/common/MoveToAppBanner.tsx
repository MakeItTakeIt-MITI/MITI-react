import { APPLE_STORE, PLAYSTORE } from "../../../../utils/app.ts";

const MoveToAppBanner = () => {
  const userAgent = navigator.userAgent;
  const isAppleDevice = /iPhone|iPad|iPod|iOS|Macintosh|Mac/i.test(userAgent);

  return (
    <div
      style={{
        background: "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
      }}
      className="w-full md:h-[100px] sm:h-[74px] rounded-xl md:px-10 sm:px-5 flex items-center justify-between"
    >
      <p className="font-bold md:text-base sm:text-xs">
        편하게 농구게임에 참여하고 싶다면 <br />
        MITI를 이용해보세요!
      </p>
      <a href={`${isAppleDevice ? APPLE_STORE : PLAYSTORE}`} target="_blank">
        <button
          type="button"
          style={{
            background:
              "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
          }}
          className="md:px-4 md:py-3 sm:p-5 rounded-lg sm:text-[10px] md:text-sm font-bold text-dark-card  "
        >
          MITI 앱으로 열기
        </button>
      </a>
    </div>
  );
};

export default MoveToAppBanner;
