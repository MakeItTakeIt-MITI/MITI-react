import check from "../../../assets/v11.2/auth/check.svg";

interface WithdrawFailureProps {
  nickname?: string;
}

export const WithdrawFailure = ({ nickname }: WithdrawFailureProps) => {
  return (
    <section className="w-full h-[779px]   pt-[60px] pb-[100px] ">
      <div className="mx-auto sm:w-full md:w-[375px] h-[619px] md:pt-5 sm:pt-[21px] md:pb-3  px-[21px]  flex flex-col gap-[150px]">
        <div className="space-y-[24px]">
          {/* header */}
          <div className="text-white font-bold text-[20px]">
            <h1>{nickname}님,</h1>
            <h2>탈퇴 전, 아래 내용을 확인해주세요!</h2>
          </div>
          {/* checkbox */}
          <div className="space-y-3 text-sm font-[400]">
            <div className="flex items-center gap-2">
              <img src={check} alt="check" />

              <div className="text-[#E5E5E5]">
                <p>혹시 참여 예정인 경기가 있으신가요?</p>
                <p>
                  참여 예정이 있는 경우, 해당 경기 참여를 취소하거나 경기가
                  완료된 이후 탈퇴를 진행해주세요!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="check" />
              <div className="text-[#E5E5E5]">
                <p>혹시 진행 예정인 경기가 있으신가요?</p>
                <p>회원 탈퇴는 경기가 모두 완료된 이후 진행해주세요!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
