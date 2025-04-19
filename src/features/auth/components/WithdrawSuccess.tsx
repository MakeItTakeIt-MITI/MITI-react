import logo from "../../../assets/v11.2/auth/results_logo.png";

export const WithdrawSuccess = () => {
  return (
    <section className="w-full  md:h-[779px] sm:h-[619px]   md:pt-[60px] md:pb-[100px] md:py-0 ">
      <div className="mx-auto sm:w-full md:w-[375px] h-[619px] md:pt-5 sm:pt-[21px] md:pb-3  px-[21px]  flex flex-col gap-[150px]">
        <div className="text-xl font-bold text-white leading-[30px]">
          <p>회원 탈퇴가 완료되었습니다.</p>
          <p>농구가 다시 생각난다면 MITI를 찾아주세요!</p>
        </div>

        <div className="space-y-4">
          <div>
            <img src={logo} alt="logo" />
          </div>{" "}
          <div className="space-y-3 text-white text-center">
            <h1 className="text-[24px] font-bold">다시 만나요!</h1>
            <p className="text-sm font-[400]">코트에서 기다릴게요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
