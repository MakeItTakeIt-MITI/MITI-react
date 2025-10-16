import { useInfiniteQuery } from "@tanstack/react-query";
import { privateInquiriesData } from "../api/inquiry";

export const useInquiriesList = (page: number) => {
  return useInfiniteQuery({
    queryKey: ["Private inquiries list", page],
    queryFn: ({ pageParam = 1 }) => privateInquiriesData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (page) => {
      const { current_index, end_index } = page.data;

      const nextPage = current_index + 1;
      const hasNextPage = nextPage <= end_index;

      return hasNextPage ? nextPage : undefined;
    },
  });
};
