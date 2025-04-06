import { useInfiniteQuery } from "@tanstack/react-query";
import { getProceededCourtList } from "../api/courts.ts";

export const useCourtGamesInfiniteData = (courtId: number | null) => {
  return useInfiniteQuery({
    queryKey: ["Courts detail game list"],
    queryFn: ({ pageParam = 1 }) => getProceededCourtList(courtId, pageParam),

    initialPageParam: 1,
    getNextPageParam: (page) => {
      const currentPage = page.data.current_index + 1;
      const lastPage = page.data.end_index;
      const hasNextPage = currentPage <= lastPage;

      return hasNextPage ? currentPage : null;
    },
  });
};
