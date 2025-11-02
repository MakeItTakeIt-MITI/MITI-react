import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../../api/courts";

export const useAllCourts = (province?: string | null | undefined) => {
  return useInfiniteQuery({
    queryKey: ["all courts data", province],
    queryFn: ({ pageParam = 1 }) => getAllCourts(pageParam, 10, province),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page_last_cursor, has_more } = lastPage.data;

      return has_more ? page_last_cursor : undefined;
    },
  });
};
