import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../../features/inquiries/components/Pagination.tsx";
import Header from "../../features/inquiries/components/Header.tsx";
import SearchBar from "../../features/common/components(renewal)/search/SearchBar.tsx";
import SubmitInquiryButton from "../../features/inquiries/components/SubmitInquiryButton.tsx";
import InquiriesListContainer from "../../features/inquiries/components/InquiriesListContainer.tsx";
import { useAnonymousInquriesList } from "../../features/inquiries/hooks/useAnonymousInquriesList.tsx";

const InquiriesList = () => {
  const [_, setPageNumber] = useState<number>(1);

  const { data: anonymousInquiresData, isLoading } = useAnonymousInquriesList();

  // derive pagination / content safely
  const currentPage =
    anonymousInquiresData?.pages?.[0]?.data?.current_index ?? 1;
  const pageLength =
    anonymousInquiresData?.pages?.[0]?.data?.page_content?.length ?? 0;

  const inquiriesPageContentData = useMemo(
    () =>
      anonymousInquiresData?.pages?.flatMap(
        (page) => page?.data?.page_content ?? []
      ) ?? [],
    [anonymousInquiresData]
  );

  // build pages array if API exposes total pages, otherwise fallback to single page
  const pagesArray = useMemo(() => {
    const total = anonymousInquiresData?.pages?.[0]?.data?.total_pages ?? 1;
    return Array.from({ length: Math.max(1, total) }, (_, i) => i + 1);
  }, [anonymousInquiresData]);

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
          inquriesPageContentData={inquiriesPageContentData}
          isLoading={isLoading}
        />

        <Pagination
          setPageNumber={setPageNumber}
          currentPage={currentPage}
          pages={pagesArray}
          pageLength={pageLength}
        />

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
