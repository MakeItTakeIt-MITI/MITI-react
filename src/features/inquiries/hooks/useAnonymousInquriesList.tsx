import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAnonymousInquiries } from "../api/anonymousInquriy";

export const useAnonymousInquriesList = () => {
  return useInfiniteQuery({
    queryKey: ["anonymous-inquiries-list"],
    queryFn: ({ pageParam = 1 }) => fetchAnonymousInquiries(pageParam),
    initialPageParam: 1,
    getNextPageParam: (page) => {
      const { current_index, end_index } = page.data;

      const nextPage = current_index + 1;
      const hasNextPage = nextPage <= end_index;

      return hasNextPage ? nextPage : undefined;
    },
  });
};
