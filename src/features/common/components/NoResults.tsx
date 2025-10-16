const NoResults = () => {
  return (
    <div className="w-full h-full flex  flex-col gap-3 items-center justify-center ">
      <h1 className="text-primary-white text-[24px] font-bold ">
        조회 결과가 없습니다.
      </h1>
      <h2 className="text-sm font-[400] text-[#d4d4d4]">
        검색어와 필터를 변경하여 다른 경기를 찾아보세요!
      </h2>
    </div>
  );
};

export default NoResults;
