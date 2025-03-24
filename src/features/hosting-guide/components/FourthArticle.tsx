import fourth_4_1 from "../../../assets/v11.2/hosting-guide/web-fourth-1-1.svg";

const FourthArticle = () => {
  return (
    <article className="w-full h-[800px] bg-[#404040] flex items-center justify-center">
      <div className="w-[1114px] h-[700px]  flex md:flex-row sm:flex-col items-center  justify-center md:gap-[150px] sm:gap-[40px]">
        {/* left */}

        <div className="md:h-[594px] md:w-[484px] sm:h-[400px] sm:w-[325px]">
          <img src={fourth_4_1} alt="" className="w-full h-full" />
        </div>

        {/* right */}
        <div className="md:space-y-[60px] sm:space-y-5 sm:px-[21px] md:px-0">
          <h1 className="text-[#9EEFF0] font-bold md:text-[32px] sm:text-xl">
            자, 이제 경기 준비는 완료되었습니다!
          </h1>
          <div className="space-y-5 text-[#fff] md:text-[20px] sm:text-sm font-[400] ">
            <p className="leading-[1.5]">
              그동안 번거로웠던 게스트 모집, MITI에게 맡기시고 편하게 경기만
              즐겨주세요.
            </p>

            <p className="leading-[1.5]">
              앞으로 모든 농구인들이 쉽고 간편하고 즐겁게 농구를 즐길 수 있도록
              MITI가 함께하겠습니다!
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FourthArticle;
