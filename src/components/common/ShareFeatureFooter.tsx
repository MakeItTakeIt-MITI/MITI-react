import share from "../../assets/v11/share.svg";
const ShareFeatureFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 sm:h-[3.75rem] md:h-[4.375rem]  z-[9999] bg-primary-black flex items-center  justify-center  sm:py-[0.75rem]  md:py-[0.81rem]">
      <div className="flex items-center  sm:gap-[3rem] md:gap-[8.12rem]">
        <p className="text-primary-white font-bold sm:text-sm md:text-lg">
          경기에 참여하고 싶다면?
        </p>
        <div className="flex items-center gap-[2.5rem]">
          {/* non mobile */}
          <button className="sm:hidden md:block w-[25rem] bg-[#7FEEF0] text-[#262626] font-bold text-lg py-[0.81rem] rounded-[6.24rem]">
            앱 다운로드하고 자세한 정보 확인하기
          </button>
          {/* mobile */}
          <div className="flex items-center gap-[1.25rem]">
            <button className="sm:block md:hidden w-[7rem] h-[2.25rem] flex items-center justify-center  bg-[#7FEEF0] text-[#262626] font-bold text-sm rounded-[6.24rem]">
              앱 다운로드{" "}
            </button>
            <img src={share} alt="share" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ShareFeatureFooter;