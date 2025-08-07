export const PostCard = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex items-center justify-between text-[10px] font-[400] text-[#525252]">
        <span className="w-[47px] py-1 px-[6px] text-[10px] rounded-[4px] text-[#858585] bg-[#474747]">
          자유주제
        </span>
        <span>N 일전</span>
      </div>
      <div className="flex justify-between gap-4">
        <div className="space-y-4">
          <div className="space-y-3">
            <h1 className="font-bold text-white ">
              POST TITLE MAX LENGTH : 32 / MAX LINE : 1
              가나다라마바사아자차타카파하
            </h1>
            <p className="text-xs font-[400] text-white truncate">
              POST CONTENT PREVIEW MAX LINE : 1 LINE TRUNCATE : !
            </p>
          </div>
          <div className="space-x-[3px] text-xs text-[#5C5C5C] font-[400]">
            <span>AUTHOR NICKNAME</span>
            <span>댓글 000</span>
            <span>좋아요 000</span>
          </div>
        </div>
        <div className="size-[60px] bg-white"></div>
      </div>
    </div>
  );
};
