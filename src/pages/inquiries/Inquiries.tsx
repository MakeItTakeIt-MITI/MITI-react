import { Link } from "react-router-dom";

import Header from "../../features/inquiries/components/Header.tsx";
import SearchBar from "../../features/common/components(renewal)/search/SearchBar.tsx";
import SubmitInquiryButton from "../../features/inquiries/components/SubmitInquiryButton.tsx";
import InquiriesListContainer from "../../features/inquiries/components/inquiry-list/InquiriesListContainer.tsx";
import useInquiryPage from "@/features/inquiries/hooks/useInquiryPage.ts";
// import Pagination from "@/features/inquiries/components/Pagination.tsx";

// import left from "../../assets/v11/pagination-left.svg";
// import right from "../../assets/v11/pagination-right.svg";

const InquiriesList = () => {
  const {
    isLoading,
    anonymousInquiriesList,
    // hasNextPage,
    // hasPreviousPage,
    // fetchNextPage,
    // fetchPreviousPage,
    // isFetching,
    // currentPage,
  } = useInquiryPage();

  return (
    <section
      style={{ backgroundColor: "#141414" }}
      className="mx-auto min-h-screen sm:w-full md:w-[840px] sm:px-4 md:px-0 py-[30px] flex flex-col gap-[36px]"
    >
      <Header />

      <div className="sm:space-y-[48px] md:space-y-6">
        <div className="flex items-center gap-6">
          <SearchBar title="문의" paramKey="search" />
          <SubmitInquiryButton />
        </div>

        <InquiriesListContainer
          anonymousInquiriesList={anonymousInquiriesList}
          isLoading={isLoading}
        />

        {/* Pagination */}
        {/* <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={!hasPreviousPage || isFetching}
            onClick={() => fetchPreviousPage()}
          >
            <img src={left} alt="left" />
          </button>

          {Array.from({ length: currentPage }).map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                i + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            disabled={!hasNextPage || isFetching}
            onClick={() => fetchNextPage()}
          >
            <img src={right} alt="right" />
          </button>
        </div> */}

        <Link
          to="new"
          className="sm:flex items-center justify-center md:hidden w-full h-[44px] rounded-lg text-[#000] font-bold bg-[#1ADCDF]"
        >
          문의 작성하기
        </Link>
      </div>
    </section>
  );
};

export default InquiriesList;
