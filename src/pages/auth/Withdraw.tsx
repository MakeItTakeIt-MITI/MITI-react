import { useEffect, useState } from "react";
import Footer from "../../features/common/components/Footer.tsx";
import check from "../../assets/v11.2/auth/check.svg";
import { useLoginStore } from "../../features/auth/state/useLoginStore.tsx";
import { useNavigate } from "react-router-dom";
import { useDeleteAccountHook } from "../../features/auth/hooks/useDeleteAccountHook.tsx";
import { WithdrawSuccess } from "../../features/auth/components/WithdrawSuccess.tsx";
import { WithdrawFailure } from "../../features/auth/components/WithdrawFailure.tsx";

export const Withdraw = () => {
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState(201);
  const navigate = useNavigate();

  const { user, isLogged } = useLoginStore();
  const { mutate: deleteAccount } = useDeleteAccountHook(setStatus);

  const handleDeleteAccount = () => {
    deleteAccount();
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/auth");
    }
  }, [isLogged]);
  return (
    <>
      {status === 200 && <WithdrawSuccess />}
      {status === 403 && <WithdrawFailure nickname={user?.nickname} />}
      {status === 201 && (
        <section className="w-full md:h-[779px] sm:py-0   md:pt-[60px] md:pb-[100px] ">
          <div className="md:mx-auto sm:w-full md:w-[375px] h-[619px]  md:pt-5 sm:pt-[20px] md:pb-3 sm:pb-[21px] px-[21px]  flex flex-col justify-between">
            <div className="space-y-[24px]">
              {/* header */}
              <div className="text-white font-bold text-[20px]">
                <h1>{user?.nickname}님,</h1>
                <h2>정말 탈퇴하시겠어요?</h2>
              </div>
              {/* checkbox */}
              <div className="space-y-3 text-sm font-[400]">
                <div className="flex items-center gap-2">
                  <img src={check} alt="check" />

                  <div className="text-[#E5E5E5]">
                    <p>탈퇴하시는 경우, 해당 계정 정보는 즉시 삭제되며</p>
                    <p>입금되지 않은 송금요쳥과 보유금 전부 삭제됩니다.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  <p className="text-[#E5E5E5]">
                    아직 진행이 완료되지 않은 호스팅 경기나 게스트 경기가 있는
                    경우, 경기가 완료된 이후 회원 탈퇴를 진행해주세요.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-[20px]">
              <div className="flex items-center gap-2">
                <input
                  id="withdraw-agree"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  className="size-6 "
                />

                <label
                  htmlFor="withdraw-agree"
                  className="text-[#E5E5E5] text-sm font-[400]"
                >
                  회원 탈퇴 유의 사항을 확인하였으며, 이에 동의합니다.
                </label>
              </div>
              <button
                type="button"
                disabled={!checked}
                onClick={handleDeleteAccount}
                style={{
                  backgroundColor: checked ? "#7FEEF0" : "#737373",
                }}
                className="md:h-[40px] sm:h-[48px] w-full  rounded-lg font-bold"
              >
                회원 탈퇴하기
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};
