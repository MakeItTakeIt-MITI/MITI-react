import second_2_1 from "../../../assets/v11.2/hosting-guide/web-second-1-1.svg";

const SecondArticle = () => {
  return (
    <article className="w-full h-[800px] bg-[#404040] flex items-center justify-center">
      <div className="w-[1114px] h-[700px]  flex md:flex-row sm:flex-col items-center  justify-center md:gap-[150px] sm:gap-[40px]">
        {/* left */}

        <div className="md:h-[594px] md:w-[484px] sm:h-[400px] sm:w-[325px]">
          <img src={second_2_1} alt="" className="w-full h-full" />
        </div>

        {/* right */}
        <div className="md:space-y-[60px] sm:space-y-5 sm:px-[21px] md:px-0">
          <h1 className="text-[#9EEFF0] font-bold md:text-[32px] sm:text-xl">
            지금 경기를 생성해보세요!{" "}
          </h1>
          <div className="space-y-5 text-[#fff] md:text-[20px] sm:text-sm font-[400] ">
            <p className="">1.경기 제목 및 경기 시간 입력하기</p>

            <p className="leading-[1.5]">
              게스트가 보게되는 경기의 제목입니다! <br />
              모집하는 팀의 이름 또는 경기장 이름을 입력해주시면 게스트가 더욱
              쉽게 경기 정보를 파악할 수 있어요. <br /> <br />
              경기 시간은 경기장에 입장 가능한 시간과 경기가 종료되어 경기장에서
              퇴장해야하는 시간을 입력해주세요.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SecondArticle;
