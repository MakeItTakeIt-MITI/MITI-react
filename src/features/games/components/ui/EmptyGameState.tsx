export default function EmptyGameState() {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center py-10">
      <h3 className="text-lg text-white">
        검색된 경기가 없습니다.
      </h3>
      <p className="text-sm text-[#999]">
        필터를 변경하여 다른 경기를 찾아보세요!
      </p>
    </div>
  );
}