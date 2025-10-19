const UserInquiryInfo = ({ inquiryDetailData }: any) => {
  return (
    <div className="space-y-6 text-white">
      <div className="space-y-3">
        {/* HEADER */}
        <div className="space-y-3">
          <h4 className="text-sm text-[#999]">제목</h4>
          <div className="space-y-1">
            <h2 className="  text-base font-bold text-white ">
              {inquiryDetailData?.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-[#999]">
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
      </div>
      {/* DESCRIPTION */}
      <div className="space-y-3">
        {" "}
        <h4 className="text-sm text-[#999]">문의 내용</h4>
        <p className="text-[#f0f0f0] text-sm font-normal h-[150px]  overflow-y-auto custom-scrollbar">
          {inquiryDetailData?.content}
        </p>
      </div>
    </div>
  );
};

export default UserInquiryInfo;
