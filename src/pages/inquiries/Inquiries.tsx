import { useState } from "react";

import { useInquiriesList } from "../../features/inquiries/hooks/useInquiriesList.tsx";
import Pagination from "../../features/inquiries/components/Pagination.tsx";
import Header from "../../features/inquiries/components/Header.tsx";
import SearchBar from "../../features/common/components(renewal)/search/SearchBar.tsx";
import SubmitInquiryButton from "../../features/inquiries/components/SubmitInquiryButton.tsx";
import InquiriesListContainer from "../../features/inquiries/components/InquiriesListContainer.tsx";
import { Link } from "react-router-dom";

const InquiriesList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data: inquriesData, isLoading } = useInquiriesList(pageNumber);

  const inquriesPageContentData = inquriesData?.pages?.flatMap(
    (page) => page?.data?.page_content
  );
  // const content = data?.data.page_content;
  const currentPage = inquriesData?.pages?.[0]?.data?.current_index || 1;
  const pageLength = inquriesData?.pages?.[0]?.data?.page_content?.length || 1;
  const pagesArray = [1]; // Only one page
  return (
    <section className="sm:w-full  md:w-[840px] ] sm:px-4 md:px-0  mx-auto sm:py-[20px]  md:py-[30px] flex flex-col gap-[36px]">
      <Header />

      {/* pagination */}
      <div className=" sm:space-y-[48px] md:space-y-6">
        {/* Search bar + Submit Inquiry Bitton */}
        <div className="flex items-center gap-6">
          <SearchBar title="문의" paramKey="search" />
          <SubmitInquiryButton />
        </div>
        {/* Inquiries List */}
        <InquiriesListContainer
          inquriesPageContentData={inquriesPageContentData ?? []}
        />
        {/* Pagination */}

        <Pagination
          setPageNumber={setPageNumber}
          currentPage={currentPage}
          pages={pagesArray}
          pageLength={pageLength}
        />

        <Link
          to="new"
          className="sm:flex items-center justify-center md:hidden w-full  h-[44px] rounded-lg text-[#000] font-bold bg-[#1ADCDF]"
        >
          문의 작성하기
        </Link>
      </div>
      {/* button */}

      {/* bottom */}
      {/* <MoveToAppBanner /> */}
    </section>
  );
};

export default InquiriesList;
