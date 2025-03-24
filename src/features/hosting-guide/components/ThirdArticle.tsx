import third_3_1 from "../../../assets/v11.2/hosting-guide/web-third-1-1.svg";

const ThirdArticle = () => {
  return (
    <article className="w-full h-[800px] bg-[#262626] flex items-center justify-center">
      <div className="w-[1114px] h-[700px]  flex md:flex-row sm:flex-col-reverse items-center  justify-center md:gap-[150px] sm:gap-[40px]">
        {/* left */}

        <div className="md:space-y-[60px] sm:space-y-5 sm:px-[21px] md:px-0">
          <h1 className="text-[#9EEFF0] font-bold md:text-[32px] sm:text-xl">
            게스트 모집이 완료되었나요?
          </h1>
          <div className="space-y-5 text-[#fff] md:text-[20px] sm:text-sm font-[400] ">
            <p className="leading-[1.5]">
              경기 최소 인원 이상 경기 게스트가 모집된다면, 참가자들에게 <br />
              경기 시작 전, 경기 진행 알림이 전송됩니다.
            </p>

            <p className="leading-[1.5]">
              경기 진행 전, 참가자 목록을 조회하여 미리 팀을 배정하면 <br />
              원활하게 경기를 진행하실 수 있습니다.
            </p>
          </div>
        </div>
        {/* right */}

        <div className="md:h-[594px] md:w-[484px] sm:h-[400px] sm:w-[325px]">
          <img src={third_3_1} alt="" className="w-full h-full" />
        </div>
      </div>
    </article>
  );
};

export default ThirdArticle;
