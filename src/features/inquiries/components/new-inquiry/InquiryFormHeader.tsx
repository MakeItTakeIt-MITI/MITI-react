const InquiryFormHeader = () => {
  return (
    <div className="md:space-y-[60px] sm:space-y-[32px]">
      <div className="space-y-5 text-white">
        <h1 className="md:text-[48px] sm:text-[28px] font-bold">문의하기</h1>
        <p className="md:text-[18px]  sm:text-[16px]">
          서비스 이용에 어려움이 있다면 문의를 작성해주세요!
        </p>
      </div>

      <p className="md:h-[54px] text-white sm:text-[12px] md:text-sm font-normal leading-[21px]">
        계정과 관련된 문의라면 “계정 문의 (로그인, 인증, 제재, 탈퇴, 신고 등)”
        내용을 문의 내용에 작성해주세요. 자세히 작성 할수록 정확한 답변이
        가능합니다.
      </p>
    </div>
  );
};

export default InquiryFormHeader;
