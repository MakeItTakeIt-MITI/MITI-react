import Footer from "../components/common/Footer.tsx";
import MoveToAppBanner from "../components/common/MoveToAppBanner.tsx";
import { useInquiryDetailsHook } from "../features/inquiries/hooks/useInquiryDetailsHook.tsx";
import { useEffect, useState } from "react";
import Modal from "../components/inquiry/Modal.tsx";
import { InquiryDetailsField } from "../interfaces/support.ts";
import { useParams } from "react-router-dom";

const InquiryDetail = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [password, setPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState<null | number>(null);

  const { id } = useParams();
  const inquiryDetailId = Number(id);

  const { mutate, data } = useInquiryDetailsHook(
    inquiryDetailId,
    {
      password: password,
    },
    setErrorStatus
  );

  useEffect(() => {
    if (data?.status_code === 200) {
      setDisplayModal(true);
    } else if (errorStatus === 401 || errorStatus === 400) {
      setDisplayModal(false);
    }
  }, [errorStatus, data]);
  return (
    <>
      {!displayModal ? (
        <Modal
          setModal={setDisplayModal}
          setPassword={setPassword}
          mutate={mutate}
          errorStatus={errorStatus}
        />
      ) : (
        <>
          {" "}
          <section className="min-h-screen bg-secondary-black md:pt-[3.75rem] md:pb-[6.25rem] sm:py-[1.88rem] sm:px-[1.25rem]  md:space-y-[100px]">
            <div className="md:w-[767px] sm:w-full space-y-[40px] mx-auto">
              {/* top */}
              <div className="space-y-5 text-white">
                <h1 className=" md:text-[32px] sm:text-[26px] font-semibold ">
                  문의 상세 내용
                </h1>

                <div className="space-y-3">
                  <h2 className=" md:text-xl sm:text-sm font-normal ">
                    {data?.data.title}
                  </h2>
                  <div className="flex items-center gap-5 md:text-xs sm:text-[10px] font-light ">
                    <p className="">
                      {`${data?.data.created_at.slice(0, 4)}년 ${data?.data.created_at.slice(5, 7).padStart(2, "0")}월 ${data?.data.created_at.slice(8, 10).padStart(2, "0")}일`}
                    </p>
                    <p>{data?.data.nickname}</p>
                  </div>
                </div>
              </div>

              {/* main container */}
              <div className="space-y-[30px]">
                <hr className="bg-[#525252] h-1" />
                <p className="text-[#f0f0f0] text-sm font-normal ">
                  {data?.data.content}
                </p>
                {data?.data.answers.map((answer: InquiryDetailsField) => (
                  <div
                    key={answer.id}
                    className=" text-white w-full min-h-[257px] p-5 space-y-[10px] bg-[#404040] rounded-xl"
                  >
                    {/* <p className="  text-xs font-light ">2024년 10월 12일</p> */}
                    <p className="  text-xs font-light ">
                      {" "}
                      {`${answer.created_at.slice(0, 4)}년 ${answer.created_at.slice(5, 7).padStart(2, "0")}월 ${answer.created_at.slice(8, 10).padStart(2, "0")}일`}
                    </p>
                    <p className="text-sm font-[400]">{answer.content}</p>
                  </div>
                ))}

                <hr className="bg-[#525252] h-1" />
              </div>
              <MoveToAppBanner />
            </div>
          </section>
          <Footer />{" "}
        </>
      )}
    </>
  );
};

export default InquiryDetail;
