import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../api/courts.ts";

export const useCourtsInfiniteDataHook = (
  search?: string | null | undefined,
  district?: string | null | undefined
) => {
  return useInfiniteQuery({
    queryKey: ["all courts data", search, district],
    queryFn: ({ pageParam = 1 }) => getAllCourts(pageParam, search, district),
    initialPageParam: 1,
    getNextPageParam: (page) => {
      const { current_index, end_index } = page.data;

      const nextPage = current_index + 1;
      const hasNextPage = nextPage <= end_index;

      return hasNextPage ? nextPage : undefined;
    },
  });
};
