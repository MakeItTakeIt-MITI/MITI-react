import { useState } from "react";
import search_icon from "../../../../assets/v1.3/icon/search.svg";

export default function SearchBar() {
  const [inputContent, setInputContent] = useState("");

  console.log(inputContent);

  return (
    <div className="flex items-center w-full ">
      <div className="flex items-center w-full h-12 border border-[#707070] rounded-[50px] bg-[#141414] px-3">
        <input
          className="h-6 rounded-[50px] w-full bg-[#141414] text-white pl-2 outline-none"
          type="text"
          onChange={(e) => setInputContent(e.target.value)}
        />
        <button
          type="button"
          className="size-6 rounded-full flex items-center justify-center bg-primary-teal ml-3"
        >
          <img src={search_icon} alt="" />
        </button>
      </div>
    </div>
  );
}
