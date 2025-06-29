import mobile_drop from "../../../../assets/v11/mobile-drop.svg";

type FilteredStatus = {
  content: string;
  handleDisplayFilterBox?: () => void;
  // resetStatus: () => void;
};

const FilteredStatus = ({
  content,
  handleDisplayFilterBox,
}: FilteredStatus) => {
  const date = "날짜";
  const time = "경기 시작 시간";
  const status = "경기 상태";

  const filterDate = content === date;
  const filterTime = content === time;
  const filterStatus = content === status;

  return (
    <>
      {/* Non mobile devices */}
      <button
        type="button"
        onClick={handleDisplayFilterBox}
        className={`md:flex sm:hidden  items-center gap-1 py-[10px] px-4 ${
          filterDate || filterTime || filterStatus
            ? "text-[#fff]"
            : "text-primary-teal"
        }  text-sm 
      ${
        filterDate || filterTime || filterStatus ? "font-[500] " : "font-[600]"
      } 
      rounded-[50px] border border-[#737373]`}
      >
        <h1>{content}</h1>
      </button>

      {/* Mobile device */}
      <button
        type="button"
        onClick={handleDisplayFilterBox}
        className={`whitespace-nowrap text-[14px] py-[0.62rem] px-[1rem]  md:hidden   h-[34px]  sm:flex gap-1  items-center justify-center   ${
          filterDate || filterTime || filterStatus
            ? "text-[#fff]"
            : "text-primary-teal"
        }  
      ${
        filterDate || filterTime || filterStatus ? "font-[500] " : "font-[600]"
      } 
      rounded-[50px] border border-[#737373]`}
      >
        <h1> {content}</h1>
        {filterDate || filterTime || filterStatus ? (
          <img src={mobile_drop} alt="drop" />
        ) : (
          false
        )}
      </button>
    </>
  );
};

export default FilteredStatus;
