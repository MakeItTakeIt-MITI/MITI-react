const AdminReplyField = ({ inquiryDetailData }) => {
  return (
    <div className="space-y-6">
      <h2 className=" text-sm font-bold text-white">관리자 답변</h2>
      {/* reply field */}
      <div className="flex flex-col  gap-4">
        <p className="text-[#f0f0f0] text-sm font-normal ">
          {inquiryDetailData?.content}
        </p>

        <div className="flex justify-end gap-2 text-xs text-[#999]">
          <span>작성일시</span>
          <p className="">
            {`${inquiryDetailData?.created_at.slice(
              0,
              4
            )}년 ${inquiryDetailData?.created_at
              .slice(5, 7)
              .padStart(2, "0")}월 ${inquiryDetailData?.created_at
              .slice(8, 10)
              .padStart(2, "0")}일`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminReplyField;
