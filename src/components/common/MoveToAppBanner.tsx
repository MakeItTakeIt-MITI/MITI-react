const MoveToAppBanner = () => {
  return (
    <div
      style={{
        background: "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
      }}
      className="w-full h-[100px] rounded-xl px-10 sm:hidden md:flex items-center justify-between"
    >
      <p className="font-bold">
        편하게 농구게임에 참여하고 싶다면 <br />
        MITI를 이용해보세요!
      </p>
      <button
        style={{
          background:
            "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
        }}
        className="px-4 py-3 rounded-lg text-sm font-[700] text-dark-card  "
      >
        MITI 앱으로 열기
      </button>
    </div>
  );
};

export default MoveToAppBanner;
