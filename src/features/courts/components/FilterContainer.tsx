import dropdown from "../../assets/v11/drop.svg";
import { CITIES } from "../../constants/locations.ts";

interface Props {
  handleDisplayDropbox: () => void;
  selectedCity: string;
  displayDropbox: boolean;
  handleSelectCity: (arg: string) => void;
}

const FilterContainer = ({
  handleDisplayDropbox,
  selectedCity,
  displayDropbox,
  handleSelectCity,
}: Props) => {
  return (
    <div className="relative">
      <button
        type="button"
        data-testid="dropdown-button"
        onClick={handleDisplayDropbox}
        className=" bg-light-dark flex items-center justify-between h-full sm:w-[6.25rem] md:w-[7.625rem] rounded-[0.75rem] py-3 pl-5 pr-3"
      >
        <span className="text-primary-white sm:font-[400] md:font-[500] md:text-base sm:text-sm">
          {selectedCity.length ? selectedCity : "전체"}
        </span>
        <img src={dropdown} alt="dropdown" className="size-[1.5rem]" />
      </button>
      {displayDropbox && (
        <ul className="overflow-y-scroll custom-scrollbar absolute left-0 right-0 top-14 rounded-[.75rem] w-full  h-[27.625rem] p-[.75rem] bg-light-dark flex flex-col ">
          {CITIES.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSelectCity(city)}
              style={{
                color: selectedCity !== city ? "#fff" : "#7FEEF0",
              }}
              className="cursor-pointer px-[0.5rem] py-[0.25rem] text-sm font-bold hover:bg-[#404040] hover:rounded-lg "
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterContainer;
