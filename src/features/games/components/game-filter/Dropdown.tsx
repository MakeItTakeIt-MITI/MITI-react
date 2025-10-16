import { useEffect, useRef, useState } from "react";
import drop from "../../../../assets/v11/drop.svg";

type DropdownProps = {
  label: string;
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
};

const Dropdown = ({
  label,
  options,
  selectedOption,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);

    const timeData = option;
    console.log(timeData);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer relative pl-[1.25rem] pr-[0.25rem] py-[0.25rem] sm:w-[5.25rem] md:w-[10rem] h-[2rem] rounded-[0.75rem] bg-[#404040] text-white  border border-dark-card flex items-center justify-between"
    >
      <span className="text-primary-white font-bold md:text-sm sm:text-base">
        {selectedOption}
      </span>
      <button type="button">
        <img src={drop} alt="drop" />
      </button>
      {isOpen && (
        <ul
          onMouseLeave={() => setIsOpen(false)}
          style={{
            height: label === "시" || label === "분" ? "12.375rem" : "",
          }}
          className=" justify-center custom-scrollbar overflow-y-scroll  space-y-[0.5rem] font-[400] text-sm rounded-[0.75rem] absolute top-[2.25rem] left-0 right-0 sm:w-[5.25rem] md:w-[10rem] p-[.75rem] bg-light-dark"
        >
          {options.map((option) => (
            <li
              onClick={() => handleSelect(option)}
              key={option}
              className="hover:bg-dark-card hover:cursor-pointer px-[0.5rem] rounded-[.5rem]"
              style={{
                color: selectedOption === option ? "#7FEEF0" : "#F1F1F1",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
