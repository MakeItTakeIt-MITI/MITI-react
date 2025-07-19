export default function DatesField() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-white">날짜</p>
      <div className="px-4 flex gap-4">
        <p className="text-[#7FEEF0] font-bold text-sm">MM월</p>
        <ul className="flex gap-4 text-[#707070] text-xs font-bold">
          <li className="flex flex-col items-center justify-center gap-2">
            <span>일</span>
            <span>1</span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <span>일</span>
            <span>1</span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <span>일</span>
            <span>1</span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <span>일</span>
            <span>1</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
