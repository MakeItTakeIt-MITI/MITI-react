import { Link } from "react-router-dom";
import answered from "../../../assets/v1.3/inquiries/answered_icon.png";

interface InquiryCardProps {
  isAnswered: boolean;
  id: number;
  year: string;
  month: string;
  day: string;
  title: string;
  nickname: string;
}

const InquiryCard = ({
  isAnswered,
  id,
  year,
  month,
  day,
  title,
  nickname,
}: InquiryCardProps) => {
  return (
    <li
      className="w-full h-[72px] py-[18px] flex items-center
      border-t-[0.1px] border-[#fff]
    border-b-[0.1px]
      "
    >
      <Link
        to={`/inquiries/${id}`}
        className={`whitespace-nowrap flex items-center justify-between 
          sm:text-[12px] md:text-[16px]
            ${isAnswered ? "gap-2" : "gap-[14px]"} text-white w-full`}
      >
        <p className="">
          {year}년 {month}월 {day}일
        </p>
        {isAnswered && (
          <>
            <p className="h-[36px]  py-2.5  px-3  sm:hidden md:flex items-center justify-center bg-[#1ADCDF] rounded-[50px]    sm:text-[12px] md:text-sm text-[#000]">
              답변완료
            </p>
            <img
              src={answered}
              alt="check icon"
              className="sm:block md:hidden size-[15px]"
            />
          </>
        )}
        <h1 className="w-full sm:text-[12px] md:text-base font-bold truncate">
          {title}
        </h1>
        <span>{nickname}</span>
      </Link>
    </li>
  );
};

export default InquiryCard;
