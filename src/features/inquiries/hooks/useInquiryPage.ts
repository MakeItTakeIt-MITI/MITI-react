import { useMemo } from "react";
import { useAnonymousInquiryListQuery } from "./query/useAnonymousInquiryListQuery";
import { useSearchParams } from "react-router-dom";


const useInquiryPage = () => {


    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const { data: anonymousInquiresData, isLoading, hasNextPage, fetchNextPage, hasPreviousPage, fetchPreviousPage, isFetching } = useAnonymousInquiryListQuery(search);

    const anonymousInquiriesList = anonymousInquiresData?.pages?.flatMap(
        (page) => page?.data?.items
    );


    const pagesArray = useMemo(() => {
        const total = anonymousInquiresData?.pages?.[0]?.data?.total_pages ?? 1;
        return Array.from({ length: Math.max(1, total) }, (_, i) => i + 1);
    }, [anonymousInquiresData]);

    const currentPage = anonymousInquiresData?.pages.length ?? 1;


    return {
        anonymousInquiriesList,
        pagesArray,
        isLoading,
        hasNextPage,
        hasPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        isFetching,
        currentPage
    };
};
export default useInquiryPage;