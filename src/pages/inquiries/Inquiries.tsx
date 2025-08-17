import { useCallback, useState } from "react";

import { useInquiriesDataHook } from "../../features/inquiries/hooks/useInquiriesDataHook.tsx";
import Pagination from "../../features/inquiries/components/Pagination.tsx";
import Header from "../../features/inquiries/components/Header.tsx";
import SearchBar from "../../features/games/components/game-list/SearchBar.tsx";
import SubmitInquiryButton from "../../features/inquiries/components/SubmitInquiryButton.tsx";
import InquiriesListContainer from "../../features/inquiries/components/InquiriesListContainer.tsx";

const InquiriesList = () => {
  const [inputContent, setInputContent] = useState("");
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

  const handleSubmitInquiry = useCallback(() => {
    console.log("inquriy");
  }, []);

  return (
    <section className="sm:w-full  md:w-[800px]  mx-auto  md:py-[30px] flex flex-col gap-[36px]">
      <Header />

      {/* pagination */}
      <div className="space-y-6">
        {/* Search bar + Submit Inquiry Bitton */}
        <div className="flex items-center gap-6">
          <SearchBar title="문의하기" setInputContent={setInputContent} />
          <SubmitInquiryButton handleSubmitInquiry={handleSubmitInquiry} />
        </div>
        {/* Inquiries List */}
        <InquiriesListContainer />
        {/* Pagination */}
        <Pagination
          setPageNumber={setPageNumber}
          currentPage={currentPage}
          pages={pages}
          pageLength={pageLength}
        />
      </div>
      {/* button */}

      {/* bottom */}
      {/* <MoveToAppBanner /> */}
    </section>
  );
};

export default InquiriesList;
