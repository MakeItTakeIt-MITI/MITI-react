import search from "../../assets/v11/search.svg";

interface Props {
  handleSearchInput: () => void;
  setInput: (arg: string) => void;
}

const SearchContainer = ({ handleSearchInput, setInput }: Props) => {
  return (
    <div className="flex items-center justify-between bg-light-dark sm:w-[14.8125rem] md:w-[15.5rem] h-full py-[0.75rem] pl-[1.25rem] pr-[0.75rem] rounded-[0.75rem]">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="bg-light-dark text-secondary-white font-[500] courtsPlaceHolder sm:w-[11rem] md:w-[12rem]"
        placeholder="경기장 (주소/경기장 명) 검색"
      />
      <button
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchInput();
          }
        }}
        onClick={handleSearchInput}
      >
        <img src={search} alt="search" />
      </button>
    </div>
  );
};

export default SearchContainer;
