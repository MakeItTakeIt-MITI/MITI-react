import mobile_drop from "../../assets/v11/mobile-drop.svg";

type FilteredStatus = {
  content: string;
};

const FilteredStatus = ({ content }: FilteredStatus) => {
  const date = "날짜";
  const time = "경기 시작 시간";
  const status = "경기 상태";

  const filterDate = content === date;
  const filterTime = content === time;
  const filterStatus = content === status;

  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-1 py-[10px] px-4 ${filterDate || filterTime || filterStatus ? "text-[#fff]" : "text-primary-teal"}  text-sm 
      ${filterDate || filterTime || filterStatus ? "font-[500] " : "font-[600]"} 
      rounded-[50px] border border-[#737373]`}
    >
      <span> {content}</span>
      <img src={mobile_drop} alt="drop" className="sm:block md:hidden" />
    </button>
  );
};

export default FilteredStatus;
