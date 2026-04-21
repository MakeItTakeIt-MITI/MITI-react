// import { useState } from "react";
// import Modal from "./Modal";
import { InquiryListField } from "../../../interfaces/support.ts";
import commented from "../../../assets/v11/inquiry/commented.svg";
import { Link } from "react-router-dom";

interface ListCardProps {
  inquiry: InquiryListField;
}

const ListCard = ({ inquiry }: ListCardProps) => {
  return (
    <>
      <div
        // onClick={handleDisplayModal}
        className="flex justify-between items-center text-white px-2.5 "
      >
        <div className="flex items-center md:gap-[3.0rem] sm:gap-[.44rem]">
          <p className="md:text-sm sm:text-[10px]  font-[300 ]">
            {`${inquiry.created_at.slice(0, 4)}년 ${inquiry.created_at
              .slice(5, 7)
              .padStart(2, "0")}월 ${inquiry.created_at
              .slice(8, 10)
              .padStart(2, "0")}일`}
          </p>

          <Link
            to={`${inquiry.id}`}
            className="flex items-center sm:gap-[.31rem] md:gap-[.31rem] "
          >
            {inquiry.num_of_answers > 0 && (
              <>
                <p className=" bg-[#7FEEF0] text-[#000] w-[50px] h-[21px]  sm:hidden md:flex items-center justify-center text-[10px] font-[300] rounded-[100px]">
                  답변완료
                </p>
                <img
                  src={commented}
                  alt="commented"
                  className="md:hidden sm:block"
                />
              </>
            )}
            <p className="md:text-[18px] sm:text-xs sm:w-[122px] md:w-[419px] font-[400] truncate ">
              {inquiry.title}
            </p>
          </Link>
        </div>

        <p className="md:text-sm sm:text-[10px] font-[300] truncate md:w-[109px] sm:w-[38px] ">
          {inquiry.nickname}
        </p>
      </div>
      <hr className="w-full h-[1px] text-[#525252]" />
    </>
  );
};

export default ListCard;
