import { useState } from "react";
import close from "../../../assets/v11.2/close.svg";

export const RegionFilterContainer = ({
  handleDisplayFilterContainer,
  handleRegionFilter,
  regionValue,
}) => {
  const [selected, setSelected] = useState("");

  const handleSelected = (input: string) => {
    setSelected(input);
  };

  const regions: string[] = [
    "전체",
    "서울",
    "경기",
    "인천",
    "부산",
    "대구",
    "광주",
    "대전",
    "울산",
    "세종",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];

  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.64)",
      }}
      className=" overflow-hidden  fixed top-0 right-0 bottom-0 left-0 h-full  z-[999] "
    >
      <div className="space-y-5 rounded-tl-[20px] rounded-tr-[20px] absolute right-0 bottom-0 left-0 mx-auto sm:w-full md:w-[605px] h-[400px]   bg-secondary-black pt-[30px] px-[21px] pb-[20x] ">
        <div className="flex justify-between">
          <h1 className="text-base font-bold text-white">지역</h1>
          <button type="button" onClick={handleDisplayFilterContainer}>
            <img src={close} alt="close" />
          </button>
        </div>

        <ul className="flex items-center  gap-3 flex-wrap">
          {regions.map((region, i) => (
            <li
              key={i}
              style={{
                border: region === selected ? "1px solid #7FEEF0" : "",
              }}
              onClick={() => handleSelected(region)}
              className="cursor-pointer w-[103px] h-[48px] p-2.5 bg-light-dark flex items-center justify-center text-white  text-[14px] rounded-lg font-[400]"
            >
              {region}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            handleDisplayFilterContainer();
            handleRegionFilter(selected);
          }}
          className="w-full h-[48px] font-bold rounded-lg bg-[#7FEEF0] text-[#262626]"
        >
          확인
        </button>
      </div>
    </section>
  );
};
