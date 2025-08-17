import { Link } from "react-router-dom";

interface InquiryCardProps {
  isAnswered: boolean;
  year: string;
  month: string;
  day: string;
  title: string;
  nickname: string;
}

const InquiryCard = ({
  isAnswered,
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
        to=""
        className={`whitespace-nowrap flex items-center justify-between 
            ${isAnswered ? "gap-2" : "gap-[14px]"} text-white w-full`}
      >
        <p className="">
          {year}년 {month}월 {day}일
        </p>
        {isAnswered && (
          <p className="h-[36px]  py-2.5  px-3 flex items-center justify-center bg-[#1ADCDF] rounded-[50px] text-sm text-[#000]">
            답변완료
          </p>
        )}
        <h1 className="w-full text-base font-bold truncate">{title}</h1>
        <span>{nickname}</span>
      </Link>
    </li>
  );
};

export default InquiryCard;
