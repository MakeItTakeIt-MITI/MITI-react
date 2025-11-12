import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../../api/courts";

export const useAllCourts = (
  limit: number | null,
  search?: string | null,
  province?: string[] | null
) => {
  return useInfiniteQuery({
    queryKey: ["all-courts", search, province],
    queryFn: ({ pageParam = null }) =>
      getAllCourts(pageParam, limit, province, search),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      const data = lastPage?.data;
      if (!data) return undefined;
      return data.has_more ? data.page_last_cursor : undefined;
    },
  });
};
