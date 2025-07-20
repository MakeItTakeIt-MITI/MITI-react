import { useState } from "react";
import search_icon from "../../../../assets/v1.3/icon/search.svg";

export default function SearchBar() {
  const [inputContent, setInputContent] = useState("");

  console.log(inputContent);

  return (
    <div className="flex items-center w-full h-12 border border-[#707070] rounded-[50px] bg-[#141414] px-5">
      {/* Contains input bar */}
      <div className="flex items-center gap-2.5 w-full">
        <span className="text-white font-bold ">경기</span>
        <span className="text-[#707070]">|</span>
        <input
          className="h-6 bg-[#141414] text-white  outline-none"
          type="text"
          onChange={(e) => setInputContent(e.target.value)}
          placeholder="검색어를 입력해주세요"
        />
      </div>
      {/* Button to call search API */}
      <button
        type="button"
        className="size-6 rounded-full flex items-center justify-center bg-primary-teal ml-3"
      >
        <img src={search_icon} alt="" />
      </button>
    </div>
  );
}
