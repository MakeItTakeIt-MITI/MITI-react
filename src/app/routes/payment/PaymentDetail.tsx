// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GameDetailBox } from "../../../components/GameDetailBox";
import { GameTotalPaymentBox } from "../../../components/GameTotalPaymentBox";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { ParticipantsPaymentStatusBox } from "../../../components/ParticipantsPaymentStatusBox";
import useUserDataStore from "../../../store/useUserDataStore";
import { useGetPaymentDetails } from "../../../hooks/account/useGetPaymentDetails";

export const PaymentDetail = () => {
  const { settlement_id } = useParams();
  const { userId } = useUserDataStore();

  const { data } = useGetPaymentDetails(userId, Number(settlement_id));

  return (
    <section className="laptop:mt-[15px] laptop:mb-[38px]  mobile:my-0">
      <NavigateToPrevContainer children="정산 내역" />
      <div className="mx-auto w-[914px] max-h-[734px] space-y-5">
        <h1 className="text-[26px] font-bold">정산 내역</h1>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <GameDetailBox detailData={data} />
            <GameTotalPaymentBox detailData={data} />
          </div>
          <ParticipantsPaymentStatusBox detailData={data} />
        </div>
      </div>
    </section>
  );
};
