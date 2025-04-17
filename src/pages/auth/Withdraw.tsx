import { useState } from "react";
import Footer from "../../components/common/Footer.tsx";

export const Withdraw = () => {
  const [checkboxes, setCheckboxes] = useState({
    first: false,
    second: false,
    third: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: keyof typeof checkboxes
  ) => {
    setCheckboxes((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
  };

  const allChecked = Object.values(checkboxes).every(Boolean);

  return (
    <>
      <section className="w-full h-[779px]   pt-[60px] pb-[100px] ">
        <div className="mx-auto sm:w-full md:w-[375px] h-[619px] md:pt-5 sm:pt-[21px] md:pb-3 sm:pb-[21px] px-[21px]  flex flex-col justify-between">
          <div className="space-y-[24px]">
            {/* header */}
            <div className="text-white font-bold text-[20px]">
              <h1>어니언수제어묵님,</h1>
              <h2>정말 탈퇴하시겠어요?</h2>
            </div>
            {/* checkbox */}
            <div className="space-y-3 text-sm font-[400]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checkboxes.first}
                  onChange={(e) => handleChange(e, "first")}
                />
                <div className="text-[#E5E5E5]">
                  <p>탈퇴하시는 경우, 해당 계정 정보는 즉시 삭제되며</p>
                  <p>입금되지 않은 송금요쳥과 보유금 전부 삭제됩니다.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checkboxes.second}
                  onChange={(e) => handleChange(e, "second")}
                />
                <div className="text-[#E5E5E5]">
                  <p>탈퇴하시는 경우, 해당 계정 정보는 즉시 삭제되며</p>
                  <p>입금되지 않은 송금요쳥과 보유금 전부 삭제됩니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-[20px]">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={checkboxes.third}
                onChange={(e) => handleChange(e, "third")}
              />
              <p className="text-[#E5E5E5] text-sm font-[400]">
                회원 탈퇴 유의 사항을 확인하였으며, 이에 동의합니다.
              </p>
            </div>
            <button
              type="button"
              disabled={!allChecked}
              className="h-[40px] w-full bg-[#737373] rounded-lg"
            >
              회원 탈퇴하기
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
