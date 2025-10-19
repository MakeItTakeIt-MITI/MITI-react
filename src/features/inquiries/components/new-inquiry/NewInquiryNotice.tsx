const NewInquiryNotice = () => {
  return (
    <div className="space-y-[10px] text-primary-white ">
      <h2 className=" sm:text-base md:text-lg font-bold font-['Pretendard'] leading-tight">
        안내사항
      </h2>
      <ul className="list-disc pl-5 custom-dotted-list space-y-[5px] sm:text-sm md:text-base sm:font-[400] md:font-medium leading-none">
        <li>답변에는 시간이 소요됩니다. 조금만 기다려주세요!</li>
        <li>문의 내용을 상세히 작성해주시면 더욱 정확한 답변이 가능합니다.</li>
        <li>욕설이나 비방이 담긴 문의에는 답변이 작성되지 않습니다.</li>
      </ul>
    </div>
  );
};

export default NewInquiryNotice;
