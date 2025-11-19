import { useInfiniteQuery } from "@tanstack/react-query";
import { getAnonymousInquiries } from "../../api/anonymousInquiries";

export const useAnonymousInquiryListQuery = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["anonymous-questions-list", search],
    queryFn: ({ pageParam }) => getAnonymousInquiries(pageParam, 20, search),

    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
    initialPageParam: null,
  });
};
