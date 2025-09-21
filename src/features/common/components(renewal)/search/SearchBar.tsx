import { useSearchParams } from "react-router-dom";
import { useCallback, useState } from "react";
import search_icon from "../../../../assets/v1.3/icon/search.svg";

interface SearchBarProps {
  title: string;
  paramKey: string;
}

export default function SearchBar({ title, paramKey }: SearchBarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get(paramKey) || "";
  const [inputValue, setInputValue] = useState(initialValue);

  const handleSearch = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault();

      // Keep all current params
      const newParams = new URLSearchParams(searchParams);

      // Ensure game_status values persist
      const gameStatuses = searchParams.getAll("game_status");

      // Update or remove the search keyword param
      if (inputValue.trim()) {
        newParams.set(paramKey, inputValue);
      } else {
        newParams.delete(paramKey);
      }

      // Re-append game_status filters (since set/delete can sometimes reset them)
      newParams.delete("game_status");
      gameStatuses.forEach((status) => {
        newParams.append("game_status", status);
      });

      setSearchParams(newParams);
    },
    [inputValue, paramKey, searchParams, setSearchParams]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e as any);
    }
  };

  return (
    <div className="flex items-center w-full h-10  md:h-12 border border-[#707070] rounded-[50px] bg-[#141414] px-5">
      <div className="flex items-center gap-2.5 w-full">
        <span className="text-white font-bold text-sm md:text-base sm:w-[42px] ">
          {title}
        </span>{" "}
        <span className="text-[#707070]">|</span>
        <input
          className="h-6 bg-[#141414] text-white outline-none sm:w-full md:w-[90%] text-sm md:text-base"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="검색어를 입력해주세요"
        />
      </div>
      <button
        type="button"
        onClick={handleSearch}
        className="size-6 rounded-full flex items-center justify-center bg-primary-teal ml-3"
      >
        <img src={search_icon} alt="search" />
      </button>
    </div>
  );
}
