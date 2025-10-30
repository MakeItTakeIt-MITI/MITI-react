import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../../api/courts";

export const useAllCourts = (
  search?: string | null | undefined,
  district?: string | null | undefined
) => {
  return useInfiniteQuery({
    queryKey: ["all courts data", search, district],
    queryFn: ({ pageParam = 1 }) =>
      getAllCourts(pageParam, 10, search, district),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page_last_cursor, has_more } = lastPage.data;

      return has_more ? page_last_cursor : undefined;

      // const nextPage = current_index + 1;
      // const hasNextPage = nextPage <= end_index;

      // return hasNextPage ? nextPage : undefined;
    },
  });
};
