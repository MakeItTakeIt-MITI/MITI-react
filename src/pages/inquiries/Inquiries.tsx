import { useState } from "react";
import search from "../../assets/v11/inquiry-search.svg";
import { Link } from "react-router-dom";

import left from "../../assets/v11/pagination-left.svg";
import right from "../../assets/v11/pagination-right.svg";
import { useInquiriesDataHook } from "../../features/inquiries/hooks/useInquiriesDataHook";
import { InquiryListField } from "../../interfaces/support";
import ListCard from "../../features/inquiries/components/ListCard";
import MoveToAppBanner from "../../features/common/components/MoveToAppBanner";
import Footer from "../../features/common/components/Footer";

const InquiriesList = () => {
  const [input, setInput] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading } = useInquiriesDataHook(pageNumber);

  console.log(data);

  const currentPage = data?.data.current_index;
  const pageLength = data?.data.end_index || 1;
  // const content = data?.data.page_content;

  const pages = [];
  for (let i = 1; i <= pageLength; i++) {
    pages.push(i);
  }

  // console.log(isLoading);
  // console.log("content", content);
  return (
    <>
      <section className="bg-secondary-black md:pt-[3.75rem] md:pb-[6.25rem] sm:pb-[3.76rem]   md:space-y-[100px]">
        <div className="page-layer sm:p-5 md:p-0 sm:space-y-[22px] md:space-y-[42px] ">
          <div className="space-y-5">
            <h1 className="text-white md:text-[32px] sm:text-[26px] font-semibold ">
              문의하기
            </h1>
            <p className="text-white md:text-xl sm:text-sm font-normal">
              서비스 이용에 어려움이 있다면 문의를 작성해주세요!
            </p>
          </div>
          {/* search bar */}
          <div className="h-[48px] w-full  relative ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="문의 제목 검색"
              type="text"
              className="h-full text-base  rounded-xl w-full pl-5 py-3 pr-10  bg-light-dark text-primary-white truncate "
            />
            <button type="button">
              <img
                src={search}
                alt="search"
                className=" absolute right-4 top-3 bottom-3 my-auto "
              />
            </button>
          </div>

          {/* list */}
          <div className="w-full  space-y-5">
            <hr className="w-full h-[1px] text-[#525252]" />

            {data?.data.page_content.length >= 1 ? (
              data?.data.page_content.map((inquiry: InquiryListField) => (
                <>
                  {isLoading ? (
                    <>
                      <div className="flex justify-between items-center text-white px-2.5 ">
                        <div className="flex items-center md:gap-[3.0rem] sm:gap-[.44rem]">
                          <div className="bg-dark-card w-[110px] h-[6px]"></div>

                          <div className="flex items-center sm:gap-[.31rem] md:gap-[.31rem] ">
                            <div className="bg-dark-card w-[250px] h-[6px]"></div>
                          </div>
                        </div>

                        <div className="bg-dark-card w-[100px] h-[6px]"></div>
                      </div>
                      <hr className="w-full h-[1px] text-[#525252]" />
                    </>
                  ) : (
                    <ListCard inquiry={inquiry} />
                  )}
                </>
              ))
            ) : (
              <h1 className="text-white text-center font-[500]">
                문의가 없습니다.
              </h1>
            )}
          </div>

          {/* pagination */}
          <div className="flex justify-center items-center gap-5">
            <button
              type="button"
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <img src={left} alt="left" />
            </button>
            <div className="flex items-center gap-1 text-xs">
              {pages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setPageNumber(page)}
                  className={`p-2.5 ${
                    currentPage === page ? "text-[#7FEEF0]" : "text-[#737373]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setPageNumber((prev) => Math.min(prev + 1, pageLength))
              }
              disabled={currentPage === pageLength}
            >
              <img src={right} alt="right" />
            </button>
          </div>

          {/* button */}
          <Link
            to="new"
            className="sm:w-full md:w-[768px] h-12 p-2.5 bg-[#7feef0] rounded-lg justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-center text-neutral-800 text-base font-bold ">
              문의 작성하기
            </div>
          </Link>

          {/* bottom */}
          <MoveToAppBanner />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InquiriesList;
