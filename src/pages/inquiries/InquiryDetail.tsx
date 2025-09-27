import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { useInquiryDetailsHook } from "../../features/inquiries/hooks/useInquiryDetailsHook";
import Modal from "../../features/inquiries/components/Modal";
import { InquiryDetailsField } from "../../interfaces/support";
// import MoveToAppBanner from "../../features/common/components/MoveToAppBanner";
import Footer from "../../features/common/components/Footer";
import chevron_left from "../../assets/v1.3/inquiries/chevron-left.svg";
import UserInquiryInfo from "../../features/inquiry-details/components/UserInquiryInfo";
import AdminReplyField from "../../features/inquiry-details/components/AdminReplyField";

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
          <section className="sm:w-full md:w-[840px] sm:h-full md:min-h-[800px] sm:px-4 md:px-0 mx-auto sm:py-[20px] md:py-[30px] flex flex-col sm:gap-[12px] md:gap-[42px]">
            <div className="flex flex-col-reverse  gap-1">
              <h1 className=" md:text-[48px] sm:text-[24px] font-bold text-white ">
                문의 상세
              </h1>
              <Link
                to="/inquiries"
                className="md:hidden sm:flex items-center gap-1"
              >
                <img src={chevron_left} alt="chevron_left" />{" "}
                <span className="text-[10px] text-[#999]">목록</span>
              </Link>
            </div>
            <div className="w-full space-y-[40px] ">
              {/* top */}
              <UserInquiryInfo inquiryDetailData={data?.data} />
              <hr className="border-0 h-[1px] bg-[#999] w-full" />
              {/* <AdminReplyField inquiryDetailData={data?.data} /> */}
              {/* {data?.data.answers.length > 0 && (
                <>
                  <hr className="border-0 h-[1px] bg-[#999] w-full" />
                  <AdminReplyField inquiryDetailData={data?.data} />
                </>
              )} */}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default InquiryDetail;
